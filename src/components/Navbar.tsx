
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-apple py-4',
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold text-primary flex items-center">
          <span className="ml-2">Vector</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-primary/80 hover:text-primary transition-colors duration-200 ease-apple"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a 
            href="#contact" 
            className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium transition-all duration-300 ease-apple hover:shadow-md hover:scale-105 active:scale-95"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu} 
          className="md:hidden text-primary"
          aria-label="Toggle menu"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={cn("transition-all duration-300 ease-apple", mobileMenuOpen ? "opacity-0" : "opacity-100")}
          >
            <path 
              d="M4 6H20M4 12H20M4 18H20" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div 
          className={cn(
            "fixed inset-0 bg-white/95 backdrop-blur-xl z-50 flex flex-col p-10 md:hidden transition-all duration-300 ease-apple",
            mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex justify-end">
            <button 
              onClick={toggleMobileMenu} 
              className="text-primary"
              aria-label="Close menu"
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M18 6L6 18M6 6L18 18" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                />
              </svg>
            </button>
          </div>
          
          <div className="flex flex-col items-center justify-center flex-1 space-y-6">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "text-xl font-medium text-primary/80 hover:text-primary transition-all duration-300 ease-apple transform hover:translate-x-2",
                  `animate-fade-up animate-delay-${index * 100}`
                )}
                onClick={toggleMobileMenu}
              >
                {item.name}
              </a>
            ))}
            
            <a 
              href="#contact" 
              className="mt-6 px-8 py-3 rounded-full bg-primary text-primary-foreground text-lg font-medium transition-all duration-300 ease-apple hover:shadow-md animate-fade-up animate-delay-500"
              onClick={toggleMobileMenu}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
