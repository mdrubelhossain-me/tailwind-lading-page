import React from "react";
import Bg from "../../assets/images/bg5.jpg";
import { Target, Lightbulb, Handshake } from "@phosphor-icons/react";
import Breadcrumb from "../../components/Breadcrumb";

const About = () => {
  return (
    <div>
      {/* Breadcrumb Start */}
      <Breadcrumb
        title="About"
        bgImage={Bg}
        items={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* About Section Start */}
      <section
        className="relative text-white py-20 px-5"
        style={{
          background: "linear-gradient(135deg, #1e293b, #334155)",
        }}
      >
        <div className="relative max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
          <p className="text-lg leading-relaxed mb-10 max-w-3xl mx-auto text-gray-300">
            We are a team of passionate individuals dedicated to delivering the
            best solutions for our clients. Our mission is to create innovative
            and impactful experiences that drive success.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="bg-white bg-opacity-5 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10 hover:scale-105 transition-transform">
              <Target size={32} className="mb-4 text-yellow-400 mx-auto" />
              <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
              <p className="text-gray-200">
                To be a global leader in providing cutting-edge solutions that
                empower businesses and individuals.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white bg-opacity-5 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10 hover:scale-105 transition-transform">
              <Lightbulb size={32} className="mb-4 text-green-400 mx-auto" />
              <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-200">
                To deliver exceptional value through innovation, creativity, and
                collaboration.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white bg-opacity-5 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10 hover:scale-105 transition-transform">
              <Handshake size={32} className="mb-4 text-blue-400 mx-auto" />
              <h3 className="text-2xl font-semibold mb-2">Our Values</h3>
              <p className="text-gray-200">
                Integrity, Excellence, Teamwork, and Customer Focus are at the
                core of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* About Section End */}
    </div>
  );
};

export default About;
