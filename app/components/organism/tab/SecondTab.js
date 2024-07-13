import React from "react";
import './_tab.scss';
import ProductCard from '../productCard/productCard';



import SmokvinList from '../../../../public/images/product/caj/biljka-smokvin-list.png';
import SlatkiPelin from '../../../../public/images/product/caj/biljka-slatki-pelin.png';
import EnergijaJutra from '../../../../public/images/product/caj/biljka-energija-jutra.png';
import DetoxCaj from '../../../../public/images/product/caj/biljka-detox.png';
import ImunoCaj from '../../../../public/images/product/caj/biljka-imuno.png';

const SecondTab = () => {
  return (
    <div className="tab-container">
      <ProductCard
        productDetailsTitle="Smokvin list"
        productDetailsPrice="4 €"
        productDetailsImageURL= {SmokvinList}
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
        productDetailsImageURL= {SlatkiPelin}
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
        productDetailsImageURL= {EnergijaJutra}
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