import Image from 'next/image'
import Link from 'next/link'
import "./_style.scss";
import Chip from "../components/chip/Chip";

import HeroImage from '../assets/image/CoverCaj.png'
import OtherProductCard from '../components/otherProductCard/OtherProductCard'


export default function ComplexDashboardPage() {
    return (
      <main className="productPage">
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
                <div className="titleWithChip">
                  <Chip text="cajevi" />
                  <h3>Zdravlje u šalici</h3>
                </div>
                <p>Marzipan caramels brownie jelly beans bear claw jelly-o shortbread macaroon candy canes. Macaroon donut biscuit brownie cake chocolate. Toffee wafer cookie cupcake cotton candy jelly-o tiramisu sweet pastry. </p>
              </div>
            </div>
          </div>
        </div>
        <div className="otherProductContainer">
        <div className="row">
            <OtherProductCard
              productDetailsTitle="Smokvin List"
              productDetailsKolicina="50g"
              productDetailsImageURL="/images/cajBiljka/cajBiljka_1.png"
              productDetailsImageAlt="Smokvin List"
              productDetailsURL="/productCard"
            />
            <OtherProductCard
              productDetailsTitle="Slatki pelin"
              productDetailsKolicina="50g"
              productDetailsImageURL="/images/cajBiljka/cajBiljka_2.png"
              productDetailsImageAlt="Slatki pelin"
              productDetailsURL="/cajevi/2"
            />
            <OtherProductCard
              productDetailsTitle="Energija jutra"
              productDetailsKolicina="50g"
              productDetailsImageURL="/images/cajBiljka/cajBiljka_3.png"
              productDetailsImageAlt="Energija jutra"
              productDetailsURL="/cajevi/3"
            />
            <OtherProductCard
              productDetailsTitle="Detox čaj"
              productDetailsKolicina="50g"
              productDetailsImageURL="/images/cajBiljka/cajBiljka_4.png"
              productDetailsImageAlt="Detox čaj"
              productDetailsURL="/cajevi/4"
            />
            <OtherProductCard
              productDetailsTitle="Imuno čaj"
              productDetailsKolicina="50g"
              productDetailsImageURL="/images/cajBiljka/cajBiljka_5.png"
              productDetailsImageAlt="Imuno čaj"
              productDetailsURL="/cajevi/5"
            />
          </div>
        </div>
      </main>

  );
}