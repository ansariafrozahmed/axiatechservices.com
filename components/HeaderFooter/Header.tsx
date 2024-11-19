"use client";
import Image from "next/image";
import React, { useState } from "react";
import ContactButton from "../ContactButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white ">
      <nav className="container mx-auto flex items-center justify-between py-4 px-5 md:px-10">
        {/* Logo Section */}
        <div className="w-32 lg:w-36">
          <Image
            src="https://sagarhr.com/wp-content/uploads/2024/01/HR-Logos8-1536x375.png"
            alt="Sagar HR Logo"
            className="w-full object-contain"
            height={48}
            width={192}
            priority
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 text-xs tracking-widest font-medium uppercase">
          <a href="#" className="hover-class">
            Home
          </a>
          <a href="#about" className="hover-class">
            About
          </a>
          <a href="#services" className="hover-class">
            Services
          </a>
        </div>

        {/* Contact Button */}
        <div className="hidden lg:block">
          <ContactButton />
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="block lg:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
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
              strokeWidth="2"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[100%] bg-white z-50 transition-transform transform ease duration-500 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5">
          <div className="w-32">
            <Image
              src="https://sagarhr.com/wp-content/uploads/2024/01/HR-Logos8-1536x375.png"
              alt="Sagar HR Logo"
              className="w-full object-contain"
              height={48}
              width={192}
              priority
            />
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-800 focus:outline-none"
            aria-label="Close Menu"
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
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <ul className="flex flex-col gap-7 p-5 text-xs font-medium uppercase tracking-widest">
          <li>
            <a href="#" className="hover:text-primaryGreen">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-primaryGreen">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-primaryGreen">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-primaryGreen">
              Contact
            </a>
          </li>
        </ul>
      </div>
      {/* Backdrop */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black opacity-50 z-40"
        ></div>
      )}
    </header>
  );
};

export default Header;
