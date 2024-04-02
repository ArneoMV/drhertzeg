import React from 'react'
import { notFound } from "next/navigation"
import Image from 'next/image'
import '../../styles/pages/_productPage.scss';
import OtherProductCard from '../../components/organism/otherProductCard/OtherProductCard'
import SmokvinListSlika from "../../assets/image/product/Proizvod_Smokva.png"


export default function smokvinList() {
  return (
    <main>
      <div className="productContainer">
        <div className="productImage">
          <Image 
            src={SmokvinListSlika}
            alt='image'
            quality={100}
            width={100}
            height={100}
          />
        </div>
        <div className="productDetails">
          <h4>Smokvin list</h4>
          <p>Dr Hertzeg čaj od smokva lista je ekološki proizvod koji obiluje antioksidansima, bez dodanih umjetnih boja, aroma i konzervansa. Ovaj čaj ima iznimno djelotvoran učinak na dijabetes, pomažući u reguliranju razine šećera u krvi. Dr Hertzeg čaj od smokva lista je bogat antioksidansima i vlaknima, te je također izvor vitamina A, B1 i B2 te brojnih minerala. Sprječavanja pretilosti te regulira razine inzulina, kolesterola i triglicerida.</p>
          <div className="productDetailsList">
            {/* Sastojci */}
            <div className="row">
              <div className="column">
                <h6>Sastojci:</h6>
              </div>
              <div className="column">
                <p>List smokve (Ficus carica folium)</p>
              </div>
            </div>
            {/* Kolicina */}
            <div className="row">
              <div className="column">
                <h6>Kolicina:</h6>
              </div>
              <div className="column">
                <p>50g</p>
              </div>
            </div>
            {/* Nacin uporabe */}
            <div className="row">
              <div className="column">
                <h6>Nacin uporabe:</h6>
              </div>
              <div className="column">
                <p>2 g čaja (1 čajna žličica) preliti s 2 dl kipuće vode i ostaviti poklopljeno 10 – 15 minuta. Procijediti i zasladiti po želji. Piti tri puta dnevno poslije obroka.</p>
              </div>
            </div>
            {/* Pomaze kod */}
            <div className="row">
              <div className="column">
                <h6>Pomaze kod:</h6>
              </div>
              <div className="column">
                <p>Sprječavanja pretilost te regulira razine inzulina, kolesterola i triglicerida. Izvor vitamina A, B1 i B2 te brojnih minerala.</p>
              </div>
            </div>
            {/* Ekoloska proizvodnja */}
            <div className="row">
              <div className="column">
                <h6>Ekoloska proizvodnja:</h6>
              </div>
              <div className="column">
                <p>Organic</p>
              </div>
            </div>
            {/* Alergije */}
            <div className="row">
              <div className="column">
                <h6>Alergije:</h6>
              </div>
              <div className="column">
                <p>Ne sadrži alergene sastojke koje je potrebno naznačiti</p>
              </div>
            </div>
            {/* Upute */}
            <div className="row">
              <div className="column">
                <h6>Upute za pohranu</h6>
              </div>
              <div className="column">
                <p>Čuvati na suhom i tamnom mjestu pri temperaturi do 25 °C</p>
              </div>
            </div>
            {/* Sastojci */}
            <div className="row">
              <div className="column">
                <h6>Zemlja podrijetla</h6>
              </div>
              <div className="column">
                <p>Bosna i Hercegovina</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="otherProductContainer">
        <h5>Ostali proizvodi</h5>
        <div className="row">
          <OtherProductCard
            productDetailsTitle="Smokvin List"
            productDetailsKolicina="50g"
            productDetailsImageURL="/images/cajBiljka/cajBiljka_1.png"
            productDetailsImageAlt="Smokvin List"
            productDetailsURL="/cajevi/smokvinList"
          />
          <OtherProductCard
            productDetailsTitle="Slatki pelin"
            productDetailsKolicina="50g"
            productDetailsImageURL="/images/cajBiljka/cajBiljka_2.png"
            productDetailsImageAlt="Slatki pelin"
            productDetailsURL="/cajevi/slatkiPelin"
          />
          <OtherProductCard
            productDetailsTitle="Energija jutra"
            productDetailsKolicina="50g"
            productDetailsImageURL="/images/cajBiljka/cajBiljka_3.png"
            productDetailsImageAlt="Energija jutra"
            productDetailsURL="/cajevi/energijaJutra"
          />
          <OtherProductCard
            productDetailsTitle="Detox čaj"
            productDetailsKolicina="50g"
            productDetailsImageURL="/images/cajBiljka/cajBiljka_4.png"
            productDetailsImageAlt="Detox čaj"
            productDetailsURL="/cajevi/detox"
          />
          <OtherProductCard
            productDetailsTitle="Imuno čaj"
            productDetailsKolicina="50g"
            productDetailsImageURL="/images/cajBiljka/cajBiljka_5.png"
            productDetailsImageAlt="Imuno čaj"
            productDetailsURL="/cajevi/imuno"
          />
        </div>
      </div>
    </main>
  )
}
