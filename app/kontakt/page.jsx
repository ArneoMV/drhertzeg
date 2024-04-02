"use client"
import { useRef } from 'react';
import Loading from "../loading";
// import { Metadata } from "next";
import Image from 'next/image'
import "./_style.scss";
import "../styles/layout/_layout.scss";
import { Icon } from "../utilities/images.js";
// import { sendEmail } from "../utilities/sendEmail.jsx";

import Input from '../components/molecules/input/input';
import Button from '../components/atoms/button/button';
import TextBox from '../components/molecules/textbox/textbox';
import FormContainer from '../components/organism/form/form'
// import { ContactUs } from '../components/organism/contactUs/contactUs';

// export const metadata = {
//   title: "Contact",
// };


export default function Contact() {

    return (
      <main className="contact">

        <div className="layout-main">
          <div className="layout-main-container">
            <div className="contact-container col-10-sm col-8-md col-5-lg">
              <div className="page-title">
                <h1>Kontakt</h1>
              </div>
              <p>Shortbread dragée wafer cupcake ice cream cookie pie. Apple pie gummies pudding wafer pastry liquorice. Wafer tootsie roll cupcake ice cream liquorice. Tiramisu cupcake marshmallow halvah pastry sugar plum ice cream. </p>
              
              <div className="flex">
                <div className="contact-icon">
                  <div className="icon-title">
                    <div className="icon">
                    <Image 
                        src={Icon.geoAlt}
                        alt='geoAlt'
                        quality={100}
                    />
                    </div>
                  </div>
                  <p>Pantovčak 48,<br /> 10000 Zagreb</p>
                </div>
                <div className="contact-icon">
                  <div className="icon">
                    <Image 
                        src={Icon.envelope}
                        alt='geoAlt'
                        quality={100}
                    />
                  </div>
                  <p>info@colloidag.hr</p>
                </div>
                <div className="contact-icon">
                  <div className="icon">
                    <div className="icon">
                      <Image 
                          src={Icon.telephone}
                          alt='geoAlt'
                          quality={100}
                      />
                    </div>
                  </div>
                  <p>+385 95 123 456</p>
                </div>
              </div>
            </div>
            <FormContainer className="col-10-sm col-8-md col-5-lg"/>
          </div>
        </div>

      </main>
    )
  }