import React from "react";
import Bg from "../../assets/images/bg-2.jpg";
import Breadcrumb from "../../components/Breadcrumb";
import { Phone, EnvelopeSimple, MapPin } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form submitted:", data);
    // You can send data to your API here.
    reset();
  };

  return (
    <div>
      {/* Breadcrumb Start */}
      <Breadcrumb
        title="Contact"
        bgImage={Bg}
        items={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      {/* Contact Section Start */}
      <section className="relative py-20 px-8 lg:px-20 bg-gray-100 overflow-hidden font-primary">
        {/* Decorative background blur element */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-300 opacity-20 blur-3xl rounded-full z-0 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contact Details */}
            <div>
              <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                We'd love to hear from you! Whether you have questions,
                suggestions, or just want to say hello, feel free to contact us
                anytime.
              </p>

              <div className="space-y-6 text-base text-gray-700">
                <div className="flex items-center">
                  <Phone
                    size={24}
                    className="text-primary mr-4 mt-1"
                    weight="duotone"
                  />
                  <p>+1 234 567 890</p>
                </div>
                <div className="flex items-center">
                  <EnvelopeSimple
                    size={24}
                    className="text-primary mr-4 mt-1"
                    weight="duotone"
                  />
                  <p>contact@company.com</p>
                </div>
                <div className="flex items-center">
                  <MapPin
                    size={24}
                    className="text-primary mr-4 mt-1"
                    weight="duotone"
                  />
                  <p>123 Business Street, City, Country</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="backdrop-blur-md bg-white/70 p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      {...register("name", {
                        required: "Name is required",
                        minLength: {
                          value: 2,
                          message: "Name must be at least 2 characters",
                        },
                      })}
                      className={`w-full px-4 py-3 border ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:outline-none focus:ring-1 focus:ring-primary bg-white`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Enter a valid email address",
                        },
                      })}
                      className={`w-full px-4 py-3 border ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:outline-none focus:ring-1 focus:ring-primary bg-white`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                    className={`w-full px-4 py-3 border ${
                      errors.subject ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:outline-none focus:ring-1 focus:ring-primary bg-white`}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <textarea
                    placeholder="Your Message"
                    rows="6"
                    {...register("message", {
                      required: "Message is required",
                    })}
                    className={`w-full px-4 py-3 border ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:outline-none focus:ring-1 focus:ring-primary bg-white`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-secondary transition duration-300 shadow-md disabled:opacity-60"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section End */}
    </div>
  );
};

export default Contact;
