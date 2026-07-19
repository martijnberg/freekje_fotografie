import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Publicaties",
  description:
    "Publicaties: beeld voor redactionele en gedrukte publicaties.",
};

export default function PublicatiesPage() {
  return (
    <PageIntro
      title="Publicaties"
      intro="Beeld voor redactionele en gedrukte publicaties. Deze pagina is nog in opbouw; portfolio en teksten volgen later."
    />
  );
}
