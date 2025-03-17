"use client";

import React, { useState } from "react";
import Link from "next/link";

const MainHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-10 px-10">
          {/* Logo */}
          <div>
            <Link href="/" className="text-xl font-bold text-indigo-900">
              Página principal da Crunchyroll
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-4">
              <a
                href="https://www.crunchyroll.com/pt-br/premium"
                className="flex items-center justify-center text-yellow-500 hover:text-yellow-300"
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
                <span className="ml-2 text-sm">Teste o premium de graça</span>
              </a>

              <div className="relative flex items-center">
                <div className="w-10 h-5 flex items-center bg-gray-200 rounded-full p-1 cursor-pointer">
                  <div className="w-4 h-4 bg-gray-800 rounded-full shadow-md transition-transform transform translate-x-0"></div>
                </div>
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
                  </svg>
                </div>
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
            </div>

            <div className="flex items-center gap-10">
              <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 32 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.1907 14.6737C19.9366 14.6737 22.9732 11.6328 22.9732 7.88155C22.9732 4.13032 19.9366 1.08936 16.1907 1.08936C12.4448 1.08936 9.4082 4.13032 9.4082 7.88155C9.4082 11.6328 12.4448 14.6737 16.1907 14.6737Z"
                    stroke="white"
                    strokeWidth="2"
                  ></path>
                  <path
                    d="M2 17.8427L16.1894 15.0577L30.3787 17.8427C30.3787 22.2477 24.0219 29.5088 16.1894 29.5088C8.35683 29.5088 2 22.2477 2 17.8427Z"
                    stroke="white"
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
