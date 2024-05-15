"use client"
import React, { useState, useRef } from 'react';
import './_hero.scss'

import Image from 'next/image';
import Link from 'next/link';
import ButtonIcon from '../../atoms/buttonIcon/buttonIcon.jsx';
import Button from '../../atoms/button/Button.jsx';

import { Icon } from '../../../utilities/images.js'
import UserImage1 from '../../../../public/images/user/user_review_01.png';
import UserImage2 from '../../../../public/images/user/user_review_02.png';
import UserImage3 from '../../../../public/images/user/user_review_03.png';
import UserImage4 from '../../../../public/images/user/user_review_04.png';

import heroProduct1 from '../../../assets/image/product/heroProduct1.png';
import heroProduct2 from '../../../assets/image/product/heroProduct2.png';
import heroProduct3 from '../../../assets/image/product/heroProduct3.png';
import heroProductImage1 from '../../../../public/images/product/HeroProductImage1.png';
import ilustracija_1 from '../../../assets/image/ilustracije/biljka_1.svg';
import ilustracija_2 from '../../../assets/image/ilustracije/biljka_2.svg';
import ilustracija_3 from '../../../assets/image/ilustracije/biljka_3.svg';
import ilustracija_4 from '../../../assets/image/ilustracije/biljka_4.svg';

import CardBlog from '../cardBlog/cardBlog.jsx';

import useWindowResize from '../../../utilities/useWindowResize.js'

export default function Hero() {

    // resize 
    const { screenWidth, screenHeight } = useWindowResize();
    const xxs = '0'; //PINK
    const xs = '600'; // GOLD
    const sm = '840'; // RED
    const md = '960'; // PURPLE
    const lg = '1280'; // BLUE
    const xl = '1440'; // BROWN
    const xxl = '1600'; // BLACK

  return (
    <>
    {/* Extra Extra Small - pink */}
    {screenWidth > xxs &&  screenWidth <= md ? (
        <section className="hero">
            <div className='container'>
                <div className="hero-title">
                    <h1>Doživite ljekovitu <br />moć prirode</h1>
                    <p>Gdje prirodni sastojci susreću potpuno zdravlje</p>
                </div>
                <div className="hero-content-row">
                    {/* Popular */}
                    <div className="hero-popular">
                        <h6>Popularni proizvodi</h6>
                        <div className="flex">
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
                        </div>
                        <Link href="/kozmetika">
                            <Button type="primary">Ostali proizvodi</Button>
                        </Link>
                    </div>
                    {/* Image */}
                    <div className="hero-image-container">
                        <Image
                            src={heroProductImage1}
                            alt="kozmetikaProduct"
                            quality={100}
                        />
                    </div>
                </div>
            </div>
            <div className="illustrations">
                <Image 
                    src={ilustracija_1}
                    alt='biljka ilustracija'
                    quality={100}
                    className='ilustracija_1'
                />
                <Image 
                    src={ilustracija_2}
                    alt='biljka ilustracija'
                    quality={100}
                    className='ilustracija_2'
                />
                <Image 
                    src={ilustracija_3}
                    alt='biljka ilustracija'
                    quality={100}
                    className='ilustracija_3'
                />
                <Image 
                    src={ilustracija_4}
                    alt='biljka ilustracija'
                    quality={100}
                    className='ilustracija_4'
                />
            </div>
        </section>
    ) : null}

    {/* Medium Purple*/}
    {screenWidth > md &&  screenWidth <= lg ? (
        <section className="hero">
            <div className='container'>
                <div className="hero-title">
                    <h1>Doživite ljekovitu moć prirode</h1>
                    <p>Gdje prirodni sastojci susreću potpuno zdravlje</p>
                </div>
                <div className="hero-content-row">

                    {/* Popular */}
                    <div className="hero-popular">
                        <h6>Popularni proizvodi</h6>
                        <div className="flex">
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
                        </div>
                        {/* <Link href="/kozmetika">
                            <Button type="primary">Ostali proizvodi</Button>
                        </Link> */}
                    </div>

                    {/* Image */}
                    <div className="hero-image-container">
                        <Image
                            src={heroProductImage1}
                            alt="kozmetikaProduct"
                            quality={100}
                        />
                    </div>
                </div>
            </div>
            <div className="illustrations">
                <Image 
                    src={ilustracija_1}
                    alt='biljka ilustracija'
                    quality={100}
                    className='ilustracija_1'
                />
                <Image 
                    src={ilustracija_2}
                    alt='biljka ilustracija'
                    quality={100}
                    className='ilustracija_2'
                />
                <Image 
                    src={ilustracija_3}
                    alt='biljka ilustracija'
                    quality={100}
                    className='ilustracija_3'
                />
                <Image 
                    src={ilustracija_4}
                    alt='biljka ilustracija'
                    quality={100}
                    className='ilustracija_4'
                />
            </div>
        </section>
    ) : null}

    {/* Large Purple*/}
    {screenWidth > lg &&  screenWidth <= xl ? (
        <section className="hero">
            <div className='container'>
                <div className="hero-title">
                    <h1>Doživite ljekovitu moć prirode</h1>
                    <p>Gdje prirodni sastojci susreću potpuno zdravlje</p>
                </div>
                <div className="hero-content-row">

                    {/* Popular */}
                    <div className="hero-popular">
                        <h6>Popularni proizvodi</h6>
                        <div className="flex">
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
                        </div>

                    </div>

                    {/* Image */}
                    <div className="hero-image-container">
                        <Image
                            src={heroProductImage1}
                            alt="kozmetikaProduct"
                            quality={100}
                        />
                    </div>

                </div>
            </div>
            <div className="illustrations">
                <Image 
                    src={ilustracija_1}
                    alt='biljka ilustracija'
                    quality={100}
                    className='ilustracija_1'
                />
                <Image 
                    src={ilustracija_2}
                    alt='biljka ilustracija'
                    quality={100}
                    className='ilustracija_2'
                />
                <Image 
                    src={ilustracija_3}
                    alt='biljka ilustracija'
                    quality={100}
                    className='ilustracija_3'
                />
                <Image 
                    src={ilustracija_4}
                    alt='biljka ilustracija'
                    quality={100}
                    className='ilustracija_4'
                />
            </div>
        </section>
    ) : null}

    {/* Extra Large - black */}
    {screenWidth > xl ? (
        <section className="hero">
            <div className='container'>
                <div className="hero-title">
                    <h1>Doživite ljekovitu moć prirode</h1>
                    <p>Gdje prirodni sastojci susreću potpuno zdravlje</p>
                </div>
                <div className="hero-content-row">

                    {/* Popular */}
                    <div className="hero-popular">
                        <h6>Popularni proizvodi</h6>
                        <div className="flex">
                            <div className='popular-product'>
                                <Image
                                    src={heroProduct1}
                                    alt="kozmetikaProduct"
                                    quality={100}
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
                        <Link href="/kozmetika">
                            <Button type="primary">Ostali proizvodi</Button>
                        </Link>
                    </div>

                    {/* Image */}
                    <div className="hero-image-container">
                        <Image
                            src={heroProductImage1}
                            alt="kozmetikaProduct"
                            quality={100}
                        />
                    </div>

                    {/* Review */}
                    <div className="hero-review">
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
            <div className="illustrations">
                <Image 
                    src={ilustracija_1}
                    alt='biljka ilustracija'
                    quality={100}
                    className='ilustracija_1'
                />
                <Image 
                    src={ilustracija_2}
                    alt='biljka ilustracija'
                    quality={100}
                    className='ilustracija_2'
                />
                <Image 
                    src={ilustracija_3}
                    alt='biljka ilustracija'
                    quality={100}
                    className='ilustracija_3'
                />
                <Image 
                    src={ilustracija_4}
                    alt='biljka ilustracija'
                    quality={100}
                    className='ilustracija_4'
                />
            </div>
        </section>
    ) : null}
  </>
  )
}
