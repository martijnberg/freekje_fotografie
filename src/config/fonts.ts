import { Manrope } from "next/font/google";

/** Vorm van een `next/font`-resultaat met de `variable`-optie ingesteld. */
interface LoadedFont {
  className: string;
  variable: string;
  style: { fontFamily: string };
}

/**
 * Beperkte, getypeerde font registry.
 *
 * Eén zorgvuldig gekozen font (Manrope) voor zowel koppen als lopende tekst;
 * koppen worden onderscheiden met gewicht en grootte, niet met een tweede
 * lettertype. Fonts worden via `next/font` bij de build lokaal gehost, zodat de
 * browser geen externe fontrequests doet en er geen layout shift ontstaat.
 * Voeg hier geen willekeurige of runtime-geladen fonts toe.
 */

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

export interface FontEntry {
  font: LoadedFont;
  /** CSS-variabele waarmee dit font beschikbaar is. */
  cssVar: string;
  /** Leesbare naam voor documentatie en rapportage. */
  label: string;
}

export const fontRegistry = {
  manrope: { font: manrope, cssVar: "--font-manrope", label: "Manrope" },
} as const satisfies Record<string, FontEntry>;

export type FontKey = keyof typeof fontRegistry;

/** Alle font-variabelen samengevoegd voor toepassing op het <html>-element. */
export const fontVariableClassName = Object.values(fontRegistry)
  .map((entry) => entry.font.variable)
  .join(" ");
