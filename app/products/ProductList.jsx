import Link from 'next/link'

async function getTickets() {

    // imitate delay
    await new Promise(resolve => setTimeout(resolve, 3000))
    

    const res = await fetch('http://localhost:4000/products', {
      next: {
        revalidate: 0 // use 0 to opt out of using cache
      }
    })
  
    return res.json()
  }
  
  export default async function TicketList() {
    const products = await getTickets()
  
    return (
      <>
        {products.map((product) => (
          <div key={product.id} className="card my-5">
            <Link href={`/products/${product.id} `}>
                <h3>{product.title}</h3>
                <p>{product.body.slice(0, 200)}...</p>
                <div className={`pill ${product.priority}`}>
                {product.priority} priority
                </div>
            </Link>

          </div>
        ))}
        {products.length === 0 && (
          <p className="text-center">There are no open products, yay!</p>
        )}
      </>
    )
  }