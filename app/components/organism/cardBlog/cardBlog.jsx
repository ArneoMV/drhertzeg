import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import "./_style.scss";

export default function OtherProductCard({ productTitle, productDetailsImageURL, productDetailsImageAlt, productDetailsURL }) {
  return (
    <Link href={productDetailsURL} className='blog-card-link-container gooey-background'>
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
            <p className='title-gooey'>{productTitle}</p>
        </span>
      </figure>


    </Link>
  );
}
