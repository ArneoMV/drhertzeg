import Head from 'next/head';
import './styles/_index.scss';
import './globals.css';
// import Header from './components/organism/header/Header.jsx'
// import Footer from "./components/organism/footer/footer.jsx";
import WorkInProgress from './components/organism/workInProgress/WorkInProgress.jsx';
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

export default function RootLayout({ children }) {

  return (
    <html lang="en" className={`${workSans.variable}`}>

      <body>
        <WorkInProgress />
      </body>

       {/* <Head>
          <title>Dr Hertzeg</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" /> 
          <link rel="icon" href="/icon.ico" sizes="any" />    
        </Head>

        <body>
          <Header />
          {children}
          <Footer />
          <svg className="gooey-svg" width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
              <defs>
                <filter id="title-gooey">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />    
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="title-gooey" />
                    <feComposite in="SourceGraphic" in2="title-gooey" operator="atop"/>
                </filter>
              </defs>
          </svg>
          <svg className="gooey-svg" width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
              <defs>
                <filter id="gooey-background">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />    
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="title-gooey" />
                    <feComposite in="SourceGraphic" in2="gooey-background" operator="atop"/>
                </filter>
              </defs>
          </svg>
        </body> */}
    </html>
  )
}
