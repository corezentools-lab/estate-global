import { useState, useEffect } from 'react';
import { useScrollPosition } from '@/hooks/useScrollPosition';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Our Coffee', href: '#coffee' },
  { label: 'Operations', href: '#operations' },
  { label: 'Sustainability', href: '#sustainability' },
  { label: 'Partners', href: '#partners' },
];

export function Header() {
  const scrollY = useScrollPosition();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = scrollY > 50;

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-narrow flex items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <a 
          href="#" 
          className="flex items-center gap-3 group"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-serif text-lg font-semibold">D</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-serif text-xl tracking-wide text-foreground group-hover:text-primary transition-colors">
              Dawoodi Farms
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span 
            className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span 
            className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span 
            className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 top-[72px] bg-background/98 backdrop-blur-lg lg:hidden transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, index) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`text-2xl font-serif text-foreground hover:text-primary transition-all duration-300 ${
                isMenuOpen ? 'animate-fade-up' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
