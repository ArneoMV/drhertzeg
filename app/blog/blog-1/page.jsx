import React from 'react'
import Image from 'next/image';
import { Icon } from '../../utilities/images'

import "./_style.scss";
import "../../styles/_index.scss";
import Slika1 from '../../assets/image/blog/BlogSlika_1.jpg'
import Slika2 from '../../assets/image/blog/BlogSlika_2.jpg'
import Slika3 from '../../assets/image/blog/BlogSlika_3.jpg'
import Chip from '../../components/atoms/chip/Chip'
import FollowSocial from "../../components/organism/followSocial/followSocial";
import Footer from '../../components/organism/footer/footer';

export default function demoArticle() {
  return (
    <div className="article-page">
      <main className="article-page-container">

        {/* Title */}
        <section className="blog-title col-10-sm col-10-md col-10-lg">
          <span className='blog-text-container'>
            <h3 className='title-gooey'>Od antičke Europe do<br /> suvremenih istraživanja</h3>
          </span>
          {/* Filter: https://css-tricks.com/gooey-effect/ */}
          <svg className="gooey-svg" width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
              <filter id="title-gooey">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />    
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="title-gooey" />
                <feComposite in="SourceGraphic" in2="title-gooey" operator="atop"/>
              </filter>
            </defs>
          </svg>

          <div className="row">
            <div className="info">
              <Image
                src={Icon.calendar}
                alt='kalendar'
                quality={100}
                width={100}
                height={100}
              />
              <p>8.1.2024</p>
            </div>
            <div className="info">
              <Image
                src={Icon.personCircle}
                alt='autor'
                quality={100}
              />
              <p>Dr Hertzeg</p>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className='blog-quote col-8-sm col-8-md col-8-lg'>
          <p><q>Čaj je mnogo više od običnog napitka; to je iskustvo koje nas vodi kroz bogatstvo okusa, mirisa i koristi za zdravlje. S toliko različitih vrsta čajeva dostupnih, odaberite pravi može biti prava avantura. Bez obzira jeste li ljubitelj voćnih nota, preferirate li umirujuće biljne čajeve ili tražite nešto snažno i osvježavajuće, ovdje je vodič koji će vam pomoći da pronađete svoj savršeni čaj.</q></p>
        </section>

        {/* Content */}
        <section className='blog-content col-10-sm col-10-md col-10-lg'>
          <figure className='card-thumbnail'>
            <Image
              src={Slika1}
              alt='slika'
              quality={100}

            />
            <span className='blog-text-container'><p>Slatki pelin čaj</p></span>
          </figure>

          <div className="blog-text-section">
            <h5>Smokvin list</h5>
            <div className="flex">
              <div className="blog-text-container col-10-sm col-6-md col-6-lg">
                <p>Otkrijte svoje preferencije okusa: Kada se upuštate u svijet čajeva, prvi korak je istražiti svoje preferencije okusa. Ako volite voćne arome, možda će vam se svidjeti voćni čajevi poput bobica ili citrusa. Ako preferirate nešto osvježavajuće i blago gorčinu, zeleni čaj može biti odličan izbor. </p>
              </div>
              <div className="blog-tag-container col-10-sm col-4-md col-4-lg">
                <Chip text="Dišni putevi" />
                <Chip text="Osvježavajuće" />
              </div>
            </div>
          </div>

          <div className="blog-text-section">
            <h5>Imuno čaj</h5>
            <div className="flex">
              <div className="blog-text-container col-10-sm col-6-md col-6-lg">
                <p>Otkrijte svoje preferencije okusa: Kada se upuštate u svijet čajeva, prvi korak je istražiti svoje preferencije okusa. Ako volite voćne arome, možda će vam se svidjeti voćni čajevi poput bobica ili citrusa. Ako preferirate nešto osvježavajuće i blago gorčinu, zeleni čaj može biti odličan izbor. </p>
              </div>
              <div className="blog-tag-container col-10-sm col-4-md col-4-lg">
                <Chip text="Dišni putevi" />
                <Chip text="Osvježavajuće" />
              </div>
            </div>
          </div>



          <figure className='card-thumbnail'>
            <Image
              src={Slika2}
              alt='slika'
              quality={100}
            />
            <span className='blog-text-container'><p>Aroma vanilije</p></span>
          </figure>

          <div className="blog-text-section">
            <div className="row">
              <h5>Recept za čaj iz vrta</h5>
              <p>SASTOJCI</p>
            </div>
            <div className="flex">
              <div className="blog-text-container col-10-sm col-6-md col-6-lg">
                <p>Otkrijte svoje preferencije okusa: Kada se upuštate u svijet čajeva, prvi korak je istražiti svoje preferencije okusa. Ako volite voćne arome, možda će vam se svidjeti voćni čajevi poput bobica ili citrusa. Ako preferirate nešto osvježavajuće i blago gorčinu, zeleni čaj može biti odličan izbor. </p>
              </div>
              <div className="blog-tag-container col-10-sm col-4-md col-4-lg">
                <Chip text="Dišni putevi" />
                <Chip text="Osvježavajuće" />
              </div>
            </div>
          </div>

          <figure className='card-thumbnail'>
            <Image
              src={Slika3}
              alt='slika'
              quality={100}

            />
            <span className='blog-text-container'><p>Dodatak limuna</p></span>
          </figure>

          <div className="blog-text-section col-10-sm col-6-md col-6-lg">
            <h5>Pronađite savršen čaj</h5>
              <div className="blog-text-container col-10-sm col-6-md col-6-lg">
                <p>Eksperimentirajte s različitim sortama: Put do pronalaženja savršenog čaja često uključuje eksperimentiranje s različitim sortama. Nemojte se ograničavati na jedan tip čaja; isprobajte različite arome, mješavine i metode pripreme kako biste otkrili što vam najbolje odgovara.
                  <br />Posjetite lokalnu čajevnicu ili trgovinu specijaliziranu za čajeve kako biste dobili savjete i preporuke od stručnjaka. Uživajte u procesu istraživanja i otkrijte čaroliju svijeta čajeva dok tražite svoj savršeni napitak.</p>
              </div>
          </div>
        </section>

        {/* Tags */}
        <section className='blog-tag col-10-sm col-10-md col-10-lg'>
          <Chip text="TAGOVI" colorBg="#FFD297" colorText="#242424" />
          <div className='row'>
            <Chip text="Okusi" />
            <Chip text="Arome" />
            <Chip text="Zdravlje" />
            <Chip text="Biljni čajevi" />
            <Chip text="Vočni čajevi" />
            <Chip text="Vanilija" />
          </div>
        </section>
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
