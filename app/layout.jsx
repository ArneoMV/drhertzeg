import Head from 'next/head'
import './styles/_index.scss'
import './globals.css'

import './styles/abstract/_typo.scss';
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-workSans",
});


import { Metadata } from 'next'
export const metadata = {
  title: {
    absolute: "",
    default: "Dr Hertzeg",
    template: "%s | Dr Hertzeg"
  }
};


// components
import Header from './components/organism/header/header'
// import Footer from './components/organism/footer/footer'


export default function RootLayout({ children }) {

  return (
    <html lang="en" className={`${workSans.variable}`}>
       <Head>
          <title>Dr Hertzeg</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" /> 
          <link rel="icon" href="/icon.ico" sizes="any" />    
        </Head>
      <body>
        <Header />
        {children}

      </body>
    </html>
  )
}
