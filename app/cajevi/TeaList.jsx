import Link from 'next/link'

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
      <>
        {cajevi.map((caj) => (
          <div key={caj.id} className="card my-5">
            <Link href={`/cajevi/${caj.id} `}>
                <h3>{caj.title}</h3>
                <p>{caj.body.slice(0, 200)}...</p>
            </Link>
          </div>
        ))}
        {cajevi.length === 0 && (
          <p className="text-center">There are no open teas, yay!</p>
        )}
      </>
    )
  }