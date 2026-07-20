# CLAUDE.md — Freekje Fotografie

## 1. Projectdoel

Dit project is de website van een professionele bedrijfs- en portretfotograaf.

De website moet uitstralen:

* kwaliteit;
* rust;
* menselijkheid;
* professionaliteit;
* verzorgd en eigentijds, zonder hoogdravend te zijn.

Fotografie staat altijd centraal. Vormgeving ondersteunt de beelden en concurreert er niet mee.

## 2. Technische basis

* Next.js 16 App Router
* React 19
* TypeScript
* Tailwind CSS 4
* ESLint
* npm
* Broncode onder `src/`
* Importalias `@/*`

Gebruik bestaande projecttechnologie. Voeg alleen dependencies toe wanneer die aantoonbaar nodig zijn.

## 3. Harde architectuurregels

* Geen database.
* Geen CMS.
* Geen adminomgeving.
* Geen runtime schrijfacties naar de repository of het bestandssysteem.
* Niet-gevoelige instellingen staan in versiebeheerbare TypeScript-configuratiebestanden.
* Gevoelige gegevens staan uitsluitend in environmentvariabelen.
* Geen externe component library zonder expliciete opdracht.
* Geen externe placeholder-afbeeldingen.
* Geen onnodige abstrahering of toekomstfunctionaliteit.
* Geen brede refactors buiten het gevraagde werkpakket.
* Geen Git-commits tenzij de gebruiker dit expliciet vraagt.

## 4. Websiteonderdelen

De website krijgt:

* Home
* Bedrijven
* Portret
* Publicaties
* Werkwijze
* Over mij
* Contact

De homepage bevat drie primaire fotografische ingangen:

* Bedrijven
* Portret
* Publicaties

De vaste hoofdnavigatie toont op alle inhoudelijke pagina’s:

* Bedrijven;
* Portret;
* Publicaties;
* Werkwijze;
* Over mij.

Contact staat bewust niet in de hoofdnavigatie. Contact blijft bereikbaar via de homepage en de footer.

## 5. Configuratie

Algemene instellingen worden centraal beheerd, bij voorkeur onder:

```text
src/config/
```

De configuratie bevat onder andere:

* naam van de fotograaf;
* contactgegevens;
* navigatie;
* socialmedia-links;
* kleuren;
* fontkeuzes;
* openbare contactformulierinstellingen.

Gebruik TypeScript-types en compile-time validatie.

Geheime gegevens zoals SMTP-wachtwoorden mogen nooit in configuratiebestanden, broncode of Git worden opgeslagen.

## 6. Responsive ontwerp

De website wordt mobile-first gebouwd.

Elke pagina en component moet bruikbaar zijn op:

* mobiel;
* tablet;
* laptop;
* brede desktopschermen.

Vaste regels:

* geen horizontale overflow;
* tekst blijft goed leesbaar;
* navigatie werkt met toetsenbord en touch;
* afbeeldingen behouden een bewuste compositie;
* foto’s mogen niet willekeurig worden afgesneden;
* grids passen zich logisch aan de schermbreedte aan;
* klikbare elementen zijn groot genoeg voor touchbediening;
* responsive gedrag wordt expliciet gecontroleerd.

Gebruik geen aparte mobiele website.

## 7. Visuele uitgangspunten

* Veel rust en witruimte.
* Beperkte kleurstelling.
* Grote en hoogwaardige fotografie.
* Terughoudende animaties.
* Geen automatische carrousels.
* Geen drukke grids of decoratieve effecten zonder functie.
* Geen overdreven marketingtaal.
* Geen visuele elementen die aandacht van de foto’s afleiden.

Gebruik centrale design tokens of CSS-variabelen voor:

* achtergrondkleuren;
* tekstkleuren;
* accentkleuren;
* maximale contentbreedtes;
* spacing;
* fonts.

Verspreid geen losse kleurcodes door componenten.

## 8. Fonts

Gebruik `next/font` voor lokale, geoptimaliseerde fontintegratie.

Fontkeuzes worden beheerd via een beperkte font registry. Gebruik geen willekeurige fontnamen of runtime fontuploads.

Voorkom:

* layout shifts;
* externe fontrequests vanuit de browser;
* verschillende los ingestelde fonts in componenten.

## 9. Next.js-regels

* Gebruik standaard Server Components.
* Gebruik alleen een Client Component wanneer browserinteractie dit vereist.
* Plaats `"use client"` zo laag mogelijk in de componentstructuur.
* Gebruik `next/image` voor websitefotografie.
* Gebruik `next/link` voor interne navigatie.
* Gebruik Next.js metadata voor SEO.
* Vermijd duplicatie van layout, header en footer.

Voorkom hydration-problemen:

* geen `Date.now()` of `Math.random()` tijdens rendering;
* geen server/client-branches in gerenderde markup;
* geen browserafhankelijke waarden tijdens SSR;
* geldige HTML-nesting;
* geen verschillende initiële server- en clientinhoud.

## 10. Afbeeldingen

* Gebruik lokale bestanden onder `public/`, tenzij later anders besloten.
* Gebruik betekenisvolle bestandsnamen.
* Stel correcte breedte, hoogte, `sizes` en alt-tekst in.
* Decoratieve afbeeldingen krijgen een lege alt-tekst.
* Portfoliofoto’s mogen niet onnodig zwaar worden geladen.
* Lazy loading wordt gebruikt waar logisch.
* Het belangrijkste beeld bovenaan een pagina mag prioriteit krijgen.
* Beeldverhoudingen en uitsnedes worden bewust per toepassing gekozen.

## 11. Toegankelijkheid

Minimale eisen:

* semantische HTML;
* correcte koppenstructuur;
* toetsenbordbediening;
* zichtbare focusstates;
* voldoende kleurcontrast;
* labels bij formulieren;
* duidelijke foutmeldingen;
* correcte alt-teksten;
* ondersteuning voor `prefers-reduced-motion`;
* geen essentiële informatie uitsluitend via hover.

## 12. Contactformulier

Het contactformulier wordt later server-side verwerkt.

Vaste regels:

* geen opslag van berichten in een database;
* server-side validatie;
* client-side validatie alleen als gebruiksondersteuning;
* SMTP-gegevens uitsluitend via environmentvariabelen;
* honeypot tegen eenvoudige spam;
* rate limiting;
* geen gevoelige foutinformatie naar de browser;
* duidelijke succes- en foutmeldingen;
* privacyvriendelijke gegevensverwerking.

## 13. Codekwaliteit

* TypeScript strict houden.
* Vermijd `any`.
* Componenten hebben één duidelijke verantwoordelijkheid.
* Vermijd dubbele markup en dubbele logica.
* Houd componenten klein en leesbaar.
* Geef bestanden en functies betekenisvolle namen.
* Voeg alleen commentaar toe wanneer de reden niet uit de code blijkt.
* Verwijder geen bestaande functionaliteit zonder expliciete opdracht.

## 14. Werkwijze per werkpakket

Voor iedere opdracht:

1. Lees eerst deze `CLAUDE.md`.
2. Inspecteer relevante bestaande bestanden.
3. Benoem kort de voorgenomen wijzigingen.
4. Blijf strikt binnen de gevraagde scope.
5. Implementeer de kleinste complete oplossing.
6. Controleer responsive gedrag.
7. Voer linting en productiebuild uit.
8. Rapporteer wijzigingen en testresultaten.
9. Stop na afronding van het werkpakket.

Los geen losstaande problemen op zonder ze eerst te rapporteren.

## 15. Verplichte controles

Voer na ieder codewerkpakket minimaal uit:

```bash
npm run lint
npm run build
git status --short
```

Voer aanvullende tests uit wanneer het werkpakket die vereist.

Gebruik geen `npm audit fix --force` zonder expliciete toestemming.

## 16. Verplicht eindrapport

Rapporteer altijd:

1. Samenvatting van de implementatie.
2. Aangepaste en nieuwe bestanden.
3. Belangrijkste technische keuzes.
4. Responsive gedrag.
5. Uitkomst van linting.
6. Uitkomst van de productiebuild.
7. Eventuele tests.
8. Output van `git status --short`.
9. Bekende beperkingen of aandachtspunten.
10. Bevestiging dat geen Git-commit is gemaakt.
