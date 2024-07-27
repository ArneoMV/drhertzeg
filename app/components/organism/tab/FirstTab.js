import React from "react";
import './_tab.scss';
import ProductCard from '../productCard/productCard';
import { Teas, Cosmetics } from "../../../utilities/images.js";

const FirstTab = () => {
  return (
    <div className="tab-container">
      <ProductCard
        productDetailsTitle="Calming Gel"
        productDetailsPrice="4 €"
        productDetailsImageURL= {Cosmetics.packaging_calming_gel}
        productDetailsImageAlt="Calming Gel"
        productURL="/kozmetika/kozmetikaProduct"
        productChips1="Protupalno"
        productChips2="Opušta"
        imageClass="image-default"
        hoverOutline="primary"
      />
      <ProductCard
        productDetailsTitle="Care & Massage Oil"
        productDetailsPrice="4 €"
        productDetailsImageURL= {Cosmetics.packaging_care_and_massage_oil}
        productDetailsImageAlt="CareAndMassageOil"
        productURL="/cajevi/cajProduct"
        productChips1="Protupalno"
        productChips2="Opušta"
        imageClass="image-default"
        hoverOutline="primary"
      />
      <ProductCard
        productDetailsTitle="Hair Boost"
        productDetailsPrice="4 €"
        productDetailsImageURL= {Cosmetics.packaging_hair_boost}
        productDetailsImageAlt="Hair Boost"
        productURL="/cajevi/cajProduct"
        productChips1="Protupalno"
        productChips2="Opušta"
        imageClass="image-default"
        hoverOutline="primary"
      />
    </div>
  );
};
export default FirstTab;