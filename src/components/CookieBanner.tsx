import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Cookie } from "lucide-react";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="glass rounded-2xl p-6 shadow-card border border-border">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Cookie className="h-6 w-6 text-primary flex-shrink-0 mt-1 sm:mt-0" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground mb-1">
                    Wir nutzen Cookies
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Diese Website verwendet Cookies, um Ihnen das bestmögliche Erlebnis zu bieten.
                    Mehr erfahren Sie in unserer{" "}
                    <Link to="/datenschutz" className="text-primary hover:underline">
                      Datenschutzerklärung
                    </Link>
                    .
                  </p>
                </div>
                <div className="flex gap-3 w-full sm:w-auto">
                  <button
                    onClick={decline}
                    className="flex-1 sm:flex-none rounded-lg border border-border bg-secondary/50 px-5 py-2.5 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
                  >
                    Ablehnen
                  </button>
                  <button
                    onClick={accept}
                    className="flex-1 sm:flex-none rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
                  >
                    Akzeptieren
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
