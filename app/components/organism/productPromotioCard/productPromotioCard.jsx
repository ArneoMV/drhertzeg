"use client"
import React from 'react'
import './_productPromotioCard.scss'
import Button from '../../../components/atoms/button/button';
import Link from 'next/link';
import Image from 'next/image'

export default function ProductPromotioCard({title, description, buttonURL, imageSRC, imageALT, backgroundColor, productNumber }) {
  
    return (
        <div className="product-promotion-card" style={{ backgroundColor }} productNumber={productNumber}>
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
                  alt='ProductSlika'
                  quality={100}
                  width={150}
                  height={150}
                />
            </div>
        </div>
    )
}
