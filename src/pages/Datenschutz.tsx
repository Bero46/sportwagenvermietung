import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Datenschutz = () => (
  <>
    <Navbar />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-display font-bold mb-8">Datenschutzerklärung</h1>
        
        <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-lg font-display font-semibold text-foreground mb-2">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-base font-semibold text-foreground mb-1">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
              wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-display font-semibold text-foreground mb-2">2. Verantwortliche Stelle</h2>
            <p>
              CarWorlds GmbH<br />
              Rheinpromenade 11<br />
              40789 Monheim am Rhein<br />
              E-Mail: Info@ZB-Rental.de<br />
              Telefon: +49 174 999 4777
            </p>
          </section>

          <section>
            <h2 className="text-lg font-display font-semibold text-foreground mb-2">3. Datenerfassung auf dieser Website</h2>
            <h3 className="text-base font-semibold text-foreground mb-1">Cookies</h3>
            <p>
              Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. 
              Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. 
              Sie haben jederzeit die Möglichkeit, Cookies über Ihre Browsereinstellungen zu deaktivieren.
            </p>
            <h3 className="text-base font-semibold text-foreground mb-1 mt-4">Server-Log-Dateien</h3>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
              die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und -version, verwendetes Betriebssystem, 
              Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-display font-semibold text-foreground mb-2">4. Anfrage per E-Mail oder Telefon</h2>
            <p>
              Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden 
              personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. 
              Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-display font-semibold text-foreground mb-2">5. Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger 
              und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen 
              zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-display font-semibold text-foreground mb-2">6. SSL- bzw. TLS-Verschlüsselung</h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung.
            </p>
          </section>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default Datenschutz;
