"use client"

import React from 'react'
import './_heroCosmetics.scss'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../../atoms/button/Button';
import useWindowResize from "../../../utilities/useWindowResize";
import { Logos, Social, User, Illustrations } from "../../../utilities/images.js";


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
                    <h1>Prirodna Ljepota i Njega</h1>
                    <p>Otkrijte tajne prirodne ljepote uz Dr Hertzeg kozmetiku. Naši proizvodi koriste moć biljnih ekstrakata i eteričnih ulja kako bi Vaša koža bila zdrava, hidratizirana i zaštićena.</p>
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
                    <h1>Prirodna Ljepota i Njega</h1>
                    <p>Otkrijte tajne prirodne ljepote uz Dr Hertzeg kozmetiku. Naši proizvodi koriste moć biljnih ekstrakata i eteričnih ulja kako bi Vaša koža bila zdrava, hidratizirana i zaštićena.</p>

                </div>
                <Link href="/kozmetika/kozmetikaProduct">
                    <Button type="primary">Saznajte više</Button>
                </Link>
            </div>

            <div className="hero-image">
                <Image 
                    src={Social.cosmetics_banner_image}
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
                    <h1>Prirodna Ljepota i Njega</h1>
                    <p>Otkrijte tajne prirodne ljepote uz Dr Hertzeg kozmetiku. Naši proizvodi koriste moć biljnih ekstrakata i eteričnih ulja kako bi Vaša koža bila zdrava, hidratizirana i zaštićena.</p>
                </div>
                <Link href="/kozmetika/kozmetikaProduct">
                    <Button type="primary">Saznajte Više</Button>
                </Link>
            </div>

            <div className="hero-image">
                <Image 
                    src={Social.cosmetics_banner_image}
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
                    <h1>Prirodna Ljepota i Njega</h1>
                    <p>Otkrijte tajne prirodne ljepote uz Dr Hertzeg kozmetiku. Naši proizvodi koriste moć biljnih ekstrakata i eteričnih ulja kako bi Vaša koža bila zdrava, hidratizirana i zaštićena.</p>
                </div>
                <Link href="/kozmetika/kozmetikaProduct">
                    <Button type="primary">Saznajte Više</Button>
                </Link>
            </div>

            <div className="hero-image">
                <Image 
                src={Social.cosmetics_banner_image}
                alt='BannerImage'
                quality={100}
                />
            </div>
        </div>
      ) : null}
    </>
  )
}
