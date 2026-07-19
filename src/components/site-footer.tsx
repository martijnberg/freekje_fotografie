import Link from "next/link";
import { Container } from "@/components/container";
import { siteConfig } from "@/config/site";

/**
 * Gedeelde footer met contactgegevens, navigatie en socialmedia-links.
 * Externe links krijgen `rel="noopener noreferrer"` en een duidelijk label.
 */
export function SiteFooter() {
  const year = 2026;

  return (
    <footer className="mt-24 border-t border-foreground/10 bg-background">
      <Container>
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-heading text-lg font-medium text-foreground">
              {siteConfig.name}
            </p>
            <p className="mt-1 text-sm text-foreground/70">
              {siteConfig.positioning}
            </p>
            <p className="mt-1 text-sm text-foreground/70">{siteConfig.city}</p>
          </div>

          <nav aria-label="Footernavigatie">
            <h2 className="text-sm font-medium text-foreground">Navigatie</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-foreground/70 hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-medium text-foreground">Contact</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-foreground/70 hover:text-accent"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                  className="text-foreground/70 hover:text-accent"
                >
                  {siteConfig.phone}
                </a>
              </li>
            </ul>

            <h2 className="mt-6 text-sm font-medium text-foreground">Volgen</h2>
            <ul className="mt-3 flex gap-4 text-sm">
              <li>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-accent"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-accent"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-foreground/10 py-6 text-xs text-foreground/60">
          © {year} {siteConfig.name}
        </div>
      </Container>
    </footer>
  );
}
