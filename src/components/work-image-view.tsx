import Image from "next/image";
import { PlaceholderImage } from "@/components/placeholder-image";
import type { PlaceholderTone } from "@/components/placeholder-image";
import type { ImageRatio, WorkImage } from "@/content/work-areas";

/**
 * Toont één werkgebied-afbeelding.
 *
 * Zolang de foto nog niet beschikbaar is (`ready` false/ontbreekt) verschijnt
 * een rustig placeholdervlak in de juiste beeldverhouding. Zodra de echte foto
 * op `image.src` staat en `ready: true` is gezet, rendert dit component
 * `next/image` met de juiste `sizes`, alt-tekst, verhouding, object-position en
 * lazy loading — zonder verdere componentwijziging.
 */

const ratioClass: Record<ImageRatio, string> = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[3/2]",
  square: "aspect-square",
};

export function WorkImageView({
  image,
  sizes,
  priority = false,
  tone = "neutral",
  className = "",
}: {
  image: WorkImage;
  /** `sizes` voor next/image, afgestemd op de layoutbreedte. */
  sizes: string;
  /** Alleen het eerste hoofdbeeld mag prioriteit krijgen. */
  priority?: boolean;
  /** Tint van het tijdelijke placeholdervlak. */
  tone?: PlaceholderTone;
  /** Extra klassen op het buitenste vlak (bijv. voor een hover-effect). */
  className?: string;
}) {
  const aspect = ratioClass[image.ratio];

  if (!image.ready) {
    return <PlaceholderImage tone={tone} ratio={aspect} className={className} />;
  }

  return (
    <div
      className={`relative w-full overflow-hidden rounded-sm ${aspect} ${className}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        style={{ objectPosition: image.objectPosition }}
        className="object-cover"
      />
    </div>
  );
}
