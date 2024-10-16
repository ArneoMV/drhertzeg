import Button from "../components/atoms/button/Button";
import Image from 'next/image';
import HeroTea from '../components/organism/heroTea/heroTea';
import ProductCard from '../components/organism/productCard/productCard';
import AdBanner from '../components/organism/adBanner/adBanner';
import FollowSocial from '../components/organism/followSocial/followSocial';
import './_style.scss';
import { Logos, Icons, Social, User, Illustrations, Teas } from "../utilities/images.js";
import productsCaj from '../data/productCaj.js';

import { Metadata } from 'next'
export const metadata = { 
  title: 'Čajevi - Dr Hertzeg',
  description: 'Istražite našu raznoliku ponudu prirodnih čajeva brenda Dr Hertzeg. Svaki čaj je pažljivo odabran kako bi vam pružio optimalno iskustvo i blagodati za zdravlje.',
  keywords: 'čajevi, Dr Hertzeg, prirodni čajevi, zdravi čajevi, wellness, blagodati čaja',
  author: 'Dr Hertzeg'
}

export default function Cajevi() {
  return (
      <div className='products-page caj'>
        <main className='products-page-container'>
          {/* Promotion section */}
          <section className="product-promotion">
            <HeroTea />
            <div className="promotion-title col-12-sm col-8md col-8-lg">
              <h4>Prepusti se očaravajućoj harmoniji prirode s našom kolekcijom prirodne kozmetike.</h4>
            </div>
            <div className="flex">
              <div className="info-card">
                <Image src={Icons.skin_care} alt='Njega kože' quality={100} />
                <h5>Njega kože</h5>
                <p>Čajevi obogaćeni antioksidansima i hranjivim tvarima podržavaju zdravlje kože iznutra. Idealni za blistav ten i borbu protiv starenja.</p>
              </div>
              <div className="info-card">
                <Image src={Icons.regeneration} alt='Regeneracija' quality={100} />
                <h5>Regeneracija</h5>
                <p>Čajevi koji umiruju i opuštaju, savršeni za smanjenje stresa i promicanje mirnog sna.</p>
              </div>
              <div className="info-card">
                <Image src={Icons.relax} alt='Opuštanje' quality={100} />
                <h5>Opuštanje</h5>
                <p>Umirujući čajevi koji smanjuju stres i poboljšavaju kvalitetu sna.</p>
              </div>
            </div>
          </section>
          {/* Products container */}
          <section className="product-cards">
            <div className="product-cards-title">
              <div className="column">
                <h4>Upoznaj proizvode</h4>
              </div>
              <div className="column">
                <div className="row">
                  <Image src={Icons.plant} alt='BannerImage' quality={100} />
                  <p>100% PRIRODAN PROIZVOD</p>
                </div>
              </div>
            </div>
            <div className="product-cards-container">

            {productsCaj.map((product) => (
              <ProductCard
                key={product.id}
                productDetailsTitle={product.naziv}
                productDetailsPrice={product.cijena}
                productDetailsImageURL={Teas[product.imageKey]} // Dinamički pristupi slici
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
  );
}
