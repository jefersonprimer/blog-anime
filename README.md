"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const MainHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md ">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20 px-[120px]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-indigo-900">Página principal da Crunchyroll</span>
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center justify-between py-4 px-6 bg-gray-800 text-white">
  
            <a
              className="flex items-center space-x-2 text-yellow-500 hover:text-yellow-300"
              href="https://www.crunchyroll.com/pt-br/premium?referrer=newweb_organic_header_news&return_url=https%3A%2F%2Fwww.crunchyroll.com%2Fpt-br%2Fnews#plans"
            >
              <svg width="36" height="26" viewBox="0 0 36 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.916016 7.16665L6.04102 25.9583H29.9577L35.0827 7.16665L24.8248 10.5833L17.9993 0.333313L11.1921 10.5833L0.916016 7.16665Z" fill="#FAB818"></path>
              </svg>
              <span>teste o premium de graça</span>
            </a>

            
            <div className="flex items-center space-x-40">
              <input hidden type="checkbox" checked />
              <div className="themeToggle_toggle__BY7_3 flex items-center space-x-2">
                <div className="themeToggle_circle__KgWZv w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                  <div className="themeToggle_sun__W3T6f text-yellow-500">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.20992 11.76C6.29902 11.76 4.74992 10.2109 4.74992 8.30003C4.74992 6.38912 6.29902 4.84003 8.20992 4.84003C10.1208 4.84003 11.6699 6.38912 11.6699 8.30003C11.6699 10.2109 10.1208 11.76 8.20992 11.76Z" fill="#2B2D32"></path>
                      <path d="M8.20996 3.82002C8.75996 3.82002 9.20996 3.37002 9.20996 2.82002V1.27002C9.20996 0.72002 8.75996 0.27002 8.20996 0.27002C7.65996 0.27002 7.20996 0.72002 7.20996 1.27002V2.82002C7.20996 3.37002 7.65996 3.82002 8.20996 3.82002Z" fill="#2B2D32"></path>
                      <path d="M8.20996 16.33C8.75996 16.33 9.20996 15.88 9.20996 15.33V13.78C9.20996 13.23 8.75996 12.78 8.20996 12.78C7.65996 12.78 7.20996 13.23 7.20996 13.78V15.33C7.20996 15.88 7.65996 16.33 8.20996 16.33Z" fill="#2B2D32"></path>
                    </svg>
                  </div>
                </div>
                <div className="themeToggle_moon__CzfDA text-gray-400">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.60043 6.76999C3.97043 4.91999 3.68043 2.38999 4.63043 0.299988C3.76043 0.529988 2.93043 0.939988 2.20043 1.54999C-0.429567 3.74999 -0.729567 7.60999 1.53043 10.17C3.79043 12.73 7.75043 13.02 10.3804 10.82C11.1104 10.21 11.6504 9.46999 12.0204 8.66999C9.75043 9.27999 7.23043 8.61999 5.60043 6.76999Z" fill="#D8D8D8"></path>
                  </svg>
                </div>
              </div>
            </div>

            
            <div className="flex items-center">
              <button className="accountMenu_userMenu__sLeAW p-2 rounded-full bg-gray-700 hover:bg-gray-600">
                <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.1907 14.6737C19.9366 14.6737 22.9732 11.6328 22.9732 7.88155C22.9732 4.13032 19.9366 1.08936 16.1907 1.08936C12.4448 1.08936 9.4082 4.13032 9.4082 7.88155C9.4082 11.6328 12.4448 14.6737 16.1907 14.6737Z" stroke="white" stroke-width="2.10213" stroke-miterlimit="10"></path>
                  <path d="M2 17.8427L16.1894 15.0577L30.3787 17.8427C30.3787 22.2477 24.0219 29.5088 16.1894 29.5088C8.35683 29.5088 2 22.2477 2 17.8427Z" stroke="white" stroke-width="2.10213" stroke-miterlimit="10"></path>
                </svg>
              </button>

              <div className="accountMenu_accountMenu__YZ3wk hidden group-hover:block">
                <ul className="accountMenu_defaultView__mOld6 bg-white text-gray-900 rounded-lg shadow-lg">
                  <li><a href="https://sso.crunchyroll.com/authorize?client_id=opy75pstrnzw4edkr9ed&redirect_uri=https%3A%2F%2Fwww.crunchyroll.com%2Fcallback&response_type=cookie&state=%2Faccount%2Fpreferences&prompt=register" className="block px-4 py-2 hover:bg-gray-200"><h5>Criar Conta</h5><p>Cadastre-se de graça ou torne-se Premium.</p></a></li>
                  <li><a href="https://sso.crunchyroll.com/authorize?client_id=opy75pstrnzw4edkr9ed&redirect_uri=https%3A%2F%2Fwww.crunchyroll.com%2Fcallback&response_type=cookie&state=%2Fpt-br%2Fnews" className="block px-4 py-2 hover:bg-gray-200"><h5>Login</h5><p>Já é membro da Crunchyroll? Seja bem-vindo.</p></a></li>
                  <li><a href="https://www.crunchyroll.com/pt-br/premium?referrer=newweb_organic_acct_menu_news&return_url=https%3A%2F%2Fwww.crunchyroll.com%2Fpt-br%2Fnews#plans" className="block px-4 py-2 hover:bg-gray-200 text-yellow-500"><svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.7733 5.76876L12.1951 6.37871L12.9012 6.15222L16.5297 4.98844L14.5439 12H3.45612L1.47001 4.98733L5.10881 6.15238L5.8156 6.37867L6.23694 5.76774L9.00109 1.75978L11.7733 5.76876Z" stroke="black" stroke-width="2"></path></svg>TESTE GRÁTIS</a></li>
                </ul>
              </div>
            </div>
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