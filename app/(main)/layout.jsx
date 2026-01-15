import { Inter } from 'next/font/google'
import NavbarComponent from '../modules/landing-page/Navbar'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

const MainLayout = ({ children }) => {
  return (
    <div className='flex-1 flex flex-col bg-[#F8FAFC]'>
      <body className={`${inter.variable} antialiased`}>
        <NavbarComponent />
        {children}
      </body>
    </div>
  )
}

export default MainLayout
