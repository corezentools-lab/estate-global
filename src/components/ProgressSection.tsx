import { useInView } from '@/hooks/useInView';

const progressPoints = [
  '250 acres under structured, precision management',
  'Multiple blocks operating under detailed protocols',
  'Consistent improvement in yield and plant health',
  'Successful specialty and fermented coffee production',
  'Growing recognition among selective global buyers',
];

export function ProgressSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section 
      ref={ref}
      className="section-padding bg-primary text-primary-foreground relative overflow-hidden"
    >
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full border border-primary-foreground -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full border border-primary-foreground translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container-narrow relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <div className={isInView ? 'animate-fade-up' : 'opacity-0'}>
            <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium">Building Credibility</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-4 mb-8">
              Performance & Progress
            </h2>
          </div>

          {/* Progress Points */}
          <ul className="space-y-4 text-left max-w-xl mx-auto mb-12">
            {progressPoints.map((point, index) => (
              <li 
                key={index}
                className={`flex items-start gap-4 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-primary-foreground/90">{point}</span>
              </li>
            ))}
          </ul>

          {/* Note */}
          <p 
            className={`text-sm text-primary-foreground/60 italic ${isInView ? 'animate-fade-up delay-600' : 'opacity-0'}`}
          >
            Detailed performance metrics are shared seasonally with partners.
          </p>
        </div>
      </div>
    </section>
  );
}
