
import { Metadata } from 'next'

import Tabs from "./components/tab/Tabs";
import Chip from "./components/chip/Chip";
import Button from "./components/button/Button";

import Image from 'next/image'
import Link from 'next/link'
import './styles/_index.scss';
import './styles/pages/_homepage.scss';
import LinkedinIcon from './assets/icon/socialLogo/Linkedin-icon.svg'
import FacebookIcon from './assets/icon/socialLogo/Facebook-icon.svg'
import TikTokIcon from './assets/icon/socialLogo/TikTok-icon.svg'

import Image2 from './assets/image/image2.png'
import heroImage from './assets/image/heroImage.png'

import Social1 from './assets/image/Social1.png'
import Social2 from './assets/image/Social2.png'
import Social3 from './assets/image/Social3.png'
import Social4 from './assets/image/Social4.png'
import Social5 from './assets/image/Social5.png'

export const metadata = { 
  title: 'Homepage title',
  description: 'Homepage description',
}


// Homepage
export default function Page() {

  // Tab logic


  return (
    <main className='container homepage'>
      <section className="hero row">
        <h1>Neki nas naslov</h1>
        <div className="heroImage">
          <Image 
            src={heroImage}
            alt='image'
            // width={52}
            quality={100}
          />
          <div className="slide row">
            <div className="timelineSlide"></div>
            <div className="timelineSlide"></div>
          </div>
        </div>
      </section>

      <section className="postBackground">
        <div className='vision col-6-lg'>
          <h3>Domaći čajevi iz divlje Hercegovine</h3>
          <p>Poštujući principe suvremene fitoterapije uz uvažavanje tradicije napravili smo naše čajeve od aromatičnog bilja s područja Hercegovine. Nudimo preko 100 vrsta prirodnih čajeva proizvedenih od ručno ubranih najkvalitetnijih dijelova biljaka, bez umjetnih boja i aroma. Osjetite profinjen okus domaćeg čaja iz divlje i netaknute prirode Hercegovine.</p>
        </div>
      </section>

      <section className='products'>
        <Tabs />
      </section>

      <section className="blogHomepage postBackground row">
        <div className="blogHomepageInfo column col-5-lg">
          <Chip text="Blog" />
          <h3>Prirodni uzgoj</h3>
          <p>Dessert jelly chocolate cake cheesecake bear claw gummies pastry bear claw. Marzipan marzipan ice cream soufflé dessert dessert. Dragée chocolate cookie sugar plum jelly.</p>
          <Link href="/blog">
            <Button 
              className="primary" 
              type="iconRight" iconName="chevronCompactRight">
              Pročitaj više
            </Button>
          </Link>
          

        </div>
          <Image 
            src={Image2}
            alt='image'
            quality={100}
          />


      </section>

      <section className="follow column">
        <h5>Pridruzi se zajednici</h5>

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

        <div className="socialImage row">
          <Image 
            src={Social1}
            alt='Social1'
            quality={100}
          />
          <Image 
            src={Social2}
            alt='Social1'
            quality={100}
          />
          <Image 
            src={Social3}
            alt='Social1'
            quality={100}
          />
          <Image 
            src={Social4}
            alt='Social1'
            quality={100}
          />
          <Image 
            src={Social5}
            alt='Social1'
            quality={100}
          />
        </div>
      </section>
    </main>
  )
}
