"use client";

import { useState } from "react";
import { Icons } from "../../../utilities/images.js";
import './_carousel.scss';
import Image from 'next/image';


const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="carousel">
        <div className='carousel-container'>
            <div className="arrow">
                <Image 
                    src={Icons.arrowLeft}
                    alt='arrowLeft'
                    quality={100}
                    width={100}
                    height={100}
                    onClick={goToPrevious}
                />
            </div>
            
            <div className="carousel-image">
              <Image 
                  src={slides[currentIndex].src}
                  alt='ProductSlika'
                  quality={100}
                  width={100}
                  height={100}
              />
            </div>
            <div className="arrow">
                <Image 
                    src={Icons.arrowRight}
                    alt='arrowLeft'
                    quality={100}
                    width={100}
                    height={100}
                    onClick={goToPrevious}
                />
            </div>
        </div>
      
        <div className="dots-container">
            {slides.map((slide, slideIndex) => (
            <div
                className={slideIndex === currentIndex ? "dot dot-active" : "dot dot-default"}
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
            >
            </div>
            ))}
        </div>
    </div>
  );
};

export default Carousel;
