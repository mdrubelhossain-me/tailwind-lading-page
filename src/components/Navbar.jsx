import React, { useState, useEffect } from "react";
import { List as Menu, X, CaretDown } from "@phosphor-icons/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const toggleDesktopDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    setMobileDropdownOpen(false); // Close mobile dropdown if any
  };

  const toggleMobileDropdown = () => {
    setMobileDropdownOpen(!mobileDropdownOpen);
    setDropdownOpen(false); // Close desktop dropdown if any
  };

  useEffect(() => {
    // Close dropdown if clicked outside
    const handleClickOutside = (event) => {
      if (event.target.closest(".desktop-dropdown") === null) {
        setDropdownOpen(false);
      }
      if (event.target.closest(".mobile-dropdown") === null) {
        setMobileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-gray-800 text-white p-4 relative z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="text-xl font-bold">Brand</div>

        {/* Center Menu - Desktop */}
        <ul className="hidden md:flex gap-6 text-sm">
          <li className="hover:text-gray-300">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-gray-300">
            <a href="#about">About</a>
          </li>
          <li className="relative cursor-pointer desktop-dropdown">
            <button
              className="flex items-center gap-1 hover:text-gray-300"
              onClick={toggleDesktopDropdown}
            >
              <span>Services</span>
              <CaretDown
                size={14}
                className={`transition-transform duration-300 mt-1 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {dropdownOpen && (
              <ul className="absolute top-10 left-0 bg-gray-700 rounded shadow-md min-w-[160px] z-50">
                <li className="px-4 py-2 hover:bg-gray-600">
                  <a href="#web" className="block" onClick={() => setDropdownOpen(false)}>
                    Web Design
                  </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-600">
                  <a href="#seo" className="block" onClick={() => setDropdownOpen(false)}>
                    SEO
                  </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-600">
                  <a href="#marketing" className="block" onClick={() => setDropdownOpen(false)}>
                    Marketing
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li className="hover:text-gray-300">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Right Menu - Desktop */}
        <ul className="hidden md:flex gap-4 text-sm items-center">
          <li className="hover:text-gray-300">
            <a href="#cart">Cart</a>
          </li>
          <li className="hover:text-gray-300">
            <a href="#login">Login</a>
          </li>
        </ul>

        {/* Hamburger - Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Offcanvas Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out z-40 md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-700">
          <span className="text-lg font-bold">Menu</span>
          <button onClick={toggleMenu}>
            <X size={24} />
          </button>
        </div>
        <ul className="flex flex-col p-4 gap-4 text-base">
          <li onClick={closeMenu}>
            <a href="#home">Home</a>
          </li>
          <li onClick={closeMenu}>
            <a href="#about">About</a>
          </li>
          <li className="relative cursor-pointer mobile-dropdown">
            <button
              onClick={toggleMobileDropdown}
              className="flex items-center justify-between w-full"
            >
              <span>Services</span>
              <CaretDown
                size={16}
                className={`transition-transform ${
                  mobileDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobileDropdownOpen && (
              <ul className="pl-4 mt-2 space-y-2">
                <li onClick={closeMenu}>
                  <a href="#web" className="block">Web Design</a>
                </li>
                <li onClick={closeMenu}>
                  <a href="#seo" className="block">SEO</a>
                </li>
                <li onClick={closeMenu}>
                  <a href="#marketing" className="block">Marketing</a>
                </li>
              </ul>
            )}
          </li>
          <li onClick={closeMenu}>
            <a href="#contact">Contact</a>
          </li>
          <li onClick={closeMenu}>
            <a href="#cart">Cart</a>
          </li>
          <li onClick={closeMenu}>
            <a href="#login">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
