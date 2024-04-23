import Image from 'next/image'
import Link from 'next/link'
import Chip from "../components/atoms/chip/Chip";
import Icon from "../components/atoms/icon/Icon";
import Loading from "../loading";

import Button from '../components/atoms/button/button';
import HeroTea from '../components/organism/heroTea/heroTea';
import ProductPromotioCard from '../components/organism/productPromotioCard/productPromotioCard';
import ProductCard from '../components/organism/ProductCard/ProductCard'
import BannerCaj from '../components/organism/bannerCaj/bannerCaj'
import FollowSocial from "../components/organism/followSocial/followSocial";
import Footer from '../components/organism/footer/footer';

import "./_style.scss";
import PlantIcon from '../assets/icon/plant-icon.svg'


import { Metadata } from 'next'
export const metadata = { 
  title: 'Cajevi',
  description: 'Asortiman čajeva',
}


export default function Cajevi() {
    return (
      <div className='products-page caj'>
        <main className='products-page-container'>
          {/* Promotion section */}
          <section className="product-promotion">
            <HeroTea />
            
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
                productDetailsTitle="Smokvin list"
                productDetailsPrice="4 €"
                productDetailsImageURL="/images/caj/Caj_Smokva.png"
                productDetailsImageAlt="Kapi slatkog pelina"
                productDetailsURL="/cajevi/cajProduct"
                productChips1="Protuupalno"
                productChips2="Opušta"
                imageClass="imageVertical"
                hoverOutline="blue-300"
              />
              <ProductCard
                productDetailsTitle="Slatki pelin"
                productDetailsPrice="3.8 €"
                productDetailsImageURL="/images/caj/Caj_Slatki_Pelin.png"
                productDetailsImageAlt="Gel za smirenje"
                productDetailsURL="/cajevi/cajProduct"
                productChips1="Protuupalno"
                productChips2="Opušta"
                imageClass="imageVertical"
                hoverOutline="primary-300"
              />
              <ProductCard
                productDetailsTitle="Energija jutra"
                productDetailsPrice="3.5 €"
                productDetailsImageURL="/images/caj/Caj_Energija.png"
                productDetailsImageAlt="Jačanje kos"
                productDetailsURL="/cajevi/cajProduct"
                productChips1="Protuupalno"
                productChips2="Opušta"
                imageClass="imageVertical"
                hoverOutline="blue-300"
              />
              <ProductCard
                productDetailsTitle="Detox čaj"
                productDetailsPrice="4.2 €"
                productDetailsImageURL="/images/caj/Caj_Detox.png"
                productDetailsImageAlt="Smiljolat"
                productDetailsURL="/cajevi/cajProduct"
                productChips1="Protuupalno"
                productChips2="Opušta"
                imageClass="imageHorizontal"
                hoverOutline="blue-300"
              />
              <ProductCard
                productDetailsTitle="Imuno čaj"
                productDetailsPrice="3.5 €"
                productDetailsImageURL="/images/caj/Caj_Imuno.png"
                productDetailsImageAlt="Imuno čaj"
                productDetailsURL="/cajevi/cajProduct"
                productChips1="Protuupalno"
                productChips2="Opušta"
                imageClass="imageVertical"
                hoverOutline="blue-300"
              />
              
            </div>
          </section>

          <BannerCaj />
      </main>
      <div>
        <FollowSocial 
          color="blue-200"
        />
        <Footer 
            color="blue-800"
          />
      </div>
    </div>
  )
}