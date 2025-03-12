
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/447418609836?text=Hello!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl active:scale-95"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="text-lg font-medium">How can I help you?</span>
    </a>
  );
};

export default WhatsAppButton;
