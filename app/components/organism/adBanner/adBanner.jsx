import React from 'react'
import "./_adBanner.scss";

import Image from 'next/image'
import Link from 'next/link'
import Button from "../../atoms/button/Button";
import { Logos, Social, User, Illustrations } from "../../../utilities/images.js";

export default function AdBanner() {
  return (
    <section className="ad-banner gooey-background ">
        <div className="product-card-details-container">
            <div className="productCardDetails">
                <h4>Ljekovite kreme</h4>
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
        <div className="productCardImageContainer">
            <div className="productCardImage">
                <Image 
                    src={Social.tea_cover}
                    alt='image'
                    quality={100}
                />
            </div>
        </div>
    </section>
  )
}
