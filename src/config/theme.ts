import type { FontKey } from "@/config/fonts";

/**
 * Centrale thema-instellingen. Deze waarden worden in de layout vertaald naar
 * CSS-variabelen op `:root`. Componenten gebruiken uitsluitend de daaruit
 * afgeleide Tailwind-tokens (bg-background, text-foreground, text-accent,
 * font-heading, font-body) en bevatten geen losse kleurcodes.
 *
 * Voorlopige, rustige placeholderwaarden — later eenvoudig aan te passen.
 */

export interface ThemeConfig {
  colors: {
    /** Achtergrondkleur van de site. */
    background: string;
    /** Tekstkleur (lopende tekst en koppen). */
    text: string;
    /** Accentkleur voor links, actieve staat en subtiele accenten. */
    accent: string;
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
    text: "#20211f",
    accent: "#7c4f2f",
  },
  fonts: {
    heading: "fraunces",
    body: "inter",
  },
};
