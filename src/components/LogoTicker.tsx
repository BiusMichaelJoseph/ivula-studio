const logos = [
  "Safaricom", "KCB Group", "Equity Bank", "M-Pesa", "USAID", "Jumia",
  "Twiga Foods", "Sendy", "Cellulant", "Africa's Talking",
];

const LogoTicker = () => (
  <section className="py-12 px-6 overflow-hidden border-y border-border/50">
    <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-6">
      Trusted by innovative teams
    </p>
    <div className="relative max-w-6xl mx-auto overflow-hidden">
      <div className="flex animate-ticker whitespace-nowrap">
        {[...logos, ...logos].map((name, i) => (
          <div
            key={i}
            className="inline-flex items-center justify-center mx-8 text-muted-foreground/40 font-display text-lg font-semibold select-none"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LogoTicker;
