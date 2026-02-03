import { motion } from "motion/react";

interface SectionConnectorProps {
  variant?: "gold" | "navy" | "rose";
}

export function SectionConnector({ variant = "gold" }: SectionConnectorProps) {
  const colors = {
    gold: "from-secondary/20 via-secondary to-secondary/20",
    navy: "from-primary/20 via-primary to-primary/20",
    rose: "from-[#e0bfb8]/20 via-[#e0bfb8] to-[#e0bfb8]/20",
  };

  return (
    <div className="relative w-full h-8 md:h-16 flex items-center justify-center overflow-hidden">
      {/* Decorative flowing line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute w-full h-px"
      >
        <div className={`w-full h-full bg-gradient-to-r ${colors[variant]}`} />
      </motion.div>

      {/* Center ornament */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="relative z-10 bg-background px-6"
      >
        <div className="flex items-center gap-3">
          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${colors[variant]}`} />
          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${colors[variant]}`} />
          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${colors[variant]}`} />
        </div>
      </motion.div>

      {/* Side ornaments */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute left-8 lg:left-32"
      >
        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${colors[variant]} opacity-20`} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute right-8 lg:right-32"
      >
        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${colors[variant]} opacity-20`} />
      </motion.div>
    </div>
  );
}