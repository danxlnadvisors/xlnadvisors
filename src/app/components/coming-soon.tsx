import { motion } from "motion/react";

interface ComingSoonProps {
  onBack: () => void;
}

export function ComingSoon({ onBack }: ComingSoonProps) {
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
            <p className="text-[#94a3b8] max-w-lg mx-auto leading-relaxed text-lg font-light">
              We are currently building a new digital experience for our clients.
              <br />
              <span className="text-[#f5f7fa] mt-2 block">Expected Launch Q3 2026</span>
            </p>
          </div>

          {/* Contact Form */}
          <div className="pt-8 w-full flex justify-center">
            <div className="border border-[#2d3f5f] bg-[#0a1628]/50 backdrop-blur-sm rounded-sm overflow-hidden w-full max-w-[680px]">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScM2bKq2Y8LlTCbXNXrNFH6zPCEgLkEAmPlfWbH8S_TAFda-g/viewform?embedded=true"
                width="100%"
                height="720"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="w-full"
              >
                Loading…
              </iframe>
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
