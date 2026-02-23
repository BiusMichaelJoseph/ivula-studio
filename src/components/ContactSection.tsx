import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

const projectTypes = ["Web App", "Mobile App", "SaaS Platform", "AI / ML Product", "E-Commerce", "Other"];
const budgetRanges = ["$1k – $3k", "$3k – $7k", "$7k – $15k", "$15k – $30k", "$30k+"];
const timelines = ["ASAP (< 2 weeks)", "1 month", "2–3 months", "No rush"];

const ContactSection = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    projectType: "",
    budget: "",
    timeline: "",
    name: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const next = () => setStep((s) => Math.min(s + 1, 2));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const canProceed =
    (step === 0 && data.projectType) ||
    (step === 1 && data.budget) ||
    (step === 2 && data.timeline && data.name && data.email);

  const handleSubmit = () => {
    if (canProceed) setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg mx-auto text-center glass-card rounded-2xl p-12"
        >
          <CheckCircle2 size={48} className="text-primary mx-auto mb-4" />
          <h3 className="font-display text-2xl font-bold mb-2">We'll be in touch!</h3>
          <p className="text-muted-foreground">Thank you, {data.name}. Our team will reach out within 24 hours.</p>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Let's Build Together</h2>
          <p className="text-muted-foreground">Tell us about your project in 60 seconds.</p>
        </motion.div>

        {/* Progress */}
        <div className="flex items-center gap-2 mb-8">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
                i <= step ? "bg-gradient-violet" : "bg-secondary"
              }`}
            />
          ))}
        </div>

        <div className="glass-card rounded-2xl p-8">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div key="s0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h3 className="font-display text-lg font-semibold mb-4">What are you building?</h3>
                <div className="grid grid-cols-2 gap-3">
                  {projectTypes.map((t) => (
                    <button
                      key={t}
                      onClick={() => setData({ ...data, projectType: t })}
                      className={`p-3 rounded-xl text-sm font-medium transition-all ${
                        data.projectType === t
                          ? "bg-gradient-violet text-primary-foreground"
                          : "bg-secondary/50 text-foreground hover:bg-secondary"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h3 className="font-display text-lg font-semibold mb-4">Estimated Budget?</h3>
                <div className="flex flex-col gap-3">
                  {budgetRanges.map((b) => (
                    <button
                      key={b}
                      onClick={() => setData({ ...data, budget: b })}
                      className={`p-3 rounded-xl text-sm font-medium text-left transition-all ${
                        data.budget === b
                          ? "bg-gradient-violet text-primary-foreground"
                          : "bg-secondary/50 text-foreground hover:bg-secondary"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h3 className="font-display text-lg font-semibold mb-4">How fast do you need to launch?</h3>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {timelines.map((t) => (
                    <button
                      key={t}
                      onClick={() => setData({ ...data, timeline: t })}
                      className={`p-3 rounded-xl text-sm font-medium transition-all ${
                        data.timeline === t
                          ? "bg-gradient-violet text-primary-foreground"
                          : "bg-secondary/50 text-foreground hover:bg-secondary"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <div className="space-y-3">
                  <input
                    placeholder="Your name"
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    placeholder="Email address"
                    type="email"
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                    className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    placeholder="Phone (optional)"
                    value={data.phone}
                    onChange={(e) => setData({ ...data, phone: e.target.value })}
                    className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <button
              onClick={prev}
              disabled={step === 0}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
            >
              <ArrowLeft size={16} /> Back
            </button>
            {step < 2 ? (
              <button
                onClick={next}
                disabled={!canProceed}
                className="flex items-center gap-1 bg-gradient-violet text-primary-foreground px-6 py-2.5 rounded-xl text-sm font-medium hover:opacity-90 disabled:opacity-40 transition-all"
              >
                Next <ArrowRight size={16} />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canProceed}
                className="bg-gradient-violet text-primary-foreground px-6 py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 disabled:opacity-40 transition-all"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
