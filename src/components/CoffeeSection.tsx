import { useInView } from '@/hooks/useInView';
import dryingBeds from '@/assets/drying-beds.jpg';

const coffeeTypes = [
  {
    title: 'Estate-Grown Robusta',
    description: 'Single-origin Ugandan Robusta cultivated with precision across our structured blocks, offering bold character and remarkable consistency.',
  },
  {
    title: 'Specialty Fermented Lots',
    description: 'Controlled fermentation protocols tailored to buyer specifications, unlocking unique flavor profiles and distinctive cup characteristics.',
  },
  {
    title: 'Natural Process Coffee',
    description: 'Sun-dried on raised beds, our natural process lots capture the full expression of terroir with deep, fruit-forward complexity.',
  },
  {
    title: 'Experimental Micro-Lots',
    description: 'Limited releases showcasing innovative processing techniques, each lot reflecting the unique character of specific estate blocks.',
  },
];

export function CoffeeSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section 
      id="coffee" 
      ref={ref}
      className="section-padding bg-ivory-dark"
    >
      <div className="container-narrow">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium">What We Produce</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-4 text-foreground">
            Our Coffee
          </h2>
          <p className="max-w-2xl mx-auto mt-6 text-muted-foreground leading-relaxed">
            From our estate to select global buyers, every lot carries the signature 
            of disciplined cultivation and refined post-harvest craft.
          </p>
        </div>

        {/* Full Width Image */}
        <div 
          className={`relative overflow-hidden rounded-lg mb-16 ${isInView ? 'animate-fade-up delay-200' : 'opacity-0'}`}
        >
          <img
            src={dryingBeds}
            alt="Coffee beans drying on raised beds"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
          <div className="absolute bottom-8 left-8 text-primary-foreground">
            <p className="font-serif text-2xl">Traditional Drying Beds</p>
            <p className="text-primary-foreground/80 mt-2">Slow, patient drying under the Ugandan sun</p>
          </div>
        </div>

        {/* Coffee Types Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {coffeeTypes.map((coffee, index) => (
            <div
              key={coffee.title}
              className={`group p-8 bg-background rounded-lg border border-border hover:border-gold/50 card-hover ${
                isInView ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              {/* Number */}
              <span className="text-6xl font-serif text-gold/20 group-hover:text-gold/40 transition-colors duration-500">
                0{index + 1}
              </span>
              
              <h3 className="font-serif text-xl text-foreground mt-4 mb-3">
                {coffee.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {coffee.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
