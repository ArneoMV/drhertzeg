import React from "react";
import './_tab.scss';
import ProductCard from '../productCard/productCard';

import CalmingGel from '../../../../public/images/product/kozmetika/ambalaza-CalmingGel.jpg';
import CareAndMassageOil from '../../../../public/images/product/kozmetika/ambalaza-CareAndMassageOil.jpg';
import HairBoost from '../../../../public/images/product/kozmetika/ambalaza-HairBoost.jpg';

const FirstTab = () => {
  return (
    <div className="tab-container">
      <ProductCard
        productDetailsTitle="Calming Gel"
        productDetailsPrice="4 €"
        productDetailsImageURL= {CalmingGel}
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
        productDetailsImageURL= {CareAndMassageOil}
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
        productDetailsImageURL= {HairBoost}
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