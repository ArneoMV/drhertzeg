"use client"
import React, { useRef } from "react";
import './_sliderArticle.scss'
// React Slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CardBlog from '../cardBlog/cardBlog.jsx';
import ButtonIcon from '../../atoms/buttonIcon/buttonIcon.jsx';
import { Icons } from "../../../utilities/images.js";

import useWindowResize from '../../../utilities/useWindowResize.js'

export default function SliderArticles() {

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
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
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
  }


  return (
    <>
    {/* Extra Extra Small - pink */}
    {screenWidth > xxs &&  screenWidth <= md ? (
        <div className="slider-container">
            <div className="title-container">
                <h4>Novosti i zanimljivosti</h4>
            </div>
            <Slider
                ref={slider => {
                    sliderRef = slider;
                }}
                {...settings}
            >
                <CardBlog
                    productTitle="Od antičke Europe do suvremenih istraživanja"
                    productDetailsImageURL="/images/blog/BlogCardImage_1.png"
                    productDetailsImageAlt="Smokvin List"
                    productDetailsURL="/blog/blog-1"
                />
                <CardBlog
                    productTitle="Hidrolati: prirodna čarolija za savršenu kožu"
                    productDetailsImageURL="/images/blog/BlogCardImage_2.png"
                    productDetailsImageAlt="Smokvin List"
                    productDetailsURL="/blog/blog-2"
                />
                <CardBlog
                    productTitle="Organski trendovi koji očaravaju Svijet"
                    productDetailsImageURL="/images/blog/BlogCardImage_3.png"
                    productDetailsImageAlt="Smokvin List"
                    productDetailsURL="/blog/blog-3"
                />
                <CardBlog
                    productTitle="Od antičke Europe do suvremenih istraživanja"
                    productDetailsImageURL="/images/blog/BlogCardImage_1.png"
                    productDetailsImageAlt="Smokvin List"
                    productDetailsURL="/blog/blog-1"
                />
                <CardBlog
                    productTitle="Hidrolati: prirodna čarolija za savršenu kožu"
                    productDetailsImageURL="/images/blog/BlogCardImage_2.png"
                    productDetailsImageAlt="Smokvin List"
                    productDetailsURL="/blog/blog-2"
                />
                <CardBlog
                    productTitle="Organski trendovi koji očaravaju Svijet"
                    productDetailsImageURL="/images/blog/BlogCardImage_3.png"
                    productDetailsImageAlt="Smokvin List"
                    productDetailsURL="/blog/blog-3"
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
                <h4>Novosti i zanimljivosti</h4>
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
                <CardBlog
                    productTitle="Od antičke Europe do suvremenih istraživanja"
                    productDetailsImageURL="/images/blog/BlogCardImage_1.png"
                    productDetailsImageAlt="Smokvin List"
                    productDetailsURL="/blog/blog-1"
                />
                <CardBlog
                    productTitle="Hidrolati: prirodna čarolija za savršenu kožu"
                    productDetailsImageURL="/images/blog/BlogCardImage_2.png"
                    productDetailsImageAlt="Smokvin List"
                    productDetailsURL="/blog/blog-2"
                />
                <CardBlog
                    productTitle="Organski trendovi koji očaravaju Svijet"
                    productDetailsImageURL="/images/blog/BlogCardImage_3.png"
                    productDetailsImageAlt="Smokvin List"
                    productDetailsURL="/blog/blog-3"
                />
                <CardBlog
                    productTitle="Od antičke Europe do suvremenih istraživanja"
                    productDetailsImageURL="/images/blog/BlogCardImage_1.png"
                    productDetailsImageAlt="Smokvin List"
                    productDetailsURL="/blog/blog-1"
                />
                <CardBlog
                    productTitle="Hidrolati: prirodna čarolija za savršenu kožu"
                    productDetailsImageURL="/images/blog/BlogCardImage_2.png"
                    productDetailsImageAlt="Smokvin List"
                    productDetailsURL="/blog/blog-2"
                />
                <CardBlog
                    productTitle="Organski trendovi koji očaravaju Svijet"
                    productDetailsImageURL="/images/blog/BlogCardImage_3.png"
                    productDetailsImageAlt="Smokvin List"
                    productDetailsURL="/blog/blog-3"
                />
            </Slider>
        </div>
    ) : null}

    {/* Extra Extra Large - black */}
    {screenWidth > xxl ? (
        <div className="slider-container">
            <div className="slider-container-header">
                <h4>Novosti i zanimljivosti</h4>
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
                <CardBlog
                    productTitle="Od antičke Europe do suvremenih istraživanja"
                    productDetailsImageURL="/images/blog/BlogCardImage_1.png"
                    productDetailsImageAlt="Smokvin List"
                    productDetailsURL="/blog/blog-1"
                />
                <CardBlog
                    productTitle="Hidrolati: prirodna čarolija za savršenu kožu"
                    productDetailsImageURL="/images/blog/BlogCardImage_2.png"
                    productDetailsImageAlt="Smokvin List"
                    productDetailsURL="/blog/blog-2"
                />
                <CardBlog
                    productTitle="Organski trendovi koji očaravaju Svijet"
                    productDetailsImageURL="/images/blog/BlogCardImage_3.png"
                    productDetailsImageAlt="Smokvin List"
                    productDetailsURL="/blog/blog-3"
                />
                <CardBlog
                    productTitle="Od antičke Europe do suvremenih istraživanja"
                    productDetailsImageURL="/images/blog/BlogCardImage_1.png"
                    productDetailsImageAlt="Smokvin List"
                    productDetailsURL="/blog/blog-1"
                />
                <CardBlog
                    productTitle="Hidrolati: prirodna čarolija za savršenu kožu"
                    productDetailsImageURL="/images/blog/BlogCardImage_2.png"
                    productDetailsImageAlt="Smokvin List"
                    productDetailsURL="/blog/blog-2"
                />
                <CardBlog
                    productTitle="Organski trendovi koji očaravaju Svijet"
                    productDetailsImageURL="/images/blog/BlogCardImage_3.png"
                    productDetailsImageAlt="Smokvin List"
                    productDetailsURL="/blog/blog-3"
                />
            </Slider>
        </div>
    ) : null}
    </>
  )
}
