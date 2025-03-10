
import { useInView } from '@/lib/animations';
import { cn } from '@/lib/utils';

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const Feature = ({ icon, title, description, index }: FeatureProps) => {
  const { ref, isInView } = useInView();
  
  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        "flex flex-col p-6 rounded-2xl transition-all ease-apple duration-700 hover:shadow-lg hover:bg-secondary/50",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        `transition-delay-${index * 100}`
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="rounded-full bg-primary/5 w-12 h-12 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Features = () => {
  const { ref, isInView } = useInView();
  
  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Flexible Scheduling",
      description: "Book sessions that fit your schedule with 24/7 availability for maximum convenience."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Expert Tutors",
      description: "Learn from qualified educators with years of experience in their specific subject areas."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Personalized Learning",
      description: "Tailored instruction that adapts to your unique learning style and academic goals."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 19.1283C16.933 18.4175 18 16.3928 18 14C18 10.6863 15.3137 8 12 8C8.68629 8 6 10.6863 6 14C6 16.3928 7.06701 18.4175 9 19.1283M22 22L2 22M12 2V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Progress Tracking",
      description: "Monitor your improvement with detailed analytics and performance measurements."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 14.5L5.5 18.5M9.5 14.5H13.5C16.5376 14.5 19 11.5376 19 8.5C19 5.46243 16.5376 2.5 13.5 2.5H9C5.96243 2.5 3.5 5.46243 3.5 8.5C3.5 11.5376 5.96243 14.5 9 14.5H9.5ZM5.5 18.5L3.5 20.5M5.5 18.5L9.5 22.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Interactive Sessions",
      description: "Engage with dynamic learning materials and collaborative tools for deeper understanding."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 10L11 14L9 12M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Guaranteed Results",
      description: "See measurable improvement in your academic performance or receive additional support at no cost."
    },
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div 
          ref={ref as React.RefObject<HTMLDivElement>}
          className={cn(
            "text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ease-apple",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="chip mb-4">Our Services</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why choose Vector Tuition?</h2>
          <p className="text-muted-foreground text-lg">
            Discover the benefits that set our tutoring services apart and help students excel in their studies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
