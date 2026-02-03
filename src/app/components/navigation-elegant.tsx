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
    "Industries",
    "AI & Systems",
    "Principals",
    "Contact",
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="px-8 lg:px-16 py-6">
          <div className="max-w-[1800px] mx-auto flex items-center justify-between">
            {/* Logo with gold accent */}
            <button
              onClick={() => onNavigate("Overview")}
              className="group flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <span className="text-[10px] font-bold text-white">X</span>
              </div>
              <span className="text-[clamp(1rem,1.5vw,1.25rem)] tracking-[-0.01em] font-medium">
                XLN Advisors
              </span>
            </button>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-10">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => onNavigate(section)}
                  className={`text-[11px] uppercase tracking-[0.2em] transition-all duration-300 relative py-2
                    ${
                      activeSection === section
                        ? "text-secondary font-medium"
                        : "text-foreground/70 hover:text-secondary font-light"
                    }`}
                >
                  {section}
                  {activeSection === section && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-secondary to-transparent rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-[11px] uppercase tracking-[0.25em] text-foreground"
            >
              {mobileMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-[88px] left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border z-40 lg:hidden"
        >
          <div className="px-8 py-8 space-y-6">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => {
                  onNavigate(section);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left text-base uppercase tracking-[0.15em] transition-colors
                  ${
                    activeSection === section
                      ? "text-secondary font-medium"
                      : "text-foreground/70 hover:text-secondary font-light"
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