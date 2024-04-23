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
            <h3 className='title-gooey'>Prirodna Kozmetika i organski čajevi:<br /> trendovi koji očaravaju svijet</h3>
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
          <p><q>Dobrodošli nazad na naš blog! Danas ćemo istražiti jedan od najuzbudljivijih trendova koji
                preplavljuje svijet ljepote i wellnessa: prelazak na prirodnu kozmetiku i organske čajeve. Ovaj trend
                nije samo estetski - on označava pomak u načinu na koji razmišljamo o ljepoti i brizi o sebi. </q></p>
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
            <div className="content-column col-10-sm col-6-md col-12-lg">
              <div className="blog-text-section">
                <h5>Sve veća potražnja za Prirodnom Kozmetikom</h5>
                <div className="blog-text-container">
                  <p>Istraživanja provedena tijekom posljednjih pet godina pokazuju izniman porast korištenja prirodne
                    kozmetike - gotovo za 30%! Ljudi sve više cijene sastojke koji nanose na svoju kožu i kosu te biraju
                    proizvode bez štetnih kemikalija poput parabena, sulfata i sintetičkih boja. </p>
                </div>
              </div>
              <div className="blog-text-section">
                <h5>Organski Čajevi</h5>
                  <div className="blog-text-container">
                    <p>A što je s organskim čajevima? Njihova potražnja porasla je za impresivnih 50%. Ova eksplozija
                      interesa za organskim čajevima odražava sve veću svijest potrošača o važnosti zdravih navika, a ne
                      samo o okusu. Ljudi su sve više svjesni utjecaja pesticida i herbicida na njihovo zdravlje, pa stoga
                      traže čajeve koji su uzgojeni na održiv način.</p>
                  </div>
              </div>
            </div>
            <div className="blog-tag-container col-10-sm col-4-md col-4-lg">
              <div className="column"></div>
                <Chip text="Povijest čaja" colorBg="#D8F3DC" colorText="#1B4332" />
                <Chip text="Medicinske svrhe" colorBg="#D8F3DC" colorText="#1B4332" />
                <Chip text="Eliksir mladosti" colorBg="#D8F3DC" colorText="#1B4332" />
            </div>
          </div>

          <div className="content-flex">
            <div className="content-column col-10-sm col-6-md col-7-lg">
                <div className="blog-text-section">
                  <h5>Utjecaj Društvenih Medija</h5>
                    <div className="blog-text-container">
                      <p>Naravno, ne možemo zanemariti ulogu influencera i društvenih medija u popularizaciji ovih trendova.
                        Mnogi influenceri i brendovi koriste društvene medije kako bi promovirali prirodne proizvode i
                        organske čajeve, čime pridonose njihovoj širokoj rasprostranjenosti i popularnosti.</p>
                    </div>
                </div>
                <div className="blog-text-section">
                    <div className="blog-text-container">
                      <p>Sve u svemu, trend prelaska na prirodnu kozmetiku i konzumaciju organskih čajeva nije samo
                        prolazna moda. To je pomak prema zdravijem i svjesnijem načinu života koji cijeni ljepotu, dobrobit i
                        očuvanje okoliša. Budite dio ovog trenda i istražite čari prirodne ljepote i zdravog života!</p>
                      <p>Nadamo se da vam se svidio ovaj blog post! Slobodno podijelite svoje misli i iskustva u komentarima
                      ispod. Hvala što ste bili s nama, a vidimo se uskoro sa još više uzbudljivih tema!</p>
                    </div>
                </div>
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
            <div className="left-image-container col-10-sm col-4-md col-3-lg">
              <figure className='card-thumbnail'>
                  <Image
                    src={Slika3}
                    alt='slika'
                    quality={100}

                  />
                <span className='blog-text-container'><p>Dodatak limuna</p></span>
              </figure>
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
