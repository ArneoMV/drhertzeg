import { Metadata } from 'next'


import Image from 'next/image'
import Link from 'next/link'
import './styles/_index.scss';
import './styles/pages/_homepage.scss';
import './styles/base/_base.scss';

import Tabs from "./components/molecules/tab/Tabs";
import Button from "./components/atoms/button/Button";
import ButtonIcon from "./components/atoms/buttonIcon/buttonIcon";
import { Icon } from "./utilities/images.js";
import CardBlog from './components/organism/cardBlog/cardBlog'
import HeroArticleBanner from './components/organism/heroArticleBanner/heroArticleBanner'


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
      <main className='homepage'>

        {/* Hero */}
        <section className="hero">
          <div className="column">
            <h1>Izvor priropdne ljepote</h1>
            <h5>Kreme i Čajevi koji Osvojavaju Srca</h5>
          </div>
        </section>

        {/* Ponuda proizvoda */}
        <section className='container tabs-container'>
          <h3>Ponuda proizvoda</h3>
            <Tabs/>
          <Link href="/kozmetika">
              <Button type="primary">Ostali proizvodi</Button>
          </Link>
        </section>

        {/* Blog */}
        <HeroArticleBanner />

        {/* Novosti i zanimljivosti */}
        <section>
          <div className="blog-section-header">
            <h3>Novosti i zanimljivosti</h3>
            <div className="row">
              <ButtonIcon
                iconSrc={Icon.arrowLeft}
                className="custom-button"
                alt="Icon"
              />
              <ButtonIcon
                iconSrc={Icon.arrowRight}
                className="custom-button"
                alt="Icon"
              />
            </div>
          </div>
          <div className="row">
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
          </div>
        </section>
        
      </main>
    </>
  )
}
