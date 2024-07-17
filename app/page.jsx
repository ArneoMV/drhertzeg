import Image from 'next/image';
import Link from 'next/link';
import './styles/_index.scss';
import './styles/pages/_homepage.scss';
import './styles/base/_base.scss';

import Hero from './components/organism/hero/hero.jsx';
import Tabs from "./components/organism/tab/Tabs.jsx";
import Button from "./components/atoms/button/Button.jsx";

import { Icon } from "./utilities/images.js";
import ButtonIcon from "./components/atoms/buttonIcon/buttonIcon.jsx";
import SliderArticle from "./components/organism/sliderArticles/sliderArticles.jsx"
import HeroArticleBanner from './components/organism/heroArticleBanner/heroArticleBanner.jsx';


import { HomepageImages } from './utilities/images.js'
import { Homepage } from './utilities/images.js'

import { Metadata } from 'next'
export const metadata = { 
  title: 'Dr Hertzeg',
  description: 'Homepage description',
}



// Homepage
export default function Page() {

  return (
      <main className='homepage'>

        {/* Hero */}
        <Hero/>
         
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

        {/* Promotion Image slider */}
        <div className="container">
          <SliderArticle />              
        </div>
        
      </main>
  )
}
