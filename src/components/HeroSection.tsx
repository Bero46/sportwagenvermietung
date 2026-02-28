import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Shield, Clock, MapPin } from "lucide-react";
import bmwM4 from "@/assets/bmw-m4-cabrio-1.jpg";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 600], [1, 1.15]);

  const badges = [
    { icon: Shield, text: "Vollkasko versichert" },
    { icon: Clock, text: "Schnelle Rückmeldung" },
    { icon: MapPin, text: "Standorte in NRW" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <img
          src={bmwM4}
          alt="BMW M4 Competition Cabrio mieten – ZB-Rental NRW"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-background/40" />
      </motion.div>

      <motion.div
        className="relative z-10 container mx-auto px-4 pt-24 pb-16"
        style={{ opacity }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            {badges.map((badge, i) => (
              <motion.span
                key={badge.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/40 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-secondary-foreground"
              >
                <badge.icon className="h-3 w-3 text-primary" />
                {badge.text}
              </motion.span>
            ))}
          </motion.div>

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
            BMW M4, Mercedes-AMG C63s, VW Grand California – handverlesene Fahrzeuge, 
            faire Preise, unkomplizierte Buchung.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <a
              href="#fahrzeuge"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:opacity-90 transition-opacity shadow-glow"
            >
              Fahrzeuge entdecken
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-secondary/50 backdrop-blur-sm px-8 py-4 text-base font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              Jetzt anfragen
            </a>
          </motion.div>

          {/* Key facts bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {[
              { value: "ab 249€", label: "pro Tag" },
              { value: "150 km", label: "Freikilometer/Tag" },
              { value: "21+", label: "Mindestalter" },
              { value: "Vollkasko", label: "inkl. Versicherung" },
            ].map((fact, i) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="glass rounded-xl p-4 text-center"
              >
                <p className="text-lg font-display font-bold text-gradient">{fact.value}</p>
                <p className="text-xs text-muted-foreground">{fact.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
