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
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-16 pt-28">
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-violet-glow/8 blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-block rounded-full glass-card px-4 py-1.5 text-sm text-muted-foreground mb-6">
            East Africa&apos;s Fastest Tech Studio
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
          software <span className="text-gradient">5× faster</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mb-10 max-w-2xl text-lg md:text-xl text-muted-foreground"
        >
          From idea to launch in weeks, not months. We turn ambitious visions into production-ready products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mb-16 flex flex-col justify-center gap-4 sm:flex-row"
        >
          <button
            onClick={scrollToContact}
            className="bg-gradient-violet text-primary-foreground font-semibold px-8 py-3.5 rounded-xl text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 violet-glow"
          >
            Let&apos;s Build <ArrowRight size={20} />
          </button>
          <button
            onClick={() => document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" })}
            className="glass-card text-foreground font-medium px-8 py-3.5 rounded-xl text-lg hover:bg-secondary/50 transition-colors"
          >
            View Our Work
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mx-auto max-w-2xl"
        >
          <p className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">MVP Delivery Timeline</p>
          <div className="relative grid grid-cols-2 gap-y-4 sm:flex sm:items-center sm:justify-between">
            <div className="absolute hidden sm:block top-4 left-[10%] right-[10%] h-px bg-border" />
            {timelineSteps.map((step, i) => (
              <motion.div
                key={step.day}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + i * 0.15 }}
                className="relative z-10 flex flex-col items-center"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-violet text-xs font-bold text-primary-foreground violet-glow">
                  {i + 1}
                </div>
                <span className="mt-2 text-xs font-semibold text-foreground">{step.day}</span>
                <span className="mt-0.5 text-[10px] text-muted-foreground">{step.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
