
import Head from 'next/head';
import Footer from "../components/organism/footer/Footer";
import Image from 'next/image';
import HeroTea from '../components/organism/heroTea/heroTea';
import ProductCard from '../components/organism/productCard/productCard';
import AdBanner from '../components/organism/adBanner/adBanner';
import FollowSocial from '../components/organism/followSocial/followSocial';
import './_style.scss';
import PlantIcon from '../assets/icon/plant-icon.svg';
import Regeneration from '../../public/images/icon/icon-regeneration.svg';
import Relax from '../../public/images/icon/icon-relax.svg';
import SkinCare from '../../public/images/icon/icon-skin-care.svg';
import SmokvinList from '../../public/images/product/caj/biljka-smokvin-list.png';
import SlatkiPelin from '../../public/images/product/caj/biljka-slatki-pelin.png';
import EnergijaJutra from '../../public/images/product/caj/biljka-energija-jutra.png';
import DetoxCaj from '../../public/images/product/caj/biljka-detox.png';
import ImunoCaj from '../../public/images/product/caj/biljka-imuno.png';

export const metadata = {
  title: 'Cajevi',
  description: 'Asortiman čajeva',
};

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
                <Image src={SkinCare} alt='Njega kože' quality={100} />
                <h5>Njega kože</h5>
                <p>Čajevi obogaćeni antioksidansima i hranjivim tvarima podržavaju zdravlje kože iznutra. Idealni za blistav ten i borbu protiv starenja.</p>
              </div>
              <div className="info-card">
                <Image src={Regeneration} alt='Regeneracija' quality={100} />
                <h5>Regeneracija</h5>
                <p>Čajevi koji umiruju i opuštaju, savršeni za smanjenje stresa i promicanje mirnog sna.</p>
              </div>
              <div className="info-card">
                <Image src={Relax} alt='Opuštanje' quality={100} />
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
                  <Image src={PlantIcon} alt='BannerImage' quality={100} />
                  <p>100% PRIRODAN PROIZVOD</p>
                </div>
              </div>
            </div>
            <div className="product-cards-container">
              <ProductCard
                productDetailsTitle="Smokvin list"
                productDetailsPrice="4 €"
                productDetailsImageURL={SmokvinList}
                productDetailsImageAlt="Smokvin list"
                productURL="/cajevi/CajSmokvaList"
                productChips1="Protupalno"
                productChips2="Opušta"
                imageClass="image-small"
                hoverOutline="primary"
              />
              <ProductCard
                productDetailsTitle="Slatki pelin"
                productDetailsPrice="3.8 €"
                productDetailsImageURL={SlatkiPelin}
                productDetailsImageAlt="Slatki pelin"
                productURL="/cajevi/CajSlatkiPelin"
                productChips1="Smirujuće"
                productChips2="Opušta"
                imageClass="image-small"
                hoverOutline="primary"
              />
              <ProductCard
                productDetailsTitle="Energija jutra"
                productDetailsPrice="3.5 €"
                productDetailsImageURL={EnergijaJutra}
                productDetailsImageAlt="Energija jutra"
                productURL="/cajevi/CajEnergijaJutra"
                productChips1="Razbuđuje"
                productChips2="Umjesto kave"
                imageClass="image-small"
                hoverOutline="primary"
              />
              <ProductCard
                productDetailsTitle="Detox čaj"
                productDetailsPrice="4.2 €"
                productDetailsImageURL={DetoxCaj}
                productDetailsImageAlt="Detox čaj"
                productURL="/cajevi/CajDetox"
                productChips1="Čisti organizam"
                productChips2="Hidracija"
                imageClass="image-small"
                hoverOutline="primary"
              />
              <ProductCard
                productDetailsTitle="Imuno čaj"
                productDetailsPrice="3.5 €"
                productDetailsImageURL={ImunoCaj}
                productDetailsImageAlt="Imuno čaj"
                productURL="/cajevi/CajImuno"
                productChips1="Protupalno"
                productChips2="Opušta"
                imageClass="image-small"
                hoverOutline="primary"
              />
            </div>
          </section>
          <AdBanner />
        </main>
        <FollowSocial color="primary-200" />
      </div>
  );
}
