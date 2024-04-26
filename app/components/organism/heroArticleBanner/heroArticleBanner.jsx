import React from 'react'
import "./_heroArticleBanner.scss";

import Image from 'next/image'
import Link from 'next/link'
import Button from "../../atoms/button/Button";

import SlikaCover from '../../../assets/image/caj-blog.jpg'


export default function HeroArticleBanner() {
  return (
    <section className="hero-article-banner">
        <div className='hero-article-banner-container'>
            <div className="content-container">
                <div className="productCardDetails">
                    <span>
                        <h4 className='title-gooey'>Ljekovite kreme od Dr Hertzega</h4>
                    </span>
                    <p>Marzipan caramels brownie jelly beans bear claw jelly-o shortbread macaroon candy canes. Macaroon donut biscuit brownie cake chocolate. Toffee wafer cookie cupcake cotton candy jelly-o tiramisu sweet pastry.</p>
                    
                    <div className="table">
                        <ul>
                            <li><p>Povijesno podrijetlo</p></li>
                            <li><p>Kina</p></li>
                        </ul>
                        <ul>
                            <li><p>Koristan kod</p></li>
                            <li><p>Ljekoviti sastojci, kulinarstvo, malarija, magična biljka</p></li>
                        </ul>
                    </div>

                </div>
                <Link href="/blog">
                    <Button type="primary">Saznaj Više</Button>
                </Link>
            </div>
            <div className="image-container">
                <Image 
                    src={SlikaCover}
                    alt='image'
                    quality={100}
                />
            </div>
        </div>
    </section>
  )
}
