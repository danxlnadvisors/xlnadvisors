import { motion } from "motion/react";
import { useState } from "react";

interface Founder {
  name: string;
  title: string;
  descriptor: string;
  focus: string[];
  narrative: string[];
  perspective: string;
  education?: string;
}

const founders: Founder[] = [
  {
    name: "Rafael Notario",
    title: "Managing Principal",
    descriptor: "Leads business development and real estate strategy across all client engagements.",
    focus: [
      "Real Estate Strategy",
      "Business Development",
      "Client Relations",
    ],
    narrative: [
      "Rafael is the firm's principal driver of business development and real estate strategy. His approach is characterized by deep understanding of property markets, capital flows, and the architecture of value creation in real estate ventures.",
      "With a background spanning commercial real estate, development, and capital markets, he brings unique insight into site selection, capital structuring, and the hidden leverage points in complex property transactions.",
      "He oversees all client mandates and ensures that every engagement reflects the firm's standard of precision, sophistication, and strategic impact, with particular emphasis on real estate opportunities and market positioning.",
    ],
    perspective:
      "The best real estate strategies are executed before they're obvious. Success comes from understanding property, capital, and timing—then acting decisively.",
  },
  {
    name: "Daniel Jones",
    title: "Principal",
    descriptor: "Focuses on capital strategy, AI applications, and institutional decision-making.",
    education: "MBA, Wharton",
    focus: [
      "Finance & Capital Strategy",
      "AI Applications",
      "Product Management",
    ],
    narrative: [
      "Daniel operates at the convergence of finance, artificial intelligence, and strategic product development. His expertise lies in structuring capital decisions and deploying AI as a tool for organizational leverage.",
      "A graduate of the Wharton School, he has advised institutional investors and founders on portfolio strategy, capital allocation, and the intelligent integration of emerging technologies. His work is defined by rigor and practical application.",
      "He leads engagements involving financial modeling, AI strategy for executives, and the design of decision-support systems that translate complexity into clarity.",
    ],
    perspective:
      "AI implementations succeed or fail based on strategic clarity, not technical sophistication. Capital and intelligence must be deployed with intentionality.",
  },
  {
    name: "Chris Bailey",
    title: "Principal",
    descriptor: "Focuses on operational resilience, organizational design, and executing high-stakes transformations.",
    focus: [
      "Operational Resilience",
      "Organizational Design",
      "Strategic Transformation",
    ],
    narrative: [
      "Chris specializes in the architecture of high-performance organizations. His work addresses the structural and cultural impediments to scale, ensuring that strategic ambition is matched by operational capability.",
      "With a background in restructuring and complex program delivery, he has guided leadership teams through pivotal transitions. His approach is rooted in the belief that structure dictates performance.",
      "He advises on organizational design, change management, and the execution of critical strategic initiatives.",
    ],
    perspective:
      "Complexity is inevitable; confusion is optional. True scale requires the discipline to design for simplicity.",
  },
];

export function PrincipalsSection() {
  const [selectedFounder, setSelectedFounder] = useState<Founder | null>(null);

  return (
    <section id="Principals" className="px-8 lg:px-16 py-20 lg:py-32">
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
              <span className="text-primary">Principals</span>
            </h2>
            <p className="text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.6] text-muted-foreground max-w-2xl tracking-[-0.01em]">
              The firm is led by three principals with complementary backgrounds across capital,
              technology, and operations.
            </p>
          </div>

          {/* Refined Founder Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {founders.map((founder, index) => (
              <motion.button
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedFounder(founder)}
                className="group text-left rounded-2xl border-2 border-primary/30 p-12 hover:border-primary hover:shadow-xl hover:shadow-primary/10 bg-gradient-to-br from-card to-primary/5 transition-all duration-500"
              >
                <div className="space-y-3 lg:space-y-6">
                  {/* Gold accent bar */}
                  <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-4 group-hover:w-20 transition-all duration-500"></div>
                  
                  <div>
                    <h3 className="text-[clamp(1.5rem,3vw,2rem)] leading-[1.2] tracking-[-0.02em] mb-2 font-light">
                      {founder.name}
                    </h3>
                    {founder.education && (
                      <p className="text-[11px] uppercase tracking-[0.25em] text-primary font-light">
                        {founder.education}
                      </p>
                    )}
                  </div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-light">
                    {founder.title}
                  </p>
                  <p className="text-[clamp(1rem,1.5vw,1.125rem)] leading-[1.6] tracking-[-0.01em] text-muted-foreground">
                    {founder.descriptor}
                  </p>
                  <div className="pt-4 flex items-center gap-2 text-primary group-hover:gap-4 transition-all duration-300">
                    <span className="text-[11px] uppercase tracking-[0.25em] font-light">View Full Bio</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Elegant Bio Modal */}
        {selectedFounder && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-lg z-50 flex items-center justify-center p-8"
            onClick={() => setSelectedFounder(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-card rounded-3xl border border-border/50 p-12 lg:p-16 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-12">
                {/* Header with gold accent */}
                <div className="flex items-start justify-between pb-8 border-b border-border/30">
                  <div className="space-y-4">
                    <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary rounded-full"></div>
                    <h3 className="text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-[-0.03em] font-light">
                      {selectedFounder.name}
                    </h3>
                    {selectedFounder.education && (
                      <p className="text-[11px] uppercase tracking-[0.25em] text-secondary/70 font-light">
                        {selectedFounder.education}
                      </p>
                    )}
                    <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-light">
                      {selectedFounder.title}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedFounder(null)}
                    className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground hover:text-secondary transition-colors rounded-full border border-border/50 px-6 py-3"
                  >
                    Close
                  </button>
                </div>

                <div className="space-y-8">
                  {selectedFounder.narrative.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.7] tracking-[-0.01em] text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="pt-8 border-t border-border/30">
                  <h4 className="text-[11px] uppercase tracking-[0.25em] font-light text-muted-foreground mb-6">
                    Areas of Focus
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedFounder.focus.map((area) => (
                      <div
                        key={area}
                        className="flex items-center gap-3 p-4 rounded-xl bg-muted/30"
                      >
                        <div className="w-2 h-2 rounded-full bg-secondary"></div>
                        <p className="text-[clamp(0.875rem,1.25vw,1rem)] leading-[1.5] tracking-[-0.01em]">
                          {area}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-border/30">
                  <h4 className="text-[11px] uppercase tracking-[0.25em] font-light text-muted-foreground mb-6">
                    Perspective
                  </h4>
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-secondary/5 to-primary/5 border border-secondary/20">
                    <p className="text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.7] tracking-[-0.01em] italic text-foreground">
                      "{selectedFounder.perspective}"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}