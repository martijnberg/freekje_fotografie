import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Werkwijze",
  description:
    "Werkwijze: hoe een fotografieopdracht van kennismaking tot oplevering verloopt.",
};

export default function WerkwijzePage() {
  return (
    <PageIntro
      title="Werkwijze"
      intro="Van kennismaking tot oplevering, met aandacht en rust. Deze pagina is nog in opbouw; de definitieve tekst volgt later."
    />
  );
}
