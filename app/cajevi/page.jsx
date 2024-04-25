import Image from 'next/image'
import Link from 'next/link'
import Loading from "../loading";
import Chip from "../components/atoms/chip/Chip";
import Icon from "../components/atoms/icon/Icon";
import HeroTea from '../components/organism/heroTea/heroTea.jsx';
import ProductPromotioCard from '../components/organism/productPromotioCard/productPromotioCard.jsx';
import ProductCard from '../components/organism/productCard/productCard.jsx'
import AdBanner from '../components/organism/adBanner/adBanner.jsx'
import FollowSocial from '../components/organism/followSocial/followSocial';

import "./_style.scss";
import PlantIcon from '../assets/icon/plant-icon.svg'
import Regeneration from '../../public/images/icon/icon-regeneration.svg'
import Relax from '../../public/images/icon/icon-relax.svg'
import SkinCare from '../../public/images/icon/icon-skin-care.svg'

import SmokvinList from '../../public/images/caj/Caj-biljka-1.png';
import SlatkiPelin from '../../public/images/caj/Caj-biljka-2.png';
import EnergijaJutra from '../../public/images/caj/Caj-biljka-3.png';
import DetoxCaj from '../../public/images/caj/Caj-biljka-4.png';
import ImunoCaj from '../../public/images/caj/Caj-biljka-5.png';

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
              <h4>Prepusti se očaravajućoj harmoniji prirode s našom kolekcijom prirodne kozmetike.</h4>
            </div>
            <div className="flex">
              <div className="info-card">
                  <Image 
                    src={SkinCare}
                    alt='BannerImage'
                    quality={100}
                  />
                <h5>Njega kože</h5>
                <p>Marzipan caramels brownie jelly beans bear claw jelly-o shortbread macaroon candy canes.</p>
              </div>
              <div className="info-card">
                  <Image 
                    src={Regeneration}
                    alt='BannerImage'
                    quality={100}
                  />
                <h5>Regeneracija</h5>
                <p>Marzipan caramels brownie jelly beans bear claw jelly-o shortbread macaroon candy canes.</p>
              </div>
              <div className="info-card">
                  <Image 
                    src={Relax}
                    alt='BannerImage'
                    quality={100}
                  />
                <h5>Opuštanje</h5>
                <p>Marzipan caramels brownie jelly beans bear claw jelly-o shortbread macaroon candy canes.</p>
              </div>
            </div>
          </section>

          {/* Products container*/}
          <section className="product-cards">
            <div className="product-cards-title">
              <div className="column">
                <h4>Upoznaj proizvode</h4>
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
                productDetailsImageURL= {SmokvinList}
                productDetailsImageAlt="Smokvin list"
                productURL="/cajevi/cajProduct"
                productChips1="Protupalno"
                productChips2="Opušta"
                imageClass="image-small"
                hoverOutline="primary"
              />
              <ProductCard
                productDetailsTitle="Slatki pelin"
                productDetailsPrice="3.8 €"
                productDetailsImageURL= {SlatkiPelin}
                productDetailsImageAlt="Slatki pelin"
                productURL="/cajevi/cajProduct"
                productChips1="Smirujuće"
                productChips2="Opušta"
                imageClass="image-small"
                hoverOutline="primary"
              />
              <ProductCard
                productDetailsTitle="Energija jutra"
                productDetailsPrice="3.5 €"
                productDetailsImageURL= {EnergijaJutra}
                productDetailsImageAlt="Energija jutra"
                productURL="/cajevi/cajProduct"
                productChips1="Razbuđuje"
                productChips2="Umjesto kave"
                imageClass="image-small"
                hoverOutline="primary"
              />
              <ProductCard
                productDetailsTitle="Detox čaj"
                productDetailsPrice="4.2 €"
                productDetailsImageURL= {DetoxCaj}
                productDetailsImageAlt="Detox čaj"
                productURL="/cajevi/cajProduct"
                productChips1="Čisti organizam"
                productChips2="Hidracija"
                imageClass="image-small"
                hoverOutline="primary"
              />
              <ProductCard
                productDetailsTitle="Imuno čaj"
                productDetailsPrice="3.5 €"
                productDetailsImageURL= {ImunoCaj}
                productDetailsImageAlt="Imuno čaj"
                productURL="/cajevi/cajProduct"
                productChips1="Protupalno"
                productChips2="Opušta"
                imageClass="image-small"
                hoverOutline="primary"
              />
              
            </div>
          </section>

          <AdBanner />
      </main>
      <div>
        <FollowSocial 
          color="primary-200"
        />
      </div>
    </div>
  )
}