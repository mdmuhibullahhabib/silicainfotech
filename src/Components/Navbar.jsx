import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
    <div
      className={`navbar fixed w-full z-50 px-6 py-4 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md backdrop-blur'
          : 'bg-transparent text-white'
      }`}
    >
      <div className="flex-1">
        <NavLink to="/" className="text-2xl font-bold text-cyan-700">
          SilicalInfoTech
        </NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 space-x-4 font-medium">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? 'text-cyan-600 border-b-2 border-cyan-600'
                    : 'hover:text-cyan-600'
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
