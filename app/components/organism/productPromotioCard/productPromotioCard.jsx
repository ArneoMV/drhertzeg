"use client"
import React from 'react'
import './_productPromotioCard.scss'
import Button from '../../../components/atoms/button/button';
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
        <div className="promotion-content">
          <div className="promotion-content-title">
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
          <Link href={buttonURL}>
            <Button type="link">Saznaj više</Button>
          </Link>
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
      </div>
    );
  }
  