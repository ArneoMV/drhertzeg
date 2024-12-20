import { Metadata } from 'next'
export const metadata = {
  title: {
    absolute: "",
    default: "Ime proizvoda",
    template: "%s | Dr Hertzeg"
  }
};

import '../_product-page.scss';

// components
import Footer from '../../components/organism/footer/footer'

export default function RootLayout({ children }) {

  return (
    <div className='product-page'>
        {children}
    </div>
  )
}
