import React from "react";
import HeroBg from "../../assets/images/hero.jpg";
import { MagnifyingGlass } from "@phosphor-icons/react";

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HeroBg})` }}
      ></div>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Centered Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-primary leading-snug md:leading-tight">
            Discover Elegant & Comfortable Furniture for Every Room
          </h1>
          <p className="text-lg max-w-[600px] mx-auto md:text-xl mb-7 font-primary text-gray-300">
            We offer premium furniture solutions that enhance comfort, style,
            and functionality—perfect for transforming your home or office space
            today.
          </p>

          {/* Search Bar */}
          <div className="flex items-center justify-center max-w-md mx-auto bg-white rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Search furniture..."
              className="flex-grow px-4 py-2 text-black outline-none font-primary"
            />
            <button className="bg-black text-white px-4 py-2 font-primary hover:bg-gray-800 transition">
              <MagnifyingGlass size={32} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom white blurred overlay */}
      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-white via-transparent to-transparent blur-sm pointer-events-none" />
    {/* Hover button for showing tooltip box */}
    
    

    </div>
  );
};

export default Hero;
