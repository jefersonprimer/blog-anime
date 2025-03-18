"use client";

import React, { useState } from "react";
import Link from "next/link";

const MainHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    // Here you would add logic to actually change the theme of your application
  };

  return (
    <header className="bg-gradient-to-r from-[#FFFCF6] via-[#DDDDDC] to-[#D7D7D7] ">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-10 px-[160px]">
          {/* Logo */}
          <div>
            <Link href="/" className="font-size-[16px] font-bold text-[#008382]">
              Página principal da Crunchyroll
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Premium button */}
            <div className="rounded-[10px] border py-[2px] px-2 cursor-pointer bg-white hover:bg-gray-300">
              <a
                href="https://www.crunchyroll.com/pt-br/premium"
                className="flex items-center justify-center"
              >
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 36 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.916016 7.16665L6.04102 25.9583H29.9577L35.0827 7.16665L24.8248 10.5833L17.9993 0.333313L11.1921 10.5833L0.916016 7.16665Z"
                      fill="#FAB818"
                    />
                  </svg>
                </span>
                <span className="ml-2 text-sm text-[#4A4E58]">Teste o premium de graça</span>
              </a>
            </div>

            {/* Theme button */}
            <div className="relative flex items-center cursor-pointer" onClick={toggleTheme}>
              <div className="w-10 h-5 flex items-center bg-[#4a4e58] rounded-full p-1">
                <div className={`w-4 h-4 bg-gray-800 rounded-full shadow-md transition-transform duration-300 absolute ${isDarkTheme ? 'transform translate-x-5' : 'transform translate-x-0'}`}></div>
              </div>
              {/* Sun icon */}
              <div className="absolute left-1 top-1 w-4 h-4">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.20992 11.76C6.29902 11.76 4.74992 10.2109 4.74992 8.30003C4.74992 6.38912 6.29902 4.84003 8.20992 4.84003C10.1208 4.84003 11.6699 6.38912 11.6699 8.30003C11.6699 10.2109 10.1208 11.76 8.20992 11.76Z"
                    fill="#2B2D32"
                  />
                  <path d="M8.20996 3.82002C8.75996 3.82002 9.20996 3.37002 9.20996 2.82002V1.27002C9.20996 0.72002 8.75996 0.27002 8.20996 0.27002C7.65996 0.27002 7.20996 0.72002 7.20996 1.27002V2.82002C7.20996 3.37002 7.65996 3.82002 8.20996 3.82002Z" fill="#2B2D32"></path>
                  <path d="M8.20996 16.33C8.75996 16.33 9.20996 15.88 9.20996 15.33V13.78C9.20996 13.23 8.75996 12.78 8.20996 12.78C7.65996 12.78 7.20996 13.23 7.20996 13.78V15.33C7.20996 15.88 7.65996 16.33 8.20996 16.33Z" fill="#2B2D32"></path>
                  <path d="M4.34027 5.42014C4.60027 5.42014 4.85027 5.32014 5.05027 5.13014C5.44027 4.74014 5.44027 4.11014 5.05027 3.72014L3.95027 2.62014C3.56027 2.23014 2.93027 2.23014 2.54027 2.62014C2.15027 3.01014 2.15027 3.64014 2.54027 4.03014L3.64027 5.13014C3.84027 5.33014 4.09027 5.42014 4.35027 5.42014H4.34027Z" fill="#2B2D32"></path>
                  <path d="M13.1899 14.27C13.4499 14.27 13.6999 14.17 13.8999 13.98C14.2899 13.59 14.2899 12.96 13.8999 12.57L12.7999 11.47C12.4099 11.08 11.7799 11.08 11.3899 11.47C10.9999 11.86 10.9999 12.49 11.3899 12.88L12.4899 13.98C12.6899 14.18 12.9399 14.27 13.1999 14.27H13.1899Z" fill="#2B2D32"></path>
                  <path d="M1.18047 9.2998H2.73047C3.28047 9.2998 3.73047 8.8498 3.73047 8.2998C3.73047 7.7498 3.28047 7.2998 2.73047 7.2998H1.18047C0.63047 7.2998 0.18047 7.7498 0.18047 8.2998C0.18047 8.8498 0.63047 9.2998 1.18047 9.2998Z" fill="#2B2D32"></path>
                  <path d="M13.7 9.30005H15.25C15.8 9.30005 16.25 8.85005 16.25 8.30005C16.25 7.75005 15.8 7.30005 15.25 7.30005H13.7C13.15 7.30005 12.7 7.75005 12.7 8.30005C12.7 8.85005 13.15 9.30005 13.7 9.30005Z" fill="#2B2D32"></path>
                  <path d="M3.24027 14.2702C3.50027 14.2702 3.75027 14.1702 3.95027 13.9802L5.05027 12.8802C5.44027 12.4902 5.44027 11.8602 5.05027 11.4702C4.66027 11.0802 4.03027 11.0802 3.64027 11.4702L2.54027 12.5702C2.15027 12.9602 2.15027 13.5902 2.54027 13.9802C2.73027 14.1802 2.99027 14.2702 3.25027 14.2702H3.24027Z" fill="#2B2D32"></path>
                  <path d="M12.0899 5.42001C12.3499 5.42001 12.5999 5.32001 12.7999 5.13001L13.8999 4.03001C14.2899 3.64002 14.2899 3.01001 13.8999 2.62001C13.5099 2.23001 12.8799 2.23001 12.4899 2.62001L11.3899 3.72001C10.9999 4.11001 10.9999 4.74002 11.3899 5.13001C11.5799 5.33001 11.8399 5.42001 12.0999 5.42001H12.0899Z" fill="#2B2D32"></path>
                </svg>
              </div>
              {/* Moon icon */}
              <div className="absolute right-1 top-1 w-4 h-4">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.60043 6.76999C3.97043 4.91999 3.68043 2.38999 4.63043 0.299988C3.76043 0.529988 2.93043 0.939988 2.20043 1.54999C-0.429567 3.74999 -0.729567 7.60999 1.53043 10.17C3.79043 12.73 7.75043 13.02 10.3804 10.82C11.1104 10.21 11.6504 9.46999 12.0204 8.66999C9.75043 9.27999 7.23043 8.61999 5.60043 6.76999Z"
                    fill="#D8D8D8"
                  />
                </svg>
              </div>
            </div>

            {/* Login button */}
            <div className="flex items-center px-2 hover:bg-white">
              <button className="p-2 rounded-full cursor-pointer group">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 32 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-[#52565F] group-hover:stroke-[#2ABDBB]"
                >
                  <path
                    d="M16.1907 14.6737C19.9366 14.6737 22.9732 11.6328 22.9732 7.88155C22.9732 4.13032 19.9366 1.08936 16.1907 1.08936C12.4448 1.08936 9.4082 4.13032 9.4082 7.88155C9.4082 11.6328 12.4448 14.6737 16.1907 14.6737Z"
                    strokeWidth="2"
                  ></path>
                  <path
                    d="M2 17.8427L16.1894 15.0577L30.3787 17.8427C30.3787 22.2477 24.0219 29.5088 16.1894 29.5088C8.35683 29.5088 2 22.2477 2 17.8427Z"
                    strokeWidth="2"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-indigo-600"
              onClick={toggleMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              <Link
                href="/login"
                className="text-gray-700 hover:text-indigo-600 px-4 py-2 block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Entrar
              </Link>
              <Link
                href="/signup"
                className="text-gray-700 hover:text-indigo-600 px-4 py-2 block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Cadastrar
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default MainHeader;