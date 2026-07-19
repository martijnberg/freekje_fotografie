import { Container } from "@/components/container";
import { siteConfig } from "@/config/site";

/**
 * Rustige, gedeelde footer met naam, e-mailadres, sociale links en een
 * copyrightregel. Alleen sociale links met een geconfigureerde URL worden
 * getoond. Externe links openen veilig en zijn toegankelijk benoemd.
 */
export function SiteFooter() {
  const year = 2026;

  const socials = [
    { label: "Instagram", href: siteConfig.social.instagram },
    { label: "LinkedIn", href: siteConfig.social.linkedin },
  ].filter((item) => item.href.trim() !== "");

  return (
    <footer className="border-t border-border bg-footer">
      <Container>
        <div className="flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1 text-sm sm:flex-row sm:items-center sm:gap-4">
            <span className="font-semibold text-foreground">
              {siteConfig.name}
            </span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-muted hover:text-accent"
            >
              {siteConfig.email}
            </a>
          </div>

          {socials.length > 0 && (
            <nav aria-label="Sociale media">
              <ul className="flex gap-6 text-sm">
                {socials.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${item.label} (opent in nieuw venster)`}
                      className="text-muted hover:text-accent"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>

        <p className="pb-8 text-xs text-muted">
          © {year} {siteConfig.name}
        </p>
      </Container>
    </footer>
  );
}
