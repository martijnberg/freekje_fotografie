import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Over mij",
  description: "Over de fotograaf achter Freekje Fotografie.",
};

export default function OverMijPage() {
  return (
    <PageIntro
      title="Over mij"
      intro="Een korte kennismaking met de fotograaf. Deze pagina is nog in opbouw; de definitieve tekst volgt later."
    />
  );
}
