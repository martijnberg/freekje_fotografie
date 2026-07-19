import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Bedrijf",
  description:
    "Bedrijfsfotografie: zakelijke portretten, teams en sfeerbeeld op locatie.",
};

export default function BedrijfPage() {
  return (
    <PageIntro
      title="Bedrijf"
      intro="Zakelijke portretten, teams en sfeerbeeld op locatie. Deze pagina is nog in opbouw; portfolio en teksten volgen later."
    />
  );
}
