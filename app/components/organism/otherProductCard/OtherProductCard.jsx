import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import "./_otherProductCard.scss";
import Button from "../../atoms/button/Button";

export default function OtherProductCard({ productDetailsTitle, productDetailsKolicina, productDetailsImageURL, productDetailsImageAlt, productDetailsURL }) {
  return (
    <Link href={productDetailsURL} className='otherProductCard'>
      <div className="otherProductCardImage">
        <Image 
          src={productDetailsImageURL}
          alt={productDetailsImageAlt}
          quality={100}
          width={100}
          height={100}
        />
      </div>

      <div className="otherProductCardDetails">
          <h5>{productDetailsTitle}</h5>
          <p>{productDetailsKolicina}</p>
      </div>
    </Link>
  );
}
