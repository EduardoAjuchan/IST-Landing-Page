"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>('');
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let closestSection = '';
      let minDistance = Number.POSITIVE_INFINITY;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top);

        if (distance < minDistance) {
          minDistance = distance;
          closestSection = section.id;
        }
      });

      setActiveSection(closestSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // Cerrar el menú al seleccionar una sección
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center">
          <Image
            src="/assets/logo.webp"
            alt="InnovaSeed Tech Logo"
            width={60}
            height={60}
            className="mr-2 md:mr-4"
          />
          <h1 className="text-lg md:text-2xl font-bold text-primary">InnovaSeed Tech</h1>
        </div>

        {/* Botón de menú para móviles */}
        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(true)}>
          <FaBars />
        </button>

        {/* Menú de navegación lateral para móviles */}
        <nav
          className={`fixed top-0 right-0 h-full bg-white w-64 shadow-lg transform ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out md:static md:translate-x-0 md:w-auto md:shadow-none`}
        >
          {/* Botón para cerrar el menú, solo visible en móviles */}
          <div className="flex justify-end p-4 md:hidden">
            <button onClick={() => setMenuOpen(false)} className="text-2xl">
              <FaTimes />
            </button>
          </div>
          <ul className="flex flex-col md:flex-row md:space-x-6 mt-8 md:mt-0">
            <li>
              <button
                onClick={() => scrollToSection('hero')}
                className={`block py-4 px-6 md:py-0 md:px-0 hover:text-primary ${
                  activeSection === 'hero' ? 'text-primary font-bold' : ''
                }`}
              >
                Inicio
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('about')}
                className={`block py-4 px-6 md:py-0 md:px-0 hover:text-primary ${
                  activeSection === 'about' ? 'text-primary font-bold' : ''
                }`}
              >
                Sobre Nosotros
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('specializations')}
                className={`block py-4 px-6 md:py-0 md:px-0 hover:text-primary ${
                  activeSection === 'specializations' ? 'text-primary font-bold' : ''
                }`}
              >
                Especializaciones
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className={`block py-4 px-6 md:py-0 md:px-0 hover:text-primary ${
                  activeSection === 'contact' ? 'text-primary font-bold' : ''
                }`}
              >
                Contacto
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
