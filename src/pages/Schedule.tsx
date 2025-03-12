
import { CalendarIcon } from 'lucide-react';
import Footer from '@/components/Footer';
import CalendlyEmbed from '@/components/CalendlyEmbed';

const Schedule = () => {
  // Base Calendly URL
  const baseCalendlyUrl = "https://calendly.com/scheduledatecalendar/30min";

  return (
    <div className="page-transition min-h-screen flex flex-col">
      <section className="content-section pt-24">
        <div className="section-title">
          <h2>
            <span className="flex items-center justify-center">
              <CalendarIcon size={28} className="mr-2 text-blue-500" />
              Book a Discovery Call
            </span>
          </h2>
          <p>
            Book a discovery call to first discuss your academic goals, current challenges and your tuition needs.
          </p>
        </div>
        
        <div className="mt-4 max-w-4xl mx-auto">
          <CalendlyEmbed url={baseCalendlyUrl} />
          <p className="text-sm text-center mt-4 text-muted-foreground">
            Need to manage your bookings? <a href={baseCalendlyUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Visit your Calendly page</a>
          </p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Schedule;
