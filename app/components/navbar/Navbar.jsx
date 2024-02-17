import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../assets/logo.png'
import HR from '../../assets/image/HR.png'
import './_navbar.scss'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className="navbar-left">

        <Link href="/">
          <div className="logo">
            <Image 
              src={Logo}
              alt='Dr Hertzeg logo'
              width={70}
              quality={100}
              placeholder='blur'
            />
            <h4>Dr Hertzeg</h4>
          </div>
        </Link>

        <div className="links">
          <Link href="/products">Proizvodi</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Kontakt</Link>
        </div>
      </div>
        
      <div className='language'>
        <Image 
          src={HR}
          alt='Hrvatski'
          quality={100}
          // placeholder='blur'
        />
        <p>HR</p>
      </div>
    </nav>
  )
}
