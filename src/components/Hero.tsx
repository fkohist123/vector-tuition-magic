
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const calculateOffset = (value: number) => {
    return (value - 0.5) * 20; // -10px to +10px offset
  };

  return (
    <section 
      id="home"
      ref={heroRef}
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <div className="chip mb-6 animate-fade-up">Transform Your Learning</div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-tight text-balance mb-6 animate-fade-up animate-delay-100">
            Elevate your education with expert tutoring
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance animate-fade-up animate-delay-200">
            Join our community of learners and unlock your full academic potential with personalized instruction and cutting-edge learning tools.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-fade-up animate-delay-300">
            <a 
              href="#pricing" 
              className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 ease-apple hover:shadow-md hover:scale-105 active:scale-95"
            >
              View Plans
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-full bg-secondary text-secondary-foreground font-medium transition-all duration-300 ease-apple hover:shadow-sm hover:scale-105 active:scale-95"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="relative mt-20 lg:mt-32 animate-fade-up animate-delay-400">
          <div 
            className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-1"
            style={{
              transform: `perspective(1000px) rotateX(${calculateOffset(mousePosition.y) * 0.3}deg) rotateY(${calculateOffset(mousePosition.x) * -0.3}deg)`
            }}
          >
            <div className="glass-panel rounded-xl overflow-hidden aspect-[16/9] flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-background via-secondary/50 to-background">
                {/* Placeholder for future content */}
                <div className="flex items-center justify-center h-full">
                  <span className="text-muted-foreground text-center max-w-xs">
                    Student success visualization
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -right-12 -top-12 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl animate-pulse-soft"></div>
          <div className="absolute -left-12 -bottom-12 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl animate-pulse-soft animate-delay-300"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
