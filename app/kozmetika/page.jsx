import Image from 'next/image'
import Link from 'next/link'
import Chip from "../components/atoms/chip/Chip";
import Icon from "../components/atoms/icon/Icon";

import BannerCosmetics from '../components/organism/bannerCosmetics/bannerCosmetics';
import PlantIcon from '../assets/icon/plant-icon.svg'

import ProductPromotioCard from '../components/organism/productPromotioCard/productPromotioCard';
import ProductCard from '../components/organism/ProductCard/ProductCard'
import CosmeticsBanner from '../components/organism/cosmeticsBanner/cosmeticsBanner'
import Button from '../components/atoms/button/button';
import Loading from "../loading";
import "./_style.scss";
import "../styles/_index.scss";


import FollowSocial from "../components/organism/followSocial/FollowSocial";

export default function Caj() {
    return (
      <main className="products-page">
        <div className="products-page-container">


          {/* Promotion section */}
          <section className="product-promotion">
            <BannerCosmetics />
            
            <div className="promotion-title col-12-sm col-8md col-8-lg">
              <h4>Dr Hertzeg</h4>
              <p>Prepusti se očaravajućoj harmoniji prirode s našom kolekcijom prirodne kozmetike.</p>
            </div>
            <div className="flex">
              <div className="column">
                <h5>Regeneracija</h5>
                <p>Marzipan caramels brownie jelly beans bear claw jelly-o shortbread macaroon candy canes.</p>
              </div>
              <div className="column">
                <h5>Pomlađivanje</h5>
                <p>Marzipan caramels brownie jelly beans bear claw jelly-o shortbread macaroon candy canes.</p>
              </div>
              <div className="column">
                <h5>Njega kože</h5>
                <p>Marzipan caramels brownie jelly beans bear claw jelly-o shortbread macaroon candy canes.</p>
              </div>
              <div className="column">
                <h5>Opuštanje</h5>
                <p>Marzipan caramels brownie jelly beans bear claw jelly-o shortbread macaroon candy canes.</p>
              </div>
            </div>
          </section>

          {/* Products container*/}
          <section className="product-cards">
            <div className="product-cards-title col-12-sm col-6-md col-6-lg">
              <div className="column">
                <h3>Upoznaj proizvode</h3>
                <p>Marzipan caramels brownie jelly beans bear claw jelly-o shortbread macaroon candy canes.</p>
              </div>
              <div className="column">
                <div className="row">
                  <Image 
                    src={PlantIcon}
                    alt='BannerImage'
                    quality={100}
                  />
                  <p>100% PLANT BASE VEGAN</p>
                </div>
                <ul>
                  <li>Marzipan caramels brownie</li>
                  <li>Jelly beans bear claw</li>
                  <li>Shortbread shortbread macaroon candy</li>
                </ul>
              </div>
            </div>

            <div className="product-cards-container">
              <ProductCard
                productDetailsTitle="Kapi slatkog pelina"
                productDetailsPrice="4 €"
                productDetailsImageURL="/images/product/kozmetika-product-1.png"
                productDetailsImageAlt="Kapi slatkog pelina"
                productDetailsURL="/kozmetika/kozmetikaProduct"
                productChips1="Protuupalno"
                productChips2="Opušta"
              />
              <ProductCard
                productDetailsTitle="Gel za smirenje"
                productDetailsPrice="3.8 €"
                productDetailsImageURL="/images/product/kozmetika-product-5.png"
                productDetailsImageAlt="Gel za smirenje"
                productDetailsURL="/kozmetika/kozmetikaProduct"
                productChips1="Protuupalno"
                productChips2="Opušta"
              />
              <ProductCard
                productDetailsTitle="Jačanje kose"
                productDetailsPrice="3.5 €"
                productDetailsImageURL="/images/product/kozmetika-product-4.png"
                productDetailsImageAlt="Jačanje kos"
                productDetailsURL="/kozmetika/kozmetikaProduct"
                productChips1="Protuupalno"
                productChips2="Opušta"
              />
              <ProductCard
                productDetailsTitle="Smiljolat"
                productDetailsPrice="4.2 €"
                productDetailsImageURL="/images/product/kozmetika-product-5.png"
                productDetailsImageAlt="Smiljolat"
                productDetailsURL="/kozmetika/kozmetikaProduct"
                productChips1="Protuupalno"
                productChips2="Opušta"
              />
              <ProductCard
                productDetailsTitle="Ulje za njegu i masažu"
                productDetailsPrice="3.5 €"
                productDetailsImageURL="/images/product/kozmetika-product-3.png"
                productDetailsImageAlt="Ulje za njegu i masažu"
                productDetailsURL="/kozmetika/kozmetikaProduct"
                productChips1="Protuupalno"
                productChips2="Opušta"
              />
              <ProductCard
                productDetailsTitle="Serum od smilja"
                productDetailsPrice="5 €"
                productDetailsImageURL="/images/product/kozmetika-product-3.png"
                productDetailsImageAlt="Serum od smilja"
                productDetailsURL="/kozmetika/kozmetikaProduct"
                productChips1="Protuupalno"
                productChips2="Opušta"
              />
              <ProductCard
                productDetailsTitle="Noćna vitaminska krema"
                productDetailsPrice="4 €"
                productDetailsImageURL="/images/product/kozmetika-product-1.png"
                productDetailsImageAlt="Noćna vitaminska krema"
                productDetailsURL="/kozmetika/kozmetikaProduct"
                productChips1="Protuupalno"
                productChips2="Opušta"
              />
              <ProductCard
                productDetailsTitle="Hidratantna dnevna krema"
                productDetailsPrice="2.7 €"
                productDetailsImageURL="/images/product/kozmetika-product-4.png"
                productDetailsImageAlt="Hidratantna dnevna krema"
                productDetailsURL="/kozmetika/kozmetikaProduct"
                productChips1="Protuupalno"
                productChips2="Opušta"
              />
              <ProductCard
                productDetailsTitle="Lavandorat"
                productDetailsPrice="3.5 €"
                productDetailsImageURL="/images/product/kozmetika-product-5.png"
                productDetailsImageAlt="Lavandorat"
                productDetailsURL="/kozmetika/kozmetikaProduct"
                productChips1="Protuupalno"
                productChips2="Opušta"
              />
            </div>
          </section>

          <CosmeticsBanner />
        </div>
        <FollowSocial />
        
      </main>
    )
}
