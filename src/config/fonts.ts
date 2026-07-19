import { Fraunces, Inter } from "next/font/google";

/** Vorm van een `next/font`-resultaat met de `variable`-optie ingesteld. */
interface LoadedFont {
  className: string;
  variable: string;
  style: { fontFamily: string };
}

/**
 * Beperkte, getypeerde font registry.
 *
 * Fonts worden via `next/font` bij de build lokaal gehost, zodat de browser
 * geen externe fontrequests doet en er geen layout shift ontstaat.
 * Voeg hier geen willekeurige of runtime-geladen fonts toe.
 */

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-fraunces",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export interface FontEntry {
  font: LoadedFont;
  /** CSS-variabele waarmee dit font beschikbaar is. */
  cssVar: string;
  /** Leesbare naam voor documentatie en rapportage. */
  label: string;
}

export const fontRegistry = {
  fraunces: { font: fraunces, cssVar: "--font-fraunces", label: "Fraunces" },
  inter: { font: inter, cssVar: "--font-inter", label: "Inter" },
} as const satisfies Record<string, FontEntry>;

export type FontKey = keyof typeof fontRegistry;

/** Alle font-variabelen samengevoegd voor toepassing op het <html>-element. */
export const fontVariableClassName = Object.values(fontRegistry)
  .map((entry) => entry.font.variable)
  .join(" ");
