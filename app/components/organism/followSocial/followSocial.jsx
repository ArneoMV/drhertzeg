import React from 'react';
import Image from 'next/image';
import { Logos, Social, User, Illustrations } from "../../../utilities/images.js";

import './_followSocial.scss';

const FollowSocial = () => {
  let className = '';

  return (
    <section className="follow-social">
      <div className="followSocialContainer">
        <div className="title-social">
          <h4>Pratite nas na društvenim mrežama</h4>
          <div className="row">
            <Image
              src={Logos.facebook}
              alt="Facebook logo"
              width={32}
              quality={100}
            />
            <Image
              src={Logos.instagram}
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
