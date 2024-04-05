import React from 'react'
import "./_cosmeticsBanner.scss";

import Image from 'next/image'
import Link from 'next/link'
import Button from "../../atoms/button/Button";

import SlikaCover from '../../../assets/image/kozmetikaBlog.png'


export default function cosmeticsBanner() {
  return (
    <section className="productAdCard">
        <div className="productCardDetailsContainer">
            <div className="productCardDetails">
                <h4>Ljekovite kreme od Dr Hertzega</h4>
                <p>Marzipan caramels brownie jelly beans bear claw jelly-o shortbread macaroon candy canes. Macaroon donut biscuit brownie cake chocolate. Toffee wafer cookie cupcake cotton candy jelly-o tiramisu sweet pastry.</p>
                
                <div className="table">
                    <div className="list">
                        <div className="column">
                            <h6>Povijesno podrijetlo</h6>
                        </div>
                        <div className="column">
                            <p>Kina</p>
                        </div>
                    </div>
                    <div className="list">
                        <div className="column">
                            <h6>Koristan kod</h6>
                        </div>
                        <div className="column">
                        <p>Ljekoviti sastojci, kulinarstvo, malarija, magična biljka</p>
                        </div>
                    </div>
                </div>

            </div>
            <Link href="/blog">
                <Button type="secondary">Saznaj Više</Button>
            </Link>
        </div>
        <div className="productCardImageContainer">
            <div className="productCardImage">
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
