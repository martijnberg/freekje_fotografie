"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Navigatielink die de actieve pagina herkenbaar maakt.
 *
 * De actieve staat wordt bewust rustig weergegeven: een dun accentlijntje en
 * iets zwaardere tekst, plus `aria-current` voor toegankelijkheid. De actieve
 * pagina is dus niet uitsluitend via kleur af te leiden.
 */
export function NavLink({
  href,
  children,
  className = "",
  onClick,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={`border-b-2 pb-0.5 transition-colors hover:text-accent ${
        isActive
          ? "border-accent font-medium text-foreground"
          : "border-transparent text-foreground/80"
      } ${className}`}
    >
      {children}
    </Link>
  );
}
