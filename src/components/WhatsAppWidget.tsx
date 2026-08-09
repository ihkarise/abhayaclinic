import { MessageCircle } from 'lucide-react';

export default function WhatsAppWidget() {
  return (
    <a
      href="https://wa.me/919188240272?text=Hello%20ABHAYA%20HOMEO%20CLINIC,%20I%20would%20like%20to%20book%20an%20appointment."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center group glass-dark rounded-full p-3 shadow-xl hover:scale-105 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap text-text-primary text-sm font-medium pl-2 opacity-0 group-hover:opacity-100 group-hover:pr-3">
        Need Help? Chat with Us
      </span>
      <div className="bg-[#25D366] text-white p-2.5 rounded-full shadow-md">
        <MessageCircle className="w-6 h-6" />
      </div>
    </a>
  );
}
