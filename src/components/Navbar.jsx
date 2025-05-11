import React, { useState, useEffect } from "react";
import {
  List as Menu,
  X,
  CaretDown,
  ShoppingCartSimple,
} from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const toggleDesktopDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    setMobileDropdownOpen(false);
  };

  const toggleMobileDropdown = () => {
    setMobileDropdownOpen(!mobileDropdownOpen);
    setDropdownOpen(false);
  };

  useEffect(() => {
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-800 bg-opacity-890 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="text-white px-6 py-5 relative font-primary">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-xl font-bold">
            <NavLink to="/" className="font-primary">
              LOGO
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-sm font-primary">
            <li className="hover:text-gray-300">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `font-primary ${
                    isActive ? "font-semibold text-primary" : ""
                  } text-md`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="hover:text-gray-300">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `font-primary ${
                    isActive ? "font-semibold text-primary" : ""
                  } text-md`
                }
              >
                About
              </NavLink>
            </li>
            <li className="relative cursor-pointer desktop-dropdown">
              <button
                className="flex items-center gap-1 hover:text-gray-300 font-primary text-md"
                onClick={toggleDesktopDropdown}
              >
                <span>Category</span>
                <CaretDown
                  size={14}
                  className={`transition-transform duration-300 mt-0 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {dropdownOpen && (
                <ul className="absolute top-10 left-0 bg-gray-700 shadow-md min-w-[160px] z-50 font-primary">
                  <li className="px-4 py-2 hover:bg-gray-600">
                    <NavLink
                      to="/services/Luxury_Sofa"
                      className={({ isActive }) =>
                        `font-primary ${
                          isActive ? "font-semibold text-primary" : ""
                        } block text-sm`
                      }
                      onClick={() => setDropdownOpen(false)}
                    >
                      Luxury Sofa
                    </NavLink>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-600">
                    <NavLink
                      to="/services/Designer_Chair"
                      className={({ isActive }) =>
                        `font-primary ${
                          isActive ? "font-semibold text-primary" : ""
                        } block text-sm`
                      }
                      onClick={() => setDropdownOpen(false)}
                    >
                      Designer Chair
                    </NavLink>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-600">
                    <NavLink
                      to="/services/Premium_Bed"
                      className={({ isActive }) =>
                        `font-primary ${
                          isActive ? "font-semibold text-primary" : ""
                        } block text-sm`
                      }
                      onClick={() => setDropdownOpen(false)}
                    >
                      Premium Bed
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li className="hover:text-gray-300">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `font-primary ${
                    isActive ? "font-semibold text-primary" : ""
                  } text-md`
                }
              >
                Contact
              </NavLink>
            </li>
            <li className="hover:text-gray-300">
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  `font-primary ${
                    isActive ? "font-semibold text-primary" : ""
                  } text-md`
                }
              >
                Shop
              </NavLink>
            </li>
          </ul>

          {/* Right Menu - Desktop */}
          <ul className="hidden md:flex gap-6 text-sm items-center font-primary">
            <li className="relative hover:text-gray-300">
              <NavLink
                to="/cart"
                className="flex items-center gap-2 text-sm relative font-primary text-md"
              >
                <ShoppingCartSimple size={24} />
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
                  0
                </span>
              </NavLink>
            </li>
            <li className="hover:text-gray-300">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `font-primary ${
                    isActive ? "font-semibold text-primary" : ""
                  } text-md`
                }
              >
                Login
              </NavLink>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Offcanvas Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-[300px] bg-gray-900 text-white transform transition-transform duration-300 ease-in-out z-40 md:hidden ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } font-primary`}
        >
          <div className="p-4 flex justify-between items-center border-b border-gray-700">
            <span className="text-lg font-bold font-primary">Menu</span>
            <button onClick={toggleMenu}>
              <X size={24} />
            </button>
          </div>
          <ul className="flex flex-col p-4 gap-4 text-base font-primary">
            <li onClick={closeMenu}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `font-primary ${
                    isActive ? "font-semibold text-primary" : ""
                  } text-md`
                }
              >
                Home
              </NavLink>
            </li>
            <li onClick={closeMenu}>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `font-primary ${
                    isActive ? "font-semibold text-primary" : ""
                  } text-md`
                }
              >
                About
              </NavLink>
            </li>
            <li className="relative cursor-pointer mobile-dropdown">
              <button
                onClick={toggleMobileDropdown}
                className="flex items-center justify-between w-full font-primary text-md"
              >
                <span>Categories</span>
                <CaretDown
                  size={16}
                  className={`transition-transform ${
                    mobileDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileDropdownOpen && (
                <ul className="pl-4 mt-4 space-y-3 font-primary">
                  <li onClick={closeMenu}>
                    <NavLink
                      to="/services/Luxury_Sofa"
                      className={({ isActive }) =>
                        `font-primary ${
                          isActive ? "font-semibold text-primary" : ""
                        } block text-sm`
                      }
                    >
                      Luxury Sofa
                    </NavLink>
                  </li>
                  <li onClick={closeMenu}>
                    <NavLink
                      to="/services/Designer_Chair"
                      className={({ isActive }) =>
                        `font-primary ${
                          isActive ? "font-semibold text-primary" : ""
                        } block text-sm`
                      }
                    >
                      Designer Chair
                    </NavLink>
                  </li>
                  <li onClick={closeMenu}>
                    <NavLink
                      to="/services/Premium_Bed"
                      className={({ isActive }) =>
                        `font-primary ${
                          isActive ? "font-semibold text-primary" : ""
                        } block text-sm`
                      }
                    >
                      Premium Bed
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li onClick={closeMenu}>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `font-primary ${
                    isActive ? "font-semibold text-primary" : ""
                  } text-md`
                }
              >
                Contact
              </NavLink>
            </li>
            <li className="relative hover:text-gray-300" onClick={closeMenu}>
              <NavLink
                to="/cart"
                className="flex items-center gap-2 text-sm relative font-primary text-md"
              >
                <ShoppingCartSimple size={24} />
                <span className="absolute -top-1 left-4 bg-red-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
                  0
                </span>
              </NavLink>
            </li>
            <li onClick={closeMenu}>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `font-primary ${
                    isActive ? "font-semibold text-primary" : ""
                  } text-md`
                }
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
