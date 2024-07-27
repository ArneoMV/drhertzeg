import React from 'react';
import Image from 'next/image';
import { Logos, Social, User, Illustrations } from "../../../utilities/images.js";

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
              src={Logos.Facebook_fill}
              alt="Facebook logo"
              width={32}
              quality={100}
            />
            <Image
              src={Logos.Instagram_fill}
              alt="Instagram logo"
              width={32}
              quality={100}
            />
          </div>
        </div>
      </div>
      <div className="followSocialContainer">
        <div className="images-container">
          <Image
            src={Social.image_1}
            alt="Social1"
            quality={100}
          />
          <Image
            src={Social.image_2}
            alt="Social1"
            quality={100}
          />
          <Image
            src={Social.image_3}
            alt="Social1"
            quality={100}
          />
          <Image
            src={Social.image_4}
            alt="Social1"
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

export default FollowSocial;
