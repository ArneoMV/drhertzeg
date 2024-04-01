"use client"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from 'next/navigation'

import './_form.scss'

export default function Form() {
  const router = useRouter();
  const form = useRef();



  // Formik logic
  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      terms: "",
    },

    // Validation
    validationSchema: Yup.object({
      user_name: Yup.string()
        .max(20, "Name must be 20 characters or less.")
        .required("Name is required"),
        user_email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      terms: Yup.array().required("Terms of service must be checked"),
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

  return (
      <main className="form">
        <form
          onSubmit={formik.handleSubmit}
          ref={form}
        >
          <div>
            <h1>
              Let's get started
            </h1>
            <p>
              Join our E-learning platform today and unlock over 500+ courses
              and digital assets ready to download.
            </p>
            <div className="mt-6 ">
              {/* Name input field */}
              <div className="input-field">
                <label
                  htmlFor="name"
                  className={`text-neutral-800 ${
                    formik.touched.user_name && formik.errors.user_name
                      ? "text-red-400"
                      : ""
                  } `}
                >
                  {formik.touched.user_name && formik.errors.user_name
                    ? formik.errors.name
                    : "Name"}
                </label>
                <p className="text-sm font-latoBold text-red-400 "></p>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500 "
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
                  htmlFor="email"
                  className={`text-neutral-800 ${
                    formik.touched.user_email && formik.errors.user_email
                      ? "text-red-400"
                      : ""
                  }`}
                >
                  {formik.touched.user_email && formik.errors.user_email
                    ? formik.errors.user_email
                    : "Email"}
                </label>

                <p></p>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Enter your email address"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
              </div>

              {/* Textbox */}
              <textarea name="message" />
              
              {/* Terms of service*/}
              <div>
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

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="terms"
                    value="checked"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <p>
                    I agree to the Terms and Service that my data will be taken
                    and sold.
                  </p>
                </div>
              </div>
              <button
                type="submit"
              >
                Start learning today!
              </button>
            </div>
          </div>
        </form>
      </main>
  );
}