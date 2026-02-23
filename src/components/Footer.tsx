import { Mail, Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/50 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-display text-xl font-bold mb-3">
              <span className="text-gradient">ivula</span>
              <span className="text-foreground">.tech</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              We build scalable software 5× faster. From idea to launch in weeks, not months.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4 uppercase tracking-wider text-muted-foreground">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["#home", "#portfolio", "#process", "#pricing", "#contact"].map((href) => (
                <button
                  key={href}
                  onClick={() => scrollTo(href)}
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors text-left"
                >
                  {href.replace("#", "").charAt(0).toUpperCase() + href.slice(2)}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4 uppercase tracking-wider text-muted-foreground">Get in Touch</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:hello@ivula.co.ke" className="flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors">
                <Mail size={14} /> hello@ivula.co.ke
              </a>
              <a href="tel:+254700000000" className="flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors">
                <Phone size={14} /> +254 700 000 000
              </a>
              <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors">
                <MessageCircle size={14} /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ivula Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
