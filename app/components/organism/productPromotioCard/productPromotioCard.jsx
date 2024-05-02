"use client"
import React from 'react'
import './_productPromotioCard.scss'
import Button from '../../../components/atoms/button/Button';
import Link from 'next/link';
import Image from 'next/image'


export default function ProductPromotionCard({ title, description, buttonURL, imageSRC, imageALT, color, productNumber }) {
    let className = "product-promotion-card";
  
    switch (color) {
      case 'green':
        className += ' green';
        break;
      case 'red':
        className += ' red';
        break;
      case 'blue':
        className += ' blue';
        break;
      case 'orange':
        className += ' orange';
        break;
      default:
        break;
    }
  
    return (
      
        <div className={className} productNumber={productNumber}>
          <Link href={buttonURL}>
            <div className="promotion-content">
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
            <div className="image-container">
              <Image
                src={imageSRC}
                alt={imageALT}
                quality={100}
                width={150}
                height={150}
              />
            </div>
          </Link>
        </div>
    );
  }
  
