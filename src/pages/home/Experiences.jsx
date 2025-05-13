import React from "react";
import HeroBg from "../../assets/images/hero.jpg";
import { CheckCircle, ArrowRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const Experiences = () => {
  return (
    <div className="relative z-10 overflow-hidden py-20 font-primary">
      {/* Decorative Background Blur */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#f0f4ff] via-white to-[#f8f9fa] backdrop-blur-xl" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Left Side: Text Content */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-secondary">
              Our Experiences
            </h2>
            <p className="text-gray-600 leading-relaxed">
              With years of dedication, we've mastered the art of delivering
              outstanding experiences. From concept to execution, we put quality
              and creativity first to exceed client expectations.
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle size={22} className="text-primary mt-1" />
                <span>10+ years of industry experience</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={22} className="text-primary mt-1" />
                <span>100+ successful client collaborations</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={22} className="text-primary mt-1" />
                <span>Expertise in UI/UX, branding, and digital marketing</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={22} className="text-primary mt-1" />
                <span>Client-centric approach with measurable results</span>
              </li>
            </ul>
            <div className="mt-8">
              <Link
                to="#"
                className="font-primary text-md inline-flex gap-1 items-center text-primary border-b-[1px] border-transparent hover:border-primary transition duration-300"
              >
                <span>More Info</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="md:w-1/2">
            <img
              src={HeroBg}
              alt="Experience Image"
              className="w-full h-auto rounded-xl shadow-2xl ring-1 ring-gray-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
