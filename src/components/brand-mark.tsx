import Link from "next/link";
import { siteConfig } from "@/config/site";

/**
 * Herbruikbaar woordmerk: FREEKJE GROENEMANS · FOTOGRAFIE.
 *
 * De verticale scheiding is bewust geen tekstteken maar een apart visueel
 * element: circa 2 px breed, ongeveer even hoog als de hoofdletters, in de
 * centrale roze/magenta themakleur (`--color-brand-divider`). De tekst zelf
 * blijft donker en rustig, uppercase en zonder schaduw of decoratieve effecten.
 *
 * `variant="home"` toont het woordmerk royaal (gecentreerd op de homepage);
 * `variant="compact"` toont het compacter links in de navbar. In beide gevallen
 * linkt het volledige woordmerk naar de homepage en blijft het op één regel
 * (geen wrapping of horizontale overflow, ook op 320 px).
 */
export function BrandMark({
  variant = "compact",
  className = "",
}: {
  variant?: "home" | "compact";
  className?: string;
}) {
  const sizing =
    variant === "home"
      ? "text-[clamp(0.72rem,3.4vw,1.9rem)] tracking-[clamp(0.08em,0.5vw,0.2em)] gap-x-[clamp(0.45rem,1.4vw,0.9rem)]"
      : "text-[clamp(0.62rem,1.7vw,1.05rem)] tracking-[clamp(0.05em,0.35vw,0.14em)] gap-x-[clamp(0.35rem,1vw,0.6rem)]";

  return (
    <Link
      href="/"
      className={`inline-flex items-center whitespace-nowrap font-brand font-medium uppercase leading-none text-foreground ${sizing} ${className}`}
    >
      <span>{siteConfig.wordmark.primary}</span>
      <span
        aria-hidden="true"
        className="h-[0.78em] w-[2px] shrink-0 bg-brand-divider"
      />
      <span>{siteConfig.wordmark.secondary}</span>
    </Link>
  );
}
