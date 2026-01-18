'use client'

import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import createGlobe from 'cobe'
import { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { FEATURES_DATA, SKELETON_TWO_IMAGES, GLOBE_CONFIG } from '@/app/constants/landing-page/constants'

export default function FeaturesSectionDemo() {
  const skeletonComponents = {
    SkeletonOne: <SkeletonOne />,
    SkeletonTwo: <SkeletonTwo />,
    SkeletonFour: <SkeletonFour />
  }

  return (
    <div className='relative z-20 py-10 lg:py-40 max-w-7xl mx-auto'>
      <div className='px-8'>
        <h4 className='text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-extrabold text-[#0F172A]'>
          {FEATURES_DATA.title}
        </h4>

        <p className='text-sm lg:text-base max-w-2xl my-4 mx-auto text-[#475569] text-center font-normal'>
          {FEATURES_DATA.description}
        </p>
      </div>
      <div className='relative'>
        <div className='grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md border-[#E5E7EB]'>
          {FEATURES_DATA.features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className='h-full w-full'>{skeletonComponents[feature.skeleton]}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  )
}

const FeatureCard = ({ children, className }) => {
  return <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>{children}</div>
}

const FeatureTitle = ({ children }) => {
  return (
    <p className='max-w-5xl mx-auto text-left tracking-tight text-[#0F172A] text-xl md:text-2xl md:leading-snug'>
      {children}
    </p>
  )
}

const FeatureDescription = ({ children }) => {
  return (
    <p
      className={cn(
        'text-sm md:text-base max-w-4xl text-left mx-auto',
        'text-[#475569] text-center font-normal',
        'text-left max-w-sm mx-0 md:text-sm my-2'
      )}
    >
      {children}
    </p>
  )
}

export const SkeletonOne = () => {
  return (
    <div className='relative flex py-8 px-2 gap-10 h-full'>
      <div className='w-full p-5 mx-auto bg-[#F8FAFC] shadow-2xl group h-full'>
        <div className='flex flex-1 w-full h-full flex-col space-y-2'>
          <Image
            src='/image-1.png'
            alt='Smart task management interface'
            width={800}
            height={800}
            className='h-full w-full aspect-square object-cover object-top-left rounded-sm'
          />
        </div>
      </div>
      <div className='absolute bottom-0 z-40 inset-x-0 h-60 bg-linear-to-t from-[#FFFFFF] via-[#FFFFFF] to-transparent w-full pointer-events-none' />
      <div className='absolute top-0 z-40 inset-x-0 h-60 bg-linear-to-b from-[#FFFFFF] via-transparent to-transparent w-full pointer-events-none' />
    </div>
  )
}

export const SkeletonTwo = () => {
  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100
    }
  }

  return (
    <div className='relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden'>
      <div className='flex flex-row -ml-20'>
        {SKELETON_TWO_IMAGES.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={'images-first' + idx}
            whileHover='whileHover'
            whileTap='whileTap'
            className='rounded-xl -mr-4 mt-4 p-1 bg-[#F8FAFC] border border-[#E5E7EB] shrink-0 overflow-hidden'
          >
            <Image
              src={image}
              alt='Progress tracking visualization'
              width={500}
              height={500}
              className='rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0'
            />
          </motion.div>
        ))}
      </div>
      <div className='flex flex-row'>
        {SKELETON_TWO_IMAGES.map((image, idx) => (
          <motion.div
            key={'images-second' + idx}
            variants={imageVariants}
            whileHover='whileHover'
            whileTap='whileTap'
            className='rounded-xl -mr-4 mt-4 p-1 bg-[#F8FAFC] border border-[#E5E7EB] shrink-0 overflow-hidden'
          >
            <Image
              src={image}
              alt='Progress tracking visualization'
              width={500}
              height={500}
              className='rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0'
            />
          </motion.div>
        ))}
      </div>
      <div className='absolute left-0 z-100 inset-y-0 w-20 bg-linear-to-r from-[#FFFFFF] to-transparent h-full pointer-events-none' />
      <div className='absolute right-0 z-100 inset-y-0 w-20 bg-linear-to-l from-[#FFFFFF] to-transparent h-full pointer-events-none' />
    </div>
  )
}

export const SkeletonFour = () => {
  return (
    <div className='h-60 md:h-60 flex flex-col items-center relative bg-transparent mt-10'>
      <Globe className='absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72' />
    </div>
  )
}

export const Globe = ({ className }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    let phi = 0

    if (!canvasRef.current) return

    const globe = createGlobe(canvasRef.current, {
      ...GLOBE_CONFIG,
      onRender: (state) => {
        state.phi = phi
        phi += 0.01
      }
    })

    return () => {
      globe.destroy()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: '100%', aspectRatio: 1 }}
      className={className}
    />
  )
}
