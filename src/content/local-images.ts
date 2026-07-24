/**
 * Build-time hulpmiddel dat een fotogalerij samenstelt uit de werkelijke
 * bestanden onder `public/`. Draait uitsluitend tijdens de build (server /
 * `output: "export"`) en gebruikt `node:fs`; er is geen bestandssysteemtoegang
 * in de browser.
 *
 * Bestaande, gecureerde metadata (alt-tekst, verhouding, span, object-position
 * en volgorde) blijft behouden. Foto's die nog niet gecureerd zijn, worden
 * automatisch toegevoegd met veilige, consistente defaults. Voor nieuwe foto's
 * wordt de beeldverhouding uit de JPEG-afmetingen afgeleid, zodat ze niet
 * willekeurig worden bijgesneden.
 */

import { readdirSync, readFileSync } from "node:fs";
import { extname, join } from "node:path";
import type { ImageRatio, WorkImage } from "./work-areas";

/** Toegestane afbeeldingsextensies (kleine letters). */
const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

/**
 * Leest de breedte en hoogte uit de header van een JPEG-bestand zonder externe
 * dependency. Retourneert `null` als het geen leesbare JPEG blijkt.
 */
function readJpegSize(buffer: Buffer): { width: number; height: number } | null {
  if (buffer.length < 4 || buffer[0] !== 0xff || buffer[1] !== 0xd8) {
    return null;
  }

  let offset = 2;
  while (offset + 1 < buffer.length) {
    if (buffer[offset] !== 0xff) {
      offset++;
      continue;
    }

    let marker = buffer[offset + 1];
    while (marker === 0xff && offset + 1 < buffer.length) {
      offset++;
      marker = buffer[offset + 1];
    }
    offset += 2;

    // Start of stream of einde: geen bruikbare afmetingen meer.
    if (marker === 0xd9 || marker === 0xda) break;
    // Standalone markers zonder lengteveld.
    if (marker === 0xd8 || (marker >= 0xd0 && marker <= 0xd7)) continue;
    if (offset + 2 > buffer.length) break;

    const length = buffer.readUInt16BE(offset);

    // Start Of Frame markers bevatten de afmetingen (m.u.v. DHT/JPG/DAC).
    const isStartOfFrame =
      marker >= 0xc0 &&
      marker <= 0xcf &&
      marker !== 0xc4 &&
      marker !== 0xc8 &&
      marker !== 0xcc;

    if (isStartOfFrame) {
      if (offset + 7 > buffer.length) break;
      const height = buffer.readUInt16BE(offset + 3);
      const width = buffer.readUInt16BE(offset + 5);
      if (width > 0 && height > 0) return { width, height };
      break;
    }

    offset += length;
  }

  return null;
}

/** Bepaalt een bewuste beeldverhouding uit de afmetingen. */
function ratioFromSize(width: number, height: number): ImageRatio {
  const aspect = width / height;
  if (aspect > 1.15) return "landscape";
  if (aspect < 0.87) return "portrait";
  return "square";
}

/**
 * Leidt de beeldverhouding af uit het bestand. Bij twijfel of een leesfout
 * wordt `"square"` gebruikt: een neutrale, symmetrische uitsnede.
 */
function detectRatio(filePath: string): ImageRatio {
  try {
    const size = readJpegSize(readFileSync(filePath));
    if (size) return ratioFromSize(size.width, size.height);
  } catch {
    // Val terug op de veilige default hieronder.
  }
  return "square";
}

/**
 * Stelt de volledige galerij samen: eerst de gecureerde foto's in hun
 * vastgelegde volgorde en met hun metadata, daarna alle overige geldige
 * bestanden uit de map (oplopend gesorteerd) met veilige defaults.
 */
export function buildGallery(options: {
  /** Map onder `public/`, bijv. `"foto/bedrijf"`. */
  folder: string;
  /** Gecureerde, geordende foto's met expliciete metadata. */
  curated: WorkImage[];
  /** Bron-paden die overgeslagen worden (bijv. het hero-beeld). */
  exclude?: readonly string[];
  /** Veilige alt-tekst voor automatisch toegevoegde foto's. */
  defaultAlt: string;
}): WorkImage[] {
  const dir = join(process.cwd(), "public", options.folder);
  const excluded = new Set(options.exclude ?? []);
  const curatedBySrc = new Map(options.curated.map((image) => [image.src, image]));

  const gallery: WorkImage[] = [];
  const used = new Set<string>();

  // 1. Gecureerde foto's in de vastgelegde volgorde (hero uitgezonderd).
  for (const image of options.curated) {
    if (excluded.has(image.src) || used.has(image.src)) continue;
    gallery.push(image);
    used.add(image.src);
  }

  // 2. Overige bestanden, oplopend gesorteerd, met veilige defaults.
  const files = readdirSync(dir)
    .filter((name) => !name.startsWith("."))
    .filter((name) => IMAGE_EXTENSIONS.has(extname(name).toLowerCase()))
    .sort();

  for (const name of files) {
    const src = `/${options.folder}/${name}`;
    if (used.has(src) || excluded.has(src) || curatedBySrc.has(src)) continue;

    const ratio = detectRatio(join(dir, name));
    gallery.push({
      src,
      alt: options.defaultAlt,
      ratio,
      span: ratio === "landscape" ? "full" : "half",
      objectPosition: "center",
      ready: true,
    });
    used.add(src);
  }

  return gallery;
}
