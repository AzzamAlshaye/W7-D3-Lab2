// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const linkClass = (path) =>
    `block px-6 py-3 font-medium rounded-md transition
     ${
       pathname === path
         ? "bg-white text-black" /* active = white bg, black text */
         : "text-white hover:bg-gray-200 hover:text-black" /* hover = light gray bg, black text */
     }`;

  return (
    <nav className="bg-black text-white shadow-md relative">
      <div className="container mx-auto flex items-center justify-between lg:justify-normal lg:gap-10 p-4">
        {/* Brand */}
        <Link to="/" className="flex items-center space-x-2">
          {/* invert your logo if it’s colored */}
          <img src="logo.webp" alt="wikipedia icon" className="h-15 filter " />
          <span className="text-xl font-bold">wikipedia</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex space-x-4">
          <Link to="/" className={linkClass("/")}>
            Home
          </Link>
          <Link to="/articles" className={linkClass("/articles")}>
            Articles
          </Link>
        </div>

        {/* Burger button */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="lg:hidden focus:outline-none"
        >
          {menuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden bg-black overflow-hidden transition-[max-height] duration-300
          ${menuOpen ? "max-h-screen" : "max-h-0"}`}
      >
        <ul className="flex flex-col">
          <li>
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className={linkClass("/")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/articles"
              onClick={() => setMenuOpen(false)}
              className={linkClass("/articles")}
            >
              Articles
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
