"use client"

import React from 'react'
import './_bannerCosmetics.scss'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../../atoms/button/button';
import useWindowResize from "../../../utilities/useWindowResize";
import BannerImage from '../../../assets/image/hero-image-cosmetics.png'

export default function BannerCosmetics() {
  // resize 
  const { screenWidth, screenHeight } = useWindowResize();
  const xxs = '0';
  const xs = '600';
  const sm = '840';
  const md = '960';
  const lg = '1280';
  const xl = '1440';
  const xxl = '1600';


  return (
    <>
      {/* Extra Extra Small - pink */}
      {screenWidth > xxs &&  screenWidth <= xs ? (
        <div className='hero-banner'>
            <div className="hero-content-title">
                <div className='title-text'>
                <h1>Ljepota iz prirode <br /> ima novi izgled</h1>
                <p>Marzipan caramels brownie jelly beans bear claw jelly-o shortbread macaroon candy canes. Macaroon donut biscuit brownie cake chocolate. </p>
                </div>
                <Link href="/kozmetika/kozmetikaProduct">
                    <Button type="primary">Pročitaj više</Button>
                </Link>
            </div>
        </div>
      ) : null}

      {/* Medium Purple*/}
      {screenWidth > xs &&  screenWidth <= md ? (
        <div className='hero-banner'>
            <div className="hero-content-title">
                <div className='title-text'>
                <h1>Ljepota iz prirode <br /> ima novi izgled</h1>
                <p>Marzipan caramels brownie jelly beans bear claw jelly-o shortbread macaroon candy canes. Macaroon donut biscuit brownie cake chocolate. </p>
                </div>
                <Link href="/kozmetika/kozmetikaProduct">
                    <Button type="primary">Pročitaj više</Button>
                </Link>
            </div>

            <div className="hero-image">
                <Image 
                    src={BannerImage}
                    alt='BannerImage'
                    quality={100}
                />
            </div>
        </div>
      ) : null}

      {/* Izmedu XXL i md  */}
      {screenWidth > md &&  screenWidth <= xxl ? (
        <div className='hero-banner'>
            <div className="hero-content-title">
                <div className='title-text'>
                <h1>Ljepota iz prirode <br /> ima novi izgled</h1>
                <p>Marzipan caramels brownie jelly beans bear claw jelly-o shortbread macaroon candy canes. Macaroon donut biscuit brownie cake chocolate. </p>
                </div>
                <Link href="/kozmetika/kozmetikaProduct">
                    <Button type="primary">Pročitaj više</Button>
                </Link>
            </div>

            <div className="hero-image">
                <Image 
                    src={BannerImage}
                    alt='BannerImage'
                    quality={100}
                />
            </div>
        </div>
      ) : null}

      {/* Extra Extra Large - black */}
      {screenWidth > xxl ? (
        <div className='hero-banner'>
            <div className="hero-content-title">
                <div className='title-text'>
                <h1>Ljepota iz prirode <br /> ima novi izgled</h1>
                <p>Marzipan caramels brownie jelly beans bear claw jelly-o shortbread macaroon candy canes. Macaroon donut biscuit brownie cake chocolate. </p>
                </div>
                <Link href="/kozmetika/kozmetikaProduct">
                    <Button type="primary">Pročitaj više</Button>
                </Link>
            </div>

            <div className="hero-image">
                <Image 
                src={BannerImage}
                alt='BannerImage'
                quality={100}
                />
            </div>
        </div>
      ) : null}
    </>
  )
}
