"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Detectar si estamos en escritorio
    const checkIfDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkIfDesktop();

    window.addEventListener("resize", checkIfDesktop);
    return () => window.removeEventListener("resize", checkIfDesktop);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a
        href="#"
        className={`flex items-center justify-center bg-green-500 text-white font-bold rounded-full shadow-lg hover:bg-green-600 transition-all duration-500 ease-in-out animate-pulse ${
          isDesktop ? "p-3" : "w-14 h-14"
        }`}
      >
        <div className="flex items-center justify-center">
          <FaWhatsapp className={`${isDesktop ? "text-3xl" : "text-2xl"}`} />
        </div>
        {isDesktop && (
          <span className="ml-2 text-sm whitespace-nowrap">Pregúntanos por WhatsApp</span>
        )}
      </a>
    </div>
  );
};

export default WhatsAppButton;
