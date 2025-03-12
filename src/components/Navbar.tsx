
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header 
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
      )}
    >
      <div className="content-container py-4">
        <nav className="flex items-center justify-between">
          <NavLink to="/" className="text-xl font-medium transition-opacity hover:opacity-80 flex items-center gap-2">
            <ArrowUpRight size={24} className="text-primary" strokeWidth={2.5} />
            Vector Tuition
          </NavLink>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                cn("transition-colors hover:text-primary", 
                isActive ? "text-primary font-medium" : "text-foreground")
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/pricing" 
              className={({ isActive }) => 
                cn("transition-colors hover:text-primary", 
                isActive ? "text-primary font-medium" : "text-foreground")
              }
            >
              Pricing
            </NavLink>
            <NavLink 
              to="/schedule" 
              className={({ isActive }) => 
                cn("transition-colors hover:text-primary", 
                isActive ? "text-primary font-medium" : "text-foreground")
              }
            >
              Schedule
            </NavLink>
            
            <Button asChild size="sm">
              <NavLink to="/schedule">
                Book a Call
              </NavLink>
            </Button>
          </div>
          
          <button 
            className="md:hidden focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>
      
      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 flex flex-col pt-20 pb-6 px-6 md:hidden transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-6 text-lg">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              cn("py-2 transition-colors hover:text-primary", 
              isActive ? "text-primary font-medium" : "text-foreground")
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink 
            to="/pricing" 
            className={({ isActive }) => 
              cn("py-2 transition-colors hover:text-primary", 
              isActive ? "text-primary font-medium" : "text-foreground")
            }
            onClick={closeMenu}
          >
            Pricing
          </NavLink>
          <NavLink 
            to="/schedule" 
            className={({ isActive }) => 
              cn("py-2 transition-colors hover:text-primary", 
              isActive ? "text-primary font-medium" : "text-foreground")
            }
            onClick={closeMenu}
          >
            Schedule
          </NavLink>
          
          <Button className="mt-4 w-full" onClick={closeMenu}>
            Book a Call
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
