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
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/footer'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar/>
        </header>
        
        {children}
        <Footer />
      </body>
    </html>
  )
}
