
import { CalendarIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import CalendlyEmbed from '@/components/CalendlyEmbed';
import Footer from '@/components/Footer';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Schedule = () => {
  const [level, setLevel] = useState("");
  const [subject, setSubject] = useState("");
  
  // Base Calendly URL
  const baseCalendlyUrl = "https://calendly.com/scheduledatecalendar/30min";
  
  // Construct URL with query parameters for the selections
  const [calendlyUrl, setCalendlyUrl] = useState(baseCalendlyUrl);
  
  useEffect(() => {
    let url = baseCalendlyUrl;
    
    // Add query parameters if selections are made
    const params = [];
    if (level) params.push(`name=${encodeURIComponent(`Level: ${level}`)}`);
    if (subject) params.push(`email=${encodeURIComponent(`Subject: ${subject}`)}`);
    
    if (params.length > 0) {
      url = `${url}?${params.join('&')}`;
    }
    
    setCalendlyUrl(url);
  }, [level, subject]);

  // Subject options based on level selection
  const getSubjectOptions = () => {
    switch(level) {
      case "KS3":
        return ["Mathematics", "English", "Science"];
      case "GCSE":
        return ["Mathematics", "English Language", "English Literature", "Biology", "Chemistry", "Physics", "Combined Science"];
      case "A Level":
        return ["Mathematics", "Further Mathematics", "English Literature", "Biology", "Chemistry", "Physics"];
      default:
        return [];
    }
  };

  return (
    <div className="page-transition min-h-screen flex flex-col">
      <section className="content-section pt-24">
        <div className="section-title">
          <h2>
            <span className="flex items-center justify-center">
              <CalendarIcon size={28} className="mr-2 text-blue-500" />
              Select Your Preferred Time
            </span>
          </h2>
          <p>
            View available time slots and book a session that fits your schedule.
            All appointments are confirmed instantly.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto mt-6 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div>
              <label className="block text-sm font-medium mb-2">Education Level</label>
              <Select value={level} onValueChange={setLevel}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="KS3">KS3</SelectItem>
                  <SelectItem value="GCSE">GCSE</SelectItem>
                  <SelectItem value="A Level">A Level</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <Select 
                value={subject} 
                onValueChange={setSubject}
                disabled={!level}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={level ? "Select subject" : "First select a level"} />
                </SelectTrigger>
                <SelectContent>
                  {getSubjectOptions().map((subj) => (
                    <SelectItem key={subj} value={subj}>{subj}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        
        <div className="mt-4 max-w-4xl mx-auto">
          <CalendlyEmbed url={calendlyUrl} />
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
