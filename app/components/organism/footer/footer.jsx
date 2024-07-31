
"use client"
import { Logos, Wawe, Icons, Teas, Cosmetics, Social, Blog } from "../../../utilities/images.js";

import Link from 'next/link';
import Image from 'next/image';
import './_footer.scss';



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footerTop">
          <div className='logo'>
            <Image 
                src={Logos.logo_white}
                alt='Logo'
                width={70}
                quality={100}
              />
            <h2>Za zdravlje koje zaslužujete</h2>
          </div>

          <div className='topNav'>
            <nav>
              <div className="nav-column">
                <h4>Brendovi</h4>
                <div className='column'>
                  <Link href="/cajevi">Cajevi</Link>
                  <Link href="/kozmetika">Kozmetika</Link>
                </div>
              </div>
              <div className="nav-column">
                <h4>Info</h4>
                <div className='column'>
                  <Link href="/kontakt">Kontakt</Link>
                  <Link href="/blog">Blog</Link>
                  <Link href="/faq">Cesta Pitanja</Link>
                  <Link href="/uvjetiKupovine">Uvijeti kupovine</Link>
                </div>
              </div>
            </nav>

            <div className='column social'>
              <p>Pratite nas</p>
              <div className="row">
                <Image 
                  src={Logos.Facebook_fill}
                  alt='facebook'
                  width={32}
                  quality={100}
                />
                <Image 
                  src={Logos.Instagram_fill}
                  alt='Instagram'
                  width={32}
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="line"></div>

        <div className="footerBottom">
          <div className="row">
            <Image 
                src={Logos.natural}
                alt='Natural'
                width={70}
                quality={100}
            />
            <Image 
                src={Logos.organic}
                alt='Organic'
                width={70}
                quality={100}
            />
            <Image 
                src={Logos.BA_BIO_101}
                alt='BABIO101'
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

export default Footer;
