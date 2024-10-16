"use client"
import React, { useState, useRef } from 'react';
import './_hero.scss'

import Image from 'next/image';
import Link from 'next/link';
import ButtonIcon from '../../atoms/buttonIcon/buttonIcon.jsx';
import Button from '../../atoms/button/Button.jsx';
import PopularProduct from '../../molecules/popular-product/PopularProduct';
import { Logos, Social, User, Illustrations } from "../../../utilities/images.js";
import CardBlog from '../cardBlog/cardBlog.jsx';
import useWindowResize from '../../../utilities/useWindowResize.js'

import productsCaj from '../../../data/productCaj.js';
import productCosmetics from '../../../data/productCosmetics.js';


export default function Hero() {

    // Fetch the product from the productsCaj array
    const productCajSlatkiPelin = productsCaj.find(p => p.id === "CajSlatkiPelin");
    // Fetch the product from the productCosmetics array
    const productOil = productCosmetics.find(p => p.id === "CareAndMassageOil");
    const productSerum = productCosmetics.find(p => p.id === "SerumOdSmilja");



    // resize 
    const { screenWidth, screenHeight } = useWindowResize();
    const xxs = '0'; //PINK
    const xs = '600'; // GOLD
    const sm = '840'; // RED
    const md = '960'; // PURPLE
    const lg = '1280'; // BLUE
    const xl = '1440'; // BROWN
    const xxl = '1600'; // BLACK


    const EkoCajSlatkiPelin = {
        imageSrc: Social.hero_product_1,
        name: productCajSlatkiPelin.naziv,
        link: productCajSlatkiPelin.link,
        price: productCajSlatkiPelin.cijena
    };
    const CareAndMassageOil = {
        imageSrc: Social.hero_product_2,
        name: productOil.naziv,
        link: productOil.link,
        price: productOil.cijena
    };
    const SerumOdSmlja = {
        imageSrc: Social.hero_product_3,
        name: productSerum.naziv,
        link: productSerum.link,
        price: productSerum.cijena
    };

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
                            <PopularProduct product={EkoCajSlatkiPelin} />
                            <PopularProduct product={CareAndMassageOil} />
                            <PopularProduct product={SerumOdSmlja} />
                        </div>
                        <Link href="/kozmetika">
                            <Button type="primary">Ostali proizvodi</Button>
                        </Link>
                    </div>
                    {/* Image */}
                    <div className="hero-image-container">
                        <Image
                            src={Social.hero_product_image_1}
                            alt="kozmetikaProduct"
                            quality={100}
                        />
                    </div>
                </div>
            </div>
            <div className="illustrations">
                <Image 
                    src={Illustrations.biljka_1}
                    alt='biljka ilustracija'
                    quality={100}
                    className='ilustracija_1'
                />
                <Image 
                    src={Illustrations.biljka_2}
                    alt='biljka ilustracija'
                    quality={100}
                    className='ilustracija_2'
                />
                <Image 
                    src={Illustrations.biljka_3}
                    alt='biljka ilustracija'
                    quality={100}
                    className='ilustracija_3'
                />
                <Image 
                    src={Illustrations.biljka_4}
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
                            <PopularProduct product={EkoCajSlatkiPelin} />
                            <PopularProduct product={CareAndMassageOil} />
                        </div>
                    </div>
                    {/* Image */}
                    <div className="hero-image-container">
                        <Image
                            src={Social.hero_product_image_1}
                            alt="kozmetikaProduct"
                            quality={100}
                        />
                    </div>
                </div>
            </div>
            <div className="illustrations">
                <Image 
                    src={Illustrations.biljka_1}
                    alt='biljka ilustracija'
                    quality={100}
                    className='ilustracija_1'
                />
                <Image 
                    src={Illustrations.biljka_2}
                    alt='biljka ilustracija'
                    quality={100}
                    className='ilustracija_2'
                />
                <Image 
                    src={Illustrations.biljka_3}
                    alt='biljka ilustracija'
                    quality={100}
                    className='ilustracija_3'
                />
                <Image 
                    src={Illustrations.biljka_4}
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
                            <PopularProduct product={EkoCajSlatkiPelin} />
                            <PopularProduct product={CareAndMassageOil} />
                        </div>

                    </div>

                    {/* Image */}
                    <div className="hero-image-container">
                        <Image
                            src={Social.hero_product_image_1}
                            alt="kozmetikaProduct"
                            quality={100}
                        />
                    </div>

                </div>
            </div>
            <div className="illustrations">
                <Image 
                    src={Illustrations.biljka_1}
                    alt='biljka ilustracija'
                    quality={100}
                    className='ilustracija_1'
                />
                <Image 
                    src={Illustrations.biljka_2}
                    alt='biljka ilustracija'
                    quality={100}
                    className='ilustracija_2'
                />
                <Image 
                    src={Illustrations.biljka_3}
                    alt='biljka ilustracija'
                    quality={100}
                    className='ilustracija_3'
                />
                <Image 
                    src={Illustrations.biljka_3}
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
                            <PopularProduct product={EkoCajSlatkiPelin} />
                            <PopularProduct product={CareAndMassageOil} />
                        </div>
                        <Link href="/kozmetika">
                            <Button type="primary">Ostali proizvodi</Button>
                        </Link>
                    </div>

                    {/* Image */}
                    <div className="hero-image-container">
                        <Image
                            src={Social.hero_product_image_1}
                            alt="kozmetikaProduct"
                            quality={100}
                        />
                    </div>

                    {/* Review */}
                    <div className="hero-review">
                        <div className="review-text">
                            <p>Neizostavan proizvod za ljetne večeri!</p>
                            <p>Dr Hertzeg Calming Gel brzo smiruje iritacije od komaraca i buba, savršeno za bezbrižno ljeto.</p>
                        </div>
                        <div className="user-info-row">
                            <Image
                                src={User.user_review_01}
                                alt="User"
                                quality={100}
                                width={150}
                                height={150}
                            />
                            <div className="column">
                                <p>Ana Marić</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="illustrations">
                <Image 
                    src={Illustrations.biljka_1}
                    alt='biljka ilustracija'
                    quality={100}
                    className='ilustracija_1'
                />
                <Image 
                    src={Illustrations.biljka_2}
                    alt='biljka ilustracija'
                    quality={100}
                    className='ilustracija_2'
                />
                <Image 
                    src={Illustrations.biljka_3}
                    alt='biljka ilustracija'
                    quality={100}
                    className='ilustracija_3'
                />
                <Image 
                    src={Illustrations.biljka_4}
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
