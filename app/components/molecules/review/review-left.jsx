import React from 'react'
import Image from 'next/image';
import './review.scss'

export default function ReviewLeft({userImage, userReview}) {
  return (
    <div className="review-user-left">
        <div className="review-user-image">
        <Image 
            src={userImage}
            alt='ProductSlika'
            quality={100}
            width={100}
            height={100}
        />
        </div>
        <div className="review-message">
        <p>{userReview}</p>
         </div>
    </div>
  )
}
