
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Linkedin, Mail } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 z-50 p-6 w-full">
      <div className="flex items-center justify-between">
        {/* Hamburger for mobile */}
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
        <div className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors hover:text-[#c4ff0d] ${
              location.pathname === '/' ? 'text-[#c4ff0d]' : 'text-white'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`text-sm font-medium transition-colors hover:text-[#c4ff0d] ${
              location.pathname === '/about' ? 'text-[#c4ff0d]' : 'text-white'
            }`}
          >
            About Me
          </Link>
          <Link 
            to="/projects" 
            className={`text-sm font-medium transition-colors hover:text-[#c4ff0d] ${
              location.pathname === '/projects' ? 'text-[#c4ff0d]' : 'text-white'
            }`}
          >
            Featured Projects
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <a 
            href="https://www.linkedin.com/in/partish-pednekar-391229260" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-[#c4ff0d] transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="mailto:partish2331@gmail.com"
            className="text-white hover:text-[#c4ff0d] transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-gray-900 rounded-lg shadow-lg p-4 flex flex-col gap-4">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors hover:text-[#c4ff0d] ${
              location.pathname === '/' ? 'text-[#c4ff0d]' : 'text-white'
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`text-sm font-medium transition-colors hover:text-[#c4ff0d] ${
              location.pathname === '/about' ? 'text-[#c4ff0d]' : 'text-white'
            }`}
            onClick={() => setMenuOpen(false)}
          >
            About Me
          </Link>
          <Link 
            to="/projects" 
            className={`text-sm font-medium transition-colors hover:text-[#c4ff0d] ${
              location.pathname === '/projects' ? 'text-[#c4ff0d]' : 'text-white'
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Featured Projects
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
