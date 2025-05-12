import React from "react";
import HeroBg from "../../assets/images/bg-2.jpg";
import Breadcrumb from "../../components/Breadcrumb";

const Contact = () => {
  return (
    <div>
      {/* Breadcrumb Start */}
      <Breadcrumb
        title="Contact"
        bgImage={HeroBg}
        items={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />
    </div>
  );
};

export default Contact;
