import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { HeroSection } from "./components/hero-section";
import { AdvisorySection } from "./components/advisory-section";
import { CapabilitiesSection } from "./components/capabilities-section";
import { SectorsSection } from "./components/sectors-section";
import { AISystemsSection } from "./components/ai-systems-section";
import { PrincipalsSection } from "./components/principals-section";
import { ContactSection } from "./components/contact-section";
import { ComingSoon } from "./components/coming-soon";

export default function App() {
  const [activeSection, setActiveSection] = useState("Overview");
  const [showComingSoon, setShowComingSoon] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "Overview",
        "Advisory",
        "Capabilities",
        "Sectors",
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
      {/* Bold halftone pattern background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
        backgroundSize: '20px 20px'
      }} />
      
      <div className="relative z-10">
        <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
        
        <main>
          <HeroSection />
          <AdvisorySection />
          <CapabilitiesSection />
          <SectorsSection />
          <AISystemsSection />
          <PrincipalsSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <footer className="border-t-4 border-foreground px-8 lg:px-16 py-12 bg-foreground text-background">
          <div className="max-w-[1800px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">
            <p className="text-[11px] uppercase tracking-[0.3em] font-bold">
              © {new Date().getFullYear()} XLN ADVISORS
            </p>
            <div className="flex items-center gap-8">
              <p className="text-[11px] uppercase tracking-[0.3em] font-bold">
                FOUNDER-LED ADVISORY
              </p>
              <button 
                onClick={() => setShowComingSoon(true)} 
                className="text-[11px] uppercase tracking-[0.3em] font-bold hover:opacity-70 transition-opacity"
              >
                COMING SOON PAGE
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}