import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const stages = [
  {
    icon: Search,
    title: "Discovery",
    desc: "We deep-dive into your vision, users, and market to define the right product.",
    timeline: "Day 1–2",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: PenTool,
    title: "Prototyping",
    desc: "Rapid wireframes and interactive prototypes you can test before a line of code.",
    timeline: "Day 3–5",
    color: "from-purple-500 to-fuchsia-600",
  },
  {
    icon: Code2,
    title: "Development",
    desc: "Agile sprints with weekly demos. You see real progress every 7 days.",
    timeline: "Day 6–18",
    color: "from-fuchsia-500 to-pink-600",
  },
  {
    icon: Rocket,
    title: "Scale",
    desc: "Launch, monitor, and optimize. We stay on to help you grow.",
    timeline: "Day 19–21+",
    color: "from-pink-500 to-rose-600",
  },
];

const ProcessSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-50%"]);

  return (
    <section id="process" className="py-24 px-6 overflow-hidden" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">The Ivula Process</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">Four stages. Three weeks. One shipped product.</p>
        </motion.div>
      </div>

      {/* Horizontal scroll on desktop, vertical on mobile */}
      <div className="hidden md:block">
        <motion.div style={{ x }} className="flex gap-8 pl-[10%] w-max">
          {stages.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="w-80 shrink-0 glass-card rounded-2xl p-8 hover:violet-glow transition-shadow duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-5`}>
                <s.icon size={26} className="text-white" />
              </div>
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">{s.timeline}</span>
              <h3 className="font-display text-xl font-bold mt-2 mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Mobile: vertical cards */}
      <div className="md:hidden max-w-sm mx-auto flex flex-col gap-6">
        {stages.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-2xl p-6"
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-4`}>
              <s.icon size={22} className="text-white" />
            </div>
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">{s.timeline}</span>
            <h3 className="font-display text-lg font-bold mt-1 mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
