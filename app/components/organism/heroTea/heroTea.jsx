"use client"

import React from 'react'
import './_heroTea.scss'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../../atoms/button/Button';
import useWindowResize from "../../../utilities/useWindowResize";
import { Logos, Social, User, Illustrations } from "../../../utilities/images.js";

export default function HeroTea() {
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
                <h1>Uživajte u zdravlju  sa <br /> Slatkim Pelinom </h1>
                <p>Opustite se uz ljekoviti čaj Slatki Pelin, savršeni saveznik za zdravlje i smanjenje stresa.</p>
                </div>
                <Link href="./kontakt">
                    <Button type="primary">Naručite sada</Button>
                </Link>
            </div>
        </div>
      ) : null}

      {/* Medium Purple*/}
      {screenWidth > sm &&  screenWidth <= md ? (
        <div className='hero-banner gooey-background '>
            <div className="hero-content-title">
                <div className='title-text'>
                <h1>Ljepota iz prirode <br /> ima novi izgled</h1>
                <p>Marzipan caramels brownie jelly beans bear claw jelly-o shortbread macaroon candy canes.</p>
                </div>
                <Link href="/kozmetika/kozmetikaProduct">
                    <Button type="primary">Pročitaj više</Button>
                </Link>
            </div>

            <div className="hero-image">
                <Image 
                    src={Social.tea_banner_image}
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
                    <h1>Uživajte u zdravlju  sa <br /> Slatkim Pelinom </h1>
                    <p>Opustite se uz ljekoviti čaj Slatki Pelin, savršeni saveznik za zdravlje i smanjenje stresa.</p>
                </div>
                <Link href="./kontakt">
                    <Button type="primary">Naručite sada</Button>
                </Link>
            </div>

            <div className="hero-image">
                <Image 
                    src={Social.tea_banner_image}
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
                    <h1>Uživajte u zdravlju  sa <br /> Slatkim Pelinom </h1>
                    <p>Opustite se uz ljekoviti čaj Slatki Pelin, savršeni saveznik za zdravlje i smanjenje stresa.</p>
                </div>
                <Link href="./kontakt">
                    <Button type="primary">Naručite sada</Button>
                </Link>
            </div>

            <div className="hero-image">
                <Image 
                src={Social.tea_banner_image}
                alt='BannerImage'
                quality={100}
                />
            </div>
        </div>
      ) : null}
    </>
  )
}
