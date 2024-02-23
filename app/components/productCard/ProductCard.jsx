import React from 'react'
import './_productCard.scss';
import Image from 'next/image'
import Link from 'next/link'


export default function ProductCardTab({ imageUrl, title, link, alt }) {
  return (
        <Link href={link} className='productCard'>
            <Image 
              src={imageUrl}
              alt={alt}
              quality={100}
            />
          <h6>{title}</h6>
        </Link>
  )
}
