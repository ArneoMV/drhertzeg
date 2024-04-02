import { Suspense } from "react";
import Image from 'next/image'
import Link from 'next/link'
import Chip from "../components/atoms/chip/Chip";
import Icon from "../components/atoms/icon/Icon";

import HeroImage from '../assets/image/CoverKozmetika.png'
import CardBlog from '../components/organism/cardBlog/cardBlog'
import CosmeticsBanner from '../components/organism/cosmeticsBanner/cosmeticsBanner'


// import TeaList from "./TeaList";
import Loading from "../loading";
import "./_style.scss";

import FollowSocial from "../components/organism/followSocial/FollowSocial";

export default function Blog() {
    return (
      <main className="blogPage">
        <div className="heroContainer">
          <div className="heroAsset">
            <div className="heroAsset_inner">
              <div className="heroAsset_asset">
                <Image 
                  src={HeroImage}
                  alt='image'
                  quality={100}
                />
              </div>
            </div>
              
          </div>
          <div className="heroContent">
            <div className="heroContentInner">
              <div className="heroContent_heading">
                <div className="titleWithChip">
                  <Chip text="blog" />
                  <h3>Naš blog</h3>
                </div>
                <p>Tips and tutorials on how to build better tea experience </p>
              </div>
                
            </div>
          </div>
        </div>

        <section className="other-product-container">
          <CardBlog
            productTitle="Vodič za Odabir Okusa i Arome"
            productDescription="Pronađite Svoj Savršeni Čaj"
            productDetailsImageURL="/images/blog/BlogCardImage_1.png"
            productDetailsImageAlt="Smokvin List"
            productDetailsURL="/blog/demoArticle"
          />
          <CardBlog
            productTitle="Isprobajte Naše Najnovije Čajeve"
            productDescription="Noviteti i Specijalne Ponude"
            productDetailsImageURL="/images/blog/BlogCardImage_2.png"
            productDetailsImageAlt="Smokvin List"
            productDetailsURL="/blog/demoArticle"
          />
          <CardBlog
            productTitle="Zdravlje u Šalici"
            productDescription="Kako Čaj Može Unaprijediti Vašu Dobrobit"
            productDetailsImageURL="/images/blog/BlogCardImage_3.png"
            productDetailsImageAlt="Smokvin List"
            productDetailsURL="/blog/demoArticle"
          />
          <CardBlog
            productTitle="Recepti za Čajne Koktele"
            productDescription="Uživajte u Raznolikosti Okusa"
            productDetailsImageURL="/images/blog/BlogCardImage_4.png"
            productDetailsImageAlt="Smokvin List"
            productDetailsURL="/blog/demoArticle"
          />
          <CardBlog
            productTitle="Prirodni Čajevi za Detoksikaciju"
            productDescription="Očistite Tijelo i Osvježite Dušu"
            productDetailsImageURL="/images/blog/BlogCardImage_5.png"
            productDetailsImageAlt="Smokvin List"
            productDetailsURL="/blog/demoArticle"
          />
          <CardBlog
            productTitle="Čajevaonica"
            productDescription="Uživajte u Raznolikosti Okusa"
            productDetailsImageURL="/images/blog/BlogCardImage_6.png"
            productDetailsImageAlt="Smokvin List"
            productDetailsURL="/blog/demoArticle"
          />
       
        </section>


        <CosmeticsBanner />
        
        <FollowSocial />
        
      </main>
    )
}
