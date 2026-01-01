import heroImage from '@/assets/hero-estate.jpg';
import { useScrollPosition } from '@/hooks/useScrollPosition';

export function HeroSection() {
  const scrollY = useScrollPosition();
  
  const handleExploreClick = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <img
          src={heroImage}
          alt="Dawoodi Farms coffee estate at golden hour"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow px-6 md:px-12 text-center mt-20">
        {/* Gold Decorative Line */}
        <div className="flex justify-center mb-8 animate-fade-up">
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6 animate-fade-up delay-100">
          <span className="text-foreground">Single-Origin.</span>
          <br />
          <span className="text-foreground">Patiently Built.</span>
          <br />
          <span className="text-gradient-gold">Globally Offered.</span>
        </h1>

        {/* Sub-headline */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 animate-fade-up delay-200">
          A boutique Ugandan coffee estate producing estate-grown Robusta and specialty 
          fermented coffee through precision farming, sustainability, and long-term intent.
        </p>

        {/* CTA Button */}
        <button 
          onClick={handleExploreClick}
          className="inline-flex items-center gap-3 px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 font-medium tracking-wide animate-fade-up delay-300"
        >
          Explore the Estate
          <svg 
            className="w-4 h-4 transition-transform group-hover:translate-y-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-up delay-500">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
