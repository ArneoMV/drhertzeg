import { Metadata } from 'next'
export const metadata = {
  title: {
    absolute: "",
    default: "Calming Gel",
    template: "%s | Dr Hertzeg"
  }
};

import './_style.scss';

// components
import Footer from '../../components/organism/footer/footer'

export default function RootLayout({ children }) {

  return (
    <div className='product-page'>
        {children}
    </div>
  )
}
