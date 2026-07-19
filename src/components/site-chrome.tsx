"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Toont de gedeelde header en footer op alle pagina's behalve de homepage.
 *
 * De homepage (`/`) is bewust beeldgedreven en compact en heeft een eigen,
 * gecentreerd woordmerk in plaats van de reguliere header/navigatie en footer.
 * `usePathname` levert tijdens SSR en op de client dezelfde waarde op, dus dit
 * veroorzaakt geen hydration-verschil.
 */
export function SiteChrome({
  header,
  footer,
  children,
}: {
  header: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}) {
  const isHome = usePathname() === "/";

  return (
    <>
      {!isHome && header}
      <main id="hoofdinhoud" className="flex-1">
        {children}
      </main>
      {!isHome && footer}
    </>
  );
}
