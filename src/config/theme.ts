import type { FontKey } from "@/config/fonts";

/**
 * Centrale thema-instellingen — de eenvoudige pseudo-admin van de site.
 *
 * Deze waarden worden in de layout vertaald naar CSS-variabelen op het
 * root-element en van daaruit aan Tailwind-tokens gekoppeld. Componenten
 * gebruiken uitsluitend die tokens en bevatten geen losse kleurcodes of
 * willekeurige spacingwaarden.
 *
 * De structuur van dit bestand:
 * 1. `ThemeConfig` — de vorm van het thema.
 * 2. Het blok "PAS ALLEEN DIT BLOK AAN" — fonts, achtergrondkleuren en
 *    overige kleuren.
 * 3. Een apart blok met technische layoutinstellingen.
 * 4. De definitieve `theme`-export, samengesteld uit beide blokken.
 */

export interface ThemeConfig {
  /** Achtergrondkleuren per pagina-onderdeel (geldige CSS-kleurwaarden). */
  backgrounds: {
    /** Homepage. */
    landing: string;
    /** Alle vervolgpagina's. */
    content: string;
    /** Vaste header. */
    header: string;
    /** Footer. */
    footer: string;
  };
  colors: {
    /** Primaire tekstkleur (lopende tekst en koppen). */
    text: string;
    /** Zachte secundaire tekstkleur voor ondersteunende tekst. */
    muted: string;
    /** Accentkleur voor links, actieve staat en subtiele accenten. */
    accent: string;
    /** Heldere roze/magenta kleur voor de woordmerk-scheiding. */
    brandDivider: string;
    /** Kleur voor subtiele borders en scheidingen. */
    border: string;
  };
  layout: {
    /** Maximale contentbreedte. */
    maxContentWidth: string;
    /** Horizontale paginamarge (responsief via clamp). */
    pageMarginX: string;
    /** Verticale ruimte tussen secties (responsief via clamp). */
    sectionSpacingY: string;
    /** Hoogte van de header. */
    headerHeight: string;
  };
  fonts: {
    /** Font voor het woordmerk / BrandMark (verwijst naar de font registry). */
    brand: FontKey;
    /** Font voor de labels onder de drie homepagefoto's (font registry). */
    landingLabels: FontKey;
    /** Font voor pagina- en sectiekoppen (verwijst naar de font registry). */
    headings: FontKey;
    /** Font voor lopende tekst, navigatie en formulieren (font registry). */
    body: FontKey;
  };
}

/* ===========================================================================
 *  PAS ALLEEN DIT BLOK AAN
 *
 *  De pseudo-admin: achtergrondkleuren, overige kleuren en fonts.
 *  - Kleuren: voer geldige CSS-kleurwaarden in (bijv. hex, rgb(), hsl()).
 *  - Fonts: kies per rol uit "manrope", "prata" of "quicksand".
 *  Wijzigingen zijn tijdens `npm run dev` direct zichtbaar; voor productie
 *  opnieuw builden en deployen. Componenten hoeven niet te worden aangepast.
 * ===========================================================================
 */
const settings = {
  /*
   * Achtergrondkleuren per pagina-onderdeel:
   * - landing: achtergrond van de homepage
   * - content: achtergrond van alle vervolgpagina's
   * - header:  achtergrond van de vaste header
   * - footer:  achtergrond van de footer
   */
  backgrounds: {
    landing: "#e5e4dd",
    content: "#e5e4dd",
    header: "#e5e4dd",
    footer: "#e5e4dd",
  },
  /* Overige kleuren: tekst, accenten en scheidingen. */
  colors: {
    text: "#20211f",
    muted: "#6b6862",
    accent: "#7c4f2f",
    brandDivider: "#e5157f",
    border: "#e4ded5",
  },
  /*
   * Fontrollen (kies uit "manrope", "prata" of "quicksand"):
   * - brand:         het woordmerk (BrandMark)
   * - landingLabels: de labels onder de drie homepagefoto's
   * - headings:      pagina- en sectiekoppen
   * - body:          lopende tekst, navigatie en formulieren
   */
  fonts: {
    brand: "quicksand",
    landingLabels: "quicksand",
    headings: "prata",
    body: "quicksand",
  },
} satisfies Pick<ThemeConfig, "backgrounds" | "colors" | "fonts">;

/* ===========================================================================
 *  Technische layoutinstellingen — normaal niet aanpassen
 * ===========================================================================
 */
const layout = {
  /** Maximale contentbreedte. */
  maxContentWidth: "72rem",
  /** Horizontale paginamarge (responsief via clamp). */
  pageMarginX: "clamp(1.25rem, 4vw, 2rem)",
  /** Verticale ruimte tussen secties (responsief via clamp). */
  sectionSpacingY: "clamp(3rem, 6vw, 5rem)",
  /** Hoogte van de header. */
  headerHeight: "4rem",
} satisfies ThemeConfig["layout"];

/**
 * Definitieve thema-export, samengesteld uit het pseudo-adminblok en de
 * technische layoutinstellingen.
 */
export const theme: ThemeConfig = {
  ...settings,
  layout,
};
