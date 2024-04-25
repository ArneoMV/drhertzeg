import React from "react";
import './_tab.scss';
import ProductCard from '../../organism/productCard/productCard';

import KapiSlatkogPelina from '../../../../public/images/product/kozmetika/KapiSlatkogPelina.png';
import Smiloljat from '../../../../public/images/product/kozmetika/Smiloljat.png';
import HydratingDayCream from '../../../../public/images/product/kozmetika/HydratingDayCream.png';
import CalmingGel from '../../../../public/images/product/kozmetika/CalmingGel.png';
import Lavandolat from '../../../../public/images/product/kozmetika/Lavandolat.png';

const FirstTab = () => {
  return (
    <div className="tab-container">
      <ProductCard
        productDetailsTitle="Kapi Slatkog Pelina"
        productDetailsPrice="4 €"
        productDetailsImageURL= {KapiSlatkogPelina}
        productDetailsImageAlt="Kapi Slatkog Pelina"
        productURL="/kozmetika/kozmetikaProduct"
        productChips1="Protupalno"
        productChips2="Opušta"
        imageClass="image-small"
        hoverOutline="primary"
      />
      <ProductCard
        productDetailsTitle="Smiloljat"
        productDetailsPrice="4 €"
        productDetailsImageURL= {Smiloljat}
        productDetailsImageAlt="Smiloljat"
        productURL="/cajevi/cajProduct"
        productChips1="Protupalno"
        productChips2="Opušta"
        imageClass="image-small"
        hoverOutline="primary"
      />
      <ProductCard
        productDetailsTitle="Hydrating Day Cream"
        productDetailsPrice="4 €"
        productDetailsImageURL= {HydratingDayCream}
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
export default FirstTab;