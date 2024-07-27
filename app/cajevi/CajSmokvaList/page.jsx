"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { notFound } from "next/navigation";
import { Icons, Social, User, Teas } from "../../utilities/images.js";

import Chip from '../../components/atoms/chip/Chip';
import ProductPromotioCard from '../../components/organism/productPromotioCard/productPromotioCard';
import Carousel from '../../components/organism/carousel/carousel';
import AdBanner from '../../components/organism/adBanner/adBanner';
import ButtonIcon from '../../components/atoms/buttonIcon/buttonIcon';
import SliderProductsCaj from "../../components/organism/sliderProductsCaj/sliderProductsCaj.jsx"
import ReviewLeft from '../../components/molecules/review/review-left';
import ReviewRight from '../../components/molecules/review/review-right';


import productsCaj from '../../data/productCaj';


export default function CajSmokvaList() {
  const router = useRouter();
  const product = productsCaj.find(p => p.id === "CajSmokvaList");
  
  if (!product) {
    return <p>Proizvod nije pronađen.</p>;
  }

  // Images
  const slides = [
    { src: Teas.packaging_eko_caj_smokva_list, title: 'Caj Smokva' },
    { src: Teas.product_eko_caj_smokva_list, title: 'Caj Smokva' },
  ];

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
        iconSrc={Icons.arrowRight}
        onClick={handleNext}
        className="slick-next"
        alt="Next"
      />
    ),
    prevArrow: (
      <ButtonIcon
        iconSrc={Icons.arrowLeft}
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

  return (
    <main className='product-page-contianer'>
      <section className='product-section'>

        {/* Product */}
        <section className="product-banner">
          <div className="productImage">
            <Carousel 
              slides={slides}
            />
          </div>
          <div className="product-details">
            <h3>{product.naziv}</h3>
            <p className='price'>{product.cijena}</p>
            <div className="row-chips">
              <Chip 
                text={product.tag1}
                colorBg="#D8F3DC"
              />
              <Chip 
                text={product.tag2}
                colorBg="#D8F3DC"
              />
              <Chip 
                text={product.tag3}
                colorBg="#D8F3DC"
              />
            </div>
            <p>{product.opis}</p>
          </div>
        </section>

        {/* Extra information */}
        <section className='product-extra-details'>
          <div className="column col-5-lg">
            {/* Sastojci */}
            <div className="collapse-item">
              <p className="collapse-title">Sastojci</p>
              <p className="collapse-description">{product.sastojci}</p>
            </div>
            {/* Kolicina */}
            <div className="collapse-item">
              <p className="collapse-title">Količina</p>
              <p className="collapse-description">{product.kolicina}</p>
            </div>

            {/* Nacin uporabe */}
            <div className="collapse-item">
              <p className="collapse-title">Priprema</p>
              <p className="collapse-description">{product.priprema}</p>
            </div>
          </div>
          <div className="column col-5-lg">
            {/* Ekološka proizvodnja */}
            <div className="collapse-item">
              <p className="collapse-title">Proizvodnja</p>
              <p className="collapse-description">{product.proizvodnja}</p>
            </div>
            {/* Pomaze kod */}
            <div className="collapse-item">
              <p className="collapse-title">Pomaže kod</p>
              <p className="collapse-description">{product.pomaze}</p>
            </div>
            {/* Upute za pohranu */}
            <div className="collapse-item">
              <p className="collapse-title">Pohrana</p>
              <p className="collapse-description">{product.pohrana}</p>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <div className="reviews">
          <h4>Recenzije</h4>
          <div className="column">
            <div className="flex">
              <ReviewLeft 
                userImage={User.user_review_01}
                userReview="Stavrno je vrlo ukusan čaj, inace nisam veliki obozavatelj smokvi, ali ovo je stvarno brutalno, svaka preporuka, pijem ga i ujutro i navecer. Odličan je, okus je aromatican i jak, bas se osjeti."
              />
              <ReviewRight 
                userImage={User.user_review_02}
                userReview="Čaj pijem svakodnevno zbog regulacije šećera i zbog zdravlja!"
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
