import React from 'react'
import './_productCardTab.scss';
import Image from 'next/image'
import Link from 'next/link'


export default function ProductCardTab({ imageUrl, title, link, alt }) {
  return (
    <div className='productCardTab'>
        <Link href={link}>
            <Image 
              src={imageUrl}
              alt={alt}
              quality={100}
            />
          <h6>{title}</h6>
        </Link>
    </div>
  )
}
