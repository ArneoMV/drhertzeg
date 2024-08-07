
import Head from 'next/head';
import Button from "../components/atoms/button/Button";
import Image from 'next/image';
import HeroTea from '../components/organism/heroTea/heroTea';
import ProductCard from '../components/organism/productCard/productCard';
import AdBanner from '../components/organism/adBanner/adBanner';
import FollowSocial from '../components/organism/followSocial/followSocial';
import './_style.scss';
import { Logos, Icons, Social, User, Illustrations, Teas } from "../utilities/images.js";

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
              <ProductCard
                productDetailsTitle="Smokvin list"
                productDetailsPrice="4 €"
                productDetailsImageURL={Teas.packaging_eko_caj_smokva_list}
                productDetailsImageAlt="Smokvin list"
                productURL="/cajevi/smokvin-list-caj"
                productChips1="Protupalno"
                productChips2="Opušta"
                imageClass="image-default"
                hoverOutline="primary"
              />
              <ProductCard
                productDetailsTitle="Slatki pelin"
                productDetailsPrice="3.8 €"
                productDetailsImageURL={Teas.packaging_caj_od_slatkog_pelina}
                productDetailsImageAlt="Slatki pelin"
                productURL="/cajevi/caj-od-slatkog-pelina"
                productChips1="Smirujuće"
                productChips2="Opušta"
                imageClass="image-default"
                hoverOutline="primary"
              />
              <ProductCard
                productDetailsTitle="Energija jutra"
                productDetailsPrice="3.5 €"
                productDetailsImageURL={Teas.packaging_energija_jutra_caj}
                productDetailsImageAlt="Energija jutra"
                productURL="/cajevi/energija-jutra-caj"
                productChips1="Razbuđuje"
                productChips2="Umjesto kave"
                imageClass="image-default"
                hoverOutline="primary"
              />
              <ProductCard
                productDetailsTitle="Detox čaj"
                productDetailsPrice="4.2 €"
                productDetailsImageURL={Teas.packaging_detox_caj}
                productDetailsImageAlt="Detox čaj"
                productURL="/cajevi/detox-caj"
                productChips1="Čisti organizam"
                productChips2="Hidracija"
                imageClass="image-default"
                hoverOutline="primary"
              />
              <ProductCard
                productDetailsTitle="Imuno čaj"
                productDetailsPrice="3.5 €"
                productDetailsImageURL={Teas.packaging_imuno_caj}
                productDetailsImageAlt="Imuno čaj"
                productURL="/cajevi/imuno-caj"
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
  );
}
