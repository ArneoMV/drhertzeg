import './styles/_index.scss'
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
import Header from './components/organism/header/header'
// import Footer from './components/organism/footer/footer'


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <Header />
        {children}

      </body>
    </html>
  )
}
