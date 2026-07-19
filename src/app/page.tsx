import Link from "next/link";
import { Container } from "@/components/container";
import { WorkImageView } from "@/components/work-image-view";
import { siteConfig } from "@/config/site";
import { homeContent } from "@/config/home";

export default function HomePage() {
  return (
    <Container>
      <h1 className="sr-only">
        {siteConfig.name} — {siteConfig.positioning}
      </h1>

      <section aria-label="Werkgebieden" className="pt-[var(--site-section-y)]">
        <ul className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
          {homeContent.areas.map((area, index) => (
            <li key={area.href}>
              <Link href={area.href} className="group block rounded-sm">
                <WorkImageView
                  image={area.image}
                  tone={area.tone}
                  priority={index === 0}
                  sizes="(min-width: 1024px) 373px, 100vw"
                  className="transition-opacity group-hover:opacity-90"
                />
                <h2 className="mt-4 text-lg font-semibold tracking-tight text-foreground">
                  <span className="border-b-2 border-transparent transition-colors group-hover:border-accent">
                    {area.title}
                  </span>
                </h2>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="positionering-titel"
        className="pt-[calc(var(--site-section-y)*1.75)]"
      >
        <h2 id="positionering-titel" className="sr-only">
          Over Freekje Fotografie
        </h2>
        <p className="max-w-xl text-lg leading-relaxed text-muted">
          {homeContent.positioning}
        </p>
      </section>

      <section
        aria-label="Contact"
        className="pb-[var(--site-section-y)] pt-[calc(var(--site-section-y)*1.5)]"
      >
        <p className="text-base text-muted">
          {homeContent.contact.text}{" "}
          <Link
            href={homeContent.contact.href}
            className="text-accent underline underline-offset-4 hover:no-underline"
          >
            {homeContent.contact.linkLabel}
          </Link>
        </p>
      </section>
    </Container>
  );
}
