import React from 'react'
import { Logos, Wawe, Teas, Cosmetics, Social, Blog } from "../../../utilities/images.js";

import Image from 'next/image';
import Link from 'next/link';
import Button from "../../atoms/button/Button";

import "./_heroArticleBanner.scss";


export default function HeroArticleBanner() {
  return (
    <section className="hero-article-banner">
        <div className='hero-article-banner-container'>
            <div className="content-container">
                <div className="productCardDetails">
                    <span>
                        <h4 className='title-gooey'>Ljekovite kreme</h4>
                    </span>
                    <p>Ljekovite kreme koriste prirodne i bioaktivne sastojke za njegu i regeneraciju kože. Ove kreme pomažu u liječenju raznih kožnih problema i održavanju zdravog izgleda kože.</p>
                    
                    <div className="table">
                        <ul>
                            <li><p>Povijesno podrijetlo</p></li>
                            <li><p>Egipat, Grčka i Rim</p></li>
                        </ul>
                        <ul>
                            <li><p>Koristan kod</p></li>
                            <li><p>Suha i oštećena koža, Upale i iritacije, Zacjeljivanje rana i ožiljaka, Starenje kože</p></li>
                        </ul>
                    </div>

                </div>
                <Link href="/blog/ljekoviteKreme">
                    <Button type="primary">Saznaj Više</Button>
                </Link>
            </div>
            <div className="image-container">
                <Image 
                    src={Social.cover_caj}
                    alt='image'
                    quality={100}
                />
            </div>
        </div>
    </section>
  )
}
