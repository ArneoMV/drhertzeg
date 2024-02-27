import React from 'react'
import "./_bannerAddPelin.scss";

import Image from 'next/image'
import Link from 'next/link'
import Button from "..//button/Button";

import SlatkiPelinBiljka from '../../assets/image/SlatkiPelinBiljka.png'
import SalicaSlatkiPelin from '../../assets/image/SalicaSlatkiPelin.png'


export default function BannerAddPelin() {
  return (
    <section className="productAdCard">
        <div className="productCardDetailsContainer">
            <div className="productCardDetails">
                <h4>Slatki pelin</h4>
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
              <Button 
                className="primary" 
                type="iconRight" iconName="chevronCompactRightLight">
                Pročitaj više
              </Button>
            </Link>
        </div>
        <div className="productCardImageContainer">
            <div className="productCardImage">
                <Image 
                    src={SlatkiPelinBiljka}
                    alt='image'
                    quality={100}
                />
            </div>
            <Image 
                src={SalicaSlatkiPelin}
                alt='image'
                quality={100}
                className='productCardImageAbsolute'
            />
        </div>
    </section>
  )
}
