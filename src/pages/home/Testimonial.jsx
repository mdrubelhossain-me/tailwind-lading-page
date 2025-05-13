import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import testimonialData from "../../utils/testimonialData";

const Testimonial = () => {
  return (
    <div className="relative py-16 bg-gradient-to-br from-[#f0f4ff] to-[#ffffff] overflow-hidden rounded-xl shadow-xl">
      {/* Decorative blurred background */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-30 z-0"></div>
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-purple-100 rounded-full filter blur-3xl opacity-30 z-0"></div>

      <div className="container mx-auto px-4 relative z-10 font-primary">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What Our Clients Say
          </h2>
          <p className="text-md md:text-lg text-gray-600 mt-2">
            Hear from our happy customers
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-20">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            navigation={true}
            pagination={{ clickable: true }}
            modules={[Pagination, Navigation, Autoplay]}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {testimonialData.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-[1.02] duration-300 h-full flex flex-col justify-between">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-blue-200"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.designation}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">
                    "{testimonial.speech}"
                  </p>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, index) => {
                      const fullStars = Math.floor(testimonial.rating);
                      const hasHalfStar = testimonial.rating % 1 >= 0.5;
                      if (index < fullStars) {
                        // Full star
                        return (
                          <svg
                            key={index}
                            className="rating-icon"
                            width="12"
                            height="12"
                            viewBox="0 0 22 21"
                            stroke="#ED9615"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20.9646 9.7671L16.7459 13.4074L18.0312 18.8515C18.1021 19.147 18.0838 19.4569 17.9787 19.7421C17.8736 20.0272 17.6863 20.2748 17.4405 20.4536C17.1947 20.6324 16.9015 20.7343 16.5978 20.7465C16.2941 20.7587 15.9936 20.6806 15.7343 20.5221L10.9999 17.6083L6.26275 20.5221C6.00347 20.6797 5.70335 20.757 5.4002 20.7444C5.09704 20.7318 4.8044 20.6297 4.55913 20.4511C4.31386 20.2725 4.12692 20.0253 4.02185 19.7406C3.91678 19.456 3.89829 19.1466 3.96869 18.8515L5.25869 13.4074L1.03994 9.7671C0.810533 9.56882 0.644621 9.30736 0.562925 9.01536C0.481229 8.72336 0.48737 8.41376 0.580581 8.12522C0.673791 7.83669 0.849941 7.58201 1.08703 7.39299C1.32412 7.20397 1.61164 7.08899 1.91369 7.06241L7.44494 6.61616L9.57869 1.45241C9.69418 1.17099 9.89076 0.930267 10.1434 0.760851C10.3961 0.591435 10.6934 0.500977 10.9976 0.500977C11.3018 0.500977 11.5991 0.591435 11.8518 0.760851C12.1044 0.930267 12.301 1.17099 12.4165 1.45241L14.5493 6.61616L20.0806 7.06241C20.3832 7.088 20.6716 7.20234 20.9095 7.3911C21.1475 7.57986 21.3244 7.83464 21.4182 8.12352C21.512 8.41241 21.5185 8.72254 21.4368 9.01508C21.3551 9.30761 21.1889 9.56954 20.959 9.76803L20.9646 9.7671Z"
                              fill="#ED9615"
                            />
                          </svg>
                        );
                      } else if (index === fullStars && hasHalfStar) {
                        // Half star
                        return (
                          <svg
                            key={index}
                            className="rating-icon"
                            width="12"
                            height="12"
                            viewBox="0 0 22 21"
                            stroke="#ED9615"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.9999 0.500977C11.3018 0.500977 11.5991 0.591435 11.8518 0.760851C12.1044 0.930267 12.301 1.17099 12.4165 1.45241L14.5493 6.61616L20.0806 7.06241C20.3832 7.088 20.6716 7.20234 20.9095 7.3911C21.1475 7.57986 21.3244 7.83464 21.4182 8.12352C21.512 8.41241 21.5185 8.72254 21.4368 9.01508C21.3551 9.30761 21.1889 9.56954 20.959 9.76803L16.7459 13.4074L18.0312 18.8515C18.1021 19.147 18.0838 19.4569 17.9787 19.7421C17.8736 20.0272 17.6863 20.2748 17.4405 20.4536C17.1947 20.6324 16.9015 20.7343 16.5978 20.7465C16.2941 20.7587 15.9936 20.6806 15.7343 20.5221L10.9999 17.6083V0.500977Z"
                              fill="none"
                            />
                            <path
                              d="M10.9999 0.500977C10.6934 0.500977 10.3961 0.591435 10.1434 0.760851C9.89076 0.930267 9.69418 1.17099 9.57869 1.45241L7.44494 6.61616L1.91369 7.06241C1.61164 7.08899 1.32412 7.20397 1.08703 7.39299C0.849941 7.58201 0.673791 7.83669 0.580581 8.12522C0.48737 8.41376 0.481229 8.72336 0.562925 9.01536C0.644621 9.30736 0.810533 9.56882 1.03994 9.7671L5.25869 13.4074L3.96869 18.8515C3.89829 19.1466 3.91678 19.456 4.02185 19.7406C4.12692 20.0253 4.31386 20.2725 4.55913 20.4511C4.8044 20.6297 5.09704 20.7318 5.4002 20.7444C5.70335 20.757 6.00347 20.6797 6.26275 20.5221L10.9999 17.6083V0.500977Z"
                              fill="#ED9615" /* Empty part of half star */
                            />
                          </svg>
                        );
                      } else {
                        return (
                          // Empty star
                          <svg
                            key={index}
                            className="rating-icon"
                            width="12"
                            height="12"
                            viewBox="0 0 22 21"
                            stroke="#ED9615"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20.9646 9.7671L16.7459 13.4074L18.0312 18.8515C18.1021 19.147 18.0838 19.4569 17.9787 19.7421C17.8736 20.0272 17.6863 20.2748 17.4405 20.4536C17.1947 20.6324 16.9015 20.7343 16.5978 20.7465C16.2941 20.7587 15.9936 20.6806 15.7343 20.5221L10.9999 17.6083L6.26275 20.5221C6.00347 20.6797 5.70335 20.757 5.4002 20.7444C5.09704 20.7318 4.8044 20.6297 4.55913 20.4511C4.31386 20.2725 4.12692 20.0253 4.02185 19.7406C3.91678 19.456 3.89829 19.1466 3.96869 18.8515L5.25869 13.4074L1.03994 9.7671C0.810533 9.56882 0.644621 9.30736 0.562925 9.01536C0.481229 8.72336 0.48737 8.41376 0.580581 8.12522C0.673791 7.83669 0.849941 7.58201 1.08703 7.39299C1.32412 7.20397 1.61164 7.08899 1.91369 7.06241L7.44494 6.61616L9.57869 1.45241C9.69418 1.17099 9.89076 0.930267 10.1434 0.760851C10.3961 0.591435 10.6934 0.500977 10.9976 0.500977C11.3018 0.500977 11.5991 0.591435 11.8518 0.760851C12.1044 0.930267 12.301 1.17099 12.4165 1.45241L14.5493 6.61616L20.0806 7.06241C20.3832 7.088 20.6716 7.20234 20.9095 7.3911C21.1475 7.57986 21.3244 7.83464 21.4182 8.12352C21.512 8.41241 21.5185 8.72254 21.4368 9.01508C21.3551 9.30761 21.1889 9.56954 20.959 9.76803L20.9646 9.7671Z"
                              fill="none" /* Empty star */
                            />
                          </svg>
                        );
                      }
                    })}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
