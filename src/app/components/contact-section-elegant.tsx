import { motion } from "motion/react";
import { useState } from "react";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
  };

  return (
    <section id="Contact" className="px-8 lg:px-16 py-20 lg:py-32">
      <div className="max-w-[1400px] w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12 lg:space-y-16"
        >
          <div>
            <h2 className="text-[clamp(2rem,5vw,5rem)] leading-[1] tracking-[-0.04em] font-light mb-8">
              Let's <span className="text-primary">Talk</span>
            </h2>
            <p className="text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.6] text-muted-foreground max-w-3xl tracking-[-0.01em]">
              If you're facing a strategic decision, exploring change, or thinking about how AI fits into your organization, we'd be glad to talk.
            </p>
            <p className="text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.6] text-muted-foreground max-w-3xl tracking-[-0.01em] mt-4">
              No pitch—just a conversation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <div className="space-y-8">
                <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/30">
                  <h3 className="text-[11px] uppercase tracking-[0.25em] font-light text-muted-foreground mb-4">
                    Direct Email
                  </h3>
                  <a
                    href="mailto:inquiries@xlnadvisors.com"
                    className="text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.5] tracking-[-0.01em] text-primary hover:text-secondary transition-colors duration-300 font-medium"
                  >
                    inquiries@xlnadvisors.com
                  </a>
                </div>

                <div className="pt-4">
                  <p className="text-[clamp(0.875rem,1.25vw,1rem)] leading-[1.6] text-muted-foreground tracking-[-0.01em]">
                    We respond to every serious inquiry. Typical response time is 24-48 hours.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-3">
                  <label className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-light">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-transparent border-b-2 border-border pb-4 focus:border-secondary outline-none transition-colors text-[clamp(1rem,1.5vw,1.25rem)] tracking-[-0.01em] rounded-none"
                    required
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-light">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-transparent border-b-2 border-border pb-4 focus:border-secondary outline-none transition-colors text-[clamp(1rem,1.5vw,1.25rem)] tracking-[-0.01em] rounded-none"
                    required
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-light">
                    Inquiry
                  </label>
                  <textarea
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    rows={6}
                    className="w-full bg-transparent border-b-2 border-border pb-4 focus:border-secondary outline-none transition-colors resize-none text-[clamp(1rem,1.5vw,1.25rem)] tracking-[-0.01em] rounded-none"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="group inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.25em] font-medium rounded-full bg-gradient-to-r from-secondary to-primary text-white px-10 py-5 hover:shadow-xl transition-all duration-300 mt-8"
                >
                  Submit Inquiry
                  <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
                </motion.button>
              </form>
            </div>
          </div>

          <div className="pt-16 border-t border-border/30 text-center">
            <div className="inline-block px-8 py-4 rounded-full bg-muted/30">
              <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-light">
                Expect a response within 48 hours
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}