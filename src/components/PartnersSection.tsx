import { useInView } from '@/hooks/useInView';

const partnerTypes = [
  {
    title: 'Specialty Roasters',
    description: 'Craft-focused roasters seeking unique single-origin profiles and traceable supply chains.',
  },
  {
    title: 'Premium Importers',
    description: 'Quality-driven importers building portfolios of distinctive, reliable estate coffees.',
  },
  {
    title: 'Select Traders',
    description: 'Established traders connecting premium African origins with discerning global markets.',
  },
  {
    title: 'Custom Buyers',
    description: 'Partners seeking bespoke fermentation and processing for differentiated offerings.',
  },
];

export function PartnersSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section 
      id="partners" 
      ref={ref}
      className="section-padding bg-ivory-dark"
    >
      <div className="container-narrow">
        {/* Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium">Collaboration</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-4 text-foreground">
            Global Outlook
          </h2>
          <p className="max-w-2xl mx-auto mt-6 text-muted-foreground leading-relaxed">
            Dawoodi Farms operates without geographic limitation, building long-term 
            relationships with selective B2B buyers who share our commitment to quality 
            and intentionality.
          </p>
        </div>

        {/* Partner Types */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {partnerTypes.map((partner, index) => (
            <div
              key={partner.title}
              className={`group relative p-8 bg-background rounded-lg border border-border overflow-hidden card-hover ${
                isInView ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              {/* Decorative Line */}
              <div className="absolute top-0 left-0 w-1 h-0 bg-gold group-hover:h-full transition-all duration-500" />
              
              <h3 className="font-serif text-xl text-foreground mb-3">
                {partner.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {partner.description}
              </p>
            </div>
          ))}
        </div>

        {/* Philosophy Statement */}
        <div 
          className={`text-center max-w-2xl mx-auto ${isInView ? 'animate-fade-up delay-500' : 'opacity-0'}`}
        >
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />
          <p className="font-serif text-xl text-foreground italic leading-relaxed">
            "We do not seek volume buyers. We seek partners who understand that 
            exceptional coffee is built through patience, precision, and shared 
            long-term vision."
          </p>
        </div>
      </div>
    </section>
  );
}
