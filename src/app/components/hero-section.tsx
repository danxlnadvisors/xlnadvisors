import { motion } from "motion/react";

export function HeroSection() {
  return (
    <section id="Overview" className="min-h-screen flex items-center justify-center px-8 lg:px-16 pt-32">
      <div className="max-w-[1400px] w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-16"
        >
          {/* Primary Headline */}
          <div className="space-y-6">
            <h1 className="text-[clamp(3rem,8vw,8rem)] leading-[0.9] tracking-[-0.04em] font-black uppercase">
              <span className="text-primary inline-block transform -skew-x-6">Strategic</span>{" "}
              <span className="text-secondary inline-block transform skew-x-6">Advisory</span>
              <br />
              for <span className="text-accent">Complex</span>
              <br />
              Organizations
            </h1>
            <p className="text-[clamp(1rem,2vw,1.5rem)] leading-[1.6] max-w-3xl tracking-[-0.01em] font-medium">
              We partner with founders and institutions navigating <span className="text-primary font-bold">CAPITAL</span>, <span className="text-accent font-bold">TECHNOLOGY</span>, and <span className="text-secondary font-bold">STRATEGY</span> at scale.
            </p>
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="group inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-bold border-4 border-foreground bg-primary text-primary-foreground px-8 py-4 hover:bg-accent hover:border-accent transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1"
          >
            Start a Conversation
            <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
          </motion.button>
        </motion.div>

        {/* The Firm */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-32 pt-16 border-t border-border"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-[11px] uppercase tracking-[0.3em] font-medium mb-8 text-muted-foreground">
                The Firm
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-[clamp(1.25rem,2.5vw,2rem)] leading-[1.4] tracking-[-0.02em]">
                We advise institutions, founders, and capital allocators who already operate at scale.
                Founder-only execution. Complex, high-stakes mandates. Discretion and precision.
              </p>
            </div>
          </div>
        </motion.div>

        {/* What We Advise On */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-32 grid grid-cols-1 lg:grid-cols-3 gap-16"
        >
          <div className="space-y-4">
            <h3 className="text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.2] tracking-[-0.03em]">
              Strategy & Capital Allocation
            </h3>
          </div>
          <div className="space-y-4">
            <h3 className="text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.2] tracking-[-0.03em]">
              Execution at Scale
            </h3>
          </div>
          <div className="space-y-4">
            <h3 className="text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.2] tracking-[-0.03em]">
              Intelligent Systems & Automation
            </h3>
          </div>
        </motion.div>

        {/* Sectors */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-32 pt-16 border-t border-border"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-[11px] uppercase tracking-[0.3em] font-medium mb-8 text-muted-foreground">
                Sectors of Focus
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <div className="text-[clamp(1.5rem,3vw,3rem)] leading-[1.2] tracking-[-0.03em]">
                Real Estate
              </div>
              <div className="text-[clamp(1.5rem,3vw,3rem)] leading-[1.2] tracking-[-0.03em]">
                Finance
              </div>
              <div className="text-[clamp(1.5rem,3vw,3rem)] leading-[1.2] tracking-[-0.03em]">
                Technology
              </div>
            </div>
          </div>
        </motion.div>

        {/* Closing Signal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-32 mb-32 text-center"
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            We work with a limited number of clients each year.
          </p>
        </motion.div>
      </div>
    </section>
  );
}