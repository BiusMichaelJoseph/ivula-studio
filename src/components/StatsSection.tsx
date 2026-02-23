import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "5×", label: "Faster Delivery" },
  { value: "98%", label: "Client Retention" },
  { value: "3 wks", label: "Avg. MVP Launch" },
];

const StatsSection = () => (
  <section className="py-16 px-6">
    <div className="max-w-5xl mx-auto glass-card rounded-2xl p-8 md:p-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="text-center"
          >
            <div className="font-display text-3xl md:text-4xl font-bold text-gradient mb-1">{s.value}</div>
            <div className="text-sm text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
