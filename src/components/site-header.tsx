import Link from "next/link";
import { siteConfig } from "@/config/site";
import { NavLink } from "@/components/nav-link";
import { MobileNav } from "@/components/mobile-nav";

/**
 * Responsive header met woordmerk, desktopnavigatie en toegankelijke mobiele
 * navigatie. Het woordmerk linkt altijd naar de homepage.
 */
export function SiteHeader() {
  return (
    <header className="relative border-b border-border bg-background">
      <div className="mx-auto flex min-h-[var(--site-header-h)] w-full max-w-[var(--site-content-max)] items-center justify-between gap-6 px-[var(--site-page-x)]">
        <Link
          href="/"
          className="font-heading text-lg font-semibold tracking-tight text-foreground"
        >
          {siteConfig.name}
        </Link>

        <nav aria-label="Hoofdnavigatie" className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <MobileNav items={siteConfig.nav} />
      </div>
    </header>
  );
}
