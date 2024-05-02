import React from "react";
import './_tab.scss';
import ProductCard from '../productCard/productCard';

import Caj1 from '../../../../public/images/caj/Caj-biljka-1.png';
import Caj2 from '../../../../public/images/caj/Caj-biljka-2.png';
import Caj3 from '../../../../public/images/caj/Caj-biljka-3.png';

const SecondTab = () => {
  return (
    <div className="tab-container">
      <ProductCard
        productDetailsTitle="Kapi Slatkog Pelina"
        productDetailsPrice="4 €"
        productDetailsImageURL= {Caj1}
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
        productDetailsImageURL= {Caj2}
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
        productDetailsImageURL= {Caj3}
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