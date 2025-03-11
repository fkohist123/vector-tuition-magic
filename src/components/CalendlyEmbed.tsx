
import React, { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface CalendlyEmbedProps {
  url?: string;
  height?: string;
}

const CalendlyEmbed: React.FC<CalendlyEmbedProps> = ({ 
  url = "https://calendly.com/scheduledatecalendar/30min", 
  height = '700px' 
}) => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup function to remove the script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Card className="w-full">
      <CardContent className="p-0 overflow-hidden rounded-md">
        <div 
          className="calendly-inline-widget" 
          data-url={url}
          style={{ minWidth: '320px', height }}
        />
      </CardContent>
    </Card>
  );
};

export default CalendlyEmbed;
