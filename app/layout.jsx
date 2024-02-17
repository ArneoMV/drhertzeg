import './globals.css'
import { Metadata } from 'next'

export const metadata = {
  title: {
    absolute: "",
    default: "Dr Hertzeg asortiman",
    template: "%s | Dr Hertzeg"
  }
};


// components
import Header from './components/header/header'
import Footer from './components/footer/footer'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
