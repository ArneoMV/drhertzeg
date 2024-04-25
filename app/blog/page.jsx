// import { Suspense } from "react";
import Image from 'next/image'
import Link from 'next/link'
import Chip from '../components/atoms/chip/Chip';

import HeroImage from '../assets/image/CoverKozmetika.png'
import CardBlog from '../components/organism/cardBlog/cardBlog'
import AdBanner from '../components/organism/adBanner/adBanner'

import Loading from "../loading";
import "./_style.scss";

import FollowSocial from '../components/organism/followSocial/followSocial';
import Footer from '../components/organism/footer/footer';

export default function Blog() {
    return (
      <div className="blog-page">
        <div className="hero-container">
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
              productDetailsImageURL="/images/blog/BlogCardImage_1.png"
              productDetailsImageAlt="Smokvin List"
              productDetailsURL="/blog/blog-1"
            />
            <CardBlog
              productTitle="Hidrolati: prirodna čarolija za savršenu kožu"
              productDetailsImageURL="/images/blog/BlogCardImage_2.png"
              productDetailsImageAlt="Smokvin List"
              productDetailsURL="/blog/blog-2"
            />
            <CardBlog
              productTitle="Organski trendovi koji očaravaju Svijet"
              productDetailsImageURL="/images/blog/BlogCardImage_3.png"
              productDetailsImageAlt="Smokvin List"
              productDetailsURL="/blog/blog-3"
            />

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
