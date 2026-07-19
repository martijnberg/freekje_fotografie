import type { ReactNode } from "react";

/**
 * Consistente centrale contentcontainer. Bepaalt de maximale contentbreedte
 * en de horizontale marges op één plek, zodat alle pagina's dezelfde
 * uitlijning volgen.
 */
export function Container({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[var(--site-content-max)] px-[var(--site-page-x)]">
      {children}
    </div>
  );
}
