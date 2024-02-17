import Link from 'next/link'

async function getTickets() {

    // imitate delay
    await new Promise(resolve => setTimeout(resolve, 3000))
    

    const res = await fetch('http://localhost:4002/Cajevi', {
      next: {
        revalidate: 0 // use 0 to opt out of using cache
      }
    })
  
    return res.json()
  }
  
  export default async function TicketList() {
    const teas = await getTickets()
  
    return (
      <>
        {teas.map((tea) => (
          <div key={tea.id} className="card my-5">
            <Link href={`/caj/${tea.id} `}>
                <h3>{tea.title}</h3>
                <p>{tea.body.slice(0, 200)}...</p>
                <div className={`pill ${tea.priority}`}>
                {tea.priority} priority
                </div>
            </Link>

          </div>
        ))}
        {teas.length === 0 && (
          <p className="text-center">There are no open teas, yay!</p>
        )}
      </>
    )
  }