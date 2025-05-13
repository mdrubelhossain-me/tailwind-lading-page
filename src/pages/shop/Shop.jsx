import React from "react";
import Bg from "../../assets/images/bg4.jpg";
import Breadcrumb from "../../components/Breadcrumb";
import Products from "./Products";

const Shop = () => {
  return (
    <div>
      {/* Breadcrumb Start */}
      <Breadcrumb
        title="Shop"
        bgImage={Bg}
        items={[{ label: "Home", href: "/" }, { label: "Shop" }]}
      />

      {/* Products Components */}
      <Products title="Shop Our Most Popular Items" />
    </div>
  );
};

export default Shop;
