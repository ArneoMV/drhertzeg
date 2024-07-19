import Image from 'next/image'
import Link from 'next/link'
import Loading from "../loading";
import Chip from "../components/atoms/chip/Chip";
import Icon from "../components/atoms/icon/Icon";
import HeroCosmetics from '../components/organism/heroCosmetics/heroCosmetics.jsx';
import ProductPromotioCard from '../components/organism/productPromotioCard/productPromotioCard.jsx';
import ProductCard from '../components/organism/productCard/productCard.jsx'
import AdBanner from '../components/organism/adBanner/adBanner.jsx'
import FollowSocial from '../components/organism/followSocial/followSocial';
import Footer from '../components/organism/footer/footer';

import "./_style.scss";
import PlantIcon from '../assets/icon/plant-icon.svg'
import Regeneration from '../../public/images/icon/icon-regeneration.svg'
import Relax from '../../public/images/icon/icon-relax.svg'
import SkinCare from '../../public/images/icon/icon-skin-care.svg'

import SlatkiPelin from '../../public/images/product/caj/biljka-slatki-pelin.png';

import CalmingGel from '../../public/images/product/kozmetika/ambalaza-CalmingGel.png';
import HairBoost from '../../public/images/product/kozmetika/ambalaza-HairBoost.png';
import Smiljolat from '../../public/images/product/kozmetika/ambalaza-Smiljolat.png';
import Lavandolat from '../../public/images/product/kozmetika/ambalaza-Lavandolat.png';
import SerumOdSmilja from '../../public/images/product/kozmetika/ambalaza-SerumOdSmilja.png';
import CareAndMassageOil from '../../public/images/product/kozmetika/ambalaza-CareAndMassageOil.png';
import VitaminNightCream from '../../public/images/product/kozmetika/ambalaza-VitaminNightCream.png';
import HydratingDayCream from '../../public/images/product/kozmetika/ambalaza-HydratingDayCream.png';

import { Metadata } from 'next'
export const metadata = { 
  title: 'Kozmetika',
  description: 'Asortiman kozmetike',
}


export default function Kozmetika() {
    return (
      <div className='products-page caj'>
        <main className='products-page-container'>
          {/* Promotion section */}
          <section className="product-promotion">
            <HeroCosmetics />
            
            <div className="promotion-title col-12-sm col-8md col-8-lg">
              <h4>Blagodati Dr Hertzeg Kozmetike</h4>
            </div>
            <div className="flex">
              <div className="info-card">
                  <Image 
                    src={SkinCare}
                    alt='BannerImage'
                    quality={100}
                  />
                <h5>Hidratacija i Njega</h5>
                <p>Naši proizvodi pružaju duboku hidrataciju i njeguju kožu, čineći je mekom, glatkom i zaštićenom od vanjskih utjecaja. Idealno za svakodnevnu njegu i obnovu kože.</p>
              </div>
              <div className="info-card">
                  <Image 
                    src={Regeneration}
                    alt='BannerImage'
                    quality={100}
                  />
                <h5>Regeneracija i Obnova</h5>
                <p>Dr Hertzeg kozmetika pomaže u regeneraciji i obnovi kože, koristeći snagu prirodnih sastojaka. Naši serumi i kreme smanjuju znakove starenja i poboljšavaju elastičnost kože.</p>
              </div>
              <div className="info-card">
                  <Image 
                    src={Relax}
                    alt='BannerImage'
                    quality={100}
                  />
                <h5>Umirivanje i Zaštita</h5>
                <p>Proizvodi su formulirani da umire iritacije, smanjuju upale i štite kožu. Naša kozmetika koristi biljke poput lavande i smilja za prirodnu i učinkovitu njegu.</p>
              </div>
            </div>
          </section>

          {/* Products container*/}
          <section className="product-cards">
            <div className="product-cards-title">
              <div className="column">
                <h4>Upoznaj proizvode</h4>
                <p>Upoznajte proizvode Dr Hertzeg kozmetike i uživajte u prirodnoj ljepoti i njezi, koristeći proizvode s visokim udjelom prirodnih sastojaka.</p>
              </div>
              <div className="column">
                <div className="row">
                  <Image 
                    src={PlantIcon}
                    alt='BannerImage'
                    quality={100}
                  />
                  <p>PRIRODNI SASTOJCI</p>
                </div>
              </div>
            </div>

            <div className="product-cards-container">
              <ProductCard
                productDetailsTitle="Calming Gel"
                productDetailsPrice="3.8 €"
                productDetailsImageURL= {CalmingGel}
                productDetailsImageAlt="Calming Gel"
                productURL="/kozmetika/CalmingGel"
                productChips1="Protupalno"
                productChips2="Opušta"
                imageClass="image-default"
                hoverOutline="primary"
              />
              <ProductCard
                productDetailsTitle="Hair Boost"
                productDetailsPrice="3.5 €"
                productDetailsImageURL= {HairBoost}
                productDetailsImageAlt="Hair Boost"
                productURL="/kozmetika/HairBoost"
                productChips1="Protupalno"
                productChips2="Opušta"
                imageClass="image-default"
                hoverOutline="primary"
              />
              <ProductCard
                productDetailsTitle="Smiljolat"
                productDetailsPrice="4.2 €"
                productDetailsImageURL= {Smiljolat}
                productDetailsImageAlt="Smiljolat"
                productURL="/kozmetika/Smiljolat"
                productChips1="Protupalno"
                productChips2="Opušta"
                imageClass="image-default"
                hoverOutline="primary"
              />
              <ProductCard
                productDetailsTitle="Lavandolat"
                productDetailsPrice="3.5 €"
                productDetailsImageURL= {Lavandolat}
                productDetailsImageAlt="Lavandolat"
                productURL="/kozmetika/Lavandolat"
                productChips1="Protupalno"
                productChips2="Opušta"
                imageClass="image-default"
                hoverOutline="primary"
              />
               <ProductCard
                productDetailsTitle="Serum od Smilja"
                productDetailsPrice="3.5 €"
                productDetailsImageURL= {SerumOdSmilja}
                productDetailsImageAlt="SerumOdSmilja"
                productURL="/kozmetika/SerumOdSmilja"
                productChips1="Protupalno"
                productChips2="Opušta"
                imageClass="image-default"
                hoverOutline="primary"
              />
              <ProductCard
                productDetailsTitle="Care And Massage Oil"
                productDetailsPrice="3.5 €"
                productDetailsImageURL= {CareAndMassageOil}
                productDetailsImageAlt="CareAndMassageOil"
                productURL="/kozmetika/CareAndMassageOil"
                productChips1="Protupalno"
                productChips2="Opušta"
                imageClass="image-default"
                hoverOutline="primary"
              />
               <ProductCard
                productDetailsTitle="Vitamin Night Cream"
                productDetailsPrice="3.5 €"
                productDetailsImageURL= {VitaminNightCream}
                productDetailsImageAlt="VitaminNightCream"
                productURL="/kozmetika/VitaminNightCream"
                productChips1="Protupalno"
                productChips2="Opušta"
                imageClass="image-default"
                hoverOutline="primary"
              />
               <ProductCard
                productDetailsTitle="Hydrating Day Cream"
                productDetailsPrice="3.5 €"
                productDetailsImageURL= {HydratingDayCream}
                productDetailsImageAlt="HydratingDayCream"
                productURL="/kozmetika/HydratingDayCream"
                productChips1="Protupalno"
                productChips2="Opušta"
                imageClass="image-default"
                hoverOutline="primary"
              />
              
            </div>
          </section>

          <AdBanner />
      </main>
        <FollowSocial 
          color="primary-200"
        />
    </div>
  )
}