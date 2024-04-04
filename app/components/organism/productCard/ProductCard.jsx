import React from 'react'
import './_product-card.scss';
import Image from 'next/image'
import Link from 'next/link'
import Chip from '../../atoms/chip/Chip'

export default function ProductCard({ productDetailsTitle, productDetailsPrice, productDetailsImageURL, productDetailsImageAlt, productDetailsURL, productChips1, productChips2 }) {
  return (
    <Link href={productDetailsURL} className='product-card-link'>
      <div className="product-card-image">
        <Image 
          src={productDetailsImageURL}
          alt={productDetailsImageAlt}
          quality={100}
          width={100}
          height={100}
        />
      </div>

      <div className="product-card-content">
        <div className="product-card-content-title">
            <h5>{productDetailsTitle}</h5>
            <p>{productDetailsPrice}</p>
        </div>
        <div className='product-card-content-chips'>
          <Chip text={productChips1} />
          <Chip text={productChips2} />
        </div>
      </div>
    </Link>
  );
}
