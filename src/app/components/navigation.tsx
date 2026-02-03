import { motion } from "motion/react";
import { useState, useEffect } from "react";

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    "Overview",
    "Advisory",
    "Capabilities",
    "Sectors",
    "AI & Systems",
    "Principals",
    "Contact",
  ];

  const handleMobileNavigate = (section: string) => {
    onNavigate(section);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b-4 border-foreground">
        <div className="px-8 lg:px-16 py-6">
          <div className="max-w-[1800px] mx-auto flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => onNavigate("Overview")}
              className="text-[clamp(1.25rem,2vw,1.5rem)] tracking-[-0.02em] font-black uppercase transform hover:-skew-x-6 transition-transform"
            >
              XLN
            </button>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-12">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => onNavigate(section)}
                  className={`text-[11px] uppercase tracking-[0.25em] transition-all duration-300 font-bold relative
                    ${
                      activeSection === section
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                >
                  {section}
                  {activeSection === section && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-2 left-0 right-0 h-1 bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-[11px] uppercase tracking-[0.3em] font-bold"
            >
              {mobileMenuOpen ? "CLOSE" : "MENU"}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-[73px] left-0 right-0 bg-background border-b-4 border-foreground z-40 lg:hidden"
        >
          <div className="px-8 py-8 space-y-6">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => {
                  onNavigate(section);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left text-lg uppercase tracking-[0.2em] transition-colors font-bold
                  ${
                    activeSection === section
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
              >
                {section}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}