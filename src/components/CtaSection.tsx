import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CtaSection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center glass rounded-3xl p-12 shadow-card"
      >
        <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
          Bereit für deine <span className="text-gradient">Anfrage?</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Sag uns kurz wann & welches Fahrzeug – wir melden uns schnell zurück.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:opacity-90 transition-opacity shadow-glow"
          >
            Jetzt Anfrage stellen
            <ArrowRight className="h-5 w-5" />
          </a>
          <a
            href="#fahrzeuge"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary/50 px-8 py-4 text-base font-semibold text-foreground hover:bg-secondary transition-colors"
          >
            Fahrzeuge ansehen
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CtaSection;
