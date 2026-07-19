import Link from "next/link";
import { Container } from "@/components/container";
import { PlaceholderImage } from "@/components/placeholder-image";
import { siteConfig } from "@/config/site";

/**
 * Drie primaire fotografische ingangen op de homepage. Voorlopige teksten,
 * later te vervangen. De beeldvlakken zijn tijdelijke placeholders.
 */
const focusAreas = [
  {
    href: "/bedrijf",
    title: "Bedrijf",
    description: "Zakelijke portretten, teams en sfeer op locatie.",
  },
  {
    href: "/portret",
    title: "Portret",
    description: "Persoonlijke portretten met rust en aandacht.",
  },
  {
    href: "/publicaties",
    title: "Publicaties",
    description: "Beeld voor redactionele en gedrukte publicaties.",
  },
];

export default function HomePage() {
  return (
    <Container>
      <section className="py-16 sm:py-20" aria-labelledby="intro-titel">
        <h1
          id="intro-titel"
          className="max-w-2xl font-heading text-4xl font-medium tracking-tight text-foreground sm:text-5xl"
        >
          {siteConfig.positioning}
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-foreground/70">
          Rustige, verzorgde fotografie waarin het beeld centraal staat. Deze
          website is in opbouw; de inhoud is voorlopig.
        </p>
      </section>

      <section aria-labelledby="werkgebieden-titel" className="pb-20">
        <h2 id="werkgebieden-titel" className="sr-only">
          Werkgebieden
        </h2>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area) => (
            <li key={area.href}>
              <Link
                href={area.href}
                className="group block rounded-sm outline-offset-4"
              >
                <PlaceholderImage
                  ratio="aspect-[4/5]"
                  className="transition-opacity group-hover:opacity-90"
                />
                <h3 className="mt-4 font-heading text-xl font-medium text-foreground">
                  <span className="border-b-2 border-transparent transition-colors group-hover:border-accent">
                    {area.title}
                  </span>
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-foreground/70">
                  {area.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}
