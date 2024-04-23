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
          <p><q>Slatki pelin, biljka s bogatom poviješću i fascinantnim svojstvima, ostavlja nas u divljenju nad svojim
                  raznovrsnim utjecajem kroz povijest Europe. Od antičkih civilizacija do suvremenih istraživanja, slatki
                  pelin predstavlja neiscrpnu temu za istraživanje i divljenje. </q></p>
        </section>

        {/* Content */}
        <section className='blog-content col-10-sm col-10-md col-10-lg'>
          <figure className='card-thumbnail'>
            <Image
              src={Slika1}
              alt='slika'
              quality={100}
            />
          </figure>

          <div className="content-flex">
            <div className="content-column col-10-sm col-10-md col-12-lg">
              <div className="blog-text-section">
                <h5>Antički korijeni:</h5>
                <div className="blog-text-container">
                  <p>U antičkoj Europi, slatki pelin nije bio samo biljka; bio je simbol vjere, ljekovitosti i mističnosti. Grci su
                    ga povezivali s božanstvima poput Artemide i Apolona te su ga koristili u medicinske i religijske svrhe.
                    Rimljani su također cijenili slatki pelin zbog njegovih ljekovitih svojstava, smatrajući ga esencijalnim
                    dijelom svoje farmakopeje. </p>
                </div>
              </div>
              <div className="blog-text-section">
                <h5>Srednjovjekovna magija:</h5>
                  <div className="blog-text-container">
                    <p>Srednji vijek donio je još veću fascinaciju slatkim pelinom. Alkemičari su ga smatrali ključnim
                      sastojkom za izradu eliksira vječne mladosti i drugih magičnih napitaka. Ljekarnici su ga koristili za
                      liječenje raznih bolesti i smetnji, od probavnih problema do groznice.</p>
                  </div>
              </div>
            </div>
            <div className="blog-tag-container col-4-md col-4-lg">
              <div className="column"></div>
                <Chip text="Povijest čaja" colorBg="#D8F3DC" colorText="#1B4332" />
                <Chip text="Medicinske svrhe" colorBg="#D8F3DC" colorText="#1B4332" />
                <Chip text="Eliksir mladosti" colorBg="#D8F3DC" colorText="#1B4332" />
            </div>
          </div>

          <div className="content-flex">
            <div className="content-column col-10-sm col-10-md col-12-lg">
              <div className="blog-text-section">
                  <h5>Ljekovita biljka:</h5>
                    <div className="blog-text-container">
                      <p>U tradicionalnoj europskoj medicini, slatki pelin je imao široku primjenu. Smatralo se da ima
                      blagotvorno djelovanje na probavu, smanjuje groznicu te pomaže u borbi protiv parazita i infekcija.
                      Unatoč njegovim ljekovitim svojstvima, važno je napomenuti da slatki pelin može biti i toksičan u
                      većim količinama.</p>
                    </div>
                </div>
                <div className="blog-text-section">
                  <h5>Suvremena istraživanja:</h5>
                    <div className="blog-text-container">
                      <p>Danas, slatki pelin nije izgubio svoju privlačnost. Naprotiv, postao je predmetom intenzivnih
                        istraživanja zbog svojih potencijalnih ljekovitih svojstava, posebno u borbi protiv malarije.
                        Znanstvenici su fascinirani njegovim spojevima i nastoje otkriti nove načine kako ih iskoristiti u medicini.</p>
                    </div>
                </div>
                <div className="blog-text-section">
                  <div className="blog-text-container">
                    <p>Slatki pelin nije obična biljka; on je isprepletan s poviješću, mitovima i suvremenim istraživanjima.
                      Njegova čarobna prošlost ostaje inspiracija za daljnje istraživanje i divljenje, dok nas suvremene
                      spoznaje podsjećaju na njegov nevjerojatan potencijal u medicini.</p>
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
                
                {/* Tags */}
              <section className='blog-tag'>
                {/* <Chip text="TAGOVI" colorBg="#FFD297" colorText="#242424" /> */}
                <div className='row'>
                  <Chip text="Slatki pelin" colorBg="#B7E4C7" colorText="#1B4332" />
                  <Chip text="Antička Europa" colorBg="#B7E4C7" colorText="#1B4332" />
                  <Chip text="Ljekovito bilje" colorBg="#B7E4C7" colorText="#1B4332" />
                  <Chip text="Tradicionalna medicina" colorBg="#B7E4C7" colorText="#1B4332" />
                  <Chip text="Suvremena istraživanja" colorBg="#B7E4C7" colorText="#1B4332" />

                </div>
              </section>
            </div>
            {/* col-10-sm col-4-md col-4-lg */}
            <div className="blog-tag-container col-4-md col-4-lg">
                <Chip text="Medicinske svrhe" colorBg="#D8F3DC" colorText="#1B4332" />
                <Chip text="Eliksir mladosti" colorBg="#D8F3DC" colorText="#1B4332" />
            </div>
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
