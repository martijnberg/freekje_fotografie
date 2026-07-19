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
    <header className="relative border-b border-foreground/10 bg-background">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-heading text-lg font-medium tracking-tight text-foreground"
        >
          {siteConfig.name}
        </Link>

        <nav aria-label="Hoofdnavigatie" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
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
