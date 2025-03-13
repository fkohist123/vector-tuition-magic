
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ReactNode } from 'react';

interface HeroProps {
  title: string;
  subtitle: string | ReactNode;
  className?: string;
  children?: React.ReactNode;
  showCta?: boolean;
  ctaText?: string;
  ctaLink?: string;
  videoSrc?: string;
  imageSrc?: string;
}

const Hero = ({
  title,
  subtitle,
  className,
  children,
  showCta = true,
  ctaText = "Book a Call",
  ctaLink = "/discovery",
  videoSrc = "https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4",
  imageSrc
}: HeroProps) => {
  const navigate = useNavigate();

  return (
    <div className={cn("relative overflow-hidden py-12 md:py-24", className)}>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white opacity-50" />
      
      <div className="relative content-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left space-y-6"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full mb-4"
            >
              Personalized Tuition Services
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-semibold tracking-tight"
            >
              {title}.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl text-muted-foreground"
            >
              {subtitle}
            </motion.p>
            
            {showCta && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <Button size="lg" onClick={() => navigate(ctaLink)}>
                  {ctaText}
                </Button>
              </motion.div>
            )}
            
            {children}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative aspect-video rounded-xl overflow-hidden shadow-xl"
          >
            {imageSrc ? (
              <img 
                src={imageSrc} 
                alt="Student learning" 
                className="w-full h-full object-cover"
              />
            ) : (
              <video 
                className="w-full h-full object-cover" 
                autoPlay 
                muted 
                loop 
                playsInline
                src={videoSrc}
              />
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
