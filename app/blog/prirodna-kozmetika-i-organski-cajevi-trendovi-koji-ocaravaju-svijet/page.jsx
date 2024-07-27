import React from 'react'
import Image from 'next/image';
import Head from 'next/head';
import { Logos, Icons, Social, BlogImg } from "../../utilities/images.js";

import "./_style.scss";
import "../../styles/_index.scss";
import Chip from '../../components/atoms/chip/Chip'
import FollowSocial from '../../components/organism/followSocial/followSocial.jsx';

export default function demoArticle() {
  return (
    <>
    <Head>
      <title>Prirodna Kozmetika i Organski Čajevi: Trendovi koji Očaravaju Svijet | Dr. Hertzeg</title>
      <meta name="description" content="Istražite uzbudljive trendove prirodne kozmetike i organskih čajeva. Saznajte kako prelazak na prirodne proizvode i čajeve može poboljšati vaš zdrav način života i ljepotu." />
      <meta name="keywords" content="prirodna kozmetika, organski čajevi, trendovi ljepote, zdrav način života, Dr. Hertzeg, prirodni proizvodi, wellness, ekologija, održivi proizvodi" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.drhertzeg.hr/prirodna-kozmetika-i-organski-cajevi-trendovi-koji-ocaravaju-svijet" />

      {/* Open Graph meta tags for social media */}
      <meta property="og:title" content="Prirodna Kozmetika i Organski Čajevi: Trendovi koji Očaravaju Svijet | Dr. Hertzeg" />
      <meta property="og:description" content="Istražite uzbudljive trendove prirodne kozmetike i organskih čajeva. Saznajte kako prelazak na prirodne proizvode i čajeve može poboljšati vaš zdrav način života i ljepotu." />
      <meta property="og:image" content="https://www.drhertzeg.hr/images/prirodna-kozmetika-organski-cajevi.jpg" />
      <meta property="og:url" content="https://www.drhertzeg.hr/prirodna-kozmetika-i-organski-cajevi-trendovi-koji-ocaravaju-svijet" />
      <meta property="og:type" content="article" />
    </Head>

      <div className="article-page">
        <main className="article-page-container">

          {/* Title */}
          <section className="blog-title col-10-sm col-10-md col-10-lg">
            <span>
              <h3 className='title-gooey'>Od antičke Europe do<br /> suvremenih istraživanja</h3>
            </span>
            <div className="row">
              <div className="info">
                <Image
                  src={Icons.calendar}
                  alt='kalendar'
                  quality={100}
                  width={100}
                  height={100}
                />
                <p>8.1.2024</p>
              </div>
              <div className="info">
                <Image
                  src={Icons.personCircle}
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
            <Image
              src={BlogImg.post_0101}
              alt='slika'
              quality={100}
              className='hero-image'
            />

            <div className="content-column col-10-sm col-10-md col-7-lg">
              <div className="blog-text-section">
                <h5>Antički korijeni:</h5>
                <p>U antičkoj Europi, slatki pelin nije bio samo biljka; bio je simbol vjere, ljekovitosti i mističnosti. Grci su
                  ga povezivali s božanstvima poput Artemide i Apolona te su ga koristili u medicinske i religijske svrhe.
                  Rimljani su također cijenili slatki pelin zbog njegovih ljekovitih svojstava, smatrajući ga esencijalnim
                  dijelom svoje farmakopeje. </p>
              </div>
              <div className="blog-text-section">
                <h5>Srednjovjekovna magija:</h5>
                <p>Srednji vijek donio je još veću fascinaciju slatkim pelinom. Alkemičari su ga smatrali ključnim
                  sastojkom za izradu eliksira vječne mladosti i drugih magičnih napitaka. Ljekarnici su ga koristili za
                  liječenje raznih bolesti i smetnji, od probavnih problema do groznice.</p>
              </div>
              <div className="blog-text-section">
                <h5>Ljekovita biljka:</h5>
                <p>U tradicionalnoj europskoj medicini, slatki pelin je imao široku primjenu. Smatralo se da ima
                blagotvorno djelovanje na probavu, smanjuje groznicu te pomaže u borbi protiv parazita i infekcija.
                Unatoč njegovim ljekovitim svojstvima, važno je napomenuti da slatki pelin može biti i toksičan u
                većim količinama.</p>
              </div>
              <div className="blog-text-section">
                <h5>Suvremena istraživanja:</h5>
                <p>Danas, slatki pelin nije izgubio svoju privlačnost. Naprotiv, postao je predmetom intenzivnih
                  istraživanja zbog svojih potencijalnih ljekovitih svojstava, posebno u borbi protiv malarije.
                  Znanstvenici su fascinirani njegovim spojevima i nastoje otkriti nove načine kako ih iskoristiti u medicini.</p>
              </div>
              <div className="blog-text-section">
                <p>Slatki pelin nije obična biljka; on je isprepletan s poviješću, mitovima i suvremenim istraživanjima.
                  Njegova čarobna prošlost ostaje inspiracija za daljnje istraživanje i divljenje, dok nas suvremene
                  spoznaje podsjećaju na njegov nevjerojatan potencijal u medicini.</p>
              </div>

              <figure className='card-thumbnail'>
                  <Image
                    src={BlogImg.post_0102}
                    alt='slika'
                    quality={100}

                  />
                <span className='blog-text-container'><p>Dodatak limuna</p></span>
              </figure>
                
              {/* Tags */}
              <section className='blog-tag'>
                <Chip text="Tagovi" colorBg="#F2CBA6" colorText="#1B4332" />
                <div className="column">
                  <Chip text="Slatki pelin" colorBg="#B7E4C7" colorText="#1B4332" />
                  <Chip text="Antička Europa" colorBg="#B7E4C7" colorText="#1B4332" />
                  <Chip text="Ljekovito bilje" colorBg="#B7E4C7" colorText="#1B4332" />
                  <Chip text="Tradicionalna medicina" colorBg="#B7E4C7" colorText="#1B4332" />
                  <Chip text="Suvremena istraživanja" colorBg="#B7E4C7" colorText="#1B4332" />
                </div>
              </section>

            </div>
          </section>

          
        </main>
        <FollowSocial />
      </div>
    </>
  )
}
