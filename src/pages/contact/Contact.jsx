import React from "react";
import Bg from "../../assets/images/bg-2.jpg";
import Breadcrumb from "../../components/Breadcrumb";

const Contact = () => {
  return (
    <div>
      {/* Breadcrumb Start */}
      <Breadcrumb
        title="Contact"
        bgImage={Bg}
        items={[
          { label: "Home", href: "/" }, 
          { label: "Contact" }
        ]}
      />
    </div>
  );
};

export default Contact;
