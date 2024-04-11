
import { notFound } from "next/navigation"
import Image from 'next/image'

import '../../styles/pages/_productPage.scss';

import OtherProductCard from '../../components/organism/otherProductCard/OtherProductCard'

export const dynamicParams = true

export async function generateStaticParams() {
  const res = await fetch('http://localhost:4001/cajevi')

  const cajevi = await res.json()

  return cajevi.map((caj) => ({
    id: caj.cajId
  }))
}


async function getCaj(id) {
  // imitate delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  const res = await fetch('http://localhost:4001/cajevi/' + id, {
    next: {
      revalidate: 60
    }
  })
  
  if (!res.ok) {
    notFound()
  }

  return res.json()
}


export default async function CajDetails({ params }) {

  const caj = await getCaj(params.cajId)

  return (
    <main>
      <div className="productContainer">
        <div className="productImage">
          <Image 
            src={caj.image}
            alt='image'
            quality={100}
            width={100}
            height={100}
          />
        </div>
        <div className="productDetails">
          <h4>{caj.title}</h4>
          <p>{caj.body}</p>
          <div className="productDetailsList">
            {/* Sastojci */}
            <div className="row">
              <div className="column">
                <h6>Sastojci:</h6>
              </div>
              <div className="column">
                <p>{caj.sastojci}</p>
              </div>
            </div>
            {/* Kolicina */}
            <div className="row">
              <div className="column">
                <h6>Kolicina:</h6>
              </div>
              <div className="column">
                <p>{caj.kolicina}</p>
              </div>
            </div>
            {/* Nacin uporabe */}
            <div className="row">
              <div className="column">
                <h6>Nacin uporabe:</h6>
              </div>
              <div className="column">
                <p>{caj.nacinUporabe}</p>
              </div>
            </div>
            {/* Pomaze kod */}
            <div className="row">
              <div className="column">
                <h6>Pomaze kod:</h6>
              </div>
              <div className="column">
                <p>{caj.pomaze}</p>
              </div>
            </div>
            {/* Ekoloska proizvodnja */}
            <div className="row">
              <div className="column">
                <h6>Ekoloska proizvodnja:</h6>
              </div>
              <div className="column">
                <p>{caj.certifikat}</p>
              </div>
            </div>
            {/* Alergije */}
            <div className="row">
              <div className="column">
                <h6>Alergije:</h6>
              </div>
              <div className="column">
                <p>{caj.alergije}</p>
              </div>
            </div>
            {/* Upute */}
            <div className="row">
              <div className="column">
                <h6>Upute za pohranu</h6>
              </div>
              <div className="column">
                <p>{caj.pohrana}</p>
              </div>
            </div>
            {/* Sastojci */}
            <div className="row">
              <div className="column">
                <h6>Zemlja podrijetla</h6>
              </div>
              <div className="column">
                <p>{caj.podrijetlo}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="otherProductContainer">
        <h5>Ostali proizvodi</h5>
        <div className="row">
          <OtherProductCard
            productDetailsTitle="Smokvin List"
            productDetailsKolicina="50g"
            productDetailsImageURL="/images/cajBiljka/cajBiljka_1.png"
            productDetailsImageAlt="Smokvin List"
            productDetailsURL="/cajevi/smokvinList"
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
  )
}
