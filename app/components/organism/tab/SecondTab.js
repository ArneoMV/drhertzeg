import React from "react";
import './_tab.scss';
import ProductCard from '../productCard/productCard';
import { Teas } from "../../../utilities/images.js";

const SecondTab = () => {
  return (
    <div className="tab-container">
      <ProductCard
        productDetailsTitle="Smokvin list"
        productDetailsPrice="4 €"
        productDetailsImageURL= {Teas.packaging_eko_caj_smokva_list}
        productDetailsImageAlt="Kapi Slatkog Pelina"
        productURL="/kozmetika/kozmetikaProduct"
        productChips1="Protupalno"
        productChips2="Opušta"
        imageClass="image-default"
        hoverOutline="primary"
      />
      <ProductCard
        productDetailsTitle="Slatki pelin"
        productDetailsPrice="4 €"
        productDetailsImageURL= {Teas.packaging_caj_od_slatkog_pelina}
        productDetailsImageAlt="Smiloljat"
        productURL="/cajevi/cajProduct"
        productChips1="Protupalno"
        productChips2="Opušta"
        imageClass="image-default"
        hoverOutline="primary"
      />
      <ProductCard
        productDetailsTitle="Energija jutra"
        productDetailsPrice="4 €"
        productDetailsImageURL= {Teas.packaging_energija_jutra_caj}
        productDetailsImageAlt="HydratingDayCream"
        productURL="/cajevi/cajProduct"
        productChips1="Protupalno"
        productChips2="Opušta"
        imageClass="image-default"
        hoverOutline="primary"
      />
      
    </div>
  );
};
export default SecondTab;