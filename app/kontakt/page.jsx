"use client"

import Loading from "../loading";
// import { Metadata } from "next";
import Image from 'next/image'
import "./_style.scss";
import "../styles/layout/_layout.scss";
import { IconImage } from "../utilities/images.js";
import Input from '../components/molecules/input/input';
import Button from '../components/atoms/button/button';
import TextBox from '../components/molecules/textbox/textbox';
// export const metadata = {
//   title: "Contact",
// };


export default function Contact() {
    return (
      <main className="contact">

        <div className="layout-main">
          <h1>Kontakt</h1>
          <div className="layout-main-container">
            <div className="contact-container col-10-sm col-8-md col-5-lg">
              <div className="flex">

                <div className="contact-icon">
                  <div className="icon-title">
                    <div className="icon">
                    <Image 
                        src={IconImage.geoAlt}
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
                        src={IconImage.envelope}
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
                          src={IconImage.telephone}
                          alt='geoAlt'
                          quality={100}
                      />
                    </div>
                  </div>
                  <p>+385 95 123 456</p>
                </div>

              </div>
              <p>Shortbread dragée wafer cupcake ice cream cookie pie. Apple pie gummies pudding wafer pastry liquorice. Wafer tootsie roll cupcake ice cream liquorice. Tiramisu cupcake marshmallow halvah pastry sugar plum ice cream. </p>
            </div>

            <form action="https://formspree.io/your_email_here" method="POST" className="col-10-sm col-8-md col-5-lg">
              <div className="column">
                <Input label="Email" placeholder="Unesite email" type="email" name="_replyto" />
                <Input label="Ime i prezime" placeholder="Unesite svoje ime" type="text" name="name" />
                <TextBox label="Vaša poruka" placeholder="Kako Vam možemo pomoći" name="message" />
              </div>
              <Button type="submit">Pošalji</Button>
            </form>

          </div>
        </div>

      </main>
    )
  }