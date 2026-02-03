import { motion } from "motion/react";

export function SectorsSection() {
  return (
    <section id="Industries" className="px-8 lg:px-16 py-20 lg:py-32">
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
              <span className="text-primary">Industries</span>
            </h2>
          </div>

          {/* Industry Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Real Estate",
                description: "We work with investors, operators, and developers across the lifecycle—from acquisition and development to operations and portfolio strategy.",
                detail: "Our experience includes investment analysis, operational improvement, and technology-enabled workflows."
              },
              {
                title: "Finance",
                description: "We support financial organizations on strategy, performance, and modernization.",
                detail: "This includes capital strategy, analytics, risk-aware decision-making, and improving internal processes through better systems and tools."
              },
              {
                title: "Technology",
                description: "We advise technology-driven organizations on product strategy, growth, and scale.",
                detail: "Our work often sits at the intersection of business goals, technical constraints, and organizational design."
              }
            ].map((sector, index) => (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group space-y-3 lg:space-y-6 p-8 rounded-2xl border border-primary/20 hover:border-primary/40 bg-gradient-to-br from-card to-primary/5 transition-all duration-300"
              >
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full group-hover:w-20 transition-all duration-500"></div>
                <h3 className="text-[clamp(1.5rem,2.5vw,2rem)] leading-[1.2] tracking-[-0.02em] font-light">
                  {sector.title}
                </h3>
                <p className="text-[clamp(1rem,1.5vw,1.125rem)] leading-[1.6] tracking-[-0.01em] text-muted-foreground">
                  {sector.description}
                </p>
                <p className="text-[clamp(0.875rem,1.25vw,1rem)] leading-[1.6] tracking-[-0.01em] text-muted-foreground/80">
                  {sector.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}