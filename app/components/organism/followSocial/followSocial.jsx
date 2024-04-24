import React from 'react';
import Image from 'next/image';

import Facebook from '../../../../public/images/icon/socialLogo/Facebook-fill.svg';
import Instagram from '../../../../public/images/icon/socialLogo/Instagram-fill.svg';
import Linkedin from '../../../../public/images/icon/socialLogo/Linkedin-fill.svg';
import TikTok from '../../../../public/images/icon/socialLogo/TikTok-fill.svg';
import Social1 from '../../../../public/images/image/social/Image1.png';
import Social2 from '../../../../public/images/image/social/Image2.png';
import Social3 from '../../../../public/images/image/social/Image3.png';
import Social4 from '../../../../public/images/image/social/Image4.png';
import './_followSocial.scss';

const FollowSocial = ({ color }) => {
  let className = '';

  // Provjerite primljenu boju i postavite odgovarajuću klasu
  switch (color) {
    case 'primary-200':
      className = 'primary-200';
      break;
    case 'primary-800':
      className = 'primary-800';
      break;
    case 'red':
      className = 'red-200';
      break;
    case 'green':
      className = 'green';
      break;
    case 'blue-200':
      className = 'blue-200';
      break;
      case 'blue-800':
        className = 'blue-800';
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
              alt="Facebook logo"
              width={32}
              quality={100}
            />
            <Image
              src={Instagram}
              alt="Instagram logo"
              width={32}
              quality={100}
            />
            <Image
              src={TikTok}
              alt="TikTok logo"
              width={32}
              quality={100}
            />
            <Image
              src={Linkedin}
              alt="Linkedin logo"
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
