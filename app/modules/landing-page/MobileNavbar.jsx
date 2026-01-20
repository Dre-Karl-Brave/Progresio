'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, Zap, HelpCircle } from 'lucide-react'

const menuItems = [
  { name: 'About', href: '/#about', icon: <Home className='h-5 w-5' /> },
  { name: 'Features', href: '/features', icon: <Zap className='h-5 w-5' /> },
  { name: 'FAQ', href: '/#faq', icon: <HelpCircle className='h-5 w-5' /> }
]

const ProgresioLogo = () => {
  return (
    <svg fill='none' height='40' viewBox='0 0 40 40' width='40' className='cursor-pointer'>
      <path clipRule='evenodd' d='M20 5L10 20H15L20 12L25 20H30L20 5Z' fill='currentColor' fillRule='evenodd' />
      <path d='M12 25L20 35L28 25H23L20 30L17 25H12Z' fill='currentColor' />
    </svg>
  )
}

export default function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
        setIsMenuOpen(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const handleMenuItemClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        className='sm:hidden fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E5E7EB]'
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30
        }}
      >
        <div className='flex items-center justify-between px-4 h-16'>
          <Link href='/' className='flex items-center gap-2'>
            <div className='text-[#0F172A]'>
              <ProgresioLogo />
            </div>
            <p className='font-bold text-xl text-[#0F172A] tracking-tight'>Progresio</p>
          </Link>

          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='p-2 rounded-lg hover:bg-gray-100 transition-colors'
            aria-label='Toggle menu'
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode='wait'>
              {isMenuOpen ? (
                <motion.div
                  key='close'
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className='h-6 w-6 text-[#0F172A]' />
                </motion.div>
              ) : (
                <motion.div
                  key='menu'
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className='h-6 w-6 text-[#0F172A]' />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className='overflow-hidden border-t border-[#E5E7EB]'
            >
              <motion.div
                className='py-2 bg-white'
                initial='closed'
                animate='open'
                exit='closed'
                variants={{
                  open: {
                    transition: {
                      staggerChildren: 0.07,
                      delayChildren: 0.1
                    }
                  },
                  closed: {
                    transition: {
                      staggerChildren: 0.05,
                      staggerDirection: -1
                    }
                  }
                }}
              >
                {menuItems.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      open: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          type: 'spring',
                          stiffness: 300,
                          damping: 24
                        }
                      },
                      closed: {
                        y: 20,
                        opacity: 0,
                        transition: {
                          duration: 0.2
                        }
                      }
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={handleMenuItemClick}
                      className='flex items-center gap-4 px-6 py-3 hover:bg-gray-50 transition-colors'
                    >
                      <div className='text-[#475569]'>{item.icon}</div>
                      <span className='text-base font-medium text-[#0F172A]'>{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='sm:hidden fixed inset-0 bg-black/20 z-40 backdrop-blur-sm'
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <div className='sm:hidden h-16' />
    </>
  )
}
