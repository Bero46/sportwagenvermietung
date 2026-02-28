import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Fuel, Gauge, Users, X, Calendar, Shield, Route } from "lucide-react";

import bmwM4Cabrio1 from "@/assets/bmw-m4-cabrio-1.jpg";
import bmwM4Cabrio3 from "@/assets/bmw-m4-cabrio-3.jpg";
import mercedesC63_1 from "@/assets/mercedes-c63-1.jpg";
import mercedesC63_2 from "@/assets/mercedes-c63-2.jpg";
import bmwM4CoupeGelb from "@/assets/bmw-m4-coupe-gelb.jpg";
import vwCrafter1 from "@/assets/vw-crafter-1.jpg";
import vwCrafter2 from "@/assets/vw-crafter-2.jpg";
import vwCrafter3 from "@/assets/vw-crafter-3.jpg";

const vehicles = [
  {
    name: "BMW M4 Competition xDrive Cabrio",
    subtitle: "Facelift • Matt Schwarz • 530 PS • Allrad",
    priceDay: "249€",
    priceWeekend: "329€",
    weekendDeal: "699€ Fr–So (450 km frei)",
    images: [bmwM4Cabrio1, bmwM4Cabrio3],
    tags: ["530 PS", "Allrad", "Cabrio", "Automatik"],
    specs: [
      { icon: Gauge, value: "530 PS" },
      { icon: Fuel, value: "Automatik" },
      { icon: Users, value: "4 Sitze" },
    ],
    freeKm: "150 km/Tag",
    deposit: "2.500€",
  },
  {
    name: "Mercedes-AMG C63s Cabrio",
    subtitle: "Weiß • V8 Biturbo • 510 PS",
    priceDay: "249€",
    priceWeekend: "329€",
    weekendDeal: "699€ Fr–So (450 km frei)",
    images: [mercedesC63_1, mercedesC63_2],
    tags: ["510 PS", "V8", "Cabrio", "AMG"],
    specs: [
      { icon: Gauge, value: "510 PS" },
      { icon: Fuel, value: "Automatik" },
      { icon: Users, value: "4 Sitze" },
    ],
    freeKm: "150 km/Tag",
    deposit: "2.500€",
  },
  {
    name: "BMW M4 Competition Coupé",
    subtitle: "São Paulo Gelb • 510 PS • Heckantrieb",
    priceDay: "249€",
    priceWeekend: "329€",
    weekendDeal: "699€ Fr–So (450 km frei)",
    images: [bmwM4CoupeGelb],
    tags: ["510 PS", "Coupé", "RWD", "Premium"],
    specs: [
      { icon: Gauge, value: "510 PS" },
      { icon: Fuel, value: "Automatik" },
      { icon: Users, value: "4 Sitze" },
    ],
    freeKm: "150 km/Tag",
    deposit: "2.500€",
  },
  {
    name: "VW Grand California (Camper)",
    subtitle: "Vollausstattung • Küche • Bad • Markise",
    priceDay: "auf Anfrage",
    priceWeekend: "",
    weekendDeal: "",
    images: [vwCrafter1, vwCrafter2, vwCrafter3],
    tags: ["Camper", "Vollausstattung", "Roadtrip", "Küche & Bad"],
    specs: [
      { icon: Fuel, value: "Automatik" },
      { icon: Users, value: "2+ Schlafplätze" },
      { icon: Route, value: "250 km/Tag frei" },
    ],
    freeKm: "250 km/Tag",
    deposit: "2.500€",
  },
];

const FleetSection = () => {
  const [lightbox, setLightbox] = useState<{ vehicleIdx: number; imgIdx: number } | null>(null);

  return (
    <>
      <section id="fahrzeuge" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
              Unsere Flotte
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
              Handverlesene <span className="text-gradient">Premium-Fahrzeuge</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Echte Fahrzeuge, echte Bilder. Alle Fahrer und Fahrzeuge sind vollkasko versichert.
            </p>
          </motion.div>

          {/* Info badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {[
              { icon: Shield, text: "Vollkasko inkl." },
              { icon: Calendar, text: "Mindestalter 21 Jahre" },
              { icon: Route, text: "Extra-km: 1,50€" },
            ].map((b) => (
              <span key={b.text} className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/30 px-4 py-2 text-xs font-medium text-secondary-foreground">
                <b.icon className="h-3.5 w-3.5 text-primary" />
                {b.text}
              </span>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {vehicles.map((vehicle, index) => (
              <VehicleCard
                key={vehicle.name}
                vehicle={vehicle}
                index={index}
                onImageClick={(imgIdx) => setLightbox({ vehicleIdx: index, imgIdx })}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox
            images={vehicles[lightbox.vehicleIdx].images}
            initialIdx={lightbox.imgIdx}
            vehicleName={vehicles[lightbox.vehicleIdx].name}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

interface VehicleCardProps {
  vehicle: typeof vehicles[0];
  index: number;
  onImageClick: (imgIdx: number) => void;
}

const VehicleCard = ({ vehicle, index, onImageClick }: VehicleCardProps) => {
  const [currentImg, setCurrentImg] = useState(0);
  const hasMultiple = vehicle.images.length > 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative rounded-2xl overflow-hidden bg-gradient-card shadow-card hover:shadow-glow transition-all duration-500"
    >
      {/* Image area */}
      <div className="relative aspect-[16/10] overflow-hidden cursor-pointer" onClick={() => onImageClick(currentImg)}>
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImg}
            src={vehicle.images[currentImg]}
            alt={`${vehicle.name} – Bild ${currentImg + 1}`}
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            loading="lazy"
          />
        </AnimatePresence>

        {/* Image nav */}
        {hasMultiple && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); setCurrentImg((p) => (p - 1 + vehicle.images.length) % vehicle.images.length); }}
              className="absolute left-3 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="h-4 w-4 text-foreground" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setCurrentImg((p) => (p + 1) % vehicle.images.length); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="h-4 w-4 text-foreground" />
            </button>
            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {vehicle.images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setCurrentImg(i); }}
                  className={`h-1.5 rounded-full transition-all ${i === currentImg ? "w-6 bg-primary" : "w-1.5 bg-foreground/40"}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Click hint */}
        <div className="absolute top-3 left-3 rounded-full glass px-3 py-1 text-[10px] font-medium text-secondary-foreground opacity-0 group-hover:opacity-100 transition-opacity">
          Klicken für Vollbild
        </div>

        {/* Price badge */}
        <div className="absolute top-3 right-3">
          <span className="rounded-full bg-primary px-4 py-1.5 text-sm font-bold text-primary-foreground shadow-glow">
            ab {vehicle.priceDay}/Tag
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-display font-bold text-foreground mb-1">
          {vehicle.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3">{vehicle.subtitle}</p>

        {/* Specs row */}
        <div className="flex gap-4 mb-4">
          {vehicle.specs.map((spec) => (
            <div key={spec.value} className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <spec.icon className="h-3.5 w-3.5 text-primary" />
              {spec.value}
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {vehicle.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Price details */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground mb-4 border-t border-border pt-4">
          {vehicle.priceWeekend && (
            <span>Wochenende: <strong className="text-foreground">{vehicle.priceWeekend}/Tag</strong></span>
          )}
          {vehicle.weekendDeal && (
            <span className="text-primary font-semibold">{vehicle.weekendDeal}</span>
          )}
          <span>Kaution: {vehicle.deposit}</span>
          <span>Frei-km: {vehicle.freeKm}</span>
        </div>

        <a
          href="#kontakt"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
        >
          Anfrage senden
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
};

interface LightboxProps {
  images: string[];
  initialIdx: number;
  vehicleName: string;
  onClose: () => void;
}

const Lightbox = ({ images, initialIdx, vehicleName, onClose }: LightboxProps) => {
  const [idx, setIdx] = useState(initialIdx);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 h-10 w-10 rounded-full glass flex items-center justify-center z-10"
      >
        <X className="h-5 w-5 text-foreground" />
      </button>

      <div className="relative w-full max-w-5xl mx-4" onClick={(e) => e.stopPropagation()}>
        <motion.img
          key={idx}
          src={images[idx]}
          alt={`${vehicleName} – Vollbild ${idx + 1}`}
          className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        />

        {images.length > 1 && (
          <>
            <button
              onClick={() => setIdx((p) => (p - 1 + images.length) % images.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full glass flex items-center justify-center"
            >
              <ChevronLeft className="h-6 w-6 text-foreground" />
            </button>
            <button
              onClick={() => setIdx((p) => (p + 1) % images.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full glass flex items-center justify-center"
            >
              <ChevronRight className="h-6 w-6 text-foreground" />
            </button>
          </>
        )}

        <p className="text-center text-sm text-muted-foreground mt-4">
          {vehicleName} • Bild {idx + 1} von {images.length}
        </p>
      </div>
    </motion.div>
  );
};

export default FleetSection;
