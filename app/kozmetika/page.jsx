import Image from 'next/image'
import Link from 'next/link'
import Chip from '../components/atoms/chip/Chip';
import BannerCosmetics from '../components/organism/heroCosmetics/heroCosmetics';
import PlantIcon from '../assets/icon/plant-icon.svg';
import ProductPromotioCard from '../components/organism/productPromotioCard/productPromotioCard';
import ProductCard from '../components/organism/ProductCard/ProductCard'
import CosmeticsBanner from '../components/organism/bannerCosmetics/bannerCosmetics'
import Loading from '../loading';
import './_style.scss';
import '../styles/_index.scss';


import FollowSocial from "../components/organism/followSocial/followSocial";
import Footer from '../components/organism/footer/footer';

export default function Kozmetika() {
    return (
      <div className='products-page kozmetika'>
        <main className='products-page-container'>
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
            <div className="product-cards-title">
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
                productDetailsTitle="Calming gel"
                productDetailsPrice="4 €"
                productDetailsImageURL="/images/product/kozmetika_calming_gel.png"
                productDetailsImageAlt="Kapi slatkog pelina"
                productDetailsURL="/kozmetika/kozmetikaProduct"
                productChips1="Protuupalno"
                productChips2="Opušta"
                imageClass="imageVertical"
                hoverOutline="red-300"
              />
              <ProductCard
                productDetailsTitle="Care & massage oil"
                productDetailsPrice="3.8 €"
                productDetailsImageURL="/images/product/kozmetika_care_and_massage_oil.png"
                productDetailsImageAlt="Gel za smirenje"
                productDetailsURL="/kozmetika/kozmetikaProduct"
                productChips1="Protuupalno"
                productChips2="Opušta"
                imageClass="imageVertical"
                hoverOutline="red-300"
              />
              <ProductCard
                productDetailsTitle="Hair boost"
                productDetailsPrice="3.5 €"
                productDetailsImageURL="/images/product/kozmetika_hair_boost.png"
                productDetailsImageAlt="Jačanje kos"
                productDetailsURL="/kozmetika/kozmetikaProduct"
                productChips1="Protuupalno"
                productChips2="Opušta"
                imageClass="imageVertical"
                hoverOutline="red-300"
              />
              <ProductCard
                productDetailsTitle="Hydrating day cream"
                productDetailsPrice="4.2 €"
                productDetailsImageURL="/images/product/kozmetika_hydrating_day_cream.png"
                productDetailsImageAlt="Smiljolat"
                productDetailsURL="/kozmetika/kozmetikaProduct"
                productChips1="Protuupalno"
                productChips2="Opušta"
                imageClass="imageHorizontal"
                hoverOutline="red-300"
              />
              <ProductCard
                productDetailsTitle="Kapi od slatkog pelina"
                productDetailsPrice="3.5 €"
                productDetailsImageURL="/images/product/kozmetika_kapi_slatki_pelin.png"
                productDetailsImageAlt="Ulje za njegu i masažu"
                productDetailsURL="/kozmetika/kozmetikaProduct"
                productChips1="Protuupalno"
                productChips2="Opušta"
                imageClass="imageVertical"
                hoverOutline="red-300"
              />
              <ProductCard
                productDetailsTitle="Lavandarat"
                productDetailsPrice="5 €"
                productDetailsImageURL="/images/product/kozmetika_lavandarat.png"
                productDetailsImageAlt="Serum od smilja"
                productDetailsURL="/kozmetika/kozmetikaProduct"
                productChips1="Protuupalno"
                productChips2="Opušta"
                imageClass="imageVertical"
                hoverOutline="red-300"
              />
              <ProductCard
                productDetailsTitle="Serum od smilja"
                productDetailsPrice="4 €"
                productDetailsImageURL="/images/product/kozmetika_serum_od_smilja.png"
                productDetailsImageAlt="Noćna vitaminska krema"
                productDetailsURL="/kozmetika/kozmetikaProduct"
                productChips1="Protuupalno"
                productChips2="Opušta"
                imageClass="imageVertical"
                hoverOutline="red-300"
              />
              <ProductCard
                productDetailsTitle="Smiljolat"
                productDetailsPrice="2.7 €"
                productDetailsImageURL="/images/product/kozmetika_smiljolat.png"
                productDetailsImageAlt="Hidratantna dnevna krema"
                productDetailsURL="/kozmetika/kozmetikaProduct"
                productChips1="Protuupalno"
                productChips2="Opušta"
                imageClass="imageVertical"
                hoverOutline="red-300"
              />
              <ProductCard
                productDetailsTitle="Vitamin night cream"
                productDetailsPrice="3.5 €"
                productDetailsImageURL="/images/product/kozmetika_vitamin_night_creeam.png"
                productDetailsImageAlt="Lavandorat"
                productDetailsURL="/kozmetika/kozmetikaProduct"
                productChips1="Protuupalno"
                productChips2="Opušta"
                imageClass="imageHorizontal"
                hoverOutline="red-300"
              />
            </div>
          </section>

          <CosmeticsBanner />
      </main>
      <div>
        <FollowSocial 
          color="red"
        />
        <Footer 
          color="red-300"
        />
      </div>
    </div>
  )
}
