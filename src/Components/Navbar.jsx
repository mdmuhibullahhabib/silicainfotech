import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 px-6 py-4 transition-all duration-300 flex items-center justify-between ${
        scrolled ? 'bg-white shadow-md backdrop-blur text-black' : 'bg-transparent text-white'
      }`}
    >
      {/* Logo */}
      <NavLink to="/" className="text-2xl font-bold text-cyan-600">
        SilicaInfoTech
      </NavLink>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 font-medium">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? 'text-cyan-600 border-b-2 border-cyan-600'
                  : 'hover:text-cyan-500'
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className={`absolute top-full left-0 w-full bg-[#0f2027] text-white md:hidden py-4 shadow-lg`}>
          <ul className="flex flex-col items-center gap-4 font-medium">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-cyan-400 border-b-2 border-cyan-400'
                      : 'hover:text-cyan-400'
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
