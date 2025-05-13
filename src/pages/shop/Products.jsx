import React, { useState } from "react";
import productsData from "../../utils/products";
import ProductCard from "../shop/ProductCard";
import { ArrowRight } from "@phosphor-icons/react";

const Products = ({ title }) => {
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const categories = ["All", "Sofa", "Bed", "Chair", "Almari"];

  // Handle category filtering
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setShowAll(false); // category change then again show 4 products
    if (category === "All") {
      setFilteredProducts(productsData);
    } else {
      const filtered = productsData.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

  // কটা প্রোডাক্ট দেখাবে সেটা নির্ধারণ
  const displayedProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 4);

  return (
    <div className="relative z-10">
      {/* Decorative Background Blur */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#f8f9fa] via-white to-[#f0f4ff] backdrop-blur-xl"></div>

      {/* Container */}
      <div className="container mx-auto py-20 font-primary">
        {/* Section Title */}
        <div className="text-center mx-auto">
          <h1 className="text-4xl text-secondary font-semibold">{title}</h1>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center space-x-5 mt-5 mb-10 bg-white/70 backdrop-blur-md shadow-sm max-w-md mx-auto py-2 rounded-3xl border border-gray-200">
          {categories.map((category) => (
            <button
              key={category}
              className={`text-md px-4 py-1 font-medium rounded-2xl transition duration-300 ${
                activeCategory === category
                  ? "bg-primary text-white shadow-md"
                  : "text-gray-700 hover:text-secondary"
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:px-4 2xl:px-0">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View More Button */}
        {!showAll && filteredProducts.length > 4 && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="flex gap-1 items-center px-6 py-2 bg-primary text-white text-sm font-primary rounded-full shadow hover:bg-secondary transition duration-300"
            >
              <span>View More</span>
              <ArrowRight size={24} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
