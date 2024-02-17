import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../assets/Logo-white.svg'
import Facebook from '../../assets/icon/Facebook-fill.svg'
import Instagram from '../../assets/icon/Instagram-fill.svg'
import Linkedin from '../../assets/icon/Linkedin-fill.svg'
import TikTok from '../../assets/icon/TikTok-fill.svg'

import BABIO101 from '../../assets/image/BA-BIO-101.svg'
import Organic from '../../assets/image/Organic.svg'
import Natural from '../../assets/image/Natural.svg'


import './_footer.scss'

export default function Footer() {
  return (
    <footer>
      <div className="footerContainer">
        <div className="footerTop">
          <div className='column logo'>
            <Image 
                src={Logo}
                alt='Dr Hertzeg logo'
                width={70}
                quality={100}
              />
            <h2>Neki nas cool slogan</h2>
          </div>

          <nav className="row ">
            <div className="column">
              <h3>Brendovi</h3>
              <Link href="/cajevi">Cajevi</Link>
              <Link href="/kozmetika">Kozmetika</Link>
            </div>
            <div className="column">
              <h3>Info</h3>
              <Link href="/kontakt">Kontakt</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/faq">Cesta Pitanja</Link>
            </div>
            <div className="column">
              <h3>Ostalo</h3>
              <Link href="/certifikati">Certifikati</Link>
              <Link href="/uvijeti">Uvijeti kupovine</Link>
            </div>
          </nav>

          <div className='column social'>
            <p>Pratite nas</p>
            <div className="row">
              <Image 
                src={Facebook}
                alt='facebook'
                width={32}
                quality={100}
              />
              <Image 
                src={Instagram}
                alt='facebook'
                width={32}
                quality={100}
              />
              <Image 
                src={TikTok}
                alt='facebook'
                width={32}
                quality={100}
              />
              <Image 
                src={Linkedin}
                alt='facebook'
                width={32}
                quality={100}
              />
            </div>
          </div>
        </div>

        <div className="line"></div>

        <div className="footerBottom">
          <div className="row">
            <Image 
                src={Natural}
                alt='facebook'
                width={70}
                quality={100}
            />
            <Image 
                src={Organic}
                alt='facebook'
                width={70}
                quality={100}
            />
            <Image 
                src={BABIO101}
                alt='facebook'
                width={70}
                quality={100}
            />
          </div>
          <p>© COLLOID Ag d.o.o., 2024. All rights reserved.</p>
        </div>

      </div>
    </footer>
  )
}
