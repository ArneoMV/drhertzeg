import { Suspense } from "react";
import Image from 'next/image'
import Link from 'next/link'
import Chip from "../components/chip/Chip";

import HeroImage from '../assets/image/CoverCaj.png'

import TeaList from "./TeaList";
import Loading from "../loading";
import "./_style.scss";

export default function Caj() {
    return (
      <main className="teas">


        <div className="heroContainer">
          
          <div className="heroAsset">
            <div className="heroAsset_inner">
              <div className="heroAsset_asset">
                <Image 
                  src={HeroImage}
                  alt='image'
                  quality={100}
                />
              </div>
            </div>
              
          </div>
          <div className="heroContent">
            <div className="heroContentInner">
              <div className="heroContent_heading">
                <div className="column">
                  <Chip text="cajevi" />
                  <h3>Zdravlje u šalici</h3>
                </div>
                <p>Marzipan caramels brownie jelly beans bear claw jelly-o shortbread macaroon candy canes. Macaroon donut biscuit brownie cake chocolate. Toffee wafer cookie cupcake cotton candy jelly-o tiramisu sweet pastry. </p>
              </div>
                
            </div>
          </div>
        </div>


        <Suspense fallback={<Loading />}>
          <TeaList />
        </Suspense>
        
      </main>
    )
}
