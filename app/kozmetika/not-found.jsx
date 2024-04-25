import Link from 'next/link'

export default function NotFound() {
  return (
    <main className='text-center'>
        <h2 className='text-3xl'>We hit a brick wall.</h2>
        <p>We coulkd not found the tea you were looking for.</p>
        <p>Go back to all <Link href="/cajevi">teas</Link></p>
        
    </main>
  )
}
