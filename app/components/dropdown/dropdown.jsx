import Link from 'next/link'
import './_dropdown.scss'


export default function Dropdown() {
  return (
    <div className='flex flec-col dropdown'>
        <ul className='flex clex-col gap-4'>
            <li><Link href="/cajevi">Čajevi</Link></li>
            <li><Link href="/kozmetika">Kozmetika</Link></li>
        </ul>
    </div>
  )
}