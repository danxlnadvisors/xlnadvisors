import { motion } from "motion/react";

export function CapabilitiesSection() {
  const scrollToAI = () => {
    const element = document.getElementById("AI & Systems");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="Capabilities" className="px-8 lg:px-16 py-20 lg:py-32">
      <div className="max-w-[1400px] w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12 lg:space-y-32"
        >
          <div>
            <h2 className="text-[clamp(2rem,5vw,5rem)] leading-[1] tracking-[-0.04em] font-light mb-6 lg:mb-16">
              <span className="text-primary">Capabilities</span>
            </h2>
            <p className="text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.6] text-muted-foreground max-w-3xl tracking-[-0.01em]">
              Our capabilities span strategy, finance, operations, technology, and AI. We combine analytical rigor with practical experience.
            </p>
          </div>

          {/* What We Bring */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">
            {[
              "Business & corporate strategy",
              "Financial analysis and modeling",
              "Operating model and process design",
              "Product and technology strategy",
              "Go-to-market planning",
              "Data-informed decision making",
              { text: "AI & intelligent systems", clickable: true }
            ].map((capability, index) => {
              const isClickable = typeof capability === 'object' && capability.clickable;
              const text = typeof capability === 'string' ? capability : capability.text;
              
              return (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-start gap-4 group ${isClickable ? 'cursor-pointer' : ''}`}
                  onClick={isClickable ? scrollToAI : undefined}
                >
                  <div className={`w-2 h-2 rounded-full ${isClickable ? 'bg-secondary' : 'bg-primary'} mt-2 group-hover:scale-150 transition-transform duration-300`}></div>
                  <p className={`text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.6] tracking-[-0.01em] ${isClickable ? 'text-secondary group-hover:text-primary transition-colors duration-300' : ''}`}>
                    {text}
                    {isClickable && (
                      <span className="inline-block ml-2 text-xs opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                        →
                      </span>
                    )}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* How We Work */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl p-12 rounded-2xl border border-primary/30 bg-gradient-to-br from-card to-primary/5"
          >
            <h3 className="text-[clamp(1.5rem,3vw,2rem)] leading-[1.2] tracking-[-0.02em] font-light mb-6">
              How We Work
            </h3>
            <p className="text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.6] tracking-[-0.01em] text-muted-foreground mb-4">
              We adapt our tools to the problem—not the other way around.
            </p>
            <p className="text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.6] tracking-[-0.01em] text-muted-foreground">
              Each engagement is designed around your goals, constraints, and operating reality.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}