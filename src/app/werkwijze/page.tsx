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
      intro="Iedere opdracht begint met een kennismaking. Ik ben benieuwd wie je bent, wat je wilt laten zien en waarvoor je de foto’s gaat gebruiken. Samen bespreken we de sfeer, de locatie en het doel van de reportage."
    >
      <p className="mt-4 text-base leading-relaxed text-muted">
        Tijdens de fotosessie neem ik de tijd. Ik geef waar nodig
        aanwijzingen, maar laat ook ruimte voor spontane momenten. Juist in
        die ontspannen sfeer ontstaan foto’s die natuurlijk aanvoelen en
        waarin mensen zichzelf herkennen.
      </p>
      <p className="mt-4 text-base leading-relaxed text-muted">
        Na de fotosessie maak ik een zorgvuldige selectie en werk ik de
        beelden met aandacht af. Je ontvangt foto’s die niet alleen technisch
        goed zijn, maar ook passen bij jouw verhaal of de uitstraling van
        jouw organisatie.
      </p>
      <p className="mt-4 text-base leading-relaxed text-muted">
        Of het nu gaat om een bedrijfsreportage, een portret of beeld voor
        een publicatie: mijn doel is om foto’s te maken die echt zijn,
        tijdloos blijven en met plezier gebruikt worden.
      </p>
    </PageIntro>
  );
}
