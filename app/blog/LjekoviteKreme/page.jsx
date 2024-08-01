import React from 'react'
import Image from 'next/image';
import Head from 'next/head';
import { Logos, Icons, Social, BlogImg } from "../../utilities/images.js";

import "./_ljekoviteKreme.scss";
import "../../styles/_index.scss";
import Chip from '../../components/atoms/chip/Chip.jsx'
import FollowSocial from '../../components/organism/followSocial/followSocial.jsx';

export default function ljekoviteKreme() {
  return (
    <>
    <Head>
      <title>Ljekovite Kreme: Prirodna Njega za Kožu | Dr. Hertzeg</title>
      <meta name="description" content="Otkrijte prednosti ljekovitih krema u njezi kože. Saznajte kako prirodni sastojci i ljekovite biljke mogu poboljšati zdravlje vaše kože i pružiti vam dugotrajne rezultate." />
      <meta name="keywords" content="ljekovite kreme, prirodna njega, kozmetika, Dr. Hertzeg, ljekovite biljke, hidratacija kože, anti-age krema, prirodni sastojci, njegujuće kreme" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.drhertzeg.hr/ljekovite-kreme" />

      {/* Open Graph meta tags for social media */}
      <meta property="og:title" content="Ljekovite Kreme: Prirodna Njega za Kožu | Dr. Hertzeg" />
      <meta property="og:description" content="Otkrijte prednosti ljekovitih krema u njezi kože. Saznajte kako prirodni sastojci i ljekovite biljke mogu poboljšati zdravlje vaše kože i pružiti vam dugotrajne rezultate." />
      <meta property="og:image" content="https://www.drhertzeg.hr/images/ljekovite-kreme.jpg" />
      <meta property="og:url" content="https://www.drhertzeg.hr/ljekovite-kreme" />
      <meta property="og:type" content="article" />
    </Head>

      <div className="article-page">
        <main className="article-page-container">

          {/* Title */}
          <section className="blog-title col-10-sm col-10-md col-10-lg">
            <span>
              <h3 className='title-gooey'>Ljekovite Kreme</h3>
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
            <p><q>Prirodna ljepota ne dolazi samo od vanjskih tretmana, već i od unutarnje njege. Ljekovite kreme spoj su drevne mudrosti i moderne znanosti, pružajući vašoj koži najbolju njegu iz srca prirode.</q></p>
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
                <p>Ljekovite kreme su posebne formulacije koje kombiniraju prirodne sastojke s biljnim ekstraktima kako bi pružile ciljanu njegu i terapeutski učinak na kožu. Ove kreme često koriste tradicionalne biljke i esencijalna ulja poznata po svojim ljekovitim svojstvima, poput antiupalnih, hidratantnih i regenerativnih. Kroz pažljivo odabrane sastojke, ljekovite kreme mogu pomoći u liječenju raznih kožnih problema, od suhe i osjetljive kože do problema poput akni i starenja. U njihovom srži leži sinergija prirodnih sastojaka koji se ujedinjuju da bi vašoj koži pružili njegu koja je istovremeno nježna i učinkovita. Dr. Hertzeg brend čajeva i kozmetike koristi ovu filozofiju u razvoju svojih proizvoda, spajajući tradiciju s inovacijom za optimalne rezultate u njezi kože. </p>
              </div>
              <div className="blog-text-section">
                <h5>Povijest ljekovitih krema</h5>
                <p>Kod Dr. Hertzeg brenda, ljekovite kreme su rezultat pažljivog odabira i kombiniranja najkvalitetnijih prirodnih sastojaka. Naša linija proizvoda uključuje kreme koje su formulirane kako bi odgovarale specifičnim potrebama vaše kože, od hidratacije i regeneracije do zaštite i umirivanja. Svaki proizvod u našoj ponudi koristi tradicionalne biljne ekstrakte i moderne tehnologije kako bi se osiguralo da vaša koža dobije najbolju moguću njegu. Naša predanost kvaliteti i učinkovitosti čini naše kreme savršenim izborom za svakodnevnu njegu kože.</p>
              </div>
              <div className="blog-text-section">
                <h5>Biljke i njihova ljekovita svojstva</h5>
                <p>Biljke su temelj ljekovitih krema zbog svojih raznih terapeutskih svojstava. Mnoge biljke, poput lavande, kamilice i smilja, poznate su po svojim antiupalnim, umirujućim i regenerativnim učincima. Lavanda, na primjer, ima snažna umirujuća svojstva koja pomažu u smanjenju crvenila i iritacije, dok smilje (immortelle) pruža moćnu anti-age njegu i pomaže u borbi protiv starenja kože. Kroz povijest, različite kulture su prepoznale vrijednost ovih biljaka, a danas ih moderna kozmetika koristi za razvoj učinkovitih i prirodnih rješenja za njegu kože</p>
              </div>
              <div className="blog-text-section">
                <h5>Primjena ljekovitih krema u svakodnevnoj njezi</h5>
                <p>Ljekovite kreme igraju ključnu ulogu u svakodnevnoj njezi kože, nudeći specifična rješenja za razne kožne probleme. Korištenje ljekovitih krema može poboljšati hidrataciju, smanjiti znakove starenja, te pružiti umirujući učinak kod iritacija i upala. Pravilna primjena, kao što je nanošenje kreme ujutro i navečer ili prema potrebi, može značajno poboljšati zdravlje i izgled vaše kože. Dr. Hertzeg kreme su posebno formulirane kako bi se osigurala maksimalna učinkovitost i vidljivi rezultati, čineći ih idealnim dodatkom vašoj rutini njege kože.</p>
              </div>
              <div className="blog-text-section">
                <h5>Inovacije u razvoju ljekovitih krema.</h5>
                <p>S razvojem tehnologije, inovacije u formulaciji ljekovitih krema omogućile su stvaranje proizvoda s poboljšanom učinkovitošću i sigurnošću. Moderni istraživački procesi i tehnike ekstrakcije omogućuju precizno očuvanje aktivnih sastojaka biljaka, čime se povećava njihova učinkovitost. U Dr. Hertzeg laboratorijima, neprekidno radimo na integraciji najnovijih znanstvenih saznanja s tradicionalnim biljnim znanjem kako bismo stvorili proizvode koji ne samo da zadovoljavaju visoke standarde kvalitete, već i pružaju maksimalne rezultate za njegu kože. Naša posvećenost inovacijama osigurava da naši proizvodi ostaju na čelu industrije, nudeći najbolje moguće rješenje za sve vaše potrebe u njezi kože..</p>
              </div>

              <figure className='card-thumbnail'>
                  <Image
                    src={BlogImg.post_0101}
                    alt='slika'
                    quality={100}

                  />
                <span className='blog-text-container'><p>Dodatak limuna</p></span>
              </figure>
                
              {/* Tags */}
              <section className='blog-tag'>
                <div className="column">
                  <Chip text="Ljekovite kreme" colorBg="#B7E4C7" colorText="#1B4332" />
                  <Chip text="Prirodna kozmetika" colorBg="#B7E4C7" colorText="#1B4332" />
                  <Chip text="Biljni ekstrakti" colorBg="#B7E4C7" colorText="#1B4332" />
                  <Chip text="Njega kože" colorBg="#B7E4C7" colorText="#1B4332" />
                  <Chip text="Anti-age krema" colorBg="#B7E4C7" colorText="#1B4332" />
                  <Chip text="Hidratacija kože" colorBg="#B7E4C7" colorText="#1B4332" />
                  <Chip text="Inovacije " colorBg="#B7E4C7" colorText="#1B4332" />
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
