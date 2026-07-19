import { Manrope, Prata, Quicksand } from "next/font/google";

/** Vorm van een `next/font`-resultaat met de `variable`-optie ingesteld. */
interface LoadedFont {
  className: string;
  variable: string;
  style: { fontFamily: string };
}

/**
 * Beperkte, getypeerde font registry.
 *
 * Alle fonts worden via `next/font/google` bij de build lokaal gehost, zodat de
 * browser geen externe fontrequests doet en er geen layout shift ontstaat. Per
 * font worden uitsluitend de gewichten geladen die het font daadwerkelijk kent:
 * Manrope en Quicksand zijn variabel (400–700); Prata bestaat alleen in 400.
 * Voeg hier geen willekeurige of runtime-geladen fonts toe.
 *
 * De koppeling van fonts aan de rollen brand, headings en body gebeurt niet
 * hier maar centraal in `src/config/theme.ts`.
 */

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

const prata = Prata({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-prata",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
});

export interface FontEntry {
  font: LoadedFont;
  /** CSS-variabele waarmee dit font beschikbaar is. */
  cssVar: string;
  /** Leesbare naam voor documentatie en rapportage. */
  label: string;
  /** Gewichten die dit font daadwerkelijk aanbiedt. */
  weights: readonly string[];
}

export const fontRegistry = {
  manrope: {
    font: manrope,
    cssVar: "--font-manrope",
    label: "Manrope",
    weights: ["400", "500", "600", "700"],
  },
  prata: {
    font: prata,
    cssVar: "--font-prata",
    label: "Prata",
    weights: ["400"],
  },
  quicksand: {
    font: quicksand,
    cssVar: "--font-quicksand",
    label: "Quicksand",
    weights: ["400", "500", "600", "700"],
  },
} as const satisfies Record<string, FontEntry>;

export type FontKey = keyof typeof fontRegistry;

/** Alle font-variabelen samengevoegd voor toepassing op het <html>-element. */
export const fontVariableClassName = Object.values(fontRegistry)
  .map((entry) => entry.font.variable)
  .join(" ");
