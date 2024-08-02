"use client"
import React, { useRef } from "react";

import { Logos, Icons, Social, Teas } from "../../../utilities/images.js";

import './_slider.scss'
// React Slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CardBlog from '../cardBlog/cardBlog.jsx';
import ButtonIcon from "../../atoms/buttonIcon/buttonIcon.jsx";
import useWindowResize from '../../../utilities/useWindowResize.js'
import ProductPromotioCard from '../../organism/productPromotioCard/productPromotioCard';


export default function sliderProductCosmetics() {

    // resize 
    const { screenWidth, screenHeight } = useWindowResize();
    const xxs = '0'; //PINK
    const xs = '600'; // GOLD
    const sm = '840'; // RED
    const md = '960'; // PURPLE
    const lg = '1280'; // BLUE
    const xl = '1440'; // BROWN
    const xxl = '1600'; // BLACK

    // Slick Slider
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

  
  // Settings
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }


  return (
    <>
    {/* Extra Extra Small - pink */}
    {screenWidth > xxs &&  screenWidth <= md ? (
        <div className="slider-container">
            <div className="title-container">
                <h4>Ostali proizvodi</h4>
            </div>
            <Slider
                ref={slider => {
                    sliderRef = slider;
                }}
                {...settings}
            >
                <ProductPromotioCard
                    title="Njega kože"
                    description="Marzipan caramels brownie jelly beans."
                    buttonURL="/caj/cajProduct"
                    imageSRC={Social.product_cosmetics_promotion_smiljolat}
                    imageALT="Njega kože"
                    color="blue"
                    productNumber="2"
                />
                <ProductPromotioCard
                    title="Njega kose"
                    description="Gingerbread tootsie roll icing carrot cake. Brownie candy canes cotton candy."
                    buttonURL="/caj/cajProduct"
                    imageSRC={Social.product_cosmetics_promotion_hair_boost}
                    imageALT="Njega kose"
                    color="green"
                    productNumber="3"
                />
                <ProductPromotioCard
                    title="Njega lica"
                    description="Icing soufflé chocolate candy jelly beans cake. "
                    buttonURL="/caj/cajProduct"
                    imageSRC={Social.product_cosmetics_promotion_calming_gel}
                    imageALT="Njega lica"
                    color="red"
                    productNumber="4"
                />
                <ProductPromotioCard
                    title="Njega tijela"
                    description="Cupcake sweet roll chocolate bar candy canes soufflé jelly-o."
                    buttonURL="/caj/cajProduct"
                    imageSRC={Social.product_cosmetics_promotion_serum_od_smilja}
                    imageALT="Njega tijela"
                    color="orange"
                    productNumber="5"
                />
                
            </Slider>
            <div className="buttons-container">
                <ButtonIcon
                    iconSrc={Icons.arrowLeft}
                    onClick={previous}
                    // className="slick-prev"
                    alt="Previous" 
                />
                <ButtonIcon
                    iconSrc={Icons.arrowRight}
                    onClick={next}
                    // className="slick-next"
                    alt="Next"
                />
            </div>
        </div>
    ) : null}

    {/* Medium Purple*/}
    {screenWidth > md &&  screenWidth <= xxl ? (
        <div className="slider-container">
            <div className="slider-container-header">
                <h4>Ostali proizvodi</h4>
                <div className="row">
                    <ButtonIcon
                        iconSrc={Icons.arrowLeft}
                        onClick={previous}
                        // className="slick-prev"
                        alt="Previous" 
                    />
                    <ButtonIcon
                        iconSrc={Icons.arrowRight}
                        onClick={next}
                        // className="slick-next"
                        alt="Next"
                    />
                    
                </div>
            </div>
            <Slider
                ref={slider => {
                    sliderRef = slider;
                }}
                {...settings}
            >
                <ProductPromotioCard
                    title="Njega kože"
                    description="Marzipan caramels brownie jelly beans."
                    buttonURL="/caj/cajProduct"
                    imageSRC={Social.product_cosmetics_promotion_smiljolat}
                    imageALT="Njega kože"
                    color="blue"
                    productNumber="2"
                />
                <ProductPromotioCard
                    title="Njega kose"
                    description="Gingerbread tootsie roll icing carrot cake. Brownie candy canes cotton candy."
                    buttonURL="/caj/cajProduct"
                    imageSRC={Social.product_cosmetics_promotion_hair_boost}
                    imageALT="Njega kose"
                    color="green"
                    productNumber="3"
                />
                <ProductPromotioCard
                    title="Njega lica"
                    description="Icing soufflé chocolate candy jelly beans cake. "
                    buttonURL="/caj/cajProduct"
                    imageSRC={Social.product_cosmetics_promotion_calming_gel}
                    imageALT="Njega lica"
                    color="red"
                    productNumber="4"
                />
                <ProductPromotioCard
                    title="Njega tijela"
                    description="Cupcake sweet roll chocolate bar candy canes soufflé jelly-o."
                    buttonURL="/caj/cajProduct"
                    imageSRC={Social.product_cosmetics_promotion_serum_od_smilja}
                    imageALT="Njega tijela"
                    color="orange"
                    productNumber="5"
                />
                
            </Slider>
        </div>
    ) : null}

    {/* Extra Extra Large - black */}
    {screenWidth > xxl ? (
        <div className="slider-container">
            <div className="slider-container-header">
                <h4>Ostali proizvodi</h4>
                <div className="row">
                    <ButtonIcon
                        iconSrc={Icons.arrowLeft}
                        onClick={previous}
                        // className="slick-prev"
                        alt="Previous" 
                    />
                    <ButtonIcon
                        iconSrc={Icons.arrowRight}
                        onClick={next}
                        // className="slick-next"
                        alt="Next"
                    />
                    
                </div>
            </div>
            <Slider
                ref={slider => {
                    sliderRef = slider;
                }}
                {...settings}
            >
                <ProductPromotioCard
                    title="Smiljolat"
                    description="Organski hidrolat smilja za njegu, čišćenje i hidrataciju zrele kože."
                    buttonURL="/kozmetika/smiljolat"
                    imageSRC={Social.product_cosmetics_promotion_smiljolat}
                    imageALT="Smiljolat"
                />
                <ProductPromotioCard
                    title="Hair boost"
                    description="Biljni losion s cvijetom arnike za umirenje vlasišta, pomoć pri otklanjanju prhuti i davanje sjaja kosi."
                    buttonURL="/kozmetika/hai-boost"
                    imageSRC={Social.product_cosmetics_promotion_hair_boost}
                    imageALT="/kozmetika/Hair boost"
                />
                <ProductPromotioCard
                    title="Calming gel"
                    description="Gel jedinstvene formulacije i brzog učinka koji rashlađuje, umiruje i smanjuje otekline od uboda insekata ili opeklina od sunca."
                    buttonURL="/kozmetika/calming-gel"
                    imageSRC={Social.product_cosmetics_promotion_calming_gel}
                    imageALT="Calming gel"
                />
                <ProductPromotioCard
                    title="Serum od smilja"
                    description="Efikasan anti-age serum obogaćen vitaminom E koji dubinski hrani kožu, smanjuje znakove starenja i smiruje upalne promjene."
                    buttonURL="/kozmetika/serum-od-smilja"
                    imageSRC={Social.product_cosmetics_promotion_serum_od_smilja}
                    imageALT="Serum od smilja"
                />
                
            </Slider>
        </div>
    ) : null}
    </>
  )
}
