/**
 * Centraal, getypeerd contentmodel voor de werkgebiedpagina's
 * (Bedrijven, Portret, Publicaties).
 *
 * Teksten zijn voorlopig en staan hier centraal, niet in de paginacomponenten.
 * De afbeeldingen verwijzen naar de aanwezige lokale foto's onder `/public` en
 * hebben `ready: true`. Zolang `ready` ontbreekt/false is, toont de site een
 * rustig placeholdervlak; het volstaat dan om een foto op `src` te plaatsen en
 * `ready: true` te zetten — zonder componentwijziging.
 */

export type ImageRatio = "portrait" | "landscape" | "square";

/** Breedte-ritme op desktop; op mobiel is alles één kolom. */
export type ImageSpan = "full" | "half";

export interface WorkImage {
  /** Lokaal pad onder /public. */
  src: string;
  /** Alt-tekst. */
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
  slug: "bedrijven" | "portret" | "publicaties";
  /** Paginatitel (h1). */
  title: string;
  /** SEO-titel (zonder merknaam; de layout voegt die toe) en beschrijving. */
  seo: {
    title: string;
    description: string;
  };
  /** Rustige introductie bovenaan de pagina. */
  intro: string;
  /**
   * Optioneel groot fotografisch openingsvlak. Ontbreekt het, dan toont de
   * pagina geen apart hero-blok en bepaalt uitsluitend `gallery` de volgorde.
   */
  hero?: WorkImage;
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
  bedrijven: {
    slug: "bedrijven",
    title: "Bedrijven",
    seo: {
      title: "Bedrijfsfotografie",
      description:
        "Bedrijfsfotografie: portretten, teams en sfeerbeeld op locatie, rustig en verzorgd.",
    },
    intro:
      "Fotografie voor bedrijven die zich herkenbaar en menselijk willen laten zien. Van zakelijke portretten tot teams en sfeerbeeld op de werkvloer.",
    hero: {
      src: "/foto/bedrijf/5424799.jpg",
      alt: "Groepsportret van een team buiten in tegenlicht",
      ratio: "landscape",
      objectPosition: "center",
      ready: true,
    },
    gallery: [
      {
        src: "/foto/bedrijf/5442701.jpg",
        alt: "Trainer begeleidt een klant in een fitnessclub",
        ratio: "landscape",
        span: "full",
        objectPosition: "center",
        ready: true,
      },
      {
        src: "/foto/bedrijf/5424872.jpg",
        alt: "Medewerker aan het werk op locatie",
        ratio: "portrait",
        span: "half",
        objectPosition: "center 25%",
        ready: true,
      },
      {
        src: "/foto/bedrijf/5476985.jpg",
        alt: "Twee zakenmensen in gesprek",
        ratio: "portrait",
        span: "half",
        objectPosition: "center 30%",
        ready: true,
      },
      {
        src: "/foto/bedrijf/5420158.jpg",
        alt: "Bedrijfswagen in een woonstraat",
        ratio: "landscape",
        span: "full",
        objectPosition: "center",
        ready: true,
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
    // Geen apart hero-blok: de galerij bepaalt de volledige volgorde. De twee
    // staande portretten staan eerst (op desktop naast elkaar), gevolgd door
    // het voormalige hero-beeld als full-width beeld op positie 3.
    gallery: [
      {
        src: "/foto/portret/5507608.jpg",
        alt: "Portret van een artiest in een sfeervol interieur",
        ratio: "portrait",
        span: "half",
        objectPosition: "center 25%",
        ready: true,
      },
      {
        src: "/foto/portret/5461859.jpg",
        alt: "Portret in een werkplaats met neonlicht",
        ratio: "portrait",
        span: "half",
        objectPosition: "center 30%",
        ready: true,
      },
      {
        src: "/foto/portret/5419663.jpg",
        alt: "Zwart-witportret van een man van dichtbij",
        ratio: "portrait",
        span: "full",
        objectPosition: "center",
        ready: true,
      },
      {
        src: "/foto/portret/5424143.jpg",
        alt: "Kunstenaar in zijn atelier, met een detail van penselen",
        ratio: "landscape",
        span: "full",
        objectPosition: "center",
        ready: true,
      },
      {
        src: "/foto/portret/5442710.jpg",
        alt: "Portret met spiegel en herfsttakken",
        ratio: "portrait",
        span: "half",
        objectPosition: "center 20%",
        ready: true,
      },
      {
        src: "/foto/portret/5465162.jpg",
        alt: "Breakdancer voor een graffitimuur",
        ratio: "portrait",
        span: "half",
        objectPosition: "center",
        ready: true,
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
      src: "/foto/publicaties/5494105.jpg",
      alt: "Tijdschriftspread met een portret",
      ratio: "landscape",
      objectPosition: "center",
      ready: true,
    },
    gallery: [
      {
        src: "/foto/publicaties/5489305.jpg",
        alt: "Tijdschriftcover met sporters",
        ratio: "portrait",
        span: "half",
        objectPosition: "center 25%",
        ready: true,
      },
      {
        src: "/foto/publicaties/5489304.jpg",
        alt: "Tijdschriftcover met een warm portret",
        ratio: "portrait",
        span: "half",
        objectPosition: "center 20%",
        ready: true,
      },
      {
        src: "/foto/publicaties/5442767.jpg",
        alt: "Krantenpagina met reportagebeeld",
        ratio: "landscape",
        span: "full",
        objectPosition: "center",
        ready: true,
      },
      {
        src: "/foto/publicaties/5442714.jpg",
        alt: "Sfeerbeeld van een restaurantinterieur",
        ratio: "portrait",
        span: "half",
        objectPosition: "center",
        ready: true,
      },
      {
        src: "/foto/publicaties/5458948.jpg",
        alt: "Cover van een lifestylegids",
        ratio: "portrait",
        span: "half",
        objectPosition: "center",
        ready: true,
      },
    ],
    additionalText:
      "In overleg met redactie of vormgever kijken we naar toon, formaat en uitsnede, zodat het beeld past bij de publicatie.",
    contact,
  },
};
