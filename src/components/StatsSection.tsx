import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 500, suffix: "+", label: "zufriedene Fahrten" },
  { value: 4, suffix: "", label: "Premium Fahrzeuge" },
  { value: 7, suffix: "+", label: "Standorte in NRW" },
  { value: 100, suffix: "%", label: "Vollkasko versichert" },
];

const AnimatedNumber = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-3xl sm:text-4xl font-display font-bold text-gradient">
      {count}{suffix}
    </span>
  );
};

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
            <AnimatedNumber target={stat.value} suffix={stat.suffix} />
            <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
