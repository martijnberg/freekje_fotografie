import type { ReactNode } from "react";
import { Container } from "@/components/container";

/**
 * Consistente pagina-inleiding met titel en korte introductie.
 * Zorgt voor één duidelijke <h1> per pagina en een rustige koppenstructuur.
 */
export function PageIntro({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children?: ReactNode;
}) {
  return (
    <Container>
      <div className="max-w-2xl py-16 sm:py-20">
        <h1 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>
        {children}
      </div>
    </Container>
  );
}
