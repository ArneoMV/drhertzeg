import React from 'react'
import Image from 'next/image';
import { Icon } from '../../utilities/images'

import "./_style.scss";
import "../../styles/_index.scss";
import Slika1 from '../../../public/images/image/blog/BlogSlika_1.jpg'
import Slika2 from '../../../public/images/image/blog/BlogSlika_2.jpg'
import Slika3 from '../../../public/images/image/blog/BlogSlika_3.jpg'
import Chip from '../../components/atoms/chip/Chip'
import FollowSocial from '../../components/organism/followSocial/followSocial.jsx';
import Footer from '../../components/organism/footer/footer';

export default function demoArticle() {
  return (
    <div className="article-page">
      <main className="article-page-container">

        {/* Title */}
        <section className="blog-title col-10-sm col-10-md col-10-lg">
          <span className='blog-text-container'>
            <h3 className='title-gooey'>Hidrolati:<br /> Prirodna Čarolija za Savršenu Kožu</h3>
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
          <p><q>Hidrolati su postali dragocjeni saveznici u svijetu ljepote, nudeći prirodan i učinkovit način njege kože.
                Ovi čarobni eliksiri, nusproizvodi destilacije biljaka za dobivanje eteričnih ulja, često nazivani i
                cvjetnim vodicama, imaju široku primjenu, posebno u njezi lica. </q></p>
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
                <h5>Univerzalna Nježnost za Sve Tipove Kože:</h5>
                <div className="blog-text-container">
                  <p>Hidrolati su blagi i umirujući, idealni čak i za najosjetljiviju kožu. Obogaćeni hranjivim tvarima i antioksidansima, pružaju hidrataciju i štite kožu od slobodnih radikala. </p>
                </div>
              </div>
              <div className="blog-text-section">
                <h5>Višestruka Primjena:</h5>
                  <div className="blog-text-container">
                    <p>Hidrolati se mogu koristiti na različite načine, uključujući toniziranje kože, hidrataciju, smirivanje upala i iritacija te kao dodatna njega nakon čišćenja kože.</p>
                  </div>
              </div>
              <div className="blog-text-section">
                <h5>Prava Odabira za Vašu Kožu:</h5>
                  <div className="blog-text-container">
                    <p>Važno je odabrati hidrolat koji odgovara vašim potrebama i tipu kože. Evo nekoliko preporuka:</p>
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
          <div className="row">
          </div>
          <div className="content-flex">
            <div className="content-column col-10-sm col-6-md col-12-lg">
              <div className="blog-text-section">
                  <h5>Immortality Hidrolat od Smilja Dr. Hertzeg za Zrelu Kožu:</h5>
                    <div className="blog-text-container">
                      <p>Ovaj hidrolat je savršen za zrelu kožu. Djeluje kao eliksir mladosti, pomažući u zacjeljivanju oštećene
                        kože, smanjenju bora i podočnjaka te pružajući protuupalno djelovanje. Također je koristan nakon
                        brijanja ili depilacije te umiruje kožu nakon izlaganja suncu. Smilje, poznato i kao immortelle ili
                        nevenak, ima snažna ljekovita svojstva koja potiču obnavljanje kože i daju joj mladenački sjaj.
                        Hidrolat od smilja Dr. Hertzeg jamči vrhunsku kvalitetu i njegu koja će vašu kožu održati mladolikom i
                        blistavom.</p>
                    </div>
                </div>
                <figure className='card-thumbnail'>
                    <Image
                      src={Slika3}
                      alt='slika'
                      quality={100}

                    />
                  <span className='blog-text-container'><p>Immortality Hidrolat</p></span>
                </figure>
                <div className="blog-text-section">
                  <h5>Hidrolat Lavanda Dr. Hertzeg za Osjetljivu Kožu:</h5>
                    <div className="blog-text-container">
                      <p>Lavanda je blagotvorna za osjetljivu kožu, pružajući regenerativno i pročišćavajuće djelovanje.
                          Idealna je za njegu osjetljive kože te pomaže kod upalnih stanja kože, uboda insekata te opekotina od
                          sunca ili depilacije. Hidrolat lavande Dr. Hertzeg predstavlja vrhunsku njegu koja osigurava umirujući
                          učinak i uravnoteženost za vašu kožu. Sastavljen od pažljivo odabranih sastojaka, ovaj hidrolat
                          osigurava njegu koja će osvježiti i obnoviti vašu kožu, pružajući joj osjećaj ugode i svježine.</p>
                    </div>
                </div>
                <figure className='card-thumbnail'>
                    <Image
                      src={Slika3}
                      alt='slika'
                      quality={100}

                    />
                  <span className='blog-text-container'><p>Hidrolat Lavanda</p></span>
                </figure>
            </div>
            {/* col-10-sm col-4-md col-4-lg */}
            <div className="blog-tag-container col-10-sm col-4-md col-4-lg">
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
