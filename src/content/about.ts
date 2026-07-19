/**
 * Centraal, getypeerd contentmodel voor de pagina 'Over mij'.
 *
 * Alle teksten staan hier, niet verspreid in de paginacomponent. De foto is
 * voorlopig een placeholder (`ready: false`); zodra de echte foto onder
 * `/public` staat en `ready: true` is, rendert de pagina automatisch
 * `next/image` in exact dezelfde 4:5-positie, zonder layoutwijziging.
 */

export interface AboutContent {
  /** Paginatitel (h1). */
  title: string;
  /** SEO-titel (zonder merknaam; de layout voegt die toe) en beschrijving. */
  seo: {
    title: string;
    description: string;
  };
  /** Korte, benadrukte openingszin. */
  lead: string;
  /** Vervolgalinea's, elk gerenderd als eigen <p>. */
  paragraphs: string[];
  /** Staande portretfoto (verhouding 4:5). */
  photo: {
    /** Lokaal pad onder /public; invullen zodra de foto beschikbaar is. */
    src: string;
    /** Alt-tekst; wordt ook als aria-label van de placeholder gebruikt. */
    alt: string;
    /** True zodra de echte foto op `src` staat. */
    ready: boolean;
  };
  /** Afzonderlijke sectie met opdrachtgevers. */
  clients: {
    /** Sectietitel (h2). */
    title: string;
    /** Namen, rustig verdeeld over twee of drie kolommen. */
    items: string[];
  };
}

export const aboutContent: AboutContent = {
  title: "Over mij",
  seo: {
    title: "Over mij",
    description: "Over de fotograaf achter Freekje Fotografie.",
  },
  lead: "Wat fotografeer ik het liefst? Mensen.",
  paragraphs: [
    "Na zo’n dertig jaar als fotograaf kom ik niet snel meer voor verrassingen te staan. Dat geeft rust tijdens een shoot. Je hoeft niet te weten hoe je moet kijken of staan — ik help je daarbij, zonder dat het geforceerd voelt.",
    "Ik fotografeer voor bedrijven, magazines, kranten, instellingen, zorgorganisaties, reclamebureaus en particulieren. Daarbij zoek ik naar beelden die verzorgd zijn, maar waarin mensen vooral zichzelf blijven.",
    "Sinds 2023 werk ik samen met Eddie Mol binnen Studio Mol & Groenemans, gespecialiseerd in portretfotografie.",
  ],
  photo: {
    src: "/foto/over-mij/freekje-groenemans.jpeg",
    alt: "Portret van fotograaf Freekje Groenemans",
    ready: true,
  },
  clients: {
    title: "Opdrachtgevers",
    items: [
      "FRITS Magazine",
      "Eindhovens Dagblad",
      "Archipel",
      "DELA",
      "VB Groep",
      "GGzE",
      "Retour Jeans",
      "Cure",
      "NLW",
      "PreHistorisch Dorp",
      "Deense Kroon",
      "Helder Theater",
      "ANWB",
      "Van der Valk Magazine",
      "Welzijn de Meierij",
      "GoodHabitz",
      "TU/e",
      "De Heeren van Vonder",
      "UWV",
      "Veldsink",
      "NBG",
      "Bibliotheek Eindhoven",
      "Skillz",
      "Scope Finance",
      "ZEST Magazine",
      "Mohsa Huidcentrum",
      "Catharina Ziekenhuis",
    ],
  },
};
