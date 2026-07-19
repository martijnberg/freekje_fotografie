import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Portret",
  description:
    "Portretfotografie: persoonlijke portretten met rust en aandacht.",
};

export default function PortretPage() {
  return (
    <PageIntro
      title="Portret"
      intro="Persoonlijke portretten met rust en aandacht. Deze pagina is nog in opbouw; portfolio en teksten volgen later."
    />
  );
}
