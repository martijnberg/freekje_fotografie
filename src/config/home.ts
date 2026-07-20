import type { PlaceholderTone } from "@/components/placeholder-image";
import type { WorkImage } from "@/content/work-areas";

/**
 * Configuratiegestuurde inhoud van de homepage.
 *
 * De homepage is bewust compact en beeldgedreven: een gecentreerd woordmerk,
 * drie liggende werkgebiedbeelden, een compacte Info/Contact-navigatie en één
 * positioneringszin. Alles staat hier centraal, zodat teksten en fotografie
 * aanpasbaar zijn zonder de componenten te wijzigen.
 */

export interface HomeArea {
  /** Naam van het werkgebied. */
  title: string;
  /** Eén korte ondersteunende regel (momenteel niet getoond). */
  text: string;
  /** Interne link naar de gebiedspagina. */
  href: string;
  /** Representatief beeld voor dit werkgebied (liggende uitsnede). */
  image: WorkImage;
  /** Tint van het placeholdervlak zolang een foto ontbreekt. */
  tone: PlaceholderTone;
}

export interface HomeLink {
  label: string;
  href: string;
}

export interface HomeContent {
  areas: HomeArea[];
  /** Compacte navigatie onder de beelden. */
  links: HomeLink[];
  /** Korte positioneringszin (maximaal twee regels). */
  positioning: string;
}

export const homeContent: HomeContent = {
  areas: [
    {
      title: "Bedrijven",
      text: "Zakelijke portretten, teams en sfeer op locatie.",
      href: "/bedrijven",
      image: {
        src: "/foto/bedrijf/5442705.jpg",
        alt: "Professional aan het werk op locatie",
        ratio: "landscape",
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
        ratio: "landscape",
        objectPosition: "center 35%",
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
        ratio: "landscape",
        objectPosition: "center 40%",
        ready: true,
      },
      tone: "deep",
    },
  ],
  links: [
    { label: "Info", href: "/over-mij" },
    { label: "Contact", href: "/contact" },
  ],
  positioning:
    "Bedrijfs- en portretfotografie in en rond Utrecht, rustig en met aandacht voor de mens voor de lens.",
};
