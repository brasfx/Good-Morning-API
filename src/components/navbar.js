import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Brightness4Icon from '@material-ui/icons/Brightness4';

export default function NavBar() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const toggleButton = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  return (
    <nav className="mb-4">
      <div className="2xl:max-w-full xl:max-w-full lg:max-w-full md:max-w-full mx-auto sm:px-6 md:px-0 lg:px-2 xl:px-0">
        <div className="relative flex items-center justify-between h-20 bg-green-200 p-10 pr-32">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-indigo-700 hover:text-white hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleButton}
            >
              <span className="sr-only">
                {isMenuOpened ? 'Fechar menu' : 'Abrir menu'}
              </span>
              {isMenuOpened ? (
                <svg
                  className="block bg-green-200 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block bg-green-200 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="hidden md:contents">
            <Brightness4Icon className="text-yellow-400 hover:text-blue-600" />
            <Link to="/">
              <h3 className="ml-1 text-xl font-semibold text-black hover:text-gray-900">
                Bom dia Brasil
              </h3>
            </Link>
            <div className="flex-1 flex items-center justify-end sm:items-stretch sm:justify-end">
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4 items-center">
                  <Link
                    to="/"
                    className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium"
                    onClick={toggleButton}
                  >
                    Inicio
                  </Link>
                  <Link
                    to="/news"
                    className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium"
                  >
                    Noticias
                  </Link>

                  <Link
                    to="/about"
                    className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium"
                  >
                    Sobre
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpened ? (
        <div
          className="md:hidden max-w-2xl mx-auto px-2 sm:px-6 lg:px-2"
          id="mobile-menu"
        >
          <div className="flex flex-col sm:px-2 sm:pt-2 sm:pb-3 space-y-1 md:w-1/2">
            <Link
              to="/"
              className="text-indigo-700 hover:bg-green-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleButton}
            >
              Inicio
            </Link>
            <Link
              to="/news"
              className="text-indigo-700 hover:bg-green-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleButton}
            >
              Noticias
            </Link>
            <Link
              to="/about"
              className="text-indigo-700 hover:bg-green-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Sobre
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
