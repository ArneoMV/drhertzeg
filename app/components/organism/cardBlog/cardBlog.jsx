import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import "./_style.scss";

export default function OtherProductCard({ productTitle, productDetailsImageURL, productDetailsImageAlt, productDetailsURL }) {
  return (
    <Link href={productDetailsURL} className='blog-card-link-container'>
      <figure className='card__thumbnail'>
        <Image
          src={productDetailsImageURL}
          alt={productDetailsImageAlt}
          quality={100}
          objectFit='cover'
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: '100%' }} 
        />
        <span className='blog-text-container'>
            <p className='goo'>{productTitle}</p>
        </span>


        {/* Filter: https://css-tricks.com/gooey-effect/ */}
        <svg className="gooey-svg" width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />    
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
              <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
            </filter>
          </defs>
        </svg>
      </figure>


    </Link>
  );
}
