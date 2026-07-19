import type { FontKey } from "@/config/fonts";

/**
 * Centrale thema-instellingen. Deze waarden worden in de layout vertaald naar
 * CSS-variabelen op het root-element en van daaruit aan Tailwind-tokens
 * gekoppeld. Componenten gebruiken uitsluitend die tokens en bevatten geen
 * losse kleurcodes of willekeurige spacingwaarden.
 *
 * Voorlopige, rustige placeholderwaarden — later eenvoudig aan te passen.
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
    /** Font voor pagina- en sectiekoppen (verwijst naar de font registry). */
    headings: FontKey;
    /** Font voor lopende tekst, navigatie en formulieren (font registry). */
    body: FontKey;
  };
}

export const theme: ThemeConfig = {
  /*
   * Achtergrondkleuren per pagina-onderdeel. Voer geldige CSS-kleurwaarden in
   * (bijv. hex, rgb(), hsl()). Iedere waarde bepaalt:
   * - landing: achtergrond van de homepage
   * - content: achtergrond van alle vervolgpagina's
   * - header:  achtergrond van de vaste header
   * - footer:  achtergrond van de footer
   * Wijzigingen zijn tijdens `npm run dev` direct zichtbaar; voor productie
   * opnieuw builden en deployen. Componenten hoeven niet te worden aangepast.
   */
  backgrounds: {
    landing: "#e5e4dd",
    content: "#e5e4dd",
    header: "#e5e4dd",
    footer: "#e5e4dd",
  },
  colors: {
    text: "#20211f",
    muted: "#6b6862",
    accent: "#7c4f2f",
    brandDivider: "#e5157f",
    border: "#e4ded5",
  },
  layout: {
    maxContentWidth: "72rem",
    pageMarginX: "clamp(1.25rem, 4vw, 2rem)",
    sectionSpacingY: "clamp(3rem, 6vw, 5rem)",
    headerHeight: "4rem",
  },
  fonts: {
    brand: "quicksand",
    headings: "prata",
    body: "quicksand",
  },
};
