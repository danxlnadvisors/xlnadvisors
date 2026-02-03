import { motion } from "motion/react";

export function AISystemsSection() {
  return (
    <section id="AI & Systems" className="px-8 lg:px-16 py-20 lg:py-32">
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
              AI & <span className="text-primary">Intelligent Systems</span>
            </h2>
            <p className="text-[clamp(1.125rem,2vw,1.5rem)] leading-[1.5] tracking-[-0.01em] max-w-3xl mb-8">
              AI is most valuable when it's quietly useful.
            </p>
            <p className="text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.6] text-muted-foreground max-w-3xl tracking-[-0.01em]">
              We help organizations move past experimentation and toward practical applications that improve workflows, decision-making, and efficiency—without losing human judgment.
            </p>
          </div>

          {/* What We Help With */}
          <div>
            <h3 className="text-[clamp(1.5rem,3vw,2rem)] leading-[1.2] tracking-[-0.02em] font-light mb-12">
              What We Help With
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">
              {[
                "AI strategy and readiness",
                "Identifying high-impact use cases",
                "Automating internal workflows",
                "Designing internal tools and assistants",
                "Aligning data, systems, and teams"
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                  <p className="text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.6] tracking-[-0.01em]">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Our Approach */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl p-12 rounded-2xl border border-primary/30 bg-gradient-to-br from-card to-primary/5"
          >
            <h3 className="text-[clamp(1.5rem,3vw,2rem)] leading-[1.2] tracking-[-0.02em] font-light mb-8">
              Our Approach
            </h3>
            <div className="space-y-6">
              <p className="text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.6] tracking-[-0.01em] text-muted-foreground">
                We focus on:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Real business problems",
                  "Measurable impact",
                  "Thoughtful implementation",
                  "Responsible use"
                ].map((principle, index) => (
                  <motion.div
                    key={principle}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-primary/10 border border-primary/20"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <p className="text-[clamp(0.875rem,1.25vw,1rem)] leading-[1.5] tracking-[-0.01em]">
                      {principle}
                    </p>
                  </motion.div>
                ))}
              </div>
              <p className="text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.6] tracking-[-0.01em] text-muted-foreground pt-6 border-t border-border/30">
                AI should support your people—not replace them or complicate their work.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}