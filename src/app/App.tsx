import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation-elegant";
import { HeroSection } from "./components/hero-section-elegant";
import { AdvisorySection } from "./components/advisory-section";
import { CapabilitiesSection } from "./components/capabilities-section";
import { SectorsSection } from "./components/sectors-section";
import { AISystemsSection } from "./components/ai-systems-section";
import { PrincipalsSection } from "./components/principals-section-elegant";
import { ContactSection } from "./components/contact-section-elegant";
import { ScrollIndicator } from "./components/scroll-indicator";
import { SectionConnector } from "./components/section-connector";
import { ScrollProgress } from "./components/scroll-progress";
import { ComingSoon } from "./components/coming-soon";

export default function App() {
  const [activeSection, setActiveSection] = useState("Overview");
  const [showComingSoon, setShowComingSoon] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "Overview",
        "Advisory",
        "Capabilities",
        "Industries",
        "AI & Systems",
        "Principals",
        "Contact",
      ];

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (showComingSoon) {
    return <ComingSoon onBack={() => setShowComingSoon(false)} />;
  }

  return (
    <div className="bg-background text-foreground relative">
      {/* Enhanced gradient overlay with more visible colors - adjusted for dark mode */}
      <div className="fixed inset-0 opacity-[0.12] pointer-events-none" 
        style={{
          background: 'radial-gradient(circle at 20% 50%, #e6c35c 0%, transparent 40%), radial-gradient(circle at 80% 80%, #4a7ba7 0%, transparent 40%), radial-gradient(circle at 50% 10%, #e0bfb8 0%, transparent 30%)'
        }} 
      />
      
      <div className="relative z-10">
        <ScrollProgress />
        <ScrollIndicator />
        <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
        
        <main>
          <HeroSection />
          <SectionConnector variant="gold" />
          <AdvisorySection />
          <SectionConnector variant="navy" />
          <CapabilitiesSection />
          <SectionConnector variant="rose" />
          <SectorsSection />
          <SectionConnector variant="gold" />
          <AISystemsSection />
          <SectionConnector variant="navy" />
          <PrincipalsSection />
          <SectionConnector variant="rose" />
          <ContactSection />
        </main>

        {/* Refined Footer */}
        <footer className="border-t border-border px-8 lg:px-16 py-12 lg:py-16 bg-accent text-accent-foreground">
          <div className="max-w-[1800px] mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
              <div className="space-y-4">
                <h3 className="text-[clamp(1.5rem,2vw,2rem)] tracking-[-0.02em] font-light">
                  XLN Advisors
                </h3>
                <p className="text-[11px] uppercase tracking-[0.3em] opacity-70">
                  Founder-Led Advisory
                </p>
              </div>
              
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 text-[11px] uppercase tracking-[0.25em] opacity-70">
                <p>© {new Date().getFullYear()} XLN Advisors</p>
                <p>•</p>
                <p>Founder-Led Advisory</p>
                <p>•</p>
                <button onClick={() => setShowComingSoon(true)} className="hover:text-primary transition-colors">
                  Coming Soon Page
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}