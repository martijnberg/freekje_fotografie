import Link from "next/link";
import { Container } from "@/components/container";
import { Gallery } from "@/components/gallery";
import { WorkImageView } from "@/components/work-image-view";
import type { WorkArea } from "@/content/work-areas";

/**
 * Gedeelde opbouw voor de drie werkgebiedpagina's: introductie, groot
 * openingsvlak, fotoselectie met afwisselend ritme, maximaal één aanvullend
 * tekstblok en een rustige tekstlink naar contact. De pagina's verschillen
 * alleen in hun content (beeldritme en tekst), niet in code.
 */
export function WorkAreaPage({ area }: { area: WorkArea }) {
  return (
    <Container>
      <article className="pb-[var(--site-section-y)]">
        <header className="max-w-2xl pt-[var(--site-section-y)]">
          <h1 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {area.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {area.intro}
          </p>
        </header>

        <div className="mt-[var(--site-section-y)]">
          <WorkImageView
            image={area.hero}
            priority
            sizes="(min-width: 1024px) 1120px, 100vw"
          />
        </div>

        <div className="mt-[var(--site-section-y)]">
          <Gallery images={area.gallery} />
        </div>

        {area.additionalText && (
          <p className="mt-[var(--site-section-y)] max-w-2xl text-lg leading-relaxed text-muted">
            {area.additionalText}
          </p>
        )}

        <p className="mt-[var(--site-section-y)] text-base text-muted">
          {area.contact.text}{" "}
          <Link
            href={area.contact.href}
            className="text-accent underline underline-offset-4 hover:no-underline"
          >
            {area.contact.linkLabel}
          </Link>
        </p>
      </article>
    </Container>
  );
}
