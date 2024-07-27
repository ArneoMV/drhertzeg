import React from "react";
import './_tab.scss';
import ProductCard from '../productCard/productCard';
import { Teas, Cosmetics } from "../../../utilities/images.js";

const SecondTab = () => {
  return (
    <div className="tab-container">
      <ProductCard
        productDetailsTitle="Smokvin list"
        productDetailsPrice="4 €"
        productDetailsImageURL= {Teas.packaging_smokvin_list}
        productDetailsImageAlt="Kapi Slatkog Pelina"
        productURL="/kozmetika/kozmetikaProduct"
        productChips1="Protupalno"
        productChips2="Opušta"
        imageClass="image-small"
        hoverOutline="primary"
      />
      <ProductCard
        productDetailsTitle="Slatki pelin"
        productDetailsPrice="4 €"
        productDetailsImageURL= {Teas.packaging_slatki_pelin}
        productDetailsImageAlt="Smiloljat"
        productURL="/cajevi/cajProduct"
        productChips1="Protupalno"
        productChips2="Opušta"
        imageClass="image-small"
        hoverOutline="primary"
      />
      <ProductCard
        productDetailsTitle="Energija jutra"
        productDetailsPrice="4 €"
        productDetailsImageURL= {Teas.packaging_energija_jutra}
        productDetailsImageAlt="HydratingDayCream"
        productURL="/cajevi/cajProduct"
        productChips1="Protupalno"
        productChips2="Opušta"
        imageClass="image-small"
        hoverOutline="primary"
      />
      
    </div>
  );
};
export default SecondTab;