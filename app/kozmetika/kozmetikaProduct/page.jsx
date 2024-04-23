"use client"
import React from 'react'
import { useState } from "react";
import { useRouter } from 'next/navigation'
import { notFound } from "next/navigation"
import Image from 'next/image'
import './_style.scss';
import ProductSlika from "../../assets/image/product/product-promotion-card-red.png"
import Chip from '@/app/components/atoms/chip/Chip';
import UserImage from '../../assets/image/user_1.png'
import ProductPromotioCard from '@/app/components/organism/productPromotioCard/productPromotioCard';
import Carousel from '../../components/organism/carousel/carousel'
import CosmeticsBanner from '../../components/organism/bannerCosmetics/bannerCosmetics'
import Footer from '../../components/organism/footer/footer'



import { Icon } from '../../utilities/images'
import ProductGreen from '../../assets/image/product/product-promotion-card-green.png'
import ProductBlue from '../../assets/image/product/product-promotion-card-blue.png'
import ProductOrange from '../../assets/image/product/product-promotion-card-orange.png'

export default function KozmetikaProduct() {
  const router = useRouter()
  // Toggle 
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  // Images
  const slides = [
    { url: '/images/product/kozmetika_calming_gel.png', title: 'Product 1' },
    { url: '/images/product/kozmetika_care_and_massage_oil.png', title: 'Product 2' },
    { url: '/images/product/kozmetika_hydrating_day_cream.png', title: 'Product 3' },
  ];



  // Promotion carousel
let box;

const btnpressprev = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width);
};

const btnpressnext = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    console.log(width);
};


  return (
    <div className='product-page kozmetika-individual'>
      <main className='product-page-contianer'>
        <div className='container-top'>
          {/* Second nav */}
          <div className="second-nav-container">
            <button className='back-button' type="button" onClick={() => router.back()}>
              <Image 
                src={Icon.arrowLeftLong}
                alt='ProductSlika'
                quality={100}
                width={24}
                height={24}
              />
              <p>Back</p>
            </button>
          </div>
          {/* Product */}
          <section className="product-banner">
            <div className="productImage">
              <Carousel 
              slides={slides}
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
              
              {/* DROPDOWN */}
              <div className='product-info-dropdown'>
                <div className={`kolaps ${isOpen ? "active_Collapse" : ""}`} onClick={toggleCollapse}>
                  <h5>Informacije o proizvodu</h5>
                </div>
                <div
                  className="kolapsSadrzaj"
                  style={{
                    maxHeight: isOpen ? "1000px" : 0,
                    overflow: "hidden",
                    transition: "max-height 0.3s ease-in-out",
                  }}
                >
                  <article className="kolapsInner">
                    {/* Ekoloska proizvodnja */}
                    <div className="flex">
                      <p>Ekoloska proizvodnja:</p>
                      <p>Organic</p>
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
                  </article>
                </div>
              </div>
            </div>
          </section>
        </div>

          {/* Reviews */}
          <div className="reviews">
            <h4>Customer reviews</h4>
            <div className="column">
              <div className="flex">
                <div className="review-user-left">
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

                <div className="review-user-right">
                  <div className="review-message">
                    <p>Chocolate candy tiramisu sesame snaps cake lollipop. Donut macaroon oat cake jelly-o gummies jelly topping wafer.</p>
                  </div>
                  <div className="review-user-image">
                    <Image 
                      src={UserImage}
                      alt='ProductSlika'
                      quality={100}
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="review-user-left">
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
                <div className="review-user-right">
                  <div className="review-message">
                    <p>Chocolate candy tiramisu sesame snaps cake lollipop. Donut macaroon oat cake jelly-o gummies jelly topping wafer.</p>
                  </div>
                  <div className="review-user-image">
                    <Image 
                      src={UserImage}
                      alt='ProductSlika'
                      quality={100}
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* Ostali proizvodi */}
          <section className='product-promotion'>
            <h4>Ostali proizvodi</h4>

            <button className="pre-btn" onClick={() => btnpressprev()}>
              <Image 
                  src={Icon.arrowLeft}
                  alt='arrowLeft'
                  quality={100}
                  width={100}
                  height={100}
              />
            </button>
            <button className="next-btn" onClick={() => btnpressnext()}>
              <Image 
                src={Icon.arrowRight}
                alt='arrowRight'
                quality={100}
                width={100}
                height={100}
              />
            </button>
            
            <div className="product-promotion-container" ref={(ref) => box = ref}>
              <ProductPromotioCard
                title="Njega kože"
                description="Marzipan caramels brownie jelly beans bear claw jelly-o shortbread macaroon candy canes."
                buttonURL="/kozmetika/kozmetikaProduct"
                imageSRC={ProductGreen}
                imageALT="Njega kože"
                backgroundColor="#D8F3DC"
                productNumber="1"
              />
              <ProductPromotioCard
                title="Njega kože"
                description="Marzipan caramels brownie jelly beans bear claw jelly-o shortbread macaroon candy canes."
                buttonURL="/kozmetika/kozmetikaProduct"
                imageSRC={ProductBlue}
                imageALT="Njega kože"
                backgroundColor="#DFF4F6"
                productNumber="2"
              />
              <ProductPromotioCard
                title="Njega kože"
                description="Marzipan caramels brownie jelly beans bear claw jelly-o shortbread macaroon candy canes."
                buttonURL="/kozmetika/kozmetikaProduct"
                imageSRC={ProductOrange}
                imageALT="Njega kože"
                backgroundColor="#FAEADB"
                productNumber="3"
              />
              <ProductPromotioCard
                title="Njega kože"
                description="Marzipan caramels brownie jelly beans bear claw jelly-o shortbread macaroon candy canes."
                buttonURL="/kozmetika/kozmetikaProduct"
                imageSRC={ProductGreen}
                imageALT="Njega kože"
                backgroundColor="#D8F3DC"
                productNumber="4"
              />
              <ProductPromotioCard
                title="Njega kože"
                description="Marzipan caramels brownie jelly beans bear claw jelly-o shortbread macaroon candy canes."
                buttonURL="/kozmetika/kozmetikaProduct"
                imageSRC={ProductBlue}
                imageALT="Njega kože"
                backgroundColor="#DFF4F6"
                productNumber="5"
              />
              <ProductPromotioCard
                title="Njega kože"
                description="Marzipan caramels brownie jelly beans bear claw jelly-o shortbread macaroon candy canes."
                buttonURL="/kozmetika/kozmetikaProduct"
                imageSRC={ProductOrange}
                imageALT="Njega kože"
                backgroundColor="#FAEADB"
                productNumber="6"
              />
              <ProductPromotioCard
                title="Njega kože"
                description="Marzipan caramels brownie jelly beans bear claw jelly-o shortbread macaroon candy canes."
                buttonURL="/kozmetika/kozmetikaProduct"
                imageSRC={ProductGreen}
                imageALT="Njega kože"
                backgroundColor="#D8F3DC"
                productNumber="7"
              />
              <ProductPromotioCard
                title="Njega kože"
                description="Marzipan caramels brownie jelly beans bear claw jelly-o shortbread macaroon candy canes."
                buttonURL="/kozmetika/kozmetikaProduct"
                imageSRC={ProductBlue}
                imageALT="Njega kože"
                backgroundColor="#DFF4F6"
                productNumber="8"
              />

            </div>


          </section>

          <CosmeticsBanner />
      </main>
      <Footer 
          color="red-300"
        />
    </div>
  )
}
