"use client"
import { useRef } from 'react';
import Loading from '../loading';
import Image from 'next/image';
import './_style.scss';
import { Icon } from '../utilities/images.js';

import Input from '../components/molecules/input/input';
import TextBox from '../components/molecules/textbox/textbox';
import FormContainer from '../components/organism/form/form'
import Footer from '../components/organism/footer/footer';


export default function Contact() {

    return (
      <div className='contact-page'>
        <main className='contact-page-container'>
          
          <div className="contact-container col-10-sm col-8-md col-5-lg">
            
          {/* Title */}
          <section className="main-title col-10-sm col-10-md col-10-lg">
            <span className='blog-text-container'>
              <h3 className='title-gooey'>Kontakt</h3>
            </span>
            {/* Filter: https://css-tricks.com/gooey-effect/ */}
            <svg className="gooey-svg" width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
              <defs>
                <filter id="title-gooey">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />    
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="title-gooey" />
                  <feComposite in="SourceGraphic" in2="title-gooey" operator="atop"/>
                </filter>
              </defs>
            </svg>
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
        <Footer 
            color="primary-800"
          />
      </div>
    )
  }