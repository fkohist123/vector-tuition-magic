
import { NavLink } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t">
      <div className="content-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <ArrowUpRight size={20} className="text-primary" strokeWidth={2.5} />
              Vector Tuition
            </h3>
            <p className="text-muted-foreground">
              Personalized education services that help students reach their full potential.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <NavLink to="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </NavLink>
              <NavLink to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
                Pricing
              </NavLink>
              <NavLink to="/schedule" className="text-muted-foreground hover:text-primary transition-colors">
                Schedule
              </NavLink>
            </nav>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail size={16} />
                <span>yousaf@vectortuition.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone size={16} />
                <span>+44 7951 453507</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={16} />
                <span>192 Haymill Cl, Ealing, London</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Vector Tuition. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
