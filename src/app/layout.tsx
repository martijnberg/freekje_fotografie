import type { Metadata } from "next";
import type { CSSProperties } from "react";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { theme } from "@/config/theme";
import { fontRegistry, fontVariableClassName } from "@/config/fonts";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SiteChrome } from "@/components/site-chrome";

/**
 * Vertaalt de centrale thema- en fontconfiguratie naar CSS-variabelen op het
 * root-element. Alle overige styling leidt deze tokens af via Tailwind.
 */
const themeStyle = {
  "--site-bg": theme.colors.background,
  "--site-home-bg": theme.colors.homeBackground,
  "--site-fg": theme.colors.text,
  "--site-muted": theme.colors.muted,
  "--site-accent": theme.colors.accent,
  "--site-brand-divider": theme.colors.brandDivider,
  "--site-border": theme.colors.border,
  "--site-content-max": theme.layout.maxContentWidth,
  "--site-page-x": theme.layout.pageMarginX,
  "--site-section-y": theme.layout.sectionSpacingY,
  "--site-header-h": theme.layout.headerHeight,
  "--site-font-brand": `var(${fontRegistry[theme.fonts.brand].cssVar})`,
  "--site-font-headings": `var(${fontRegistry[theme.fonts.headings].cssVar})`,
  "--site-font-body": `var(${fontRegistry[theme.fonts.body].cssVar})`,
} as CSSProperties;

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.positioning}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: `${siteConfig.positioning} door ${siteConfig.name} in ${siteConfig.city}.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={fontVariableClassName} style={themeStyle}>
      <body className="flex min-h-dvh flex-col font-body">
        <a
          href="#hoofdinhoud"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-background focus:px-4 focus:py-2 focus:text-foreground focus:shadow"
        >
          Naar hoofdinhoud
        </a>
        <SiteChrome header={<SiteHeader />} footer={<SiteFooter />}>
          {children}
        </SiteChrome>
      </body>
    </html>
  );
}
