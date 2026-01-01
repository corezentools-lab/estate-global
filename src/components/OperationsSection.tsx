import { useInView } from '@/hooks/useInView';
import estateAerial from '@/assets/estate-aerial.jpg';

const operations = [
  'Precision-managed cultivation across structured blocks',
  'Nursery management & strategic gap filling',
  'Soil enrichment & water efficiency protocols',
  'Integrated pest & disease management',
  'Pruning, canopy control & yield optimization',
  'Harvesting, drying & meticulous grading',
  'Post-harvest handling & quality control',
  'Block-wise performance tracking & analysis',
];

export function OperationsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section 
      id="operations" 
      ref={ref}
      className="section-padding bg-ivory-dark"
    >
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className={isInView ? 'animate-slide-right' : 'opacity-0'}>
            <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium">How We Work</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-4 mb-8 text-foreground">
              Farm Operations
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Every activity on our estate follows structured protocols designed for 
              long-term plant health and consistent quality. Our operations reflect 
              discipline and intentionality at every stage.
            </p>

            {/* Operations List */}
            <ul className="space-y-4">
              {operations.map((operation, index) => (
                <li 
                  key={index}
                  className={`flex items-start gap-4 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${200 + index * 50}ms` }}
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-foreground">{operation}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className={`relative ${isInView ? 'animate-slide-left delay-300' : 'opacity-0'}`}>
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={estateAerial}
                alt="Aerial view of structured coffee blocks"
                className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-6 rounded-b-lg">
              <p className="text-primary-foreground font-serif text-lg">Structured Block Management</p>
              <p className="text-primary-foreground/70 text-sm mt-1">Precision planning for optimal yield</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
