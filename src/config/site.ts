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
  /**
   * Woordmerk zoals getoond in het BrandMark-component. De twee delen worden
   * gescheiden door een apart visueel scheidingsteken (geen tekstteken).
   */
  wordmark: {
    primary: string;
    secondary: string;
  };
  /** Korte positionering onder de naam. */
  positioning: string;
  /** Algemeen contact-e-mailadres. */
  email: string;
  /** Telefoonnummer. */
  phone: string;
  /** Vestigingsplaats. */
  city: string;
  /**
   * Hoofdnavigatie-items. Contact staat hier bewust niet in: contact is
   * bereikbaar via de homepage en de footer.
   */
  nav: NavItem[];
  social: {
    instagram: string;
    linkedin: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Freekje Fotografie",
  wordmark: {
    primary: "Freekje Groenemans",
    secondary: "Fotografie",
  },
  positioning: "Bedrijfs- en portretfotografie",
  email: "freekje@freekjegroenemans.nl",
  phone: "+31 6 17 82 06 06",
  city: "Eindhoven",
  nav: [
    { href: "/bedrijven", label: "Bedrijven" },
    { href: "/portret", label: "Portret" },
    { href: "/publicaties", label: "Publicaties" },
    { href: "/werkwijze", label: "Werkwijze" },
    { href: "/over-mij", label: "Over mij" },
  ],
  social: {
    instagram: "https://www.instagram.com/freekjegroenemansfotografie/",
    linkedin: "https://linkedin.com/in/freekje-groenemans-04273a14",
  },
};
