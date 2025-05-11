import React from "react";
import { Link } from "react-router-dom";
import {
  FacebookLogo,
  TwitterLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 font-primary">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* About Section */}
        <div className="font-primary">
          <h3 className="text-lg font-semibold mb-4 text-white">About</h3>
          <p className="text-sm leading-relaxed">
            We are dedicated to providing the best furniture and decor
            solutions. Your comfort and satisfaction are our priorities.
          </p>
          <div className="flex space-x-4 mt-5">
            <Link to="/facebook" className="hover:text-white transition">
              <FacebookLogo size={22} weight="fill" />
            </Link>
            <Link to="#" className="hover:text-white transition">
              <TwitterLogo size={22} weight="fill" />
            </Link>
            <Link to="#" className="hover:text-white transition">
              <InstagramLogo size={22} weight="fill" />
            </Link>
            <Link to="#" className="hover:text-white transition">
              <LinkedinLogo size={22} weight="fill" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="font-primary">
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="#" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Address */}
        <div className="font-primary">
          <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
          <p className="text-sm">123 Main Street</p>
          <p className="text-sm">Dhaka, Bangladesh</p>
          <p className="text-sm mt-2">Email: info@example.com</p>
          <p className="text-sm">Phone: +880 1234-567890</p>
        </div>

        {/* Subscribe */}
        <div className="font-primary">
          <h3 className="text-lg font-semibold mb-4 text-white">Subscribe</h3>
          <p className="text-sm mb-4">
            Get updates and special offers delivered to your inbox.
          </p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm font-primary">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <Link to="#" className="hover:text-white transition">
            Facebook
          </Link>
          <Link to="#" className="hover:text-white transition">
            Twitter
          </Link>
          <Link to="#" className="hover:text-white transition">
            Instagram
          </Link>
          <Link to="#" className="hover:text-white transition">
            LinkedIn
          </Link>
        </div>
        <p className="mt-4">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
