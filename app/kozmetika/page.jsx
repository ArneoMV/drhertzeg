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

import KapiSlatkogPelina from '../../public/images/product/kozmetika/KapiSlatkogPelina.png';
import CalmingGel from '../../public/images/product/kozmetika/CalmingGel.png';
import HairBoost from '../../public/images/product/kozmetika/HairBoost.png';
import Smiloljat from '../../public/images/product/kozmetika/Smiloljat.png';
import Lavandolat from '../../public/images/product/kozmetika/Lavandolat.png';
import SerumSmilje from '../../public/images/product/kozmetika/SerumSmilje.png';
import CareAndMassageOil from '../../public/images/product/kozmetika/CareAndMassageOil.png';
import VitaminNightCream from '../../public/images/product/kozmetika/VitaminNightCream.png';
import HydratingDayCream from '../../public/images/product/kozmetika/HydratingDayCream.png';

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
                productDetailsTitle="Kapi Slatkog Pelina"
                productDetailsPrice="4 €"
                productDetailsImageURL= {KapiSlatkogPelina}
                productDetailsImageAlt="Kapi Slatkog Pelina"
                productURL="/cajevi/cajProduct"
                productChips1="Protuupalno"
                productChips2="Opušta"
                imageClass="image-default"
                hoverOutline="primary"
              />
              <ProductCard
                productDetailsTitle="Calming Gel"
                productDetailsPrice="3.8 €"
                productDetailsImageURL= {CalmingGel}
                productDetailsImageAlt="Calming Gel"
                productURL="/cajevi/cajProduct"
                productChips1="Protuupalno"
                productChips2="Opušta"
                imageClass="image-default"
                hoverOutline="primary"
              />
              <ProductCard
                productDetailsTitle="Hair Boost"
                productDetailsPrice="3.5 €"
                productDetailsImageURL= {HairBoost}
                productDetailsImageAlt="Hair Boost"
                productURL="/cajevi/cajProduct"
                productChips1="Protuupalno"
                productChips2="Opušta"
                imageClass="image-default"
                hoverOutline="primary"
              />
              <ProductCard
                productDetailsTitle="Smiloljat"
                productDetailsPrice="4.2 €"
                productDetailsImageURL= {Smiloljat}
                productDetailsImageAlt="Smiloljat"
                productURL="/cajevi/cajProduct"
                productChips1="Protuupalno"
                productChips2="Opušta"
                imageClass="image-default"
                hoverOutline="primary"
              />
              <ProductCard
                productDetailsTitle="Lavandolat"
                productDetailsPrice="3.5 €"
                productDetailsImageURL= {Lavandolat}
                productDetailsImageAlt="Lavandolat"
                productURL="/cajevi/cajProduct"
                productChips1="Protuupalno"
                productChips2="Opušta"
                imageClass="image-default"
                hoverOutline="primary"
              />
               <ProductCard
                productDetailsTitle="Serum od Smilja"
                productDetailsPrice="3.5 €"
                productDetailsImageURL= {SerumSmilje}
                productDetailsImageAlt="SerumSmilje"
                productURL="/cajevi/cajProduct"
                productChips1="Protuupalno"
                productChips2="Opušta"
                imageClass="image-default"
                hoverOutline="primary"
              />
              
              <ProductCard
                productDetailsTitle="Care and Massage Oil"
                productDetailsPrice="3.5 €"
                productDetailsImageURL= {CareAndMassageOil}
                productDetailsImageAlt="CareAndMassageOil"
                productURL="/cajevi/cajProduct"
                productChips1="Protuupalno"
                productChips2="Opušta"
                imageClass="image-default"
                hoverOutline="primary"
              />
               <ProductCard
                productDetailsTitle="VitaminNightCream"
                productDetailsPrice="3.5 €"
                productDetailsImageURL= {VitaminNightCream}
                productDetailsImageAlt="VitaminNightCream"
                productURL="/cajevi/cajProduct"
                productChips1="Protuupalno"
                productChips2="Opušta"
                imageClass="image-small"
                hoverOutline="primary"
              />
               <ProductCard
                productDetailsTitle="Hydrating Day Cream"
                productDetailsPrice="3.5 €"
                productDetailsImageURL= {HydratingDayCream}
                productDetailsImageAlt="HydratingDayCream"
                productURL="/cajevi/cajProduct"
                productChips1="Protuupalno"
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
        <Footer 
            color="primary-800"
          />
      </div>
    </div>
  )
}