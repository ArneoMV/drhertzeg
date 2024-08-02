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
import ProductPromotioCard from '../productPromotioCard/productPromotioCard.jsx';


export default function sliderProductsTea() {

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
                    title="Detox čaj"
                    description="Detox čaj je pažljivo odabrana mješavina biljaka koje blagotvorno djeluju na organizam."
                    buttonURL="/cajevi/cajDetox"
                    imageSRC={Social.product_tea_promotion_detox_caj}
                    imageALT="Detox caj"
                    color="blue"
                    productNumber="2"
                />
                <ProductPromotioCard
                    title="Imuno čaj"
                    description="Pažljivo odabrana mješavina aromatičnih biljaka koje jačaju imunitet i štite organizam od upala i virusa."
                    buttonURL="/cajevi/CajImuno"
                    imageSRC={Social.product_tea_promotion_imuno_caj}
                    imageALT="Imuno čaj"
                    color="green"
                    productNumber="3"
                />
                <ProductPromotioCard
                    title="Čaj od Slatkog Pelina"
                    description="Čaj od Slatkog pelina je prirodni čaj bogat artemizinom koji ima antibakterijsko i antivirusno djelovanje."
                    buttonURL="/cajevi/CajSlatkiPelin"
                    imageSRC={Social.product_tea_promotion_slatki_pelin_caj}
                    imageALT="Caj od slatkog pelina"
                    color="red"
                    productNumber="4"
                />
                <ProductPromotioCard
                    title="Eko čaj Smokva list"
                    description="Čaj od smokivinog lista pruža profinjen okus i obiluje antioksidansima te vlaknima."
                    buttonURL="/cajevi/CajSmokvaList"
                    imageSRC={Social.product_tea_promotion_smokva_list_caj}
                    imageALT="Eko čaj Smokva list"
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
                    title="Detox čaj"
                    description="Detox čaj je pažljivo odabrana mješavina biljaka koje blagotvorno djeluju na organizam."
                    buttonURL="/cajevi/cajDetox"
                    imageSRC={Social.product_tea_promotion_detox_caj}
                    imageALT="Detox caj"
                    color="blue"
                    productNumber="2"
                />
                <ProductPromotioCard
                    title="Imuno čaj"
                    description="Pažljivo odabrana mješavina aromatičnih biljaka koje jačaju imunitet i štite organizam od upala i virusa."
                    buttonURL="/cajevi/CajImuno"
                    imageSRC={Social.product_tea_promotion_imuno_caj}
                    imageALT="Imuno čaj"
                    color="green"
                    productNumber="3"
                />
                <ProductPromotioCard
                    title="Čaj od Slatkog Pelina"
                    description="Čaj od Slatkog pelina je prirodni čaj bogat artemizinom koji ima antibakterijsko i antivirusno djelovanje."
                    buttonURL="/cajevi/CajSlatkiPelin"
                    imageSRC={Social.product_tea_promotion_slatki_pelin_caj}
                    imageALT="Caj od slatkog pelina"
                    color="red"
                    productNumber="4"
                />
                <ProductPromotioCard
                    title="Eko čaj Smokva list"
                    description="Čaj od smokivinog lista pruža profinjen okus i obiluje antioksidansima te vlaknima."
                    buttonURL="/cajevi/CajSmokvaList"
                    imageSRC={Social.product_tea_promotion_smokva_list_caj}
                    imageALT="Eko čaj Smokva list"
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
                    title="Detox čaj"
                    description="Detox čaj je pažljivo odabrana mješavina biljaka koje blagotvorno djeluju na organizam."
                    buttonURL="/cajevi/detox-caj"
                    imageSRC={Social.product_tea_promotion_detox_caj}
                    imageALT="Detox caj"
                />
                <ProductPromotioCard
                    title="Imuno čaj"
                    description="Pažljivo odabrana mješavina aromatičnih biljaka koje jačaju imunitet i štite organizam od upala i virusa."
                    buttonURL="/cajevi/imuno-caj"
                    imageSRC={Social.product_tea_promotion_imuno_caj}
                    imageALT="Imuno čaj"
                />
                <ProductPromotioCard
                    title="Čaj od Slatkog Pelina"
                    description="Bogat artemizinom koji ima antibakterijsko i antivirusno djelovanje."
                    buttonURL="/cajevi/caj-od-slatkog-pelina"
                    imageSRC={Social.product_tea_promotion_slatki_pelin_caj}
                    imageALT="Caj od slatkog pelina"
                />
                <ProductPromotioCard
                    title="Eko čaj Smokva list"
                    description="Čaj od smokivinog lista pruža profinjen okus i obiluje antioksidansima te vlaknima."
                    buttonURL="/cajevi/smokvin-list-caj"
                    imageSRC={Social.product_tea_promotion_smokva_list_caj}
                    imageALT="Eko čaj Smokva list"
                />
                
            </Slider>
        </div>
    ) : null}
    </>
  )
}
