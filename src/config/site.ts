/**
 * Centrale, getypeerde siteconfiguratie.
 *
 * Bevat uitsluitend niet-gevoelige, versiebeheerbare gegevens. Gevoelige
 * waarden (zoals SMTP-gegevens) horen hier niet en komen later uitsluitend
 * in environmentvariabelen.
 *
 * Alle waarden zijn voorlopige placeholders die later worden vervangen.
 */

export interface NavItem {
  href: string;
  label: string;
}

export interface SiteConfig {
  /** Naam van de fotograaf / woordmerk. */
  name: string;
  /** Korte positionering onder de naam. */
  positioning: string;
  /** Algemeen contact-e-mailadres. */
  email: string;
  /** Telefoonnummer. */
  phone: string;
  /** Vestigingsplaats. */
  city: string;
  /** Hoofdnavigatie-items. */
  nav: NavItem[];
  social: {
    instagram: string;
    linkedin: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Freekje Fotografie",
  positioning: "Bedrijfs- en portretfotografie",
  email: "hallo@freekjefotografie.nl",
  phone: "+31 6 12 34 56 78",
  city: "Utrecht",
  nav: [
    { href: "/bedrijf", label: "Bedrijf" },
    { href: "/portret", label: "Portret" },
    { href: "/publicaties", label: "Publicaties" },
    { href: "/werkwijze", label: "Werkwijze" },
    { href: "/over-mij", label: "Over mij" },
    { href: "/contact", label: "Contact" },
  ],
  social: {
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
};
