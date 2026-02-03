import { motion } from "motion/react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a placeholder - no actual submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="Contact" className="min-h-screen flex items-center justify-center px-8 lg:px-16 py-32">
      <div className="max-w-[1400px] w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-32"
        >
          <div>
            <h2 className="text-[clamp(2rem,5vw,5rem)] leading-[1] tracking-[-0.04em] font-light mb-16">
              <span className="text-secondary">Contact</span>
            </h2>
            <p className="text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.3] tracking-[-0.02em] max-w-3xl">
              Let's discuss your mandate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <div className="space-y-8">
                <div>
                  <h3 className="text-[11px] uppercase tracking-[0.3em] font-medium text-muted-foreground mb-4">
                    Direct Email
                  </h3>
                  <a
                    href="mailto:inquiries@xlnadvisors.com"
                    className="text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.5] tracking-[-0.01em] hover:opacity-60 transition-opacity"
                  >
                    inquiries@xlnadvisors.com
                  </a>
                </div>

                <div className="pt-8">
                  <p className="text-[clamp(0.875rem,1.25vw,1rem)] leading-[1.6] text-muted-foreground tracking-[-0.01em]">
                    We respond to every serious inquiry. Typical response time is 24-48 hours.
                    We don't accept vendor outreach or recruiting inquiries.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-3">
                  <label className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-border pb-4 focus:border-foreground outline-none transition-colors text-[clamp(1rem,1.5vw,1.25rem)] tracking-[-0.01em]"
                    required
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                    Organization
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full bg-transparent border-b border-border pb-4 focus:border-foreground outline-none transition-colors text-[clamp(1rem,1.5vw,1.25rem)] tracking-[-0.01em]"
                    required
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-border pb-4 focus:border-foreground outline-none transition-colors text-[clamp(1rem,1.5vw,1.25rem)] tracking-[-0.01em]"
                    required
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                    Inquiry
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full bg-transparent border-b border-border pb-4 focus:border-foreground outline-none transition-colors resize-none text-[clamp(1rem,1.5vw,1.25rem)] tracking-[-0.01em]"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                  className="group inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] border border-foreground px-8 py-4 hover:bg-foreground hover:text-background transition-colors duration-300 mt-8"
                >
                  Submit Inquiry
                  <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
                </motion.button>
              </form>
            </div>
          </div>

          <div className="pt-16 border-t border-border text-center">
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              No scheduling widgets. No automated responses. No leverage.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}