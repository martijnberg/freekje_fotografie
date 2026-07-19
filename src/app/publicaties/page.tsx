import type { Metadata } from "next";
import { WorkAreaPage } from "@/components/work-area-page";
import { workAreas } from "@/content/work-areas";

const area = workAreas.publicaties;

export const metadata: Metadata = {
  title: area.seo.title,
  description: area.seo.description,
};

export default function PublicatiesPage() {
  return <WorkAreaPage area={area} />;
}
