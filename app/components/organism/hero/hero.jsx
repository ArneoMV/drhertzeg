"use client"
import React, { useState, useRef } from 'react';
import './_hero.scss'

import Image from 'next/image';
import Link from 'next/link';
import ButtonIcon from "../../atoms/buttonIcon/buttonIcon.jsx";

import { Icon } from '../../../utilities/images.js'
import UserImage1 from '../../../../public/images/user/user_review_01.png';
import UserImage2 from '../../../../public/images/user/user_review_02.png';
import UserImage3 from '../../../../public/images/user/user_review_03.png';
import UserImage4 from '../../../../public/images/user/user_review_04.png';

import heroProduct1 from '../../../assets/image/product/heroProduct1.png';
import heroProduct2 from '../../../assets/image/product/heroProduct2.png';
import heroProduct3 from '../../../assets/image/product/heroProduct3.png';
import heroProductImage1 from '../../../assets/image/product/heroProductImage1.png';

import CardBlog from '../cardBlog/cardBlog.jsx';

export default function Hero() {

  
  // Settings

  return (
    <>
    <section className="hero">
        <div className='container'>
            <div className="hero-title">
                <h1>Doživite ljekovitu moć prirode</h1>
                <p>Gdje prirodni sastojci susreću potpuno zdravlje</p>
            </div>
            <div className="hero-content-row">

                {/* Popular */}
                <div className="hero-popular col-5-lg">
                    <h6>Najpopularniji proizvodi</h6>
                    <div className='popular-product'>
                        <Image
                            src={heroProduct1}
                            alt="kozmetikaProduct"
                            quality={100}
                            width={50}
                            height={50}
                        />
                        <div className="promotion-content">
                            <Link href="/kozmetika/kozmetikaProduct">
                                <p>Serum od smilja</p>
                            </Link>
                            <Link href="/kozmetika/kozmetikaProduct">
                                <p>€ 4.3</p>
                            </Link>
                        </div>
                    </div>

                    <div className='popular-product'>
                        <Image
                            src={heroProduct2}
                            alt="kozmetikaProduct"
                            quality={100}
                            width={50}
                            height={50}
                        />
                        <div className="promotion-content">
                            <Link href="/kozmetika/kozmetikaProduct">
                                <p>Serum od smilja</p>
                            </Link>
                            <Link href="/kozmetika/kozmetikaProduct">
                                <p>€ 4.3</p>
                            </Link>
                        </div>
                    </div>
                    <div className='popular-product'>
                        <Image
                            src={heroProduct3}
                            alt="kozmetikaProduct"
                            quality={100}
                            width={50}
                            height={50}
                        />
                        <div className="promotion-content">
                            <Link href="/kozmetika/kozmetikaProduct">
                                <p>Serum od smilja</p>
                            </Link>
                            <Link href="/kozmetika/kozmetikaProduct">
                                <p>€ 4.3</p>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Image */}
                <div className="hero-image-container">
                    <Image
                        src={heroProductImage1}
                        alt="kozmetikaProduct"
                        quality={100}
                        width={150}
                        height={150}
                    />
                </div>

                {/* Review */}
                <div className="hero-review col-6-lg">
                    <div className="review-text">
                        <p>“Serum od smilja je zaista nevjerojatan proizvod!</p>
                        <p>Moja koža nikad nije izgledala bolje. Ovaj serum zaista čini čuda - koža mi je osvijetljena, hidrirana i sjajna.</p>
                    </div>
                    <div className="review-grade">
                        <p>Ocijena</p>
                        <div className="line"></div>
                        <div className="row">
                            <p>4.9</p>
                            <Image 
                                src={Icon.star}
                                alt='star'
                                quality={100}
                            />
                        </div>
                    </div>
                    <div className="user-info-row">
                        <Image
                            src={UserImage1}
                            alt="User"
                            quality={100}
                            width={150}
                            height={150}
                        />
                        <div className="column">
                            <p>Ivana Horvat</p>
                            <p>Kozmetičarka</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  </>
  )
}
