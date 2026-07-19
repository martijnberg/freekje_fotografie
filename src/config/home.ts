import type { PlaceholderTone } from "@/components/placeholder-image";

/**
 * Configuratiegestuurde inhoud van de homepage.
 *
 * De drie hoofdgebieden, de positioneringstekst en de contactuitnodiging staan
 * hier centraal, zodat teksten en (later) fotografie eenvoudig aanpasbaar zijn
 * zonder de componenten te wijzigen. Alle teksten zijn voorlopig.
 */

export interface HomeArea {
  /** Naam van het werkgebied. */
  title: string;
  /** Eén korte ondersteunende regel. */
  text: string;
  /** Interne link naar de gebiedspagina. */
  href: string;
  /**
   * Pad naar de definitieve foto onder /public. Nog niet in gebruik: tot er
   * fotografie is, toont de homepage een tijdelijk placeholdervlak.
   */
  image: string;
  /** Alt-tekst voor de toekomstige foto. */
  alt: string;
  /** Optionele object-position voor de toekomstige next/image-uitsnede. */
  objectPosition?: string;
  /** Tijdelijke tint van het placeholdervlak tot er fotografie is. */
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
      image: "/foto/bedrijf.jpg",
      alt: "Bedrijfsfotografie op locatie",
      objectPosition: "center",
      tone: "neutral",
    },
    {
      title: "Portret",
      text: "Persoonlijke portretten met rust en aandacht.",
      href: "/portret",
      image: "/foto/portret.jpg",
      alt: "Persoonlijk portret",
      objectPosition: "center",
      tone: "warm",
    },
    {
      title: "Publicaties",
      text: "Beeld voor redactionele en gedrukte publicaties.",
      href: "/publicaties",
      image: "/foto/publicaties.jpg",
      alt: "Beeld voor een publicatie",
      objectPosition: "center",
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
