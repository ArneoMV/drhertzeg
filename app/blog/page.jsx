// import { Suspense } from "react";
import Image from 'next/image'
import Link from 'next/link'
import Chip from '../components/atoms/chip/Chip';
import { Logos, Icons, Social, BlogImg } from "../utilities/images.js";

import CardBlog from '../components/organism/cardBlog/cardBlog'
import AdBanner from '../components/organism/adBanner/adBanner'

import Loading from "../loading";
import "./_style.scss";

import FollowSocial from '../components/organism/followSocial/followSocial';

export default function Blog() {
    return (
      <div className="blog-page">
        <div className="hero-container">
          <div className="heroAsset">
            <div className="heroAsset_inner">
              <div className="heroAsset_asset">
                <Image 
                  src={Social.cover_kozmetika}
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
                  <Chip text="Blog" colorBg="#D8F3DC" colorText="#1B4332" />
                  <h3>Novosti i zanimljivosti</h3>
                </div>
                <p>Tips and tutorials on how to build better tea experience </p>
              </div>  
            </div>
          </div>
        </div>

        <main className="blog-page-container">
          <section className="blog-article-container">
            <CardBlog
              productTitle="Od antičke Europe do suvremenih istraživanja"
              productDetailsImageURL={BlogImg.blog_card_image_1}
              productDetailsImageAlt="Smokvin List"
              productDetailsURL="/blog/slatki-pelin-povijest-i-suvremena-istrazivanja"
            />
            <CardBlog
              productTitle="Hidrolati: prirodna čarolija za savršenu kožu"
              productDetailsImageURL={BlogImg.blog_card_image_2}
              productDetailsImageAlt="Hidrolati prirodna carolija za savrsenu kozu"
              productDetailsURL="/blog/hidrolati-prirodna-carolija-za-savrsenu-kozu"
            />
            <CardBlog
              productTitle="Prirodna kozmetika i organski cajevi trendovi koji ocaravaju svijet"
              productDetailsImageURL={BlogImg.blog_card_image_3}
              productDetailsImageAlt="prirodna kozmetika i organski cajevi trendovi koji ocaravaju svijet"
              productDetailsURL="/blog/prirodna-kozmetika-i-organski-cajevi-trendovi-koji-ocaravaju-svijet"
            />
          </section>

          <AdBanner />
        </main>
      </div>
    )
}
