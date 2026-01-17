'use client'

import { motion } from 'motion/react'
import { Highlighter } from '@/components/ui/highlighter'

export default function AdvertisementText() {
  return (
    <section className='mx-auto max-w-7xl px-4 py-20 mt-60'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='text-center'
      >
        <h2 className='text-5xl font-extrabold text-[#0F172A] lg:text-7xl'>Work Smarter, Not Harder</h2>
        <p className='mt-6 text-lg text-[#475569] max-w-2xl mx-auto'>
          Your{' '}
          <Highlighter action='underline' color='#0F172A'>
            AI-powered productivity companion
          </Highlighter>{' '}
          that learns, adapts, and grows with you.
        </p>
      </motion.div>
    </section>
  )
}
