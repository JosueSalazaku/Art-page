import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="h-20 flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-row items-center">
        <h1 className="font-bold ml-5 text-xl">Josué Salazaku</h1>
      </div>

      {/* Hamburger Icon */}
      <div
        className="cursor-pointer md:hidden flex flex-row space-x-2 ml-5"
        onClick={toggleMenu}
      >
        <div className={`h-6 w-0.5 bg-black mb-1 transition-transform transform ${menuOpen ? 'rotate-45' : 'rotate-0'}`}></div>
        <div className={`h-6 w-0.5 bg-black mb-1 transition-opacity ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
        <div className={`h-6 w-0.5 bg-black transition-transform transform ${menuOpen ? '-rotate-45' : 'rotate-0'}`}></div>
      </div>

      {/* Navigation Items */}
      <ul className={`md:flex space-x-5 ${menuOpen ? 'flex flex-col md:flex-row absolute md:static top-20 md:top-0 right-0 left-0 md:right-auto' : 'hidden md:flex'}`}>
        <li className="my-3" onClick={closeMenu}>
          <a href="">Art</a>
        </li>
        <li className="my-3" onClick={closeMenu}>
          <a href="">About me</a>
        </li>
        <li className="my-3" onClick={closeMenu}>
          <a href="">Contact</a>
        </li>
      </ul>

      {/* Navigation Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50"
          onClick={closeMenu}
        ></div>
      )}
    </div>
  );
};

export default Header;
