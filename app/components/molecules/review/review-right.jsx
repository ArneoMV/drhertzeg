import React from 'react'
import './review.scss'
import Image from 'next/image';

export default function ReviewRight({userImage, userReview}) {
  return (
    <div className="review-user-right">
        <div className="review-message">
            <p>{userReview}</p>
        </div>
        <div className="review-user-image">
            <Image 
                src={userImage}
                alt='userImage'
                quality={100}
                width={100}
                height={100}
            />
        </div>
    </div>
  )
}
