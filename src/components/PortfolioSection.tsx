import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";

const categories = ["All", "Web", "Mobile", "AI", "SaaS"];

const projects = [
  {
    name: "iSpaces",
    category: "SaaS",
    metric: "Launched in 2 weeks",
    desc: "Co-working space management platform with real-time booking and analytics.",
    stack: ["React", "Node.js", "PostgreSQL"],
  },
  {
    name: "iB360",
    category: "Web",
    metric: "Launched in 3 weeks",
    desc: "360° business intelligence dashboard for SME performance tracking.",
    stack: ["React", "Python", "D3.js"],
  },
  {
    name: "FarmFlow",
    category: "Mobile",
    metric: "Launched in 4 weeks",
    desc: "Mobile-first agri-tech platform connecting farmers to urban markets.",
    stack: ["React Native", "Firebase"],
  },
  {
    name: "MediTrack AI",
    category: "AI",
    metric: "Launched in 5 weeks",
    desc: "AI-powered patient triage system for rural health clinics.",
    stack: ["Python", "TensorFlow", "React"],
  },
  {
    name: "PaySwift",
    category: "SaaS",
    metric: "Launched in 3 weeks",
    desc: "M-Pesa integrated invoicing and payment gateway for freelancers.",
    stack: ["Next.js", "Stripe", "M-Pesa API"],
  },
  {
    name: "EduVault",
    category: "Web",
    metric: "Launched in 4 weeks",
    desc: "Digital learning platform with live classes and progress tracking.",
    stack: ["React", "WebRTC", "Supabase"],
  },
];

const PortfolioSection = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Our Work</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">Ideas we turned into shipped products.</p>
        </motion.div>

        {/* Filters */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? "bg-gradient-violet text-primary-foreground"
                  : "glass-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl overflow-hidden group hover:violet-glow transition-shadow duration-300"
              >
                {/* Placeholder thumbnail */}
                <div className="h-40 bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                  <span className="font-display text-2xl font-bold text-muted-foreground/30">{p.name}</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-lg font-semibold">{p.name}</h3>
                    <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <span className="inline-block text-xs bg-primary/15 text-primary px-2 py-0.5 rounded-full font-medium mb-3">
                    {p.metric}
                  </span>
                  <p className="text-sm text-muted-foreground mb-3">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map((t) => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
