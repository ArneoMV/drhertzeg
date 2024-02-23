import React from "react";
import './_firstTab.scss';
import ProductCard from '../productCard/ProductCard'
import CajDetox from '../../assets/image/product/Proizvod_Detox.png'
import CajEnergija from '../../assets/image/product/Proizvod_Energija.png'
import CajImuno from '../../assets/image/product/Proizvod_Imuno.png'
import CajPelin from '../../assets/image/product/Proizvod_Slatki_Pelin.png'
import CajSmokva from '../../assets/image/product/Proizvod_Smokva.png'

const FirstTab = () => {
  return (
    <div className="firstTab">
        <ProductCard
          imageUrl={CajSmokva}
          title="Smokvin list"
          link="/"
          alt="Smokvin list"
        />
        <ProductCard
          imageUrl={CajPelin}
          title="Slatki pelin"
          link="/"
          alt="Slatki pelin"
        />
        <ProductCard
          imageUrl={CajEnergija}
          title="Energija jutra"
          link="/"
          alt="Energija jutra"
        />
        <ProductCard
          imageUrl={CajDetox}
          title="Detox"
          link="/"
          alt="Detox"
        />
    </div>
  );
};
export default FirstTab;