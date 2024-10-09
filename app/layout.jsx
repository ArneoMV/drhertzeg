import './styles/_index.scss';
import './globals.css';
import Header from './components/organism/header/Header.jsx';
import Footer from './components/organism/footer/footer.jsx';
import './styles/abstract/_typo.scss';
import { Work_Sans } from 'next/font/google';
import Script from 'next/script';

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-workSans',
});
export const metadata = {
  title: 'Dr Hertzeg',
  description: 'Posjetite službenu stranicu brenda Dr. Hertzeg i otkrijte visokokvalitetne prirodne proizvode, uključujući čajeve, kozmetiku i wellness rješenja. Pružamo zdravlje iz prirode uz detaljne opise i recenzije svakog proizvoda.',
  other: {
    'google-site-verification': 'a2v0q3TL_Unq1cJYio3Pi6rtIgCg7Cczk8XhjVGZRao',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${workSans.variable}`}>

      <head>
        {/* Google Tag Manager Script */}
        <Script id="google-tag-manager" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-ML34Q7H7');`
        }} />
      </head>

      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-ML34Q7H7"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
        </noscript>
        <Header />
        {children}
        <Footer />

        <svg className="gooey-svg" width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="title-gooey">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                result="title-gooey"
              />
              <feComposite in="SourceGraphic" in2="title-gooey" operator="atop" />
            </filter>
          </defs>
        </svg>
        <svg className="gooey-svg" width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="gooey-background">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                result="title-gooey"
              />
              <feComposite in="SourceGraphic" in2="gooey-background" operator="atop" />
            </filter>
          </defs>
        </svg>

      </body>
    </html>
  );
}
