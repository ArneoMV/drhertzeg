import React from 'react';
import './_product-card.scss';
import Image from 'next/image';
import Link from 'next/link';
import Chip from '../../atoms/chip/Chip';

export default function ProductCard({ productDetailsTitle, productDetailsPrice, productDetailsImageURL, productDetailsImageAlt, productURL, productChips1, productChips2, imageClass, hoverOutline }) {

  
  return (
    <Link href={productURL} className='product-card'>
      <div className="product-card-image">
        <Image 
          src={productDetailsImageURL}
          alt={productDetailsImageAlt}
          quality={100}
          className={imageClass}
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
