import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Neem contact op met ${siteConfig.name} in ${siteConfig.city}.`,
};

export default function ContactPage() {
  return (
    <PageIntro
      title="Contact"
      intro="Neem gerust contact op voor een kennismaking of aanvraag. Het contactformulier volgt later; gebruik voorlopig onderstaande gegevens."
    >
      <dl className="mt-8 space-y-4 text-base">
        <div>
          <dt className="text-sm font-medium text-foreground/60">E-mail</dt>
          <dd>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-foreground hover:text-accent"
            >
              {siteConfig.email}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-foreground/60">Telefoon</dt>
          <dd>
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
              className="text-foreground hover:text-accent"
            >
              {siteConfig.phone}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-foreground/60">Plaats</dt>
          <dd className="text-foreground">{siteConfig.city}</dd>
        </div>
      </dl>
    </PageIntro>
  );
}
