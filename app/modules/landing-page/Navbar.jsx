'use client'

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link
} from '@heroui/react'
import { useState } from 'react'
import { Menu } from 'lucide-react'

const ProgresioLogo = () => {
  return (
    <svg fill='none' height='40' viewBox='0 0 40 40' width='40'>
      <path clipRule='evenodd' d='M20 5L10 20H15L20 12L25 20H30L20 5Z' fill='currentColor' fillRule='evenodd' />
      <path d='M12 25L20 35L28 25H23L20 30L17 25H12Z' fill='currentColor' />
    </svg>
  )
}

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contacts', href: '#contact' }
  ]

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className='bg-white border-b border-[#E5E7EB] py-2'
      maxWidth='xl'
      height='70px'
      position='sticky'
      classNames={{
        base: 'sticky top-0 z-50',
        wrapper: 'px-4 sm:px-6'
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden text-[#0F172A]'
          icon={<Menu size={24} />}
        />
        <NavbarBrand>
          <Link href='#main' className='flex items-center gap-3 cursor-pointer'>
            <div className='text-[#0F172A]'>
              <ProgresioLogo />
            </div>
            <p className='font-bold text-2xl text-[#0F172A] tracking-tight'>Progresio</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-8 ml-auto'>
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              href={item.href}
              className='text-[#475569] hover:text-[#0F172A] transition-colors font-medium text-base'
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu className='bg-white border-r border-[#E5E7EB] pt-8'>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              className='w-full text-[#0F172A] hover:text-[#475569] text-lg font-medium py-3 transition-colors'
              href={item.href}
              size='lg'
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
