'use client'

import { Link } from '@heroui/react'
import MobileNavbar from './MobileNavbar'
import { menuItems } from '@/app/constants/landing-page/constants'

const ProgresioLogo = () => {
  return (
    <svg fill='none' height='40' viewBox='0 0 40 40' width='40' className='cursor-pointer'>
      <path clipRule='evenodd' d='M20 5L10 20H15L20 12L25 20H30L20 5Z' fill='currentColor' fillRule='evenodd' />
      <path d='M12 25L20 35L28 25H23L20 30L17 25H12Z' fill='currentColor' />
    </svg>
  )
}

export default function NavbarComponent() {
  return (
    <>
      <MobileNavbar />

      <div className='hidden sm:flex w-full justify-center sticky top-4 z-50 px-4'>
        <nav className='bg-white/80 backdrop-blur-md border border-[#E5E7EB] py-2 rounded-full shadow-sm max-w-4xl w-full px-6'>
          <div className='flex items-center justify-between h-15'>
            <Link href='/' className='flex items-center gap-3 cursor-pointer'>
              <div className='text-[#0F172A]'>
                <ProgresioLogo />
              </div>
              <p className='font-bold text-xl text-[#0F172A] tracking-tight'>Progresio</p>
            </Link>

            <div className='flex gap-8'>
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className='text-[#475569] hover:text-[#0F172A] transition-colors font-medium text-base'
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
