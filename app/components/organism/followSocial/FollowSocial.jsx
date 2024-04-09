import React from 'react';
import Image from 'next/image';
import Facebook from '../../../assets/icon/socialLogo/Facebook-fill.svg';
import Instagram from '../../../assets/icon/socialLogo/Instagram-fill.svg';
import Linkedin from '../../../assets/icon/socialLogo/Linkedin-fill.svg';
import TikTok from '../../../assets/icon/socialLogo/TikTok-fill.svg';
import Social1 from '../../../assets/image/social/Image1.png';
import Social2 from '../../../assets/image/social/Image2.png';
import Social3 from '../../../assets/image/social/Image3.png';
import Social4 from '../../../assets/image/social/Image4.png';
import './_followSocial.scss'; // Importajte SCSS datoteku za stilove

const FollowSocial = ({ color }) => {
  let className = '';

  // Provjerite primljenu boju i postavite odgovarajuću klasu
  switch (color) {
    case 'primary':
      className = 'primary';
      break;
    case 'red':
      className = 'red';
      break;
    case 'green':
      className = 'green';
      break;
    case 'blue':
      className = 'blue';
      break;
    default:
      className = '';
  }

  return (
    <section className={`follow-social ${className}`}>
      <div className="followSocialContainer">
        <div className="title-social">
          <h4>Pratite nas na društvenim mrežama</h4>
          <div className="row">
            <Image
              src={Facebook}
              alt="facebook"
              width={32}
              quality={100}
            />
            <Image
              src={Instagram}
              alt="instagram"
              width={32}
              quality={100}
            />
            <Image
              src={TikTok}
              alt="tiktok"
              width={32}
              quality={100}
            />
            <Image
              src={Linkedin}
              alt="linkedin"
              width={32}
              quality={100}
            />
          </div>
        </div>
      </div>
      <div className="followSocialContainer">
        <div className="images-container">
          <Image
            src={Social1}
            alt="Social1"
            quality={100}
          />
          <Image
            src={Social2}
            alt="Social1"
            quality={100}
          />
          <Image
            src={Social3}
            alt="Social1"
            quality={100}
          />
          <Image
            src={Social4}
            alt="Social1"
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

export default FollowSocial;
