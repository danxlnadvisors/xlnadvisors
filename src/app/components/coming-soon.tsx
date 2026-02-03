import { motion } from "motion/react";
import { useState } from "react";

interface ComingSoonProps {
  onBack: () => void;
}

const FORM_URL = "https://script.google.com/macros/s/AKfycbz8rNQ7w-ULd5CM3bnz7pdSAWpIIExUH04N9-M51xus9ubgG8PEOLcXJRzvntV8WCQJSw/exec";

export function ComingSoon({ onBack }: ComingSoonProps) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await fetch(FORM_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-[#0a1628] text-[#f5f7fa]">
      {/* Background effects - Gold and Blue gradients */}
      <div className="fixed inset-0 opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 20% 50%, #4a7ba7 0%, transparent 50%), radial-gradient(circle at 80% 80%, #e6c35c 0%, transparent 40%)'
        }}
      />

      <div className="flex-1 flex flex-col items-center justify-center px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-12 max-w-4xl w-full"
        >
          {/* Logo Section */}
          <div className="space-y-6">
            <h1 className="text-[clamp(3rem,8vw,8rem)] leading-[0.9] font-light tracking-[-0.04em] text-white">
              XLN <span className="text-[#e6c35c]">Advisors</span>
            </h1>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-[#e6c35c]/50"></div>
              <p className="text-[clamp(0.875rem,1.5vw,1rem)] text-[#8a92a3] tracking-[0.3em] uppercase font-light">
                Founder-Led Advisory
              </p>
              <div className="h-px w-12 bg-[#e6c35c]/50"></div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-px h-32 bg-gradient-to-b from-transparent via-[#2d3f5f] to-transparent mx-auto" />

          {/* Coming Soon Message */}
          <div className="space-y-6">
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-[-0.02em] text-[#e6c35c]">
              Coming Soon
            </h2>
          </div>

          {/* Contact Form */}
          <div className="pt-8 w-full flex justify-center">
            <div className="border border-[#2d3f5f] bg-[#0a1628]/50 backdrop-blur-sm rounded-sm w-full max-w-[520px] p-8">
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#e6c35c] mb-8">Contact Us</p>

              {status === "sent" ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-8"
                >
                  <p className="text-[#e6c35c] text-lg font-light">Thank you.</p>
                  <p className="text-[#94a3b8] text-sm mt-2">We'll be in touch soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] text-[#8a92a3] mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border border-[#2d3f5f] px-4 py-3 text-sm text-[#f5f7fa] focus:border-[#e6c35c] focus:outline-none transition-colors rounded-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] text-[#8a92a3] mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border border-[#2d3f5f] px-4 py-3 text-sm text-[#f5f7fa] focus:border-[#e6c35c] focus:outline-none transition-colors rounded-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] text-[#8a92a3] mb-2">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent border border-[#2d3f5f] px-4 py-3 text-sm text-[#f5f7fa] focus:border-[#e6c35c] focus:outline-none transition-colors resize-none rounded-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full border border-[#e6c35c] text-[#e6c35c] py-3 text-[11px] uppercase tracking-[0.25em] hover:bg-[#e6c35c] hover:text-[#0a1628] transition-colors disabled:opacity-50 rounded-sm"
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </button>
                  {status === "error" && (
                    <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="p-8 text-center relative z-10">
        <p className="text-[11px] uppercase tracking-[0.25em] text-[#4a7ba7]">
          © {new Date().getFullYear()} XLN Advisors
        </p>
      </div>
    </div>
  );
}
