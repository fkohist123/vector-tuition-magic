
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
          className="rounded-full h-14 w-14 p-0 bg-[#25D366] hover:bg-[#128C7E] shadow-lg"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      </a>
    </div>
  );
};

export default WhatsAppButton;
