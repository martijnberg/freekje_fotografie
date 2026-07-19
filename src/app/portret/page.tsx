import type { Metadata } from "next";
import { WorkAreaPage } from "@/components/work-area-page";
import { workAreas } from "@/content/work-areas";

const area = workAreas.portret;

export const metadata: Metadata = {
  title: area.seo.title,
  description: area.seo.description,
};

export default function PortretPage() {
  return <WorkAreaPage area={area} />;
}
