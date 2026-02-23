import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const timelineSteps = [
  { day: "Day 1", label: "Discovery Call" },
  { day: "Day 3", label: "Prototype Ready" },
  { day: "Day 14", label: "MVP Built" },
  { day: "Day 21", label: "Launched 🚀" },
];

const HeroSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-glow/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block glass-card px-4 py-1.5 rounded-full text-sm text-muted-foreground mb-6">
            East Africa's Fastest Tech Studio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6"
        >
          We build scalable
          <br />
          software{" "}
          <span className="text-gradient">5× faster</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          From idea to launch in weeks, not months. We turn ambitious visions into production-ready products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <button
            onClick={scrollToContact}
            className="bg-gradient-violet text-primary-foreground font-semibold px-8 py-3.5 rounded-xl text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 violet-glow"
          >
            Let's Build <ArrowRight size={20} />
          </button>
          <button
            onClick={() => document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" })}
            className="glass-card text-foreground font-medium px-8 py-3.5 rounded-xl text-lg hover:bg-secondary/50 transition-colors"
          >
            View Our Work
          </button>
        </motion.div>

        {/* MVP Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">MVP Delivery Timeline</p>
          <div className="flex items-center justify-between relative">
            <div className="absolute top-4 left-[10%] right-[10%] h-px bg-border" />
            {timelineSteps.map((step, i) => (
              <motion.div
                key={step.day}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + i * 0.15 }}
                className="relative flex flex-col items-center z-10"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-violet flex items-center justify-center text-xs font-bold text-primary-foreground violet-glow">
                  {i + 1}
                </div>
                <span className="text-xs font-semibold mt-2 text-foreground">{step.day}</span>
                <span className="text-[10px] text-muted-foreground mt-0.5 hidden sm:block">{step.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
