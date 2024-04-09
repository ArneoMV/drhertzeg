import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import "./_followSocialRed.scss";

import Facebook from '../../../assets/icon/socialLogo/Facebook-fill.svg'
import Instagram from '../../../assets/icon/socialLogo/Instagram-fill.svg'
import Linkedin from '../../../assets/icon/socialLogo/Linkedin-fill.svg'
import TikTok from '../../../assets/icon/socialLogo/TikTok-fill.svg'

import Social1 from '../../../assets/image/social/Image1.png'
import Social2 from '../../../assets/image/social/Image2.png'
import Social3 from '../../../assets/image/social/Image3.png'
import Social4 from '../../../assets/image/social/Image4.png'
  
export default function FollowSocialRed() {

    return (
        <section className="follow-social">
            <div className="followSocialContainer">
                <div className="title-social">
                    <h4>Pratite nas na društvenim mrezama</h4>
                    <div className="row">
                        <Image 
                            src={Facebook}
                            alt='facebook'
                            width={32}
                            quality={100}
                        />
                        <Image 
                            src={Instagram}
                            alt='instagram'
                            width={32}
                            quality={100}
                        />
                        <Image 
                            src={TikTok}
                            alt='tiktok'
                            width={32}
                            quality={100}
                        />
                        <Image 
                            src={Linkedin}
                            alt='linkedin'
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
                        alt='Social1'
                        quality={100}
                    />
                    <Image 
                        src={Social2}
                        alt='Social1'
                        quality={100}
                    />
                    <Image 
                        src={Social3}
                        alt='Social1'
                        quality={100}
                    />
                    <Image 
                        src={Social4}
                        alt='Social1'
                        quality={100}
                    />
                </div> 
            </div>
        </section>
    )
}
