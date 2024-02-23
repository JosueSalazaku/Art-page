import { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ routes }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="h-20 flex flex-row md:flex-row text-white bg-black justify-between items-center relative">
      <div className="flex items-center">
        <Link to="/Landing" className="font-bold ml-8 text-xl">
          Josué Salazaku
        </Link>
      </div>

      {/* Hamburger Icon */}
      <div
        className="cursor-pointer md:hidden flex flex-row space-x-2 mr-5"
        onClick={toggleMenu}
      >
        <div
          className={`h-6 w-0.5 bg-white mb-1 transition-transform transform ${
            menuOpen ? "rotate-45" : "rotate-0"
          }`}
        ></div>
        <div
          className={`h-6 w-0.5 bg-white mb-1 transition-opacity ${
            menuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className={`h-6 w-0.5 bg-white transition-transform transform ${
            menuOpen ? "-rotate-45" : "rotate-0"
          }`}
        ></div>
      </div>

      {/* Navigation Items */}
      <ul
        className={`md:flex space-x-5 mx-8 font-extrabold ${
          menuOpen
            ? "flex flex-col md:flex-row absolute top-20 md:top-0 right-0 left-0 md:right-auto items-center z-50"
            : "hidden md:flex"
        }`}
      >
        {routes.map((route) => (
          <li className="my-3" key={route.to} onClick={closeMenu}>
            <Link to={route.to}>{route.label}</Link>
          </li>
        ))}
      </ul>

      {/* Navigation Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-slate-600 bg-opacity-50 z-40"
          onClick={closeMenu}
        ></div>
      )}
    </div>
  );
};

export default Header;
