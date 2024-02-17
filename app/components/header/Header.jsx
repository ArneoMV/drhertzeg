import MobileNav from "./MobileNav";
import Navbar from "./navbar/Navbar";
import Link from 'next/link'
import Image from 'next/image'
import './_header.scss'
import Logo from '../../assets/Logo.svg'

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link href="/" className="logo">
          <Image 
            src={Logo}
            alt='logo'
            width={52}
            quality={100}
            />
          Dr Hertzeg
        </Link>

        {/* for large screens */}
        <Navbar />

        {/* for small screens */}
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;