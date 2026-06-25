import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const timeout = setTimeout(() => setIsOpen(false), 0);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Departments', path: '/departments' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo */}
          <NavLink to="/" className="font-bold text-2xl text-black uppercase tracking-wider">
            ASC College
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <NavLink 
                key={link.path} 
                to={link.path} 
                className={({ isActive }) => 
                  `font-bold hover:underline ${isActive ? 'text-black underline' : 'text-slate-600'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="font-medium text-sm text-slate-900 border border-slate-300 rounded-md px-3 py-1.5 hover:bg-slate-50"
            >
              {isOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white shadow-inner">
          <div className="flex flex-col px-4 py-2 space-y-2">
            {navLinks.map((link) => (
              <NavLink 
                key={link.path} 
                to={link.path} 
                className={({ isActive }) => 
                  `py-2 font-bold block border-b border-slate-200 last:border-0 ${isActive ? 'text-black' : 'text-slate-600'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
