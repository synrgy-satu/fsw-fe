import React, { useState } from "react";
import { useAuth } from "../../context/authContext";
import { Link } from "react-router-dom";
import logo from "/images/lgtagline.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { authState } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-gray-200 shadow-lg" aria-label="Main Navigation">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse z-20"
          aria-label="Homepage"
        >
          <img src={logo} className="h-8" alt="Company logo" />
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse z-20">
          <div className="max-md:hidden">
            {authState ? (
              <Link
                to="/portal"
                className="px-4 mr-4 py-2 text-base font-bold bg-blue-gsm-100 text-white rounded-md"
                aria-label="Go to Dashboard"
              >
                Dashboard
              </Link>
            ) : (
              <div className="flex items-center justify-center">
                <Link
                  to="/login"
                  className="px-4 mr-4 py-2 text-base font-bold bg-blue-gsm-100 text-white rounded-md"
                  aria-label="Login"
                >
                  Masuk
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 text-base outline outline-2 outline-blue-gsm-100 text-blue-gsm-100 font-bold rounded-md"
                  aria-label="Register"
                >
                  Mendaftar
                </Link>
              </div>
            )}
          </div>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-cta"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close main menu" : "Open main menu"}
          >
            <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
            {isOpen ? (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={`absolute top-0 left-0 w-full h-screen bg-white z-10 transition-transform transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:relative md:translate-x-0 md:bg-transparent md:w-auto md:h-auto md:flex md:items-center md:order-1`}
          id="navbar-cta"
          role="menu"
        >
          <div className="flex justify-end p-4 md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-label="Close menu"
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col font-medium p-4 md:mt-0 md:p-0 md:flex-row md:space-x-8">
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-blue-gsm-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-gsm-100"
                aria-current="page"
                aria-label="Individu section"
              >
                Individu
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-blue-gsm-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-gsm-100"
                aria-label="Bisnis section"
              >
                Bisnis
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-blue-gsm-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-gsm-100"
                aria-label="Prioritas section"
              >
                Prioritas
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-blue-gsm-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-gsm-100"
                aria-label="Tentang Kami section"
              >
                Tentang Kami
              </a>
            </li>

            {authState ? (
              <li className="sm:hidden flex items-center justify-center">
                <Link
                  to="/portal"
                  className="px-4 mr-4 py-2 text-base font-bold bg-blue-gsm-100 text-white rounded-md"
                  aria-label="Go to Dashboard"
                >
                  Dashboard
                </Link>
              </li>
            ) : (
              <li className="sm:hidden flex items-center justify-center">
                <Link
                  to="/login"
                  className="px-4 mr-4 py-2 text-base font-bold bg-blue-gsm-100 text-white rounded-md"
                  aria-label="Login"
                >
                  Masuk
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 text-base outline outline-2 outline-blue-gsm-100 text-blue-gsm-100 font-bold rounded-md"
                  aria-label="Register"
                >
                  Mendaftar
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
