import Button from "../components/atoms/button/Button";
import Image from 'next/image'
import HeroCosmetics from '../components/organism/heroCosmetics/heroCosmetics.jsx';
import ProductCard from '../components/organism/productCard/productCard';
import AdBanner from '../components/organism/adBanner/adBanner.jsx'
import FollowSocial from '../components/organism/followSocial/followSocial';
import "./_style.scss";
import { Logos, Icons, Social, User, Illustrations, Cosmetics } from "../utilities/images.js";
import productCosmetics from '../data/productCosmetics.js';


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

            {productCosmetics.map((product) => (
              <ProductCard
                key={product.id}
                productDetailsTitle={product.naziv}
                productDetailsPrice={product.cijena}
                productDetailsImageURL={Cosmetics[product.imageKey]}
                productDetailsImageAlt={product.naziv}
                productDetailsPagePath={product.pagePath}
                productChips1={product.tag1}
                productChips2={product.tag2}
                imageClass="image-default"
                hoverOutline="primary"
              />
            ))}
              
            </div>
          </section>

          <AdBanner />
      </main>
        <FollowSocial />
    </div>
  )
}