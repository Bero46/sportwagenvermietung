import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo-zb-rental.png";

const Footer = () => (
  <footer className="border-t border-border bg-card/50 pt-16 pb-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <img src={logo} alt="ZB-Rental Logo" className="h-10 w-auto mb-4" />
          <p className="text-sm text-muted-foreground mb-4">
            Premium Fahrzeugvermietung in NRW. Sportwagen & Camper – unkompliziert und professionell.
          </p>
          <p className="text-xs text-muted-foreground">
            CarWorlds GmbH<br />
            Rheinpromenade 11<br />
            40789 Monheim am Rhein
          </p>
        </div>

        <div>
          <h3 className="text-sm font-display font-semibold uppercase tracking-widest text-foreground mb-4">
            Kontakt
          </h3>
          <ul className="space-y-3">
            <li>
              <a href="tel:+491749994777" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="h-4 w-4 text-primary" /> +49 174 999 4777
              </a>
            </li>
            <li>
              <a href="mailto:Info@ZB-Rental.de" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-4 w-4 text-primary" /> Info@ZB-Rental.de
              </a>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              Monheim am Rhein, NRW
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-display font-semibold uppercase tracking-widest text-foreground mb-4">
            Rechtliches
          </h3>
          <ul className="space-y-3">
            <li><Link to="/impressum" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Impressum</Link></li>
            <li><Link to="/datenschutz" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Datenschutzerklärung</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} CarWorlds GmbH. Alle Rechte vorbehalten.
        </p>
        <div className="flex gap-6">
          <Link to="/impressum" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Impressum</Link>
          <Link to="/datenschutz" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Datenschutz</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
