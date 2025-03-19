"use client"

import React, { useState } from 'react';
import Link from 'next/link';


// Define the structure for navigation items
type SubLink = {
  label: string;
  href: string;
};

type NavItem = {
  label: string;
  href: string;
  subLinks: SubLink[];
};

const Header = () => {
  // Track which dropdown is currently open
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  // Track if mobile menu is open
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Track which mobile accordion is open
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(null);

  // Navigation data
  const navItems: NavItem[] = [
    {
      label: "Notícias",
      href: "/",
      subLinks: [
        { label: "Destaques", href: "/destaques" },
        { label: "Recentes", href: "/recentes" }
      ]
    },
    {
      label: "Guia da Temporada",
      href: "/guia-temporada",
      subLinks: [
        { label: "Temporada Atual", href: "/guia-temporada/atual" },
        { label: "Próxima Temporada", href: "/guia-temporada/proxima" }
      ]
    },
    {
      label: "Artigos",
      href: "/reviews",
      subLinks: [
        { label: "Animes", href: "/reviews/animes" },
        { label: "Mangás", href: "/reviews/mangas" }
      ]
    },
    {
      label: "Quizzes e Testes",
      href: "/tops",
      subLinks: [
        { label: "Top 10 Animes", href: "/tops/animes" },
        { label: "Top 10 Mangás", href: "/tops/mangas" }
      ]
    },
    {
      label: "Guias",
      href: "/noticias",
      subLinks: [
        { label: "Últimas Notícias", href: "/noticias/ultimas" },
        { label: "Lançamentos", href: "/noticias/lancamentos" }
      ]
    },
    {
      label: "Entrevistas",
      href: "/vips",
      subLinks: [
        { label: "Benefícios", href: "/vips/beneficios" },
        { label: "Assinar", href: "/vips/assinar" }
      ]
    },
    {
      label: "Mais",
      href: "/contato",
      subLinks: [
        { label: "Videogames", href: "/contato/fale-conosco" },
        { label: "Produtos", href: "/contato/sobre" },
        { label: "Mangás", href: "/contato/sobre" },
        { label: "Filmes", href: "/contato/sobre" },
        { label: "Anime Award", href: "/contato/sobre" },
        { label: "Música", href: "/contato/sobre" }
      ]
    },
    {
      label: "Sobre",
      href: "/contato",
      subLinks: [
        { label: "Fale Conosco", href: "/contato/fale-conosco" },
        { label: "Sobre Nós", href: "/contato/sobre" }
      ]
    }
  ];

  // Handle mouse enter for desktop
  const handleMouseEnter = (label: string) => {
    setOpenDropdown(label);
  };

  // Handle mouse leave for desktop
  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle mobile accordion
  const toggleMobileAccordion = (label: string) => {
    if (openMobileAccordion === label) {
      setOpenMobileAccordion(null);
    } else {
      setOpenMobileAccordion(label);
    }
  };

  return (
    <header className="bg-[#FFFCF6] text-[#4A4E58] border-b-4 border-orange-500">
  
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16  px-[80px]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              <img src="https://a.storyblok.com/f/178900/240x68/6b8290613c/cr_news_logo_orange-white_160x45.png/m/filters:quality(95)format(webp)" alt="" />
            </Link>
          </div>
          
          {/* Navigation for desktop */}
          <nav className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <div 
                key={item.label} 
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link 
                  href={item.href} 
                  className="px-3 py-2 hover:text-[#008382] transition-colors hover:bg-[#E6E5E3] px-4 py-6"
                >
                  {item.label}
                </Link>
                
                {/* Dropdown Modal */}
                {openDropdown === item.label && (
                  <div className="absolute z-10 bg-[#E6E5E3] w-48  shadow-lg pt-5 mt-5 left-0">
                    {item.subLinks.map((subLink) => (
                      <Link 
                        key={subLink.label} 
                        href={subLink.href}
                        className="block px-4 py-2 text-sm hover:bg-indigo-700 transition-colors"
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href='/search' className="cursor-pointer">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.20078 0.799988C13.84 0.799988 17.6008 4.5608 17.6008 9.19999C17.6008 11.1954 16.905 13.0283 15.7429 14.4693L21.2372 19.9636L19.9644 21.2364L14.4701 15.7421C13.0291 16.9042 11.1962 17.6 9.20078 17.6C4.56159 17.6 0.800781 13.8392 0.800781 9.19999C0.800781 4.5608 4.56159 0.799988 9.20078 0.799988ZM9.20078 2.59999C5.5557 2.59999 2.60078 5.55491 2.60078 9.19999C2.60078 12.8451 5.5557 15.8 9.20078 15.8C12.8459 15.8 15.8008 12.8451 15.8008 9.19999C15.8008 5.55491 12.8459 2.59999 9.20078 2.59999Z" fill="#4A4E58"></path>
                </svg>
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="mobile-menu-button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <div key={item.label} className="py-1">
                  <div 
                    className="flex justify-between items-center px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-800"
                    onClick={() => toggleMobileAccordion(item.label)}
                  >
                    <Link 
                      href={item.href}
                      className="block"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {item.label}
                    </Link>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 transform transition-transform ${openMobileAccordion === item.label ? 'rotate-180' : ''}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  
                  {/* Mobile Dropdown */}
                  {openMobileAccordion === item.label && (
                    <div className="pl-4 py-2 space-y-1">
                      {item.subLinks.map((subLink) => (
                        <Link 
                          key={subLink.label} 
                          href={subLink.href}
                          className="block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-white hover:bg-indigo-700"
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;