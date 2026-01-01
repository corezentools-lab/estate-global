import { useInView } from '@/hooks/useInView';
import soilHealth from '@/assets/soil-health.jpg';

const sustainabilityPoints = [
  {
    title: 'Farm-Derived Nutrition',
    description: 'Organic inputs created from on-site resources, reducing external dependency while enriching soil biology.',
  },
  {
    title: 'Reduced Synthetic Use',
    description: 'Gradual transition away from synthetic inputs, prioritizing natural alternatives for pest and nutrient management.',
  },
  {
    title: 'Soil Health Preservation',
    description: 'Cover cropping, mulching, and careful tillage practices that protect and build soil structure over time.',
  },
  {
    title: 'Water Efficiency',
    description: 'Strategic water management protocols that maximize efficiency while preserving local water resources.',
  },
  {
    title: 'Closed-Loop Systems',
    description: 'Processing byproducts returned to the land, creating a circular ecosystem that minimizes waste.',
  },
];

export function SustainabilitySection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section 
      id="sustainability" 
      ref={ref}
      className="section-padding bg-background"
    >
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className={`order-2 lg:order-1 relative ${isInView ? 'animate-slide-right' : 'opacity-0'}`}>
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={soilHealth}
                alt="Healthy fertile soil on the estate"
                className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-primary/20 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div className={`order-1 lg:order-2 ${isInView ? 'animate-slide-left delay-200' : 'opacity-0'}`}>
            <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium">Forward-Looking</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-4 mb-8 text-foreground">
              Sustainability as Growth
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              For us, sustainability is not a marketing claim—it is a growth strategy. 
              By investing in soil health and closed-loop systems, we build resilience 
              that compounds over decades.
            </p>

            {/* Points */}
            <div className="space-y-6">
              {sustainabilityPoints.map((point, index) => (
                <div 
                  key={point.title}
                  className={`${isInView ? 'animate-fade-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <h4 className="font-serif text-lg text-foreground flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold" />
                    {point.title}
                  </h4>
                  <p className="text-muted-foreground mt-1 pl-5">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
