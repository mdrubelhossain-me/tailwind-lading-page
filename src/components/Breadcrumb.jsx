import React from "react";
import { Link } from "react-router-dom";


const Breadcrumb = ({ title, items = [], bgImage }) => {
  return (
    <div className="relative h-[330px] sm:h-[350px] md:h-[400px] w-full overflow-hidden">
      {/* Background Image */}
      {bgImage && (
        <img
          src={bgImage}
          alt={`${title} background`}
          fill
          className="z-0 object-cover"
          priority
          quality={90}
        />
      )}

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Title & Breadcrumb */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4 space-y-2">
        {title && (
          <h1 className="text-2xl sm:text-3xl font-semibold font-primary capitalize">
            {title}
          </h1>
        )}

        <nav className="font-primary text-sm text-gray-200">
          <ol className="flex flex-wrap justify-center gap-1 sm:gap-2">
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              return (
                <li key={index} className="flex items-center">
                  {!isLast ? (
                    <>
                      <Link
                        to={item.href}
                        className="text-primary hover:underline capitalize"
                      >
                        {item.label}
                      </Link>
                      <span className="mx-2 text-gray-400">/</span>
                    </>
                  ) : (
                    <span className="capitalize text-gray-400">
                      {item.label}
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
