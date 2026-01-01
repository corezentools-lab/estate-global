export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container-narrow px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-foreground flex items-center justify-center">
                <span className="text-foreground font-serif text-lg font-semibold">D</span>
              </div>
              <span className="font-serif text-2xl">Dawoodi Farms</span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed max-w-sm">
              Single-origin Ugandan coffee, patiently cultivated and globally offered 
              to partners who value precision, sustainability, and long-term collaboration.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg mb-4">Explore</h4>
            <ul className="space-y-3">
              {[
                { label: 'About', href: '#about' },
                { label: 'Our Coffee', href: '#coffee' },
                { label: 'Operations', href: '#operations' },
                { label: 'Sustainability', href: '#sustainability' },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-primary-foreground/70 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-serif text-lg mb-4">Estate Location</h4>
            <p className="text-primary-foreground/70 leading-relaxed">
              Uganda, East Africa
            </p>
            <div className="mt-6">
              <span className="text-gold text-sm uppercase tracking-widest">Est. with patience</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-primary-foreground/10 my-12" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/50">
          <p>© {currentYear} Dawoodi Farms. All rights reserved.</p>
          <p className="italic">Patience over hype. Precision over mass production.</p>
        </div>
      </div>
    </footer>
  );
}
