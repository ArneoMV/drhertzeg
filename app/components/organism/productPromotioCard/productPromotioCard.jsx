"use client"
import React from 'react'
import './_productPromotioCard.scss'
import Button from '../../../components/atoms/button/button';
import Link from 'next/link';
import Image from 'next/image'

export default function ProductPromotioCard({title, description, buttonURL, imageSRC, imageALT, backgroundColor }) {
  
    return (
        <div className="product-promotion-card" style={{ backgroundColor }}>
            <div className="promotion-content">
                <div className="promotion-content-title">
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
                <Link href={buttonURL}>
                    <Button type="link">Više</Button>
                </Link>
            </div>
        </div>
    )
}
