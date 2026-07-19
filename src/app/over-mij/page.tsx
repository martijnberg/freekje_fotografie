import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/container";
import { aboutContent } from "@/content/about";

export const metadata: Metadata = {
  title: aboutContent.seo.title,
  description: aboutContent.seo.description,
};

export default function OverMijPage() {
  const { title, lead, paragraphs, photo, clients } = aboutContent;

  return (
    <Container>
      <div className="py-16 sm:py-20">
        <h1 className="font-headings text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>

        {/* Desktop: introductietekst links, portret rechts. Mobiel: gestapeld. */}
        <div className="mt-8 grid items-start gap-10 sm:mt-10 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-prose">
            <p className="text-lg font-medium leading-relaxed text-foreground">
              {lead}
            </p>
            {paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-4 text-base leading-relaxed text-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <figure className="w-full max-w-sm sm:mx-auto lg:mx-0 lg:justify-self-end">
            {/*
              Voorlopige 4:5-placeholder. Zet in src/content/about.ts de foto op
              `src` en `ready: true`; de 4:5-positie blijft identiek, dus de foto
              verschijnt zonder layoutwijziging via next/image.
            */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
              {photo.ready ? (
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 640px) 24rem, 100vw"
                  className="object-cover"
                />
              ) : (
                <div
                  role="img"
                  aria-label={photo.alt}
                  className="h-full w-full bg-foreground/[0.05]"
                />
              )}
            </div>
          </figure>
        </div>

        <section
          aria-labelledby="opdrachtgevers-titel"
          className="mt-16 sm:mt-20"
        >
          <h2
            id="opdrachtgevers-titel"
            className="font-headings text-xl font-normal tracking-tight text-foreground sm:text-2xl"
          >
            {clients.title}
          </h2>
          <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-2 text-sm leading-relaxed text-muted sm:grid-cols-2 lg:grid-cols-3">
            {clients.items.map((client) => (
              <li key={client}>{client}</li>
            ))}
          </ul>
        </section>
      </div>
    </Container>
  );
}
