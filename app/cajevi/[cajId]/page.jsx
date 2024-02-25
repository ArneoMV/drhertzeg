import { notFound } from "next/navigation"
import Image from 'next/image'

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
        <nav>
            <h2>Caj details</h2>
        </nav>
        <div className="card">
            <h3>{caj.title}</h3>
            <p>{caj.body}</p>
            <Image 
              src={caj.image}
              alt='image'
              quality={100}
              width={100}
              height={100}
            />
        </div>
    </main>
  )
}
