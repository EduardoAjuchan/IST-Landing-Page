// src/components/Navbar.tsx
"use client";

import { useEffect, useState } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold text-primary">InnovaSeed Tech</h1>
        <ul className="flex space-x-6">
          <li>
            <button
              onClick={() => scrollToSection('hero')}
              className={`hover:text-primary ${activeSection === 'hero' ? 'text-primary font-bold' : ''}`}
            >
              Inicio
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('about')}
              className={`hover:text-primary ${activeSection === 'about' ? 'text-primary font-bold' : ''}`}
            >
              Sobre Nosotros
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('specializations')}
              className={`hover:text-primary ${activeSection === 'specializations' ? 'text-primary font-bold' : ''}`}
            >
              Especializaciones
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('contact')}
              className={`hover:text-primary ${activeSection === 'contact' ? 'text-primary font-bold' : ''}`}
            >
              Contacto
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
