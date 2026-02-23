import { motion } from "framer-motion";
import { Globe, Smartphone, Zap, Brain } from "lucide-react";

const services = [
  { icon: Globe, title: "Web Development", desc: "High-performance web apps with React, Next.js, and modern stacks." },
  { icon: Smartphone, title: "Mobile Apps", desc: "Cross-platform mobile experiences that feel native on every device." },
  { icon: Zap, title: "Automation", desc: "Workflow automation and integrations that eliminate manual overhead." },
  { icon: Brain, title: "AI Integration", desc: "Smart features powered by ML and AI APIs baked into your product." },
];

const ServicesSection = () => (
  <section className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">What We Build</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">End-to-end digital products, from concept to scale.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="glass-card rounded-2xl p-6 hover:violet-glow transition-shadow duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-violet flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <s.icon size={22} className="text-primary-foreground" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
