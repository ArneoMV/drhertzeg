import React from "react";
import ProductCardTab from '../productCardTab/ProductCardTab'
import CajDetox from '../../assets/image/product/Proizvod_Detox.png'
import CajEnergija from '../../assets/image/product/Proizvod_Energija.png'
import CajImuno from '../../assets/image/product/Proizvod_Imuno.png'
import CajPelin from '../../assets/image/product/Proizvod_Slatki_Pelin.png'
import CajSmokva from '../../assets/image/product/Proizvod_Smokva.png'

const FirstTab = () => {
  return (
    <div className="firstTab">

      <div className="row"> 
        <ProductCardTab
          imageUrl={CajSmokva}
          title="Smokvin list"
          link="/"
          alt="Smokvin list"
        />
        <ProductCardTab
          imageUrl={CajPelin}
          title="Slatki pelin"
          link="/"
          alt="Slatki pelin"
        />
        <ProductCardTab
          imageUrl={CajEnergija}
          title="Energija jutra"
          link="/"
          alt="Energija jutra"
        />
        <ProductCardTab
          imageUrl={CajDetox}
          title="Detox"
          link="/"
          alt="Detox"
        />

        </div>
    </div>
  );
};
export default FirstTab;