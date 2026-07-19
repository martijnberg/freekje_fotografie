/**
 * Centraal, getypeerd contentmodel voor de werkgebiedpagina's
 * (Bedrijf, Portret, Publicaties).
 *
 * Alle teksten zijn voorlopig en staan hier centraal, niet in de
 * paginacomponenten. Er zijn nog geen definitieve foto's: elke afbeelding
 * verwijst al naar het beoogde lokale pad onder `/public` en heeft een
 * `ready`-vlag. Zolang `ready` ontbreekt/false is, toont de site een rustig
 * placeholdervlak. Zodra een echte foto op het aangegeven pad staat, hoeft
 * alleen `ready: true` te worden gezet — geen componentwijziging nodig.
 */

export type ImageRatio = "portrait" | "landscape" | "square";

/** Breedte-ritme op desktop; op mobiel is alles één kolom. */
export type ImageSpan = "full" | "half";

export interface WorkImage {
  /** Beoogd lokaal pad onder /public. Nog te vullen met een echte foto. */
  src: string;
  /** Alt-tekst voor de toekomstige foto. */
  alt: string;
  /** Bewuste beeldverhouding. */
  ratio: ImageRatio;
  /** Optionele object-position voor de uitsnede. */
  objectPosition?: string;
  /** Breedte binnen het beeldritme op desktop. Standaard "full". */
  span?: ImageSpan;
  /** True zodra de echte foto op `src` beschikbaar is. */
  ready?: boolean;
}

export interface WorkArea {
  /** URL-slug van de pagina. */
  slug: "bedrijf" | "portret" | "publicaties";
  /** Paginatitel (h1). */
  title: string;
  /** SEO-titel (zonder merknaam; de layout voegt die toe) en beschrijving. */
  seo: {
    title: string;
    description: string;
  };
  /** Rustige introductie bovenaan de pagina. */
  intro: string;
  /** Groot fotografisch openingsvlak. */
  hero: WorkImage;
  /** Fotoselectie met afwisselend ritme. */
  gallery: WorkImage[];
  /** Maximaal één aanvullend tekstblok. */
  additionalText?: string;
  /** Afsluitende contactuitnodiging. */
  contact: {
    text: string;
    linkLabel: string;
    href: string;
  };
}

const contact = {
  text: "Iets in gedachten of gewoon benieuwd?",
  linkLabel: "Neem contact op",
  href: "/contact",
} as const;

export const workAreas: Record<WorkArea["slug"], WorkArea> = {
  bedrijf: {
    slug: "bedrijf",
    title: "Bedrijf",
    seo: {
      title: "Bedrijfsfotografie",
      description:
        "Bedrijfsfotografie: portretten, teams en sfeerbeeld op locatie, rustig en verzorgd.",
    },
    intro:
      "Fotografie voor bedrijven die zich herkenbaar en menselijk willen laten zien. Van zakelijke portretten tot teams en sfeerbeeld op de werkvloer.",
    hero: {
      src: "/foto/bedrijf/hero.jpg",
      alt: "Sfeerbeeld op locatie bij een bedrijf",
      ratio: "landscape",
      objectPosition: "center",
    },
    gallery: [
      {
        src: "/foto/bedrijf/01.jpg",
        alt: "Zakelijk portret op locatie",
        ratio: "portrait",
        span: "half",
      },
      {
        src: "/foto/bedrijf/02.jpg",
        alt: "Portret van een medewerker",
        ratio: "portrait",
        span: "half",
      },
      {
        src: "/foto/bedrijf/03.jpg",
        alt: "Team aan het werk",
        ratio: "landscape",
        span: "full",
      },
      {
        src: "/foto/bedrijf/04.jpg",
        alt: "Detail van de werkomgeving",
        ratio: "square",
        span: "half",
      },
      {
        src: "/foto/bedrijf/05.jpg",
        alt: "Portret in gesprek",
        ratio: "portrait",
        span: "half",
      },
    ],
    additionalText:
      "We kijken samen naar wat past bij je organisatie en werken rustig op locatie, zodat mensen zich op hun gemak voelen voor de camera.",
    contact,
  },

  portret: {
    slug: "portret",
    title: "Portret",
    seo: {
      title: "Portretfotografie",
      description:
        "Portretfotografie: persoonlijke portretten met rust en aandacht.",
    },
    intro:
      "Persoonlijke portretten met rust en aandacht. Voor jezelf, je werk of een moment dat je wilt vastleggen.",
    hero: {
      src: "/foto/portret/hero.jpg",
      alt: "Persoonlijk portret in zacht licht",
      ratio: "portrait",
      objectPosition: "center",
    },
    gallery: [
      {
        src: "/foto/portret/01.jpg",
        alt: "Portret in natuurlijk licht",
        ratio: "portrait",
        span: "full",
      },
      {
        src: "/foto/portret/02.jpg",
        alt: "Portret buiten",
        ratio: "portrait",
        span: "half",
      },
      {
        src: "/foto/portret/03.jpg",
        alt: "Portret binnen",
        ratio: "portrait",
        span: "half",
      },
      {
        src: "/foto/portret/04.jpg",
        alt: "Rustig sfeerbeeld bij een portretsessie",
        ratio: "landscape",
        span: "full",
      },
    ],
    additionalText:
      "Een sessie begint met even kennismaken. Zo ontstaat er ruimte voor een natuurlijk beeld dat bij je past.",
    contact,
  },

  publicaties: {
    slug: "publicaties",
    title: "Publicaties",
    seo: {
      title: "Fotografie voor publicaties",
      description:
        "Beeld voor redactionele en gedrukte publicaties: portret en reportage die een verhaal ondersteunen.",
    },
    intro:
      "Beeld voor redactionele en gedrukte publicaties. Portret en reportage die een verhaal ondersteunen.",
    hero: {
      src: "/foto/publicaties/hero.jpg",
      alt: "Redactioneel sfeerbeeld",
      ratio: "landscape",
      objectPosition: "center",
    },
    gallery: [
      {
        src: "/foto/publicaties/01.jpg",
        alt: "Reportagebeeld",
        ratio: "landscape",
        span: "half",
      },
      {
        src: "/foto/publicaties/02.jpg",
        alt: "Portret bij een artikel",
        ratio: "portrait",
        span: "half",
      },
      {
        src: "/foto/publicaties/03.jpg",
        alt: "Dubbele pagina met beeld",
        ratio: "landscape",
        span: "full",
      },
      {
        src: "/foto/publicaties/04.jpg",
        alt: "Portret in reportagestijl",
        ratio: "portrait",
        span: "half",
      },
      {
        src: "/foto/publicaties/05.jpg",
        alt: "Detailbeeld voor een publicatie",
        ratio: "landscape",
        span: "half",
      },
    ],
    additionalText:
      "In overleg met redactie of vormgever kijken we naar toon, formaat en uitsnede, zodat het beeld past bij de publicatie.",
    contact,
  },
};
