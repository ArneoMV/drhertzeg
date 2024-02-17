import Link from 'next/link'

async function getTickets() {

    // imitate delay
    await new Promise(resolve => setTimeout(resolve, 3000))
    

    const res = await fetch('http://localhost:4003/Kozmetika', {
      next: {
        revalidate: 0 // use 0 to opt out of using cache
      }
    })
  
    return res.json()
  }
  
  export default async function TicketList() {
    const cosmeticss = await getTickets()
  
    return (
      <>
        {cosmeticss.map((cosmetics) => (
          <div key={cosmetics.id} className="card my-5">
            <Link href={`/cosmetics/${cosmetics.id} `}>
                <h3>{cosmetics.title}</h3>
                <p>{cosmetics.body.slice(0, 200)}...</p>
                <div className={`pill ${cosmetics.priority}`}>
                {cosmetics.priority} priority
                </div>
            </Link>

          </div>
        ))}
        {cosmeticss.length === 0 && (
          <p className="text-center">There are no open cosmeticss, yay!</p>
        )}
      </>
    )
  }