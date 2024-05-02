"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { notFound } from "next/navigation";
// import Image from 'next/image';
import ProductSlika from '../../assets/image/product/product-promotion-card-red.png';
import Chip from '../../components/atoms/chip/Chip';

import ProductPromotioCard from '../../components/organism/productPromotioCard/productPromotioCard';
import Carousel from '../../components/organism/carousel/carousel';
import AdBanner from '../../components/organism/adBanner/adBanner';


import { Icon } from '../../utilities/images';
// import ProductGreen from '../../assets/image/product/product-promotion-card-green.png';
// import ProductBlue from '../../assets/image/product/product-promotion-card-blue.png';
// import ProductOrange from '../../assets/image/product/product-promotion-card-orange.png';
import UserImage1 from '../../assets/image/person-review/user_review_01.png';
import UserImage2 from '../../assets/image/person-review/user_review_02.png';
import UserImage3 from '../../assets/image/person-review/user_review_03.png';
import UserImage4 from '../../assets/image/person-review/user_review_04.png';


import ButtonIcon from '../../components/atoms/buttonIcon/buttonIcon';
import SliderProductsCaj from "../../components/organism/sliderProductsCaj/sliderProductsCaj.jsx"

import ReviewLeft from '../../components/molecules/review/review-left';
import ReviewRight from '../../components/molecules/review/review-right';

const sections = [
  {
    id: "sastojci",
    title: "Sastojci",
    description: "Ficus carica folium",
  },
  {
    id: "kolicina",
    title: "Količina",
    description: "150g",
  },
  {
    id: "nacin-uporabe",
    title: "Način uporabe",
    description: "2 g čaja (1 čajna žličica) preliti s 2 dl kipuće vode i ostaviti poklopljeno 10 – 15 minuta. Procijediti i zasladiti po želji. Piti tri puta dnevno poslije obroka.",
  },
  {
    id: "ekoloska-proizvodnja",
    title: "Ekološka proizvodnja",
    description: "Organic",
  },
  {
    id: "pomaze-kod",
    title: "Pomaže kod",
    description: ` Sprječavanja pretilost te regulira razine inzulina, kolesterola i triglicerida. Izvor vitamina A, B1 i B2 te brojnih minerala. `,
  },
  {
    id: "upute-za-pohranu",
    title: "Upute za pohranu",
    description: ` Čuvati na suhom i tamnom mjestu pri temperaturi do 25 °C. `,
  },
];

const kolicinaSection = sections.find(section => section.id === "kolicina");
const sastojciSection = sections.find(section => section.id === "sastojci");
const nacinUporabeSection = sections.find(section => section.id === "nacin-uporabe");
const ekoloskaProizvodnjaSection = sections.find(section => section.id === "ekoloska-proizvodnja");
const pomazeKodSection = sections.find(section => section.id === "pomaze-kod");
const uputeZaPohranuSection = sections.find(section => section.id === "upute-za-pohranu");


export default function CajProduct() {

  const router = useRouter()

  // Images
  const slides = [
    { src: '/images/product/kozmetika/Lavandolat.png', title: 'Product 1' },
    { src: '/images/product/kozmetika/CareAndMassageOil.png', title: 'Product 2' },
    { src: '/images/product/kozmetika/HydratingDayCream.png', title: 'Product 3' },
  ];
  
  // import Lavandolat from '../../../../public/images/product/kozmetika/Lavandolat.png';

  // * Slick Slider Promotion Images * \\
  const handleNext = () => {
    // Dohvatite referencu na slider pomoću react-slick
    const slider = document.querySelector(".slick-slider");
    // Provjerite je li slider pronađen
    if (slider) {
      // Pozovite metod za klizanje na sljedeći slajd
      slider.slickNext();
    }
  };
  const handlePrev = () => {
    // Dohvatite referencu na slider pomoću react-slick
    const slider = document.querySelector(".slick-slider");
    // Provjerite je li slider pronađen
    if (slider) {
      // Pozovite metod za klizanje na prethodni slajd
      slider.slickPrev();
    }
  };
  
  // Settings
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    nextArrow: (
      <ButtonIcon
        iconSrc={Icon.arrowRight}
        onClick={handleNext}
        className="slick-next"
        alt="Next"
      />
    ),
    prevArrow: (
      <ButtonIcon
        iconSrc={Icon.arrowLeft}
        onClick={handlePrev}
        className="slick-prev"
        alt="Previous" 
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <main className='product-page-contianer'>
      <section className='product-section'>
        {/* Second nav */}
        {/* <div className="second-nav-container">
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
        </div> */}

        {/* Product */}
        <section className="product-banner">
          <div className="productImage">
            <Carousel 
              slides={slides}
            />
          </div>
          <div className="product-details">
            <h3>Caj Product</h3>
            <p className='price'>3.5 €</p>
            <div className="row-chips">
              <Chip 
                text="Protuupalno djelovabnje"
                colorBg="#D8F3DC"
                colorText="#330B07"
              />
              <Chip 
                text="Umirujući učinak"
                colorBg="#D8F3DC"
                colorText="#330B07"
              />
              <Chip 
                text="Smanjenju pigmentacije"
                colorBg="#D8F3DC"
                colorText="#330B07"
              />
            </div>
            <p>Dr Hertzeg kozmetika je ekološki proizvod koji obiluje antioksidansima, bez dodanih umjetnih boja, aroma i konzervansa. Ovaj čaj ima iznimno djelotvoran učinak na dijabetes, pomažući u reguliranju razine šećera u krvi. Dr Hertzeg čaj od smokva lista je bogat antioksidansima i vlaknima, te je također izvor vitamina A, B1 i B2 te brojnih minerala. Sprječavanja pretilosti te regulira razine inzulina, kolesterola i triglicerida.</p>
          </div>
        </section>

        {/* Extra information */}
        <section className='product-extra-details'>
          <div className="column col-5-lg">
            {/* Sastojci */}
            <div className="collapse-item">
              <p className="collapse-title">{sastojciSection.title}</p>
              <p className="collapse-description">{sastojciSection.description}</p>
            </div>
            {/* Kolicina */}
            <div className="collapse-item">
              <p className="collapse-title">{kolicinaSection.title}</p>
              <p className="collapse-description">{kolicinaSection.description}</p>
            </div>
            {/* Nacin uporabe */}
            <div className="collapse-item">
              <p className="collapse-title">{nacinUporabeSection.title}</p>
              <p className="collapse-description">{nacinUporabeSection.description}</p>
            </div>
          </div>
          <div className="column col-5-lg">
            {/* Ekološka proizvodnja */}
            <div className="collapse-item">
              <p className="collapse-title">{ekoloskaProizvodnjaSection.title}</p>
              <p className="collapse-description">{ekoloskaProizvodnjaSection.description}</p>
            </div>
            {/* Pomaze kod */}
            <div className="collapse-item">
              <p className="collapse-title">{pomazeKodSection.title}</p>
              <p className="collapse-description">{pomazeKodSection.description}</p>
            </div>
            {/* Upute za pohranu */}
            <div className="collapse-item">
              <p className="collapse-title">{uputeZaPohranuSection.title}</p>
              <p className="collapse-description">{uputeZaPohranuSection.description}</p>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <div className="reviews">
          <h4>Customer reviews</h4>
          <div className="column">
            <div className="flex">
              <ReviewLeft 
                userImage={UserImage1}
                userReview="Carrot cake sweet chocolate bar apple pie apple pie. Sweet caramels powder powder toffee sweet cookie chocolate cake"
              />
              <ReviewRight 
                userImage={UserImage2}
                userReview="Carrot cake sweet chocolate bar apple pie apple pie. Sweet caramels powder powder toffee sweet cookie chocolate cake"
              />
            </div>

            <div className="flex">
              <ReviewLeft 
                userImage={UserImage3}
                userReview="Carrot cake sweet chocolate bar apple pie apple pie. Sweet caramels powder powder toffee sweet cookie chocolate cake"
              />
              <ReviewRight 
                userImage={UserImage4}
                userReview="Carrot cake sweet chocolate bar apple pie apple pie. Sweet caramels powder powder toffee sweet cookie chocolate cake"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Promotion Image slider */}

      <SliderProductsCaj /> 


      <AdBanner />
    </main>
  )
}
