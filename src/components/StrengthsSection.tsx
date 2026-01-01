import { useInView } from '@/hooks/useInView';

const strengths = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Single-Origin Estate',
    description: 'Complete traceability from our own soil. Every bean tells the story of one place, one philosophy.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Custom Fermentation',
    description: 'Buyer-specific protocols that transform cherries into distinctive flavor expressions.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    title: 'Organic Nutrition',
    description: 'In-house organic inputs derived from farm resources, nurturing soil without synthetic dependency.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Data-Driven Management',
    description: 'Block-wise tracking, yield analytics, and performance monitoring for precision decisions.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Full Traceability',
    description: 'Every lot documented from plant to export, ensuring transparency and quality assurance.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Owner Involvement',
    description: 'Direct partner engagement across all operations—cultivation, processing, and relationships.',
  },
];

export function StrengthsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section 
      ref={ref}
      className="section-padding bg-background"
    >
      <div className="container-narrow">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium">Why Dawoodi Farms</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-4 text-foreground">
            Unique Strengths
          </h2>
        </div>

        {/* Strengths Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strengths.map((strength, index) => (
            <div
              key={strength.title}
              className={`group p-8 rounded-lg border border-border hover:border-primary/30 bg-background card-hover text-center ${
                isInView ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 mb-6">
                {strength.icon}
              </div>
              
              <h3 className="font-serif text-xl text-foreground mb-3">
                {strength.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {strength.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
