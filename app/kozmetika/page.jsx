import Image from 'next/image'
import Link from 'next/link'
import Chip from "../components/atoms/chip/Chip";
import Icon from "../components/atoms/icon/Icon";

import BannerCosmetics from '../components/organism/bannerCosmetics/bannerCosmetics';
import PromotionImageGreen from '../assets/image/product/product-promotion-card-green.png'
import PromotionImageBlue from '../assets/image/product/product-promotion-card-blue.png'
import PromotionImageOrange from '../assets/image/product/product-promotion-card-orange.png'

import ProductCard from '../components/organism/ProductCard/ProductCard'
import CosmeticsBanner from '../components/organism/cosmeticsBanner/cosmeticsBanner'
import Button from '../components/atoms/button/button';
import Loading from "../loading";
import "./_style.scss";
import "../styles/_index.scss";


import FollowSocial from "../components/organism/followSocial/FollowSocial";

export default function Caj() {
    return (
      <main className="products-page">
        <div className="products-page-container">

          {/* Hero Banner */}
          <BannerCosmetics />


          {/* Promotion cards */}
          <section className="product-promotion">
            <div className="product-promotion-card">
              <div className="promotion-content">
                <div className="promotion-content-title">
                  <h4>Njega kože</h4>
                  <p>Marzipan caramels brownie jelly beans bear claw jelly-o shortbread macaroon candy canes. </p>
                </div>
                <Link href="/kozmetika/kozmetikaProduct">
                  <Button type="link">Više</Button>
                </Link>
              </div>
              <div className="promotion-image">
                <Image 
                  src={PromotionImageGreen}
                  alt='BannerImage'
                  quality={100}
                />
              </div>
            </div>

            <div className="product-promotion-card">
              <div className="promotion-content">
                <div className="promotion-content-title">
                  <h4>Pomlađivanje</h4>
                  <p>Marzipan caramels brownie jelly beans bear claw jelly-o shortbread macaroon candy canes. </p>
                </div>
                <Link href="/kozmetika/kozmetikaProduct">
                  <Button type="link">Više</Button>
                </Link>
              </div>
              <div className="promotion-image">
                <Image 
                  src={PromotionImageBlue}
                  alt='BannerImage'
                  quality={100}
                />
              </div>
            </div>

            <div className="product-promotion-card">
              <div className="promotion-content">
                <div className="promotion-content-title">
                  <h4>Regeneracija</h4>
                  <p>Marzipan caramels brownie jelly beans bear claw jelly-o shortbread macaroon candy canes. </p>
                </div>
                <Link href="/kozmetika/kozmetikaProduct">
                  <Button type="link">Više</Button>
                </Link>
              </div>
              <div className="promotion-image">
                <Image 
                  src={PromotionImageOrange}
                  alt='BannerImage'
                  quality={100}
                />
              </div>
            </div>
          </section>

          {/* Products container*/}
          <section className="product-cards">
            <div className="product-cards-title">
              <h2>Katalog proizvoda</h2>
            </div>
            <div className="product-cards-container">
              <ProductCard
                productDetailsTitle="Kapi slatkog pelina"
                productDetailsPrice="4 €"
                productDetailsImageURL="/images/product/kozmetika-product-1.png"
                productDetailsImageAlt="Kapi slatkog pelina"
                productDetailsURL="/kozmetika/kozmetikaProduct"
                productChips1="Protuupalno"
                productChips2="Opušta"
              />
              <ProductCard
                productDetailsTitle="Gel za smirenje"
                productDetailsPrice="3.8 €"
                productDetailsImageURL="/images/product/kozmetika-product-5.png"
                productDetailsImageAlt="Gel za smirenje"
                productDetailsURL="/kozmetika/kozmetikaProduct"
                productChips1="Protuupalno"
                productChips2="Opušta"
              />
              <ProductCard
                productDetailsTitle="Jačanje kose"
                productDetailsPrice="3.5 €"
                productDetailsImageURL="/images/product/kozmetika-product-4.png"
                productDetailsImageAlt="Jačanje kos"
                productDetailsURL="/kozmetika/kozmetikaProduct"
                productChips1="Protuupalno"
                productChips2="Opušta"
              />
              <ProductCard
                productDetailsTitle="Smiljolat"
                productDetailsPrice="4.2 €"
                productDetailsImageURL="/images/product/kozmetika-product-5.png"
                productDetailsImageAlt="Smiljolat"
                productDetailsURL="/kozmetika/kozmetikaProduct"
                productChips1="Protuupalno"
                productChips2="Opušta"
              />
              <ProductCard
                productDetailsTitle="Ulje za njegu i masažu"
                productDetailsPrice="3.5 €"
                productDetailsImageURL="/images/product/kozmetika-product-3.png"
                productDetailsImageAlt="Ulje za njegu i masažu"
                productDetailsURL="/kozmetika/kozmetikaProduct"
                productChips1="Protuupalno"
                productChips2="Opušta"
              />
              <ProductCard
                productDetailsTitle="Serum od smilja"
                productDetailsPrice="5 €"
                productDetailsImageURL="/images/product/kozmetika-product-3.png"
                productDetailsImageAlt="Serum od smilja"
                productDetailsURL="/kozmetika/kozmetikaProduct"
                productChips1="Protuupalno"
                productChips2="Opušta"
              />
              <ProductCard
                productDetailsTitle="Noćna vitaminska krema"
                productDetailsPrice="4 €"
                productDetailsImageURL="/images/product/kozmetika-product-1.png"
                productDetailsImageAlt="Noćna vitaminska krema"
                productDetailsURL="/kozmetika/kozmetikaProduct"
                productChips1="Protuupalno"
                productChips2="Opušta"
              />
              <ProductCard
                productDetailsTitle="Hidratantna dnevna krema"
                productDetailsPrice="2.7 €"
                productDetailsImageURL="/images/product/kozmetika-product-4.png"
                productDetailsImageAlt="Hidratantna dnevna krema"
                productDetailsURL="/kozmetika/kozmetikaProduct"
                productChips1="Protuupalno"
                productChips2="Opušta"
              />
              <ProductCard
                productDetailsTitle="Lavandorat"
                productDetailsPrice="3.5 €"
                productDetailsImageURL="/images/product/kozmetika-product-5.png"
                productDetailsImageAlt="Lavandorat"
                productDetailsURL="/kozmetika/kozmetikaProduct"
                productChips1="Protuupalno"
                productChips2="Opušta"
              />
            </div>
          </section>

          <CosmeticsBanner />
        </div>
        <FollowSocial />
        
      </main>
    )
}
