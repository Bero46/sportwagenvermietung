import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import carBmw from "@/assets/car-bmw.jpg";
import carMercedes from "@/assets/car-mercedes.jpg";
import carAudi from "@/assets/car-audi.jpg";
import carCamper from "@/assets/car-camper.jpg";

const vehicles = [
  {
    name: "BMW M4 Competition Cabrio",
    price: "ab 249€/Tag",
    image: carBmw,
    tags: ["Sport", "Automatik", "Premium"],
    description: "Premium Performance mit maximalem Komfort. Ideal für Wochenenden, Events oder Business-Fahrten.",
  },
  {
    name: "Mercedes-AMG C63s Cabrio",
    price: "ab 229€/Tag",
    image: carMercedes,
    tags: ["Sport", "Automatik", "Premium"],
    description: "AMG Feeling pur. Sound, Punch und Cabrio-Feeling – unkompliziert per Anfrage.",
  },
  {
    name: "Audi RS3",
    price: "ab 199€/Tag",
    image: carAudi,
    tags: ["Sport", "Quattro", "Premium"],
    description: "Kompakt, brutal schnell, Allrad. Anfrage senden und wir melden uns mit Bestätigung.",
  },
  {
    name: "VW Crafter (Camper)",
    price: "auf Anfrage",
    image: carCamper,
    tags: ["Camper", "Vollausstattung", "Roadtrip"],
    description: "Vollausgestatteter Crafter für Roadtrips. Flexible Buchung ab 1 Nacht.",
  },
];

const FleetSection = () => {
  return (
    <section id="fahrzeuge" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
            Unsere Flotte
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            Entdecke unsere <span className="text-gradient">Top-Fahrzeuge</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Handverlesene Premium-Fahrzeuge für jeden Anlass. Sportwagen und Camper – direkt in NRW.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-gradient-card shadow-card hover:shadow-glow transition-shadow duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4">
                  <span className="rounded-full bg-primary px-4 py-1.5 text-sm font-bold text-primary-foreground shadow-glow">
                    {vehicle.price}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  {vehicle.name}
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {vehicle.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4">{vehicle.description}</p>
                <a
                  href="#kontakt"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                >
                  Anfrage senden
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
