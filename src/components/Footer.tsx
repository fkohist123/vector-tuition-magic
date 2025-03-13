
import { NavLink } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return <footer className="bg-white border-t">
      <div className="content-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <ArrowUpRight size={20} className="text-primary" strokeWidth={2.5} />
              Vector Tuition
            </h3>
            <p className="text-muted-foreground">
              Personalized education services moving you upwards and beyond.
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
                Book a Call
              </NavLink>
            </nav>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a href="mailto:Tutor@vectortuition.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail size={16} />
                <span>Tutor@vectortuition.com</span>
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone size={16} />
                <span>+44 7951 453507</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={16} />
                <span>Stockdove Way, London, UB6 8TJ
              </span>
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
    </footer>;
};

export default Footer;
