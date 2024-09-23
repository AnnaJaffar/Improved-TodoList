import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white p-4 max-w-full">
      <div className="max-w-full mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold transition-colors duration-300 hover:text-red-500">
        <img src={logo} alt="IbisimKart Logo" className="h-8" />
          
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><Link to="/" className="transition-colors duration-300 hover:text-red-500">Home</Link></li>
            <li><Link to="/contact" className="transition-colors duration-300 hover:text-red-500">Contact Us</Link></li>
            <li><Link to="/privacy" className="transition-colors duration-300 hover:text-red-500">Privacy Policy</Link></li>
          </ul>
        </nav>
        <button 
          className="md:hidden transition-transform duration-300 hover:scale-110"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      <nav className={`mt-4 md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-48' : 'max-h-0'}`}>
        <ul className="flex flex-col space-y-2">
          <li><Link to="/" className="block transition-colors duration-300 hover:text-red-500" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="/contact" className="block transition-colors duration-300 hover:text-red-500" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
          <li><Link to="/privacy" className="block transition-colors duration-300 hover:text-red-500" onClick={() => setIsMenuOpen(false)}>Privacy Policy</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;