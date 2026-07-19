import { Fragment } from "react";
import Link from "next/link";
import { WorkImageView } from "@/components/work-image-view";
import { homeContent } from "@/config/home";

/**
 * Compacte, beeldgedreven landingspagina: een gecentreerd woordmerk, drie
 * liggende werkgebiedbeelden, een compacte Info/Contact-navigatie en één
 * positioneringszin. De reguliere header en footer worden op deze route
 * verborgen (zie SiteChrome); de homepage heeft een eigen rustige achtergrond.
 */
export default function HomePage() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-[clamp(2rem,5vw,3.5rem)] bg-home-background px-[var(--site-page-x)] py-12">
      <h1 className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center font-heading text-[clamp(0.85rem,3vw,1.9rem)] font-medium uppercase tracking-[0.2em] text-foreground">
        <span>{homeContent.wordmark.primary}</span>
        <span
          aria-hidden="true"
          className="h-[1.1em] w-px shrink-0 bg-accent/80"
        />
        <span>{homeContent.wordmark.secondary}</span>
      </h1>

      <section
        aria-label="Werkgebieden"
        className="w-full max-w-[var(--site-content-max)]"
      >
        <ul className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {homeContent.areas.map((area, index) => (
            <li key={area.href}>
              <Link href={area.href} className="group block rounded-sm">
                <WorkImageView
                  image={area.image}
                  tone={area.tone}
                  priority={index === 0}
                  sizes="(min-width: 1024px) 373px, 100vw"
                />
                <h2 className="mt-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-foreground group-hover:text-accent">
                  {area.title}
                </h2>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="flex flex-col items-center gap-5">
        <nav
          aria-label="Meer"
          className="flex items-center gap-3 text-xs uppercase tracking-[0.18em]"
        >
          {homeContent.links.map((link, index) => (
            <Fragment key={link.href}>
              {index > 0 && (
                <span aria-hidden="true" className="h-3 w-px bg-accent/60" />
              )}
              <Link
                href={link.href}
                className="inline-flex min-h-11 items-center px-2 text-foreground hover:text-accent"
              >
                {link.label}
              </Link>
            </Fragment>
          ))}
        </nav>

        <p className="max-w-md text-center text-sm leading-relaxed text-muted">
          {homeContent.positioning}
        </p>
      </div>
    </div>
  );
}
