"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { notFound } from "next/navigation";
import Image from 'next/image';
import { Icons, Logos, User, Cosmetics } from "../../utilities/images.js";
import Chip from '../../components/atoms/chip/Chip.jsx';
import Carousel from '../../components/organism/carousel/carousel.jsx';
import AdBanner from '../../components/organism/adBanner/adBanner.jsx';
import ButtonIcon from '../../components/atoms/buttonIcon/buttonIcon.jsx';
import SliderProductCosmetics from "../../components/organism/sliderProductCosmetics/sliderProductCosmetics.jsx"
import ReviewLeft from '../../components/molecules/review/review-left.jsx';
import ReviewRight from '../../components/molecules/review/review-right.jsx';
import productCosmetics from '../../data/productCosmetics.js';
import Button from "../../components/atoms/button/Button.jsx";
import Link from 'next/link';
import '../_product-page.scss';


export default function Smiljolat() {
  const router = useRouter();
  const product = productCosmetics.find(p => p.id === "Smiljolat");
  
  if (!product) {
    return <p>Proizvod nije pronađen.</p>;
  }
  // Images
  const slides = [
    { src: Cosmetics.packaging_smiljolat, title: 'Smiljolat' },
    { src: Cosmetics.product_smiljolat, title: 'Smiljolat' },
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
            <div className="dm-cta">
              <Image
                  src={Logos.Dm}
                  alt='Dm_Logo'
                  quality={100}
                  className='dm-logo-img'
                />
              <Link href={product.link} className="dm-cta-link" target="_blank">
                <Button type="primary">Kupi u DM Webshopu 🛒</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Extra information */}
        <section className='product-extra-details'>
          <div className="column col-5-lg">
            {/* Opis */}
            <div className="collapse-item">
              <p className="collapse-description">{product.opis}</p>
            </div>
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
                userImage={User.user_review_12}
                userReview="Ovaj hidrolat je odličan za njegu zrele kože. Pomaže u održavanju vlage i elastičnosti, a koža mi je vidljivo mekša i glađa."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Promotion Image slider */}

      <SliderProductCosmetics /> 

      <AdBanner />
    </main>
  )
}
