import React from 'react'
import Image from 'next/image';
import Head from 'next/head';
import { Icon } from '../../utilities/images'

import "./_style.scss";
import "../../styles/_index.scss";
import Slika1 from '../../../public/images/image/blog/BlogSlika_1.jpg'
import Slika2 from '../../../public/images/image/blog/BlogSlika_2.jpg'
import Slika3 from '../../../public/images/image/blog/BlogSlika_3.jpg'
import Chip from '../../components/atoms/chip/Chip'
import FollowSocial from '../../components/organism/followSocial/followSocial.jsx';

export default function blog_02() {
  return (
    <>
      <Head>
        <title>Hidrolati: Prirodna Čarolija za Savršenu Kožu | Dr. Hertzeg</title>
        <meta name="description" content="Otkrijte čarobnu moć hidrolata i kako prirodni cvjetni eliksiri mogu transformirati vašu njegu kože. Saznajte kako hidrolati Dr. Hertzeg mogu poboljšati zdravlje vaše kože, s preporukama za zrelu i osjetljivu kožu." />
        <meta name="keywords" content="hidrolati, cvjetne vodice, njega kože, prirodna kozmetika, Dr. Hertzeg, smilje, lavanda, prirodna ljepota, hidratacija, antioksidansi, prirodna njega" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.drhertzeg.hr/hidrolati-prirodna-carolija-za-savrsenu-kozu" />
        {/* Open Graph meta tags for social media */}
        <meta property="og:title" content="Hidrolati: Prirodna Čarolija za Savršenu Kožu | Dr. Hertzeg" />
        <meta property="og:description" content="Otkrijte čarobnu moć hidrolata i kako prirodni cvjetni eliksiri mogu transformirati vašu njegu kože. Saznajte kako hidrolati Dr. Hertzeg mogu poboljšati zdravlje vaše kože, s preporukama za zrelu i osjetljivu kožu." />
        <meta property="og:image" content="https://www.drhertzeg.hr/images/hidrolati.jpg" />
        <meta property="og:url" content="https://www.drhertzeg.hr/hidrolati-prirodna-carolija-za-savrsenu-kozu" />
        <meta property="og:type" content="article" />
      </Head>
      <div className="article-page">
        <main className="article-page-container">

          {/* Title */}
          <section className="blog-title col-10-sm col-10-md col-10-lg">
            <span>
              <h3 className='title-gooey'>Hidrolati: Prirodna Čarolija za Savršenu Kožu</h3>
            </span>
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
            <p><q>Hidrolati su postali dragocjeni saveznici u svijetu ljepote, nudeći prirodan i učinkovit način njege kože. Ovi čarobni eliksiri, nusproizvodi destilacije biljaka za dobivanje eteričnih ulja, često nazivani i cvjetnim vodicama, imaju široku primjenu, posebno u njezi lica.</q></p>
          </section>

          {/* Content */}
          <section className='blog-content col-10-sm col-10-md col-10-lg'>
            <Image
              src={Slika1}
              alt='slika'
              quality={100}
              className='hero-image'
            />

            <div className="content-column col-10-sm col-10-md col-7-lg">
              <div className="blog-text-section">
                <h5>Univerzalna Nježnost za Sve Tipove Kože</h5>
                <p>Hidrolati su blagi i umirujući, idealni čak i za najosjetljiviju kožu. Obogaćeni hranjivim tvarima i antioksidansima, pružaju hidrataciju i štite kožu od slobodnih radikala. Njihova sposobnost da umire i obnavljaju čini ih savršenim dodatkom svakodnevnoj njezi, bez obzira na tip kože.</p>
              </div>
              <div className="blog-text-section">
                <h5>Višestruka Primjena</h5>
                <p>Hidrolati se mogu koristiti na različite načine, uključujući toniziranje kože, hidrataciju, smirivanje upala i iritacija te kao dodatna njega nakon čišćenja kože. S obzirom na svoju svestranost, oni su nezaobilazan korak u rutini njege lica, pružajući sveobuhvatnu njegu koja se prilagođava potrebama vaše kože.</p>
              </div>
              <div className="blog-text-section">
                <h5>Prava Odabira za Vašu Kožu</h5>
                <p>Važno je odabrati hidrolat koji odgovara vašim potrebama i tipu kože. Evo nekoliko preporuka:</p>
                <p><b>Immortality Hidrolat od Smilja Dr. Hertzeg za Zrelu Kožu</b>Ovaj hidrolat je savršen za zrelu kožu. Djeluje kao eliksir mladosti, pomažući u zacjeljivanju oštećene kože, smanjenju bora i podočnjaka te pružajući protuupalno djelovanje. Također je koristan nakon brijanja ili depilacije te umiruje kožu nakon izlaganja suncu. Smilje, poznato i kao immortelle ili nevenak, ima snažna ljekovita svojstva koja potiču obnavljanje kože i daju joj mladenački sjaj. Hidrolat od smilja Dr. Hertzeg jamči vrhunsku kvalitetu i njegu koja će vašu kožu održati mladolikom i blistavom.</p>
                <p><b>Hidrolat Lavanda Dr. Hertzeg za Osjetljivu Kožu,</b>Lavanda je blagotvorna za osjetljivu kožu, pružajući regenerativno i pročišćavajuće djelovanje. Idealna je za njegu osjetljive kože te pomaže kod upalnih stanja kože, uboda insekata te opekotina od sunca ili depilacije. Hidrolat lavande Dr. Hertzeg predstavlja vrhunsku njegu koja osigurava umirujući učinak i uravnoteženost za vašu kožu. Sastavljen od pažljivo odabranih sastojaka, ovaj hidrolat osigurava njegu koja će osvježiti i obnoviti vašu kožu, pružajući joj osjećaj ugode i svježine.</p>
              </div>
              <div className="blog-text-section">
                <p>Ukratko, hidrolati su esencijalni dodatak vašoj svakodnevnoj rutini njege kože, pružajući prirodnu ljepotu i blistavost. Odaberite svoj hidrolat i prepustite se čarima prirodne njege kože. Bilo da se odlučite za smilje ili lavandu, hidrolati Dr. Hertzeg osiguravaju vrhunsku njegu koja će vašu kožu učiniti zdravom, svježom i blistavom.</p>
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
                <Chip text="Tagovi" colorBg="#F2CBA6" colorText="#1B4332" />
                <div className="column">
                  <Chip text="hidrolati" colorBg="#B7E4C7" colorText="#1B4332" />
                  <Chip text="cvjetne vodice" colorBg="#B7E4C7" colorText="#1B4332" />
                  <Chip text="njega kože" colorBg="#B7E4C7" colorText="#1B4332" />
                  <Chip text="prirodna kozmetika" colorBg="#B7E4C7" colorText="#1B4332" />
                  <Chip text="smilje" colorBg="#B7E4C7" colorText="#1B4332" />
                  <Chip text="lavanda" colorBg="#B7E4C7" colorText="#1B4332" />
                  <Chip text="antioksidansi" colorBg="#B7E4C7" colorText="#1B4332" />
                </div>
              </section>

            </div>
          </section>

          
        </main>

        <FollowSocial 
          color="primary-200"
        />
      </div>
    </>
  )
}
