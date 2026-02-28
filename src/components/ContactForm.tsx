import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, Calendar as CalendarIcon, User, Car, MessageSquare } from "lucide-react";
import { format } from "date-fns";
import { de } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const vehicleOptions = [
  "BMW M4 Competition xDrive Cabrio",
  "Mercedes-AMG C63s Cabrio",
  "BMW M4 Competition Coupé",
  "VW Grand California (Camper)",
];

const ContactForm = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    vehicle: "",
    location: "",
    message: "",
  });
  const [dateFrom, setDateFrom] = useState<Date>();
  const [dateTo, setDateTo] = useState<Date>();
  const [sending, setSending] = useState(false);

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.vehicle || !dateFrom) {
      toast({ title: "Bitte fülle alle Pflichtfelder aus.", variant: "destructive" });
      return;
    }
    setSending(true);

    // Build WhatsApp / mailto message
    const fromStr = dateFrom ? format(dateFrom, "dd.MM.yyyy") : "";
    const toStr = dateTo ? format(dateTo, "dd.MM.yyyy") : "";
    const msg = `Neue Anfrage via ZB-Rental.de%0A%0AName: ${encodeURIComponent(form.name)}%0ATelefon: ${encodeURIComponent(form.phone)}%0AE-Mail: ${encodeURIComponent(form.email)}%0AFahrzeug: ${encodeURIComponent(form.vehicle)}%0AZeitraum: ${fromStr} – ${toStr}%0AStandort: ${encodeURIComponent(form.location)}%0ANachricht: ${encodeURIComponent(form.message)}`;

    window.open(`https://wa.me/491749994777?text=${msg}`, "_blank");

    toast({ title: "Anfrage wird gesendet!", description: "WhatsApp öffnet sich mit deiner Anfrage." });
    setSending(false);
  };

  return (
    <section id="kontakt" className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">Kontakt</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            Deine <span className="text-gradient">Anfrage</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Wähle dein Wunschfahrzeug, Zeitraum und sende uns eine Anfrage – wir melden uns schnell.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass rounded-2xl p-8 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField icon={User} label="Name *" value={form.name} onChange={(v) => update("name", v)} placeholder="Max Mustermann" />
              <InputField icon={Phone} label="Telefon *" value={form.phone} onChange={(v) => update("phone", v)} placeholder="+49 170 ..." type="tel" />
            </div>

            <InputField icon={Mail} label="E-Mail" value={form.email} onChange={(v) => update("email", v)} placeholder="max@email.de" type="email" />

            {/* Vehicle select */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                <Car className="h-4 w-4 text-primary" />
                Fahrzeug *
              </label>
              <select
                value={form.vehicle}
                onChange={(e) => update("vehicle", e.target.value)}
                className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none"
              >
                <option value="">Fahrzeug wählen…</option>
                {vehicleOptions.map((v) => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </select>
            </div>

            {/* Date pickers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <DatePicker label="Von *" date={dateFrom} onSelect={setDateFrom} />
              <DatePicker label="Bis" date={dateTo} onSelect={setDateTo} />
            </div>

            <InputField icon={MapPin} label="Abholort / Standort" value={form.location} onChange={(v) => update("location", v)} placeholder="z.B. Köln, Düsseldorf…" />

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                <MessageSquare className="h-4 w-4 text-primary" />
                Nachricht
              </label>
              <textarea
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                rows={3}
                placeholder="Zusätzliche Wünsche, Fragen…"
                className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:opacity-90 transition-opacity shadow-glow disabled:opacity-50"
            >
              <Send className="h-5 w-5" />
              Anfrage per WhatsApp senden
            </button>

            <p className="text-xs text-muted-foreground text-center">
              Oder per E-Mail: <a href="mailto:Info@ZB-Rental.de" className="text-primary hover:underline">Info@ZB-Rental.de</a>
            </p>
          </motion.form>

          {/* Sidebar info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass rounded-2xl p-6 space-y-4">
              <h3 className="text-lg font-display font-bold text-foreground">Gut zu wissen</h3>
              <InfoItem label="Kaution" value="2.500€ (bar oder EC)" />
              <InfoItem label="Freikilometer" value="150 km/Tag (Camper: 250 km)" />
              <InfoItem label="Extra-Kilometer" value="1,50€ pro km" />
              <InfoItem label="Zusatzkilometer" value="Vorab günstiger buchbar" />
              <InfoItem label="Kreditkarte" value="Nicht erforderlich" />
              <InfoItem label="Mindestalter" value="21 Jahre" />
              <InfoItem label="Versicherung" value="Vollkasko inkl." />
            </div>

            <div className="glass rounded-2xl p-6 space-y-4">
              <h3 className="text-lg font-display font-bold text-foreground">Preisübersicht</h3>
              <InfoItem label="Mo–Do" value="249€/Tag" />
              <InfoItem label="Fr–So" value="329€/Tag" />
              <InfoItem label="Wochenend-Deal" value="699€ Fr–So (450 km frei)" highlight />
              <InfoItem label="Camper" value="auf Anfrage" />
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-display font-bold text-foreground mb-3">Kontakt</h3>
              <a href="tel:+491749994777" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors mb-2">
                <Phone className="h-4 w-4 text-primary" /> +49 174 999 4777
              </a>
              <a href="mailto:Info@ZB-Rental.de" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-4 w-4 text-primary" /> Info@ZB-Rental.de
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const InputField = ({
  icon: Icon,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type?: string;
}) => (
  <div>
    <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
      <Icon className="h-4 w-4 text-primary" />
      {label}
    </label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
    />
  </div>
);

const DatePicker = ({
  label,
  date,
  onSelect,
}: {
  label: string;
  date: Date | undefined;
  onSelect: (d: Date | undefined) => void;
}) => (
  <div>
    <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
      <CalendarIcon className="h-4 w-4 text-primary" />
      {label}
    </label>
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={cn(
            "w-full text-left rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary/50",
            date ? "text-foreground" : "text-muted-foreground"
          )}
        >
          {date ? format(date, "dd. MMMM yyyy", { locale: de }) : "Datum wählen…"}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={onSelect}
          disabled={(d) => d < new Date()}
          initialFocus
          className={cn("p-3 pointer-events-auto")}
        />
      </PopoverContent>
    </Popover>
  </div>
);

const InfoItem = ({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) => (
  <div className="flex justify-between items-center text-sm">
    <span className="text-muted-foreground">{label}</span>
    <span className={highlight ? "font-bold text-primary" : "font-medium text-foreground"}>{value}</span>
  </div>
);

export default ContactForm;
