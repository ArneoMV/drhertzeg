import Head from 'next/head';
import './_style.scss';
import Header from '../components/organism/header/Header';
import Footer from "../components/organism/footer/Footer";
import '../styles/abstract/_typo.scss';
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-workSans",
});

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>Dr Hertzeg</title>
      </Head>
      <div className={workSans.variable}>

        {children}
      </div>
    </>
  );
}
