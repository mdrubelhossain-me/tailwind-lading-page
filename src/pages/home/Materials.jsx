import React from "react";
import imag1 from "../../assets/images/bg5.jpg";
import imag2 from "../../assets/images/bg3.jpg";
import imag3 from "../../assets/images/bg4.jpg";
import imag4 from "../../assets/images/bg6.jpg";
import { CheckCircle } from "@phosphor-icons/react";

const Materials = () => {
  // Image list (dynamic option)
  const images = [imag1, imag2, imag3, imag4];

  // Key features
  const features = [
    "Eco-friendly and sustainable choices",
    "Durable and long-lasting materials",
    "Premium textures and finishes",
    "Sourced from trusted global suppliers",
  ];

  return (
    <div className="relative z-10 py-20 font-primary overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#f0f4ff] via-white to-[#f8f9fa] backdrop-blur-xl" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left: Image Masonry Grid */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Material ${idx + 1}`}
                className={`w-full h-[230px] object-cover rounded-xl shadow-md ${
                  idx % 2 === 0 ? "row-span-2" : "row-span-1"
                }`}
              />
            ))}
          </div>

          {/* Right: Text Content */}
          <div className="lg:w-1/2 space-y-6">
            <div>
              <p className="text-sm text-primary font-medium uppercase tracking-wider">
                Premium Quality
              </p>
              <h2 className="text-4xl font-bold text-secondary mt-1">
                Our Materials
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We believe that great design starts with great materials. From
              natural wood grains to engineered composites, our carefully
              curated collection ensures that every piece we craft is both
              beautiful and built to last. Whether you're after timeless
              elegance or modern textures, we have something for every
              aesthetic.
            </p>
            <ul className="space-y-3">
              {features.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle size={22} className="text-primary mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Materials;
