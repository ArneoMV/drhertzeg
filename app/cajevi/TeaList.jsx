import Link from 'next/link'
import Image from 'next/image'

async function getCajevi() {
    // imitate delay
    await new Promise(resolve => setTimeout(resolve, 3000))
    const res = await fetch('http://localhost:4001/cajevi', {
      next: {
        revalidate: 0 // use 0 to opt out of using cache
      }
    })
    return res.json()
  }
  
  export default async function TeaList() {
    const cajevi = await getCajevi()
    return (
      <div className='productList' >
        <div className="productListContainer">
          {cajevi.map((caj) => (
              <Link 
                key={caj.id} 
                href={`/cajevi/${caj.id} `} 
                className="productCard">
                <Image 
                  src={caj.image}
                  alt='image'
                  quality={100}
                  width={150}
                  height={300}
                />
                <div className="productCardInfo">
                  <h4>{caj.title}</h4>
                  <p>{caj.certifikat}</p>
                  <p>{caj.kolicina}</p>
                </div>
                
              </Link>
          ))}
        </div>

        {cajevi.length === 0 && (
          <p className="text-center">There are no open teas, yay!</p>
        )}
      </div>
    )
  }