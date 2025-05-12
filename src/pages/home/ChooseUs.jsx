import React from "react";
import { ShieldCheck, ClockClockwise, Headset } from "@phosphor-icons/react";

const features = [
  {
    icon: <ShieldCheck size={28} weight="duotone" />,
    title: "Quality",
    description:
      "We ensure the highest quality in all our products and services.",
  },
  {
    icon: <ClockClockwise size={28} weight="duotone" />,
    title: "Reliability",
    description: "Count on us to deliver consistent and dependable results.",
  },
  {
    icon: <Headset size={28} weight="duotone" />,
    title: "Support",
    description: "Our team is here to assist you every step of the way.",
  },
];

const ChooseUs = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-indigo-50 via-white to-white overflow-hidden font-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl tracking-tight">
            Why Choose Us
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the reasons why we stand out from the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white shadow-md rounded-xl p-8 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-center h-14 w-14 rounded-full bg-primary/10 text-primary mb-5 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                <div className="transition-colors duration-300 group-hover:text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative background blur */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/30 rounded-full filter blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl z-0" />
    </section>
  );
};

export default ChooseUs;
