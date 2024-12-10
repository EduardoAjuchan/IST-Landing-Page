// src/app/layout.tsx
"use client";

import { useEffect } from 'react';
import './globals.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <html lang="es">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
