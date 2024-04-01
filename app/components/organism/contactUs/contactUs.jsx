import React, { useRef } from 'react';

import emailjs from '@emailjs/browser';
import './_contactUs.scss'


export const ContactUs = () => {
  const form = useRef();

  // const serviceId = process.env.EMAIL_SERVICE_ID;
  // const templateId = process.env.EMAIL_TEMPLATE_ID;
  // const publicKey = process.env.EMAIL_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm("service_de8qf6q", "template_ou869tk", form.current, {
      publicKey: "14NOzHfHQBPX-kWX4",
    })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
};

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <button  type="submit" value="Send">Send</button>
    </form>
  );
};