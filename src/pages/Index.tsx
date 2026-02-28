import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FleetSection from "@/components/FleetSection";
import ProcessSection from "@/components/ProcessSection";
import ContactForm from "@/components/ContactForm";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <FleetSection />
        <ProcessSection />
        <ContactForm />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
};

export default Index;
