"use client"
import React, { useRef } from 'react';
import { useRouter } from 'next/navigation';

import emailjs from '@emailjs/browser';

// import { Field, Form, Formik, FormikProps } from 'formik';
import { useFormik } from "formik";
import * as Yup from "yup";

import './_form.scss'
import Checkbox from '../../atoms/checkbox/checkbox';

export default function FormContainer({className}) {
  const router = useRouter();
  const form = useRef();

  // Formik logic
  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      message: "",
      terms: "",
    },

    // Validation
    validationSchema: Yup.object({
      user_name: Yup.string()
        .max(20, "Ime treba biti manje od 20 znakova.")
        .required("Ime i prezime su obavezni"),
      user_email: Yup.string()
        .email("Pogrešna email adresa")
        .required("Email je obavezan"),
      message: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Poruka je obavezna"),
      terms: Yup.boolean().oneOf([true], "Morate prihvatiti uvjete usluge"),
    }),

    // submit form
    onSubmit: (values) => {
      console.log("form submitted");
      console.log(values);
      emailjs
        .sendForm("service_de8qf6q", "template_ou869tk", form.current, {
          publicKey: "14NOzHfHQBPX-kWX4",
        })
        .then(
          () => {
            console.log('SUCCESS!');
            router.push('/success');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }, 
  });

  const handleCheckboxChange = (checked) => {
    // Postavite logiku validacije ako je potrebno
    // Pozovite handleChange i setFieldTouched iz Formik-a
    formik.setFieldValue("terms", checked); // Postavite vrijednost checkboxa u Formik vrijednost
    formik.setFieldTouched("terms", true); // Postavite da je polje dirnuto kako bi se prikazale validacijske poruke
  };

  return (
    <form
      className={`form ${className}`}
      onSubmit={formik.handleSubmit}
      ref={form}
    >
      <h4>Za više informacija pošaljite poruku</h4>

      <div className="content-container">

        {/* Name input field */}
        <div className="input-field">
          <label
            htmlFor="user_name"
            className={`text-neutral-800 ${
              formik.submitCount > 0 && formik.touched.user_name && formik.errors.user_name
                ? "text-red-400"
                : ""
            } `}
          >
            {formik.submitCount > 0 && formik.touched.user_name && formik.errors.user_name
              ? formik.errors.user_name
              : "Ime i prezime"}
          </label>

          <input
            type="text"
            name="user_name"
            placeholder="Enter your name"
            onChange={formik.handleChange}
            value={formik.values.user_name}
            onBlur={formik.handleBlur}
          />
        </div>

        {/* Email input field */}
        <div className="input-field">
        <label
          htmlFor="user_email"
          className={`text-neutral-800 ${
            formik.submitCount > 0 && formik.touched.user_email && formik.errors.user_email
              ? "text-red-400"
              : ""
          }`}
        >
          {formik.submitCount > 0 && formik.touched.user_email && formik.errors.user_email
            ? formik.errors.user_email
            : "Email"}
        </label>


          <input
            type="email"
            name="user_email"
            placeholder="Enter your email address"
            onChange={formik.handleChange}
            value={formik.values.user_email}
            onBlur={formik.handleBlur}
          />
        </div>

        {/* Textbox */}
        <div className="input-field">
        <label
            htmlFor="message"
            className={`text-neutral-800 ${
              formik.submitCount > 0 && formik.touched.message && formik.errors.message
                ? "text-red-400"
                : ""
            }`}
          >
            {formik.submitCount > 0 && formik.touched.message && formik.errors.message
              ? formik.errors.message
              : "Vaša poruka"}
          </label>
          <textarea
            name="message"
            // value={formik.values.message}
            onChange={(e) => formik.setFieldValue('message', e.target.value)}
            onBlur={formik.handleBlur}
            rows="4" 
            cols="50"
          />

          {/* <textarea
            type="textarea"
            name="message"
            value={formik.values.message}
            onBlur={formik.handleBlur}
            placeholder="Kako Vam možemo pomoći..."
            rows="4" cols="50"
          ></textarea> */}
        </div>
        
        {/* Terms of service*/}
        <div className='terms-container'>
          <div className="row">
            <Checkbox 
              checked={formik.values.terms}
              onChange={handleCheckboxChange}
            />
            <label
              htmlFor="terms"
              className={`text-neutral-800 ${
                formik.touched.terms && formik.errors.terms
                  ? "text-red-400"
                  : ""
              }`}
            >
              {formik.touched.terms && formik.errors.terms
                ? formik.errors.terms
                : "Terms of service"}
            </label>
          </div>
          <p>
            I agree to the Terms and Service that my data will be taken
            and sold.
          </p>
        </div>
        <button type="submit">Pošalji</button>
      </div>
    </form>
  );
}