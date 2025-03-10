
import { useState } from 'react';
import { useInView } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

type PricingTier = {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const PricingCard = ({ tier, index }: { tier: PricingTier; index: number }) => {
  const { ref, isInView } = useInView();
  
  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        "relative bg-white rounded-2xl p-6 shadow-sm border border-border transition-all duration-700 ease-apple",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        tier.isPopular ? "ring-2 ring-primary" : "",
        `transition-delay-${index * 100}`
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {tier.isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
          Most Popular
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
        <p className="text-muted-foreground text-sm mb-4">{tier.description}</p>
        <div className="flex items-center justify-center">
          <span className="text-3xl font-bold">{tier.price}</span>
          {tier.price !== 'Custom' && <span className="text-muted-foreground ml-1">/month</span>}
        </div>
      </div>
      
      <ul className="space-y-3 mb-6">
        {tier.features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-auto">
        <a 
          href="#contact" 
          className={cn(
            "block w-full py-2 rounded-full text-center font-medium transition-all duration-300 ease-apple hover:shadow-md hover:scale-105 active:scale-95",
            tier.isPopular 
              ? "bg-primary text-primary-foreground" 
              : "bg-secondary text-secondary-foreground"
          )}
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

const Pricing = () => {
  const { ref, isInView } = useInView();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  
  const pricingTiers: PricingTier[] = [
    {
      name: "Basic",
      price: "$49",
      description: "Perfect for individual students",
      features: [
        "Access to core curriculum",
        "Weekly problem sets",
        "Progress tracking",
        "Email support",
        "1 subject area"
      ]
    },
    {
      name: "Premium",
      price: "$99",
      description: "Ideal for dedicated learners",
      features: [
        "Everything in Basic",
        "Personalized learning path",
        "Live group sessions (2x weekly)",
        "Priority support",
        "3 subject areas"
      ],
      isPopular: true
    },
    {
      name: "Ultimate",
      price: "$199",
      description: "Comprehensive learning experience",
      features: [
        "Everything in Premium",
        "1-on-1 tutoring sessions",
        "Advanced problem sets",
        "24/7 support",
        "All subject areas"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div 
          ref={ref as React.RefObject<HTMLDivElement>}
          className={cn(
            "text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ease-apple",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="chip mb-4">Pricing</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Simple, transparent pricing</h2>
          <p className="text-muted-foreground text-lg">
            Choose the plan that's right for your learning journey, with no hidden fees or surprises.
          </p>
          
          <div className="flex items-center justify-center mt-8">
            <button 
              onClick={() => setBillingCycle('monthly')}
              className={cn(
                "px-4 py-2 rounded-l-full transition-all duration-300",
                billingCycle === 'monthly' 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary text-secondary-foreground"
              )}
            >
              Monthly
            </button>
            <button 
              onClick={() => setBillingCycle('yearly')}
              className={cn(
                "px-4 py-2 rounded-r-full transition-all duration-300",
                billingCycle === 'yearly' 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary text-secondary-foreground"
              )}
            >
              Yearly (Save 20%)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pricingTiers.map((tier, index) => (
            <PricingCard 
              key={index}
              tier={{
                ...tier,
                price: billingCycle === 'yearly' && tier.price !== 'Custom' 
                  ? `$${Math.round(parseInt(tier.price.substring(1)) * 0.8 * 12)}`
                  : tier.price
              }}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
