import React from 'react'
import Bg from "../../assets/images/bg4.jpg";
import Breadcrumb from "../../components/Breadcrumb";
import { Phone, EnvelopeSimple, MapPin } from "@phosphor-icons/react";

const Shop = () => {
  return (
    <div>
        {/* Breadcrumb Start */}
      <Breadcrumb
        title="Shop"
        bgImage={Bg}
        items={[{ label: "Home", href: "/" }, { label: "Shop" }]}
      />



    </div>
  )
}

export default Shop;
