"use client"

import React from 'react'
import './_heroCosmetics.scss'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../../atoms/button/Button';
import useWindowResize from "../../../utilities/useWindowResize";
import BannerImage from '../../../assets/image/hero-image-cosmetics.png'

export default function HeroCosmetics() {
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
      {screenWidth > xxs &&  screenWidth <= sm ? (
        <div className='hero-banner gooey-background '>
            <div className="hero-content-title">
                <div className='title-text'>
                    <h1>Prirodna kozmetika <br /> ima novu formulu.</h1>
                    <p>Marzipan caramels brownie jelly beans bear claw jelly-o shortbread macaroon candy canes.</p>
                </div>
                <Link href="/kozmetika/kozmetikaProduct">
                    <Button type="primary">Pročitaj više</Button>
                </Link>
            </div>
        </div>
      ) : null}

      {/* Medium Purple*/}
      {screenWidth > sm &&  screenWidth <= md ? (
        <div className='hero-banner gooey-background '>
            <div className="hero-content-title">
                <div className='title-text'>
                    <h1>Prirodna kozmetika <br /> ima novu formulu.</h1>
                    <p>Marzipan caramels brownie jelly beans bear claw jelly-o shortbread macaroon candy canes.</p>
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
        <div className='hero-banner gooey-background '>
            <div className="hero-content-title">
                <div className='title-text'>
                    <h1>Prirodna kozmetika <br /> ima novu formulu.</h1>
                    <p>Marzipan caramels brownie jelly beans bear claw jelly-o shortbread macaroon candy canes.</p>
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
        <div className='hero-banner gooey-background '>
            <div className="hero-content-title">
                <div className='title-text'>
                    <h1>Prirodna kozmetika <br /> ima novu formulu.</h1>
                    <p>Marzipan caramels brownie jelly beans bear claw jelly-o shortbread macaroon candy canes.</p>
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
