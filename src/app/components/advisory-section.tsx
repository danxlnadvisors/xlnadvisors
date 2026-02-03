import { motion } from "motion/react";

export function AdvisorySection() {
  return (
    <section id="Advisory" className="px-8 lg:px-16 py-20 lg:py-32">
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
              What <span className="text-primary">We Do</span>
            </h2>
            <p className="text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.6] text-muted-foreground max-w-3xl tracking-[-0.01em]">
              We help organizations solve important problems—whether that's setting direction, improving performance, or adopting new technologies responsibly.
            </p>
            <p className="text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.6] text-muted-foreground max-w-3xl tracking-[-0.01em] mt-3 lg:mt-6">
              Our engagements are collaborative, focused, and tailored to context. We don't believe in one-size-fits-all frameworks.
            </p>
          </div>

          {/* Service Areas */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Strategic Advisory",
                description: "We support leadership teams on questions of direction and prioritization, including growth strategy, market positioning, and capital allocation.",
                detail: "Our role is to bring structure, outside perspective, and clear thinking to decisions with long-term consequences."
              },
              {
                title: "Execution & Transformation",
                description: "Good strategy only matters if it gets implemented.",
                detail: "We work alongside teams to redesign processes, improve operations, and translate plans into systems that actually function day to day."
              },
              {
                title: "Special Projects",
                description: "Some challenges don't fit neatly into categories.",
                detail: "We take on discrete, high-impact projects—new initiatives, transitions, restructurings, or moments when additional judgment and capacity are needed."
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group space-y-3 lg:space-y-6 p-8 rounded-2xl border border-primary/20 hover:border-primary/40 bg-gradient-to-br from-card to-primary/5 transition-all duration-300"
              >
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full group-hover:w-20 transition-all duration-500"></div>
                <h3 className="text-[clamp(1.5rem,2.5vw,2rem)] leading-[1.2] tracking-[-0.02em] font-light">
                  {service.title}
                </h3>
                <p className="text-[clamp(1rem,1.5vw,1.125rem)] leading-[1.6] tracking-[-0.01em] text-muted-foreground">
                  {service.description}
                </p>
                <p className="text-[clamp(0.875rem,1.25vw,1rem)] leading-[1.6] tracking-[-0.01em] text-muted-foreground/80">
                  {service.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}