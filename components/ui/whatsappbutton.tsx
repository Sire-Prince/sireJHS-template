"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  position?: "bottom-right" | "bottom-left";
  showTooltip?: boolean;
}

export default function WhatsAppButton({
  phoneNumber = "233244546733",
  message = "Hello sireJSH! I have a question about your programs.",
  position = "bottom-right",
  showTooltip = true,
}: WhatsAppButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltipText, setShowTooltipText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseEnter = () => setShowTooltipText(true);
  const handleMouseLeave = () => setShowTooltipText(false);

  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
  };

  const tooltipPosition = {
    "bottom-right": "right-16",
    "bottom-left": "left-16",
  };

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 260, damping: 20 }}
      className={`fixed ${positionClasses[position]} z-50`}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20B85A] rounded-full shadow-lg transition-all duration-300 hover:scale-110 group focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
        aria-label="Chat on WhatsApp"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Official WhatsApp SVG Logo */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-7 h-7"
          fill="white"
        >
          <path d="M12.032 0c-6.627 0-12 5.373-12 12 0 2.135.56 4.154 1.539 5.92L.03 24l6.312-1.629c1.73.936 3.703 1.43 5.69 1.43 6.627 0 12-5.373 12-12s-5.373-12-12-12zm0 21.6c-1.77 0-3.51-.485-5.02-1.395l-.36-.213-3.754.969 1.001-3.664-.228-.373a9.599 9.599 0 0 1-1.46-5.124c0-5.295 4.305-9.6 9.6-9.6s9.6 4.305 9.6 9.6-4.305 9.6-9.6 9.6zm5.25-7.17c-.285-.135-1.68-.825-1.935-.915-.255-.105-.435-.15-.615.15-.18.3-.705.915-.87 1.095-.165.18-.33.195-.615.075-.285-.12-1.2-.45-2.28-1.395-.84-.735-1.41-1.635-1.575-1.905-.165-.27-.015-.42.12-.555.12-.12.27-.315.405-.48.135-.165.18-.285.27-.465.09-.18.045-.33-.015-.45-.06-.12-.615-1.485-.84-2.025-.225-.525-.45-.45-.615-.465-.165-.015-.345-.015-.525-.015-.18 0-.465.075-.705.33-.24.255-.915.9-.915 2.175 0 1.275.93 2.505 1.065 2.685.135.18 1.83 2.79 4.41 3.915.615.27 1.095.435 1.47.555.615.18 1.17.15 1.62.09.495-.06 1.53-.615 1.755-1.215.225-.6.225-1.11.165-1.215-.06-.105-.225-.165-.51-.285z" />
        </svg>
        
        {/* Pulsing Ring Effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      </a>

      {/* Tooltip */}
      {showTooltip && showTooltipText && (
        <motion.div
          initial={{ opacity: 0, x: position === "bottom-right" ? 10 : -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: position === "bottom-right" ? 10 : -10 }}
          className={`absolute top-1/2 -translate-y-1/2 ${tooltipPosition[position]} bg-gray-900 text-white text-sm px-3 py-1.5 rounded-full whitespace-nowrap shadow-lg pointer-events-none`}
        >
          Chat with us on WhatsApp
          <span className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45" 
            style={position === "bottom-right" ? { right: -4 } : { left: -4 }}
          />
        </motion.div>
      )}
    </motion.div>
  );
}