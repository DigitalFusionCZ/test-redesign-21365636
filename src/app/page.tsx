'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface NavLink {
  name: string;
  href: string;
}

interface Service {
  name: string;
  iconUrl: string;
}

interface Reference {
  title: string;
  location: string;
  imageUrl?: string;
}

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "VŠE PRO STAVBY.CZ - Stavební práce, Rekonstrukce, Výstavba RD";

    const faviconUrl = "https://via.placeholder.com/32x32/1E40AF/FFFFFF?text=VS";
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = faviconUrl;
  }, []);

  const navLinks: NavLink[] = [
    { name: 'Služby', href: '#services' },
    { name: 'Reference', href: '#references' },
    { name: 'O nás', href: '#about' },
    { name: 'Kontakt', href: '#contact' },
  ];

  const services: Service[] = [
    { name: 'Zednické práce', iconUrl: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/trowel.svg' },
    { name: 'Obklady a dlažby', iconUrl: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/layout-grid.svg' },
    { name: 'Sádrokartonářské práce', iconUrl: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/wall.svg' },
    { name: 'Zateplení fasády', iconUrl: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/building-skyscraper.svg' },
    { name: 'Stavby na klíč', iconUrl: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/key.svg' },
    { name: 'Rekonstrukce', iconUrl: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/home-cog.svg' },
    { name: 'Zámková dlažba', iconUrl: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/road.svg' },
    { name: 'Střechy', iconUrl: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/roof.svg' },
    { name: 'Bourací a výkopové práce', iconUrl: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/bulldozer.svg' },
  ];
  
  const references: Reference[] = [
    { title: 'Oprava fasády', location: 'Tanvald', imageUrl: '/images/project-tanvald-cottage-renovation-after.jpg' },
    { title: 'Celková rekonstrukce rodinného domu', location: 'Praha', imageUrl: '/images/project-family-house-reconstruction-after.jpg' },
    { title: 'Rekonstrukce bytu', location: 'Liberec' },
    { title: 'Pokládka dlažby', location: 'Železný Brod' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-gray-50 text-gray-800">
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-blue-800 tracking-tight">
            VŠEPROSTAVBY.CZ
          </a>
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                {link.name}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/menu-2.svg" alt="Menu" className="w-7 h-7 text-gray-800" />
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl">
            <div className="flex flex-col items-center space-y-4 py-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={closeMenu} className="text-xl text-gray-700 hover:text-blue-600 transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative h-screen flex items-center justify-center text-white">
          <Image
            src="/images/project-family-house-reconstruction-after.jpg"
            alt="Rodinný dům po rekonstrukci"
            layout="fill"
            objectFit="cover"
            priority
            className="z-0"
          />
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="relative z-20 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-shadow-lg">STAVEBNÍ PRÁCE A REKONSTRUKCE</h1>
            <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto text-shadow">Komplexní řešení pro Vaši stavbu od A do Z.</p>
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105">
              Nezávazná poptávka
            </a>
          </div>
        </section>

        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Oblasti působnosti</h2>
              <p className="text-lg text-gray-600 mt-2">Zajišťujeme široké spektrum stavebních činností.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.name} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <img src={service.iconUrl} alt={`${service.name} icon`} className="w-7 h-7 text-blue-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{service.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-gray-100">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">O nás</h2>
            <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed text-lg">
              Naše společnost VŠE PRO STAVBY.CZ vznikla v roce 2010. Hlavní naší činností jsou stavební práce, rekonstrukce a výstavby rodinných domů na klíč. Zajišťujeme veškeré řemeslné práce spojené se stavebnictvím. Cílem naší společnosti je především spokojený zákazník, kterého provázíme celým procesem stavby.
            </p>
          </div>
        </section>

        <section id="references" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Naše reference</h2>
              <p className="text-lg text-gray-600 mt-2">Pohled na naši dokončenou práci.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {references.map((ref) => (
                <div key={ref.title} className="bg-white rounded-lg shadow-md overflow-hidden group">
                  <div className="relative h-64 bg-gray-200">
                    {ref.imageUrl ? (
                      <Image
                        src={ref.imageUrl}
                        alt={`${ref.title} - ${ref.location}`}
                        layout="fill"
                        objectFit="cover"
                        className="group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-300">
                        <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/photo.svg" alt="Placeholder" className="w-16 h-16 text-gray-500" />
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800">{ref.title}</h3>
                    <p className="text-gray-600 mt-1">{ref.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-blue-800 text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Kontaktujte nás</h2>
              <p className="text-lg text-blue-200 mt-2">Jsme tu pro vaše dotazy a projekty.</p>
            </div>
            <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
                    <div className="space-y-6">
                        <div className="flex flex-col md:flex-row items-center space-x-4">
                            <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/user.svg" alt="Kontakt osoba" className="w-8 h-8 text-blue-300 mb-2 md:mb-0"/>
                            <div>
                                <h3 className="font-semibold text-xl">Marcel Bílek</h3>
                                <p className="text-blue-200">Jednatel společnosti</p>
                            </div>
                        </div>
                         <div className="flex flex-col md:flex-row items-center space-x-4">
                            <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/phone.svg" alt="Telefon" className="w-8 h-8 text-blue-300 mb-2 md:mb-0"/>
                            <div>
                                <h3 className="font-semibold text-xl">737 383 621</h3>
                                <a href="tel:+420737383621" className="text-blue-200 hover:text-white transition-colors">Zavolejte nám</a>
                            </div>
                        </div>
                    </div>
                     <div className="space-y-6">
                         <div className="flex flex-col md:flex-row items-center space-x-4">
                            <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/mail.svg" alt="Email" className="w-8 h-8 text-blue-300 mb-2 md:mb-0"/>
                            <div>
                                <h3 className="font-semibold text-xl">info@vseprostavby.cz</h3>
                                <a href="mailto:info@vseprostavby.cz" className="text-blue-200 hover:text-white transition-colors">Napište nám</a>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center space-x-4">
                            <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/map-pin.svg" alt="Adresa" className="w-8 h-8 text-blue-300 mb-2 md:mb-0"/>
                            <div>
                                <h3 className="font-semibold text-xl">Maršovice 159, 468 21</h3>
                                <p className="text-blue-200">IČO: 75017009</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} VŠE PRO STAVBY.CZ. Všechna práva vyhrazena.</p>
          <p className="mt-2 text-sm">
            <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Vytvořeno s láskou od DigitalFusion
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
