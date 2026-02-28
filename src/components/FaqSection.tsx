import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Wie läuft die Anfrage ab?",
    answer: "Du sendest eine Anfrage über unser Formular oder WhatsApp. Wir prüfen die Verfügbarkeit und melden uns schnell mit Preis & Bestätigung zurück.",
  },
  {
    question: "Wie hoch ist die Kaution?",
    answer: "Die Kaution beträgt 2.500€ und kann bar oder per EC-Karte hinterlegt werden. Eine Kreditkarte ist nicht erforderlich.",
  },
  {
    question: "Wie viele Freikilometer sind inklusive?",
    answer: "Bei den Sportwagen sind 150 km pro Tag inklusive, beim VW Grand California Camper 250 km. Zusätzliche Kilometer kosten 1,50€. Du kannst Zusatzkilometer vorab günstiger dazubuchen.",
  },
  {
    question: "Wie alt muss ich sein?",
    answer: "Das Mindestalter zum Mieten beträgt 21 Jahre. Ein gültiger Führerschein und Ausweis werden benötigt.",
  },
  {
    question: "Sind die Fahrzeuge versichert?",
    answer: "Ja, alle Fahrer und Fahrzeuge sind vollkasko versichert. Du bist rundum abgesichert.",
  },
  {
    question: "Was kosten die Fahrzeuge?",
    answer: "Unter der Woche (Mo–Do) 249€/Tag, am Wochenende (Fr–So) 329€/Tag. Unser Wochenend-Deal: Freitag bis Sonntag für 699€ inkl. 450 Freikilometer. Camper-Preise auf Anfrage.",
  },
  {
    question: "Wo findet die Übergabe statt?",
    answer: "In NRW – je nach Fahrzeug und Absprache, z.B. Köln, Düsseldorf, Leverkusen, Monheim oder Bonn.",
  },
  {
    question: "Kann ich stornieren?",
    answer: "Je nach Zeitpunkt ist eine kostenfreie Stornierung möglich. Wir klären das fair im Angebot.",
  },
];

const FaqSection = () => (
  <section id="faq" className="py-24 bg-card/30">
    <div className="container mx-auto px-4 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">FAQ</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
          Häufige Fragen
        </h2>
        <p className="text-muted-foreground">Kurz & klar – wenn was offen ist, schreib uns.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-xl border border-border bg-gradient-card px-6 data-[state=open]:shadow-card"
            >
              <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FaqSection;
