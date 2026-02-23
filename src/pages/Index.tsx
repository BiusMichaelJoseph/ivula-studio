import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import LogoTicker from "@/components/LogoTicker";
import StatsSection from "@/components/StatsSection";
import PortfolioSection from "@/components/PortfolioSection";
import ProcessSection from "@/components/ProcessSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,hsla(265,90%,65%,0.12),transparent_40%),radial-gradient(circle_at_85%_30%,hsla(280,85%,70%,0.08),transparent_35%)]" />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <LogoTicker />
        <StatsSection />
        <PortfolioSection />
        <ProcessSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
