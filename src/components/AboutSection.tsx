import { useInView } from '@/hooks/useInView';
import coffeeCherries from '@/assets/coffee-cherries.jpg';

export function AboutSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section 
      id="about" 
      ref={ref}
      className="section-padding bg-background"
    >
      <div className="container-narrow">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium">Our Story</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-4 text-foreground">
            Rooted in Patience
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className={`relative ${isInView ? 'animate-slide-right delay-200' : 'opacity-0'}`}>
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={coffeeCherries}
                alt="Ripe coffee cherries on the estate"
                className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-gold/30 rounded-lg -z-10" />
          </div>

          {/* Text Content */}
          <div className={`space-y-6 ${isInView ? 'animate-slide-left delay-300' : 'opacity-0'}`}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dawoodi Farms is a 250-acre boutique coffee estate nestled in the fertile 
              highlands of Uganda. Founded by three partners from India, the estate 
              represents a convergence of agricultural wisdom, data-driven precision, 
              and unwavering patience.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe in building resilience over rushing scale. Every decision—from 
              soil enrichment protocols to post-harvest innovation—reflects our 
              commitment to long-term excellence rather than short-term gains.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Our expansion is a natural progression, emerging organically from plant 
              health, soil vitality, and the refined character of each harvest. This 
              is coffee farming reimagined: disciplined, intentional, and built to endure.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <span className="text-3xl font-serif text-primary">250</span>
                <p className="text-sm text-muted-foreground mt-1">Acres</p>
              </div>
              <div>
                <span className="text-3xl font-serif text-primary">3</span>
                <p className="text-sm text-muted-foreground mt-1">Founding Partners</p>
              </div>
              <div>
                <span className="text-3xl font-serif text-primary">∞</span>
                <p className="text-sm text-muted-foreground mt-1">Long-term Vision</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
