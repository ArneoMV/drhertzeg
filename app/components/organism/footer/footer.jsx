import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../assets/logos/logo-white.svg';
import Facebook from '../../../../public/images/icon/socialLogo/Facebook-fill.svg';
import Instagram from '../../../../public/images/icon/socialLogo/Instagram-fill.svg';
import Linkedin from '../../../../public/images/icon/socialLogo/Linkedin-fill.svg';
import TikTok from '../../../../public/images/icon/socialLogo/TikTok-fill.svg';


import BABIO101 from '../../../assets/image/BA-BIO-101.svg';
import Organic from '../../../assets/image/Organic.svg';
import Natural from '../../../assets/image/Natural.svg';
import './_footer.scss';


const Footer = ({ color }) => {

  let className = '';

  // Provjerite primljenu boju i postavite odgovarajuću klasu
  switch (color) {
    case 'primary-200':
      className = 'primary-200';
    break;
    case 'primary-800':
      className = 'primary-800';
    break;
    case 'red-200':
      className = 'red-200';
    break;
    case 'red-300':
      className = 'red-300';
    break;
    case 'blue-200':
      className = 'blue-800';
    break;
    case 'blue-800':
        className = 'blue-800';
    break;
    default:
      className = '';
  }


  return (
    <footer className={`footer ${className}`}>
      <div className="footer-container">

        <div className="footerTop">
          <div className='logo'>
            <Image 
                src={Logo}
                alt='Dr Hertzeg logo'
                width={70}
                quality={100}
              />
            <h2>Neki nas cool slogan</h2>
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
                  src={Facebook}
                  alt='facebook'
                  width={32}
                  quality={100}
                />
                <Image 
                  src={Instagram}
                  alt='Instagram'
                  width={32}
                  quality={100}
                />
                <Image 
                  src={TikTok}
                  alt='TikTok'
                  width={32}
                  quality={100}
                />
                <Image 
                  src={Linkedin}
                  alt='Linkedin'
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
                src={Natural}
                alt='Natural'
                width={70}
                quality={100}
            />
            <Image 
                src={Organic}
                alt='Organic'
                width={70}
                quality={100}
            />
            <Image 
                src={BABIO101}
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