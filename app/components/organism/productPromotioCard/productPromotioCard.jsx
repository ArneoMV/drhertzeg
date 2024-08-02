"use client"
import React from 'react'
import './_productPromotioCard.scss'
import Button from '../../../components/atoms/button/Button';
import Link from 'next/link';
import Image from 'next/image'


export default function ProductPromotionCard({ title, description, buttonURL, imageSRC, imageALT }) {
    let className = "product-promotion-card";
  
    return (
      
        <div className={className}>
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
  
