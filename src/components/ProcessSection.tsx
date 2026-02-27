import { motion } from "framer-motion";
import { Search, Send, CheckCircle, Car } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Fahrzeug wählen",
    description: "Angebote ansehen & Favorit auswählen.",
  },
  {
    icon: Send,
    title: "Anfrage senden",
    description: "In 1 Minute – ohne Stress.",
  },
  {
    icon: CheckCircle,
    title: "Bestätigung",
    description: "Wir melden uns schnell mit Verfügbarkeit & Preis.",
  },
  {
    icon: Car,
    title: "Abholen & fahren",
    description: "Startklar – genießen.",
  },
];

const ProcessSection = () => (
  <section id="prozess" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
          Prozess
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
          So funktioniert's
        </h2>
        <p className="text-muted-foreground">Einfach, schnell, unkompliziert.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative p-6 rounded-2xl bg-gradient-card border border-border text-center group hover:border-primary/30 transition-colors"
          >
            <div className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
              {i + 1}
            </div>
            <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-secondary mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
              <step.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-display font-semibold text-foreground mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-muted-foreground">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
