import React from 'react'
import { notFound } from "next/navigation"
import Image from 'next/image'
import './_style.scss';
import OtherProductCard from '../../components/organism/otherProductCard/OtherProductCard'
import ProductSlika from "../../assets/image/product/product-promotion-card-red.png"
import Chip from '@/app/components/atoms/chip/Chip';
import UserImage from '../../assets/image/user_1.png'
import ProductPromotioCard from '@/app/components/organism/productPromotioCard/productPromotioCard';

export default function KozmetikaProduct() {
  return (
    <main className='product-page'>
      <section className="product-banner">

        <div className="productImage">
          <Image 
            src={ProductSlika}
            alt='ProductSlika'
            quality={100}
            width={100}
            height={100}
          />
        </div>
        <div className="product-details">
          <h3>Kozmetika Product</h3>
          <p className='price'>3.5 €</p>
          <div className="row-chips">
            <Chip 
              text="Protuupalno djelovabnje"
              colorBg="#FDAC9F"
              colorText="#330B07"
            />
            <Chip 
              text="Umirujući učinak"
              colorBg="#FDAC9F"
              colorText="#330B07"
            />
            <Chip 
              text="Smanjenju pigmentacije"
              colorBg="#FDAC9F"
              colorText="#330B07"
            />
          </div>
          <p>Dr Hertzeg kozmetika je ekološki proizvod koji obiluje antioksidansima, bez dodanih umjetnih boja, aroma i konzervansa. Ovaj čaj ima iznimno djelotvoran učinak na dijabetes, pomažući u reguliranju razine šećera u krvi. Dr Hertzeg čaj od smokva lista je bogat antioksidansima i vlaknima, te je također izvor vitamina A, B1 i B2 te brojnih minerala. Sprječavanja pretilosti te regulira razine inzulina, kolesterola i triglicerida.</p>
          
        </div>
      </section>

      <div className="product-details-container flex">
        <div className="product-details-list">
          {/* Sastojci */}
          <div className="flex">
            <p>Sastojci:</p>
            <p>Ficus carica folium</p>
          </div>
          {/* Kolicina */}
          <div className="flex">
            <p>Kolicina:</p>
            <p>50g</p>
          </div>
          {/* Nacin uporabe */}
          <div className="flex">
            <p>Nacin uporabe:</p>
            <p>2 g čaja (1 čajna žličica) preliti s 2 dl kipuće vode i ostaviti poklopljeno 10 – 15 minuta. Procijediti i zasladiti po želji. Piti tri puta dnevno poslije obroka.</p>
          </div>
          {/* Pomaze kod */}
          <div className="row">
            <p>Pomaze kod:</p>
            <p>Sprječavanja pretilost te regulira razine inzulina, kolesterola i triglicerida. Izvor vitamina A, B1 i B2 te brojnih minerala.</p>
          </div>

        </div>
        <div className="product-details-list">
          {/* Ekoloska proizvodnja */}
          <div className="flex">
            <p>Ekoloska proizvodnja:</p>
            <p>Organic</p>
          </div>
          {/* Alergije */}
          <div className="flex">
            <p>Alergije:</p>
            <p>Ne sadrži alergene sastojke koje je potrebno naznačiti</p>
          </div>
          {/* Upute */}
          <div className="flex">
            <p>Upute za pohranu</p>
            <p>Čuvati na suhom i tamnom mjestu pri temperaturi do 25 °C</p>
          </div>
          {/* Sastojci */}
          <div className="flex">
            <p>Zemlja podrijetla</p>
            <p>Bosna i Hercegovina</p>
          </div>
        </div>
      </div>
      
      <div className="reviews">
        <h4>Customer reviews</h4>
        <div className="flex">
          <div className="row">
            <div className="review-user">
              <div className="review-user-image">
                <Image 
                  src={UserImage}
                  alt='ProductSlika'
                  quality={100}
                  width={100}
                  height={100}
                />
              </div>
              <div className="review-message">
                <p>Chocolate candy tiramisu sesame snaps cake lollipop. Donut macaroon oat cake jelly-o gummies jelly topping wafer.</p>
              </div>
            </div>

            <div className="review-user">
              <div className="review-user-image">
                <Image 
                  src={UserImage}
                  alt='ProductSlika'
                  quality={100}
                  width={100}
                  height={100}
                />
              </div>
             
              <div className="review-message">
                <p>Chocolate candy tiramisu sesame snaps cake lollipop. Donut macaroon oat cake jelly-o gummies jelly topping wafer.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="review-user">
              <div className="review-user-image">
                <Image 
                  src={UserImage}
                  alt='ProductSlika'
                  quality={100}
                  width={100}
                  height={100}
                />
              </div>
              <div className="review-message">
                <p>Chocolate candy tiramisu sesame snaps cake lollipop. Donut macaroon oat cake jelly-o gummies jelly topping wafer.</p>
              </div>
            </div>
            <div className="review-user">
              <div className="review-user-image">
                <Image 
                  src={UserImage}
                  alt='ProductSlika'
                  quality={100}
                  width={100}
                  height={100}
                />
              </div>
              <div className="review-message">
                <p>Chocolate candy tiramisu sesame snaps cake lollipop. Donut macaroon oat cake jelly-o gummies jelly topping wafer.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <h4>Ostali proizvodi</h4>
        <div className="row">
          <ProductPromotioCard
            title="Njega kože"
            description="Marzipan caramels brownie jelly beans bear claw jelly-o shortbread macaroon candy canes."
            buttonURL="/kozmetika/kozmetikaProduct"
            imageSRC="/images/kozmetikaProduct/product-promotion-card-red.png"
            imageALT="Njega kože"
            backgroundColor=""
          />
        </div>
      </section>

  
      {/* <div className="otherProductContainer">
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
      </div> */}
    </main>
  )
}
