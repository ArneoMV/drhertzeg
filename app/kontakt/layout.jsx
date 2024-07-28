import Head from 'next/head';
import './_style.scss';
import Header from '../components/organism/header/Header';
import Footer from "../components/organism/footer/Footer";

import { Metadata } from 'next'
export const metadata = { 
  title: 'Kontakt - Dr Hertzeg',
  description: 'Imate pitanja ili želite više informacija? Kontaktirajte nas putem naše kontakt forme. Dr Hertzeg je ovdje da vam pomogne!',
  keywords: 'kontakt, Dr Hertzeg, kontakt forma, podrška, pitanja',
  author: 'Dr Hertzeg'
}

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>Kontakt - Dr Hertzeg</title>
      </Head>
      <div>
        {children}
      </div>
    </>
  );
}
