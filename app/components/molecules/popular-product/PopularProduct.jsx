// components/molecules/PopularProduct.jsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PopularProduct = ({ product }) => {
  return (
    <div className='popular-product'>
      <Image
        src={product.imageSrc}
        alt={product.name}
        quality={100}
        width={50}
        height={50}
        className="product-image"
      />
      <div className="promotion-content">
        <Link href={product.link}>
          <p>{product.name}</p>
        </Link>
        <Link href={product.link}>
          <p>{product.price}</p>
        </Link>
      </div>
    </div>
  );
};

export default PopularProduct;
