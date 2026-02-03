import { motion } from "motion/react";

export function HeroSection() {
  return (
    <section id="Overview" className="min-h-screen flex items-center justify-center px-8 lg:px-16 pt-24 pb-12 lg:pt-32 lg:pb-20">
      <div className="max-w-[1400px] w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8 lg:space-y-16"
        >
          {/* Primary Headline with elegant styling */}
          <div className="space-y-8 lg:space-y-16 max-w-4xl">
            {/* Hero Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4 lg:space-y-8"
            >
              <h1 className="text-[clamp(3rem,8vw,7rem)] leading-[1] tracking-[-0.04em] font-light">
                Thoughtful
                <br />
                <span className="text-primary">consulting</span>
                <br />
                <span className="relative inline-block">
                  for complex decisions.
                  <svg className="absolute -bottom-3 left-0 w-full h-2 text-primary/30" preserveAspectRatio="none" viewBox="0 0 200 10">
                    <path d="M0,5 Q50,0 100,5 T200,5" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </span>
              </h1>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[clamp(1.125rem,2vw,1.5rem)] leading-[1.5] tracking-[-0.01em] text-muted-foreground max-w-3xl"
            >
              We partner with leaders navigating growth, change, and technology—bringing clarity, judgment, and execution to the moments that matter most.
            </motion.p>
          </div>

          {/* Intro Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 lg:mt-24 max-w-3xl"
          >
            <p className="text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.6] tracking-[-0.01em] text-muted-foreground">
              We're a founder-led consulting firm working across strategy, operations, and technology. Our work spans industries, but our focus is consistent: helping organizations make better decisions and turn them into durable systems.
            </p>
          </motion.div>

          {/* Refined CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-6"
          >
            <button 
              onClick={() => {
                const contactSection = document.getElementById("Contact");
                if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.25em] font-medium rounded-full border border-primary px-8 py-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Start a Conversation
              <motion.span 
                className="transition-transform duration-300 group-hover:translate-x-1"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
              >
                →
              </motion.span>
            </button>
            
            {/* Visual cue to scroll */}
            <motion.button
              onClick={() => {
                const advisorySection = document.getElementById("Advisory");
                if (advisorySection) advisorySection.scrollIntoView({ behavior: "smooth" });
              }}
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-[11px] uppercase tracking-[0.25em] text-primary font-light flex items-center gap-2 hover:gap-3 transition-all duration-300"
            >
              Explore ↓
            </motion.button>
          </motion.div>

          {/* What We Do - Snapshot cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 lg:mt-32 grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Strategy",
                desc: "Clear thinking when direction matters most.",
                color: "from-primary/20 to-secondary/20",
                iconBg: "bg-primary"
              },
              {
                title: "Execution",
                desc: "Turning ideas into operating reality.",
                color: "from-secondary/20 to-primary/20",
                iconBg: "bg-secondary"
              },
              {
                title: "AI & Intelligent Systems",
                desc: "Designing practical ways to use AI inside real businesses.",
                color: "from-[#e0bfb8]/30 to-primary/20",
                iconBg: "bg-[#b8956a]"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className={`group p-8 rounded-2xl border-2 border-primary/30 hover:border-primary bg-gradient-to-br ${item.color} hover:shadow-xl hover:shadow-primary/10 transition-all duration-300`}
              >
                <div className="space-y-3">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border-2 border-primary/30`}>
                    <div className={`w-3 h-3 rounded-full ${item.iconBg}`}></div>
                  </div>
                  <h3 className="text-[clamp(1.25rem,2vw,1.5rem)] leading-[1.3] tracking-[-0.02em] font-light">
                    {item.title}
                  </h3>
                  <p className="text-[clamp(0.875rem,1.25vw,1rem)] leading-[1.6] text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Why Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.9 }}
            className="mt-16 lg:mt-32 max-w-3xl p-12 rounded-2xl border border-primary/30 bg-gradient-to-br from-card to-primary/5"
          >
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] leading-[1.2] tracking-[-0.02em] font-light mb-3 lg:mb-6">
              Why Us
            </h2>
            <p className="text-[clamp(1.125rem,2vw,1.5rem)] leading-[1.5] tracking-[-0.01em] mb-2 lg:mb-4">
              Senior-level attention. Small teams. No templates.
            </p>
            <p className="text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.6] tracking-[-0.01em] text-muted-foreground">
              We work closely, move quickly, and stay involved from first conversation through implementation.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}