
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a 
        href="https://wa.me/447951453507" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
      >
        <Button 
          size="lg" 
          className="rounded-full h-16 w-16 p-0 bg-[#25D366] hover:bg-[#128C7E] shadow-lg flex items-center justify-center"
        >
          <div className="relative">
            <MessageCircle className="h-8 w-8 text-white" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
          </div>
        </Button>
      </a>
    </div>
  );
};

export default WhatsAppButton;
