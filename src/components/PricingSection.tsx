import { motion } from "framer-motion";
import { Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const plans = [
  {
    name: "Starter",
    price: "$2,500",
    timeline: "1–2 weeks",
    desc: "Perfect for landing pages and simple web apps.",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Basic SEO setup",
      "1 round of revisions",
      "Deployment included",
    ],
    featured: false,
  },
  {
    name: "Startup MVP Bundle",
    price: "$7,500",
    timeline: "3 weeks",
    desc: "Everything you need to validate your idea and ship fast.",
    features: [
      "Full-stack web or mobile app",
      "User auth & database",
      "Payment integration",
      "Admin dashboard",
      "3 rounds of revisions",
      "30 days post-launch support",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    timeline: "Ongoing",
    desc: "For established teams needing dedicated engineering power.",
    features: [
      "Dedicated dev team",
      "Custom architecture",
      "CI/CD pipeline",
      "SLA & uptime guarantees",
      "Priority support",
      "Quarterly roadmap reviews",
    ],
    featured: false,
  },
];

const faqs = [
  { q: "What tech stack do you use?", a: "We primarily use React, Next.js, React Native, Node.js, Python, and PostgreSQL — chosen based on your project needs." },
  { q: "Do I own the code?", a: "Absolutely. You get full ownership of all source code and intellectual property upon project completion." },
  { q: "Can I upgrade my plan later?", a: "Yes! Start with Starter or MVP Bundle and scale up as your product grows. We offer seamless transitions." },
  { q: "What's included in post-launch support?", a: "Bug fixes, minor feature tweaks, performance monitoring, and deployment support for the specified period." },
];

const PricingSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">No hidden fees. Pick a plan and let's start building.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-7 flex flex-col ${
                plan.featured
                  ? "glass-card violet-glow-strong border border-primary/30"
                  : "glass-card"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-violet text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-xl font-bold mb-1">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{plan.desc}</p>
              <div className="mb-1">
                <span className="font-display text-3xl font-bold">{plan.price}</span>
              </div>
              <span className="text-xs text-muted-foreground mb-6">{plan.timeline}</span>
              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={scrollToContact}
                className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                  plan.featured
                    ? "bg-gradient-violet text-primary-foreground hover:opacity-90"
                    : "glass text-foreground hover:bg-secondary/50"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h3 className="font-display text-2xl font-bold text-center mb-8">Frequently Asked Questions</h3>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="glass-card rounded-xl border-none px-5">
                <AccordionTrigger className="text-sm font-medium hover:no-underline">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
