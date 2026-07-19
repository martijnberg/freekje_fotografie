"use client";

import { useEffect, useId, useState } from "react";
import { NavLink } from "@/components/nav-link";
import type { NavItem } from "@/config/site";

/**
 * Toegankelijke mobiele navigatie.
 *
 * - De knop is een echt <button> met `aria-expanded` en `aria-controls`,
 *   zodat de staat voor toetsenbord- en screenreadergebruik duidelijk is.
 * - Escape sluit het menu; na navigatie sluit het menu automatisch.
 * - Het touch-doel is minimaal 44×44 px.
 */
export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  // Sluit het menu met de Escape-toets.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Menu sluiten" : "Menu openen"}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-11 w-11 items-center justify-center rounded text-2xl leading-none text-foreground hover:text-accent"
      >
        <span aria-hidden="true">{open ? "✕" : "☰"}</span>
      </button>

      {open && (
        <nav
          id={panelId}
          aria-label="Mobiele navigatie"
          className="absolute inset-x-0 top-full border-t border-foreground/10 bg-background shadow-sm"
        >
          <ul className="mx-auto flex w-full max-w-6xl flex-col px-5 py-2 sm:px-6">
            {items.map((item) => (
              <li key={item.href}>
                <NavLink
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 text-base"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
