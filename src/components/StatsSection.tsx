import { motion } from "framer-motion";

const stats = [
  { value: "Premium", label: "Fahrzeuge" },
  { value: "NRW", label: "Standorte" },
  { value: "24/7", label: "Erreichbarkeit" },
  { value: "Schnell", label: "Rückmeldung" },
];

const StatsSection = () => (
  <section className="py-16 border-y border-border bg-card/50">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <p className="text-2xl sm:text-3xl font-display font-bold text-gradient mb-1">
              {stat.value}
            </p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
