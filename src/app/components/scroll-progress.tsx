import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary to-secondary origin-left z-50"
        style={{ scaleX }}
      />
      
      {/* Side progress indicator */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
        {["Overview", "Advisory", "Capabilities", "Sectors", "AI & Systems", "Principals", "Contact"].map((section, index) => (
          <motion.button
            key={section}
            onClick={() => {
              const element = document.getElementById(section);
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative"
            whileHover={{ scale: 1.2 }}
          >
            <div className="w-2 h-2 rounded-full bg-border group-hover:bg-secondary transition-colors" />
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="absolute right-4 top-1/2 -translate-y-1/2 whitespace-nowrap bg-background/95 backdrop-blur-sm px-3 py-1 rounded-full border border-border pointer-events-none"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {section}
              </span>
            </motion.div>
          </motion.button>
        ))}
      </div>
    </>
  );
}
