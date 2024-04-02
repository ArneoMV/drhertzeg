import { Suspense } from "react";
import Image from 'next/image'
import Link from 'next/link'
import Chip from "../components/atoms/chip/Chip";
import Icon from "../components/atoms/icon/Icon";

import HeroImage from '../assets/image/CoverKozmetika.png'
import OtherProductCard from '../components/organism/otherProductCard/OtherProductCard'
import CosmeticsBanner from '../components/organism/cosmeticsBanner/cosmeticsBanner'


// import TeaList from "./TeaList";
import Loading from "../loading";
import "./_style.scss";

import FollowSocial from "../components/organism/followSocial/FollowSocial";

export default function Caj() {
    return (
      <main className="productPage">
        <div className="heroContainer">
          <div className="heroAsset">
            <div className="heroAsset_inner">
              <div className="heroAsset_asset">
                <Image 
                  src={HeroImage}
                  alt='image'
                  quality={100}
                />
              </div>
            </div>
              
          </div>
          <div className="heroContent">
            <div className="heroContentInner">
              <div className="heroContent_heading">
                <div className="titleWithChip">
                  <Chip text="kozmetika" />
                  <h3>Zdravlje u kozmetici</h3>
                </div>
                <p>Marzipan caramels brownie jelly beans bear claw jelly-o shortbread macaroon candy canes. Macaroon donut biscuit brownie cake chocolate. Toffee wafer cookie cupcake cotton candy jelly-o tiramisu sweet pastry. </p>
              </div>
                
            </div>
          </div>
        </div>

        <section className="otherProductContainer">
          <OtherProductCard
            productDetailsTitle="Ruž za usne"
            productDetailsKolicina="50g"
            productDetailsImageURL="/images/kozmetika/kozmetikaProduct.png"
            productDetailsImageAlt="Smokvin List"
            productDetailsURL="/images/kozmetika/kozmetikaProduct.png"
          />
          <OtherProductCard
            productDetailsTitle="Krema za bore"
            productDetailsKolicina="50g"
            productDetailsImageURL="/images/kozmetika/kozmetikaProduct.png"
            productDetailsImageAlt="Smokvin List"
            productDetailsURL="/images/kozmetika/kozmetikaProduct.png"
          />
          <OtherProductCard
            productDetailsTitle="Krema od slatkog pelina"
            productDetailsKolicina="50g"
            productDetailsImageURL="/images/kozmetika/kozmetikaProduct.png"
            productDetailsImageAlt="Smokvin List"
            productDetailsURL="/images/kozmetika/kozmetikaProduct.png"
          />
          <OtherProductCard
            productDetailsTitle="Sjailo za obraze"
            productDetailsKolicina="50g"
            productDetailsImageURL="/images/kozmetika/kozmetikaProduct.png"
            productDetailsImageAlt="Smokvin List"
            productDetailsURL="/images/kozmetika/kozmetikaProduct.png"
          />
          <OtherProductCard
            productDetailsTitle="Balzam za obraze"
            productDetailsKolicina="50g"
            productDetailsImageURL="/images/kozmetika/kozmetikaProduct.png"
            productDetailsImageAlt="Smokvin List"
            productDetailsURL="/images/kozmetika/kozmetikaProduct.png"
          />
          <OtherProductCard
            productDetailsTitle="Krema za bore"
            productDetailsKolicina="50g"
            productDetailsImageURL="/images/kozmetika/kozmetikaProduct.png"
            productDetailsImageAlt="Smokvin List"
            productDetailsURL="/images/kozmetika/kozmetikaProduct.png"
          />
          <OtherProductCard
            productDetailsTitle="Krema od slatkog pelina"
            productDetailsKolicina="50g"
            productDetailsImageURL="/images/kozmetika/kozmetikaProduct.png"
            productDetailsImageAlt="Smokvin List"
            productDetailsURL="/images/kozmetika/kozmetikaProduct.png"
          />
          <OtherProductCard
            productDetailsTitle="Sjailo za obraze"
            productDetailsKolicina="50g"
            productDetailsImageURL="/images/kozmetika/kozmetikaProduct.png"
            productDetailsImageAlt="Smokvin List"
            productDetailsURL="/images/kozmetika/kozmetikaProduct.png"
          />
          <OtherProductCard
            productDetailsTitle="Balzam za obraze"
            productDetailsKolicina="50g"
            productDetailsImageURL="/images/kozmetika/kozmetikaProduct.png"
            productDetailsImageAlt="Smokvin List"
            productDetailsURL="/images/kozmetika/kozmetikaProduct.png"
          />
        </section>


        <CosmeticsBanner />



{/* 
        <Suspense fallback={<Loading />}>
          <TeaList />
        </Suspense> */}
        
        <FollowSocial />
        
      </main>
    )
}
