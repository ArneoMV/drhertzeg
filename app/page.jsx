import { Metadata } from 'next'

import Image from 'next/image'
import Link from 'next/link'
import './styles/_index.scss';


export const metadata = { 
  title: 'Homepage title',
  description: 'Homepage description',
}


// Homepage
export default function Page() {
  return (
      <main className='container'>
        <h2>Homepage</h2>

      </main>
  )
}
