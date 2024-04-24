
import { Metadata } from 'next'

// import Tabs from "./components/molecules/tab/Tabs";
import Chip from "./components/atoms/chip/Chip";
import Button from "./components/atoms/button/Button";
import Footer from "./components/organism/footer/footer";

import Image from 'next/image'
import Link from 'next/link'
import './styles/_index.scss';
import './styles/pages/_homepage.scss';
import './styles/base/_base.scss';
import LinkedinIcon from '../public/images/icon/socialLogo/Linkedin-icon.svg'
import FacebookIcon from '../public/images/icon/socialLogo/Facebook-icon.svg'
import TikTokIcon from '../public/images/icon/socialLogo/TikTok-icon.svg'

import { HomepageImages } from '../app/utilities/images.js'
import { Homepage } from '../app/utilities/images.js'


export const metadata = { 
  title: 'Dr Hertzeg',
  description: 'Homepage description',
}


// Homepage
export default function Page() {

  
  return (
    <>
      <main className='container homepage'>
        <section className="hero">
          <h1>Neki nas naslov</h1>
          <div className="heroImage">
            <Image 
              src={Homepage.heroImage}
              alt='image'
              quality={100}
            />
            <div className="slide row">
              <div className="timelineSlide"></div>
              <div className="timelineSlide"></div>
            </div>
          </div>
        </section>

        <section className="visionHomepage postBackground">
          <div className='vision col-6-lg'>
            <h3>Domaći čajevi iz divlje Hercegovine</h3>
            <p>Poštujući principe suvremene fitoterapije uz uvažavanje tradicije napravili smo naše čajeve od aromatičnog bilja s područja Hercegovine. Nudimo preko 100 vrsta prirodnih čajeva proizvedenih od ručno ubranih najkvalitetnijih dijelova biljaka, bez umjetnih boja i aroma. Osjetite profinjen okus domaćeg čaja iz divlje i netaknute prirode Hercegovine.</p>
          </div>
        </section>

        <section className='products'>
          {/* <Tabs /> */}
        </section>

        <section className="blogHomepage postBackground">
          <div className="blogHomepageContainer">
            <div className="blogHomepageContent">
              <div className="blogHomeText">
                <div className="titleWithChip">
                  <Chip text="blog" />
                  <h3>Prirodni uzgoj</h3>
                </div>
                <p>Dessert jelly chocolate cake cheesecake bear claw gummies pastry bear claw. Marzipan marzipan ice cream soufflé dessert dessert. Dragée chocolate cookie sugar plum jelly.</p>
              </div>
              <Link href="/blog">
                <Button 
                  className="primary" 
                  type="iconRight" 
                  iconName="chevronCompactRightLight">
                  Pročitaj više
                </Button>
              </Link>
            </div>
            <Image 
              src={Homepage.Image2}
              alt='image'
              quality={100}
            />
          </div>
        </section>

        <section className="follow">

          <div className="followTitle">
            <h3>Pridruzi se zajednici</h3>
            <div className="row">
              <Link href="/" className="logo">
                <Image 
                  src={LinkedinIcon}
                  alt='Linkedin'
                  width={52}
                  quality={100}
                />
              </Link>
              <Link href="/" className="logo">
                <Image 
                  src={FacebookIcon}
                  alt='Facebook'
                  width={52}
                  quality={100}
              />
              </Link>
              <Link href="/" className="logo">
                <Image 
                  src={TikTokIcon}
                  alt='TikTok'
                  width={52}
                  quality={100}
              />
              </Link>
            </div>
          </div>

        </section>
      </main>
      <Footer 
          color="primary-800"
      />
    </>
  )
}
