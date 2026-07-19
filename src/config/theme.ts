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
  colors: {
    /** Achtergrondkleur van de site (inhoudelijke pagina's). */
    background: string;
    /** Rustige achtergrondkleur van uitsluitend de homepage. */
    homeBackground: string;
    /** Primaire tekstkleur (lopende tekst en koppen). */
    text: string;
    /** Zachte secundaire tekstkleur voor ondersteunende tekst. */
    muted: string;
    /** Accentkleur voor links, actieve staat en subtiele accenten. */
    accent: string;
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
    /** Font voor koppen (verwijst naar de font registry). */
    heading: FontKey;
    /** Font voor lopende tekst (verwijst naar de font registry). */
    body: FontKey;
  };
}

export const theme: ThemeConfig = {
  colors: {
    background: "#f6f4f1",
    homeBackground: "#e6eae2",
    text: "#20211f",
    muted: "#6b6862",
    accent: "#7c4f2f",
    border: "#e4ded5",
  },
  layout: {
    maxContentWidth: "72rem",
    pageMarginX: "clamp(1.25rem, 4vw, 2rem)",
    sectionSpacingY: "clamp(3rem, 6vw, 5rem)",
    headerHeight: "4rem",
  },
  fonts: {
    heading: "manrope",
    body: "manrope",
  },
};
