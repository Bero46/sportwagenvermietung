import { motion } from "framer-motion";
import { ArrowRight, MapPin, Calendar, Car } from "lucide-react";
import heroImage from "@/assets/hero-car.jpg";

const HeroSection = () => {
  const locations = ["Köln", "Düsseldorf", "Leverkusen", "Dortmund", "Wuppertal", "Bonn", "Monheim"];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium Sportwagen mieten in NRW"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium tracking-widest uppercase text-primary mb-6"
          >
            Premium Fahrzeugvermietung • NRW
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold leading-tight mb-6"
          >
            Sportwagen mieten.{" "}
            <span className="text-gradient">Premium erleben.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Exklusive Fahrzeuge, klare Kommunikation, schnelle Rückmeldung.
            Du stöberst – wir machen den Rest.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a
              href="#fahrzeuge"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:opacity-90 transition-opacity shadow-glow"
            >
              Fahrzeuge entdecken
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary/50 px-8 py-4 text-base font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              Schnellanfrage
            </a>
          </motion.div>
        </div>

        {/* Booking Widget */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass rounded-2xl p-6 shadow-card">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50">
                <Car className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Fahrzeug</p>
                  <p className="text-sm font-medium text-foreground">Sportwagen oder Camper</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50">
                <Calendar className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Zeitraum</p>
                  <p className="text-sm font-medium text-foreground">Flexibel buchbar</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Standort</p>
                  <p className="text-sm font-medium text-foreground">NRW (Köln, Düsseldorf, …)</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {locations.map((loc) => (
                <span
                  key={loc}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/30 px-3 py-1.5 text-xs font-medium text-secondary-foreground hover:bg-secondary/60 transition-colors cursor-pointer"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {loc}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
