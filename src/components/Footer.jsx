import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About Us", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Press", href: "#press" },
      { label: "Blog", href: "#blog" }
    ],
    services: [
      { label: "Products", href: "#products" },
      { label: "Solutions", href: "#solutions" },
      { label: "Pricing", href: "#pricing" },
      { label: "Enterprise", href: "#enterprise" }
    ],
    support: [
      { label: "Help Center", href: "#help" },
      { label: "Documentation", href: "#docs" },
      { label: "Contact Us", href: "#contact" },
      { label: "FAQ", href: "#faq" }
    ],
    legal: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "Cookie Policy", href: "#cookies" }
    ]
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}


        {/* Bottom Bar */}
        <div className="border-t border-border py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Amani.co. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#hero"
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};