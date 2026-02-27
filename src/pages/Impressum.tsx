import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Impressum = () => (
  <>
    <Navbar />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-display font-bold mb-8">Impressum</h1>
        
        <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-lg font-display font-semibold text-foreground mb-2">Angaben gemäß § 5 TMG</h2>
            <p>
              CarWorlds GmbH<br />
              Rheinpromenade 11<br />
              40789 Monheim am Rhein
            </p>
          </section>

          <section>
            <h2 className="text-lg font-display font-semibold text-foreground mb-2">Kontakt</h2>
            <p>
              Telefon: +49 174 999 4777<br />
              E-Mail: Info@ZB-Rental.de
            </p>
          </section>

          <section>
            <h2 className="text-lg font-display font-semibold text-foreground mb-2">Handelsregister</h2>
            <p>
              Registergericht: Amtsgericht Düsseldorf<br />
              (Registernummer bitte ergänzen)
            </p>
          </section>

          <section>
            <h2 className="text-lg font-display font-semibold text-foreground mb-2">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
              (Bitte ergänzen)
            </p>
          </section>

          <section>
            <h2 className="text-lg font-display font-semibold text-foreground mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              CarWorlds GmbH<br />
              Rheinpromenade 11<br />
              40789 Monheim am Rhein
            </p>
          </section>

          <section>
            <h2 className="text-lg font-display font-semibold text-foreground mb-2">Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                https://ec.europa.eu/consumers/odr/
              </a>
              . Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-display font-semibold text-foreground mb-2">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
              Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
            </p>
          </section>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default Impressum;
