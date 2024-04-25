"use client"
import { useRef } from 'react';
import Loading from '../loading';
import Image from 'next/image';
import './_style.scss';
import { Icon } from '../utilities/images.js';

import Input from '../components/molecules/input/input';
import TextBox from '../components/molecules/textbox/textbox';
import FormContainer from '../components/organism/form/form'

export default function Contact() {

    return (
      <div className='contact-page'>
        <main className='contact-page-container'>
          
          <div className="contact-container col-10-sm col-8-md col-5-lg">
            
          {/* Title */}
          <section className="main-title col-10-sm col-10-md col-10-lg">
            <span>
              <h3 className='title-gooey'>Kontakt</h3>
            </span>
            <p>Shortbread dragée wafer cupcake ice cream cookie pie. Apple pie gummies pudding wafer pastry liquorice. Wafer tootsie roll cupcake ice cream liquorice. Tiramisu cupcake marshmallow halvah pastry sugar plum ice cream. </p>
          </section>
            
            
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
        
        </main>
      </div>
    )
  }