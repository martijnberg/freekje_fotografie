import type { PlaceholderTone } from "@/components/placeholder-image";
import type { WorkImage } from "@/content/work-areas";

/**
 * Configuratiegestuurde inhoud van de homepage.
 *
 * De drie hoofdgebieden, de positioneringstekst en de contactuitnodiging staan
 * hier centraal, zodat teksten en fotografie eenvoudig aanpasbaar zijn zonder
 * de componenten te wijzigen. Teksten zijn voorlopig; de foto's zijn de
 * aanwezige lokale beelden.
 */

export interface HomeArea {
  /** Naam van het werkgebied. */
  title: string;
  /** Eén korte ondersteunende regel (momenteel niet getoond). */
  text: string;
  /** Interne link naar de gebiedspagina. */
  href: string;
  /** Representatief beeld voor dit werkgebied. */
  image: WorkImage;
  /** Tint van het placeholdervlak zolang een foto ontbreekt. */
  tone: PlaceholderTone;
}

export interface HomeContent {
  areas: HomeArea[];
  /** Korte positionering onder de drie gebieden (maximaal twee regels). */
  positioning: string;
  /** Rustige contactuitnodiging onderaan de homepage. */
  contact: {
    text: string;
    linkLabel: string;
    href: string;
  };
}

export const homeContent: HomeContent = {
  areas: [
    {
      title: "Bedrijf",
      text: "Zakelijke portretten, teams en sfeer op locatie.",
      href: "/bedrijf",
      image: {
        src: "/foto/bedrijf/5442705.jpg",
        alt: "Professional aan het werk op locatie",
        ratio: "portrait",
        objectPosition: "center 30%",
        ready: true,
      },
      tone: "neutral",
    },
    {
      title: "Portret",
      text: "Persoonlijke portretten met rust en aandacht.",
      href: "/portret",
      image: {
        src: "/foto/portret/5420148.jpg",
        alt: "Persoonlijk portret van een lachende vrouw",
        ratio: "portrait",
        objectPosition: "center 20%",
        ready: true,
      },
      tone: "warm",
    },
    {
      title: "Publicaties",
      text: "Beeld voor redactionele en gedrukte publicaties.",
      href: "/publicaties",
      image: {
        src: "/foto/publicaties/5442699.jpg",
        alt: "Redactioneel gestileerd stilleven",
        ratio: "portrait",
        objectPosition: "center",
        ready: true,
      },
      tone: "deep",
    },
  ],
  positioning:
    "Bedrijfs- en portretfotografie in en rond Utrecht, rustig en met aandacht voor de mens voor de lens.",
  contact: {
    text: "Benieuwd of we bij elkaar passen?",
    linkLabel: "Neem contact op",
    href: "/contact",
  },
};
