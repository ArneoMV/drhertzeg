"use client"
import React, { useRef, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import './_scrollSocial.scss'; 

import Social1 from '../../../assets/image/Social1.png'
import Social2 from '../../../assets/image/Social2.png'
import Social3 from '../../../assets/image/Social3.png'
import Social4 from '../../../assets/image/Social4.png'
import Social5 from '../../../assets/image/Social5.png'


function ScrollSocial() {
// Koristimo useRef hook za pristup DOM elementu
const sliderRef = useRef(null);
// Koristimo useState hook za praćenje stanja
const [isDown, setIsDown] = useState(false);
const [startX, setStartX] = useState(null);
const [scrollLeft, setScrollLeft] = useState(null);

// Event handler koji se aktivira kada korisnik klikne na slider
const handleMouseDown = (e) => {
  // Postavljamo isDown na true
  setIsDown(true);
  // Dodajemo klasu 'active' na sliderRef.current
  sliderRef.current.classList.add('active');
  // Postavljamo startX na trenutnu poziciju miša minus offset slidera
  setStartX(e.pageX - sliderRef.current.offsetLeft);
  // Postavljamo scrollLeft na trenutnu poziciju scrolla
  setScrollLeft(sliderRef.current.scrollLeft);
};

// Event handler koji se aktivira kada korisnik mišem napusti slider
const handleMouseLeave = () => {
  // Postavljamo isDown na false
  setIsDown(false);
  // Uklanjamo klasu 'active' sa sliderRef.current
  sliderRef.current.classList.remove('active');
};

// Event handler koji se aktivira kada korisnik otpusti klik miša
const handleMouseUp = () => {
  // Postavljamo isDown na false
  setIsDown(false);
  // Uklanjamo klasu 'active' sa sliderRef.current
  sliderRef.current.classList.remove('active');
};

// Event handler koji se aktivira kada korisnik mišem pomiče slider
const handleMouseMove = (e) => {
  // Ako korisnik nije kliknuo na slider, prekidamo izvršavanje funkcije
  if (!isDown) return;
  // Spriječavamo defaultno ponašanje preglednika kod pomicanja miša
  e.preventDefault();
  // Računamo novu poziciju x na osi X
  const x = e.pageX - sliderRef.current.offsetLeft;
  // Računamo razliku između trenutne pozicije x i startX
  const walk = (x - startX) * 3;
  // Postavljamo novu vrijednost scrollLeft na slideru
  sliderRef.current.scrollLeft = scrollLeft - walk;
};
    

  return (
    <div 
        ref={sliderRef}
        className="items"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}>
            
        <div className="item">
            <Image 
            src={Social1}
            alt='Social1'
            quality={100}
            />
        </div>
        <div className="item">
            <Image 
            src={Social2}
            alt='Social1'
            quality={100}
            />
        </div>
        <div className="item">
            <Image 
            src={Social3}
            alt='Social1'
            quality={100}
            />
        </div>
        <div className="item">
            <Image 
            src={Social4}
            alt='Social1'
            quality={100}
            />
        </div>
        <div className="item">
            <Image 
            src={Social5}
            alt='Social1'
            quality={100}
            />
        </div>
        <div className="item">
            <Image 
            src={Social1}
            alt='Social1'
            quality={100}
            />
        </div>
        <div className="item">
            <Image 
            src={Social1}
            alt='Social1'
            quality={100}
            />
        </div>
        <div className="item">
            <Image 
            src={Social2}
            alt='Social1'
            quality={100}
            />
        </div>
        <div className="item">
            <Image 
            src={Social3}
            alt='Social1'
            quality={100}
            />
        </div>
        <div className="item">
            <Image 
            src={Social4}
            alt='Social1'
            quality={100}
            />
        </div>
        <div className="item">
            <Image 
            src={Social5}
            alt='Social1'
            quality={100}
            />
        </div>
        <div className="item">
            <Image 
            src={Social1}
            alt='Social1'
            quality={100}
            />
        </div>
    </div>
  );
}

export default ScrollSocial;
