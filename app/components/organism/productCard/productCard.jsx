import React from 'react';
import './_product-card.scss';
import Image from 'next/image';
import Link from 'next/link';
import Chip from '../../atoms/chip/Chip';

export default function ProductCard({ productDetailsTitle, productDetailsPrice, productDetailsImageURL, productDetailsImageAlt, productURL, productChips1, productChips2, imageClass, hoverOutline }) {
  
  let className = '';

  // Provjerite primljenu boju i postavite odgovarajuću klasu
  switch (hoverOutline) {
    case 'primary':
      className = 'hover-primary-300';
      break;
    case 'red-300':
      className = 'hover-red-300';
      break;
    case 'blue-300':
      className = 'hover-blue-300';
      break;
    default:
      className = '';
  }
  
  return (
    <Link href={productURL} className={`product-card ${className}`}>
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
