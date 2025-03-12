
import { motion } from 'framer-motion';
import { Check, Percent } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface PricingFeature {
  text: string;
}

interface PricingCardProps {
  title: string;
  price: string;
  frequency: string;
  description: string;
  subjects?: string;
  features: PricingFeature[];
  popular?: boolean;
  buttonText?: string;
  delay?: number;
  discount?: string | null;
  buttonLink?: string;
}

const PricingCard = ({
  title,
  price,
  frequency,
  description,
  subjects,
  features,
  popular = false,
  buttonText = "Get Started",
  delay = 0,
  discount = null,
  buttonLink = "/schedule",
}: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay * 0.2, duration: 0.5 }}
      className="relative flex flex-col p-6 bg-white rounded-xl shadow-sm ring-1 ring-black/5 transition-all"
    >
      {discount && (
        <div className="absolute -top-3 -right-3">
          <div className="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full flex items-center">
            <Percent size={14} className="mr-1" />
            {discount} saving
          </div>
        </div>
      )}
      
      <div className="mb-5">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="mt-4 flex items-baseline">
          <span className="text-3xl font-bold">{price}</span>
          <span className="ml-1 text-muted-foreground">/{frequency}</span>
        </div>
        <p className="mt-3 text-muted-foreground">{description}</p>
        
        {subjects && (
          <div className="mt-2 text-sm font-medium text-blue-600">
            {subjects}
          </div>
        )}
      </div>
      
      <ul className="mt-2 space-y-3 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check size={18} className="mr-2 text-green-500 flex-shrink-0 mt-0.5" />
            <span className="text-muted-foreground">{feature.text}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-8">
        <Button className="w-full" asChild>
          <Link to={buttonLink}>
            {buttonText}
          </Link>
        </Button>
      </div>
    </motion.div>
  );
};

export default PricingCard;
