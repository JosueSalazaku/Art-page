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
    <div className="relative h-20 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center">
        <h1 className="font-bold ml-5 text-xl">Josué Salazaku</h1>

        {/* Hamburger Icon */}
        <div className="cursor-pointer md:hidden ml-5 flex flex-row space-x-2 " onClick={toggleMenu}>
          <div
            className={`h- w-0.5 bg-black mb-1 transition-transform transform ${menuOpen ? 'rotate-90 translate-y-1' : 'rotate-0'}`}
          ></div>
          <div
            className={`h-6 w-0.5 bg-black mb-1 transition-transform transform ${menuOpen ? '-rotate-90 translate-y-1' : 'rotate-0'}`}
          ></div>
          <div
            className={`h-6 w-0.5 bg-black mb-1 transition-transform transform ${menuOpen ? '-rotate-90 translate-y-1' : 'rotate-0'}`}
          ></div>
        </div>
      </div>

      {/* Navigation Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50"
          onClick={closeMenu}
        >
          {/* Navigation Items */}
          <ul className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-extrabold">
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
        </div>
      )}
    </div>
  );
};

export default Header;
