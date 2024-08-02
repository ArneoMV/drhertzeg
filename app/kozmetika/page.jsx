import Image from 'next/image'
import Link from 'next/link'
import Loading from "../loading";
import Chip from "../components/atoms/chip/Chip";
import Icon from "../components/atoms/icon/Icon";
import { Logos, Icons, Social, User, Illustrations, Cosmetics } from "../utilities/images.js";

import HeroCosmetics from '../components/organism/heroCosmetics/heroCosmetics.jsx';
import ProductPromotioCard from '../components/organism/productPromotioCard/productPromotioCard.jsx';
import ProductCard from '../components/organism/productCard/productCard.jsx'
import AdBanner from '../components/organism/adBanner/adBanner.jsx'
import FollowSocial from '../components/organism/followSocial/followSocial';
import Footer from '../components/organism/footer/footer';

import "./_style.scss";


import { Metadata } from 'next'
export const metadata = { 
  title: 'Kozmetika - Dr Hertzeg',
  description: 'Otkrijte našu liniju prirodnih kozmetičkih proizvoda brenda Dr Hertzeg. Uživajte u čistoći i učinkovitosti naših proizvoda koji njeguju vašu kožu i poboljšavaju vašu prirodnu ljepotu.',
  keywords: 'kozmetika, Dr Hertzeg, prirodni proizvodi, njega kože, ljepota, prirodna kozmetika',
  author: 'Dr Hertzeg'
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
                <Image src={Icons.skin_care} alt='Njega kože' quality={100} />
                <h5>Hidratacija i Njega</h5>
                <p>Naši proizvodi pružaju duboku hidrataciju i njeguju kožu, čineći je mekom, glatkom i zaštićenom od vanjskih utjecaja. Idealno za svakodnevnu njegu i obnovu kože.</p>
              </div>
              <div className="info-card">
                <Image src={Icons.regeneration} alt='Regeneracija' quality={100} />
                <h5>Regeneracija i Obnova</h5>
                <p>Dr Hertzeg kozmetika pomaže u regeneraciji i obnovi kože, koristeći snagu prirodnih sastojaka. Naši serumi i kreme smanjuju znakove starenja i poboljšavaju elastičnost kože.</p>
              </div>
              <div className="info-card">
                <Image src={Icons.relax} alt='Opuštanje' quality={100} />
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
                  <Image src={Icons.plant} alt='BannerImage' quality={100} />
                  <p>PRIRODNI SASTOJCI</p>
                </div>
              </div>
            </div>

            <div className="product-cards-container">
              <ProductCard
                productDetailsTitle="Calming Gel"
                productDetailsImageURL= {Cosmetics.product_calming_gel}
                productDetailsImageAlt="Calming Gel"
                productURL="/kozmetika/calming-gel"
                productChips1="Protupalno"
                productChips2="Opušta"
                imageClass="image-default"
                hoverOutline="primary"
              />
              <ProductCard
                productDetailsTitle="Hair Boost"
                productDetailsImageURL= {Cosmetics.product_hair_boost}
                productDetailsImageAlt="Hair Boost"
                productURL="/kozmetika/hair-boost"
                productChips1="Protupalno"
                productChips2="Opušta"
                imageClass="image-default"
                hoverOutline="primary"
              />
              <ProductCard
                productDetailsTitle="Smiljolat"
                productDetailsImageURL= {Cosmetics.product_smiljolat}
                productDetailsImageAlt="Smiljolat"
                productURL="/kozmetika/smiljolat"
                productChips1="Protupalno"
                productChips2="Opušta"
                imageClass="image-default"
                hoverOutline="primary"
              />
              <ProductCard
                productDetailsTitle="Lavandolat"
                productDetailsImageURL={Cosmetics.product_lavandolat}
                productDetailsImageAlt="lavandolat"
                productURL="/kozmetika/lavandolat"
                productChips1="Protupalno"
                productChips2="Opušta"
                imageClass="image-default"
                hoverOutline="primary"
              />

               <ProductCard
                productDetailsTitle="Serum od Smilja"
                productDetailsImageURL= {Cosmetics.product_serum_od_smilja}
                productDetailsImageAlt="Serum od smilja"
                productURL="/kozmetika/serum-od-smilja"
                productChips1="Protupalno"
                productChips2="Opušta"
                imageClass="image-default"
                hoverOutline="primary"
              />
              <ProductCard
                productDetailsTitle="Care And Massage Oil"
                productDetailsImageURL= {Cosmetics.product_care_and_massage_oil}
                productDetailsImageAlt="Care and massage oil"
                productURL="/kozmetika/care-and-massage-oil"
                productChips1="Protupalno"
                productChips2="Opušta"
                imageClass="image-default"
                hoverOutline="primary"
              />
               <ProductCard
                productDetailsTitle="Vitamin Night Cream"
                productDetailsImageURL= {Cosmetics.product_vitamin_night_cream}
                productDetailsImageAlt="Vitamin night cream"
                productURL="/kozmetika/vitamin-night-cream"
                productChips1="Protupalno"
                productChips2="Opušta"
                imageClass="image-default"
                hoverOutline="primary"
              />
               <ProductCard
                productDetailsTitle="Hydrating Day Cream"
                productDetailsImageURL= {Cosmetics.product_hydrating_day_cream}
                productDetailsImageAlt="Hydrating day cream"
                productURL="/kozmetika/hydrating-day-cream"
                productChips1="Protupalno"
                productChips2="Opušta"
                imageClass="image-default"
                hoverOutline="primary"
              />
              
            </div>
          </section>

          <AdBanner />
      </main>
        <FollowSocial />
    </div>
  )
}