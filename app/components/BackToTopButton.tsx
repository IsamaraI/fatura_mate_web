'use client'

import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!isVisible) return null

  return (
    <button
      type='button'
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className='fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl'
      aria-label='Sayfanın başına dön'
    >
      <FaArrowUp className='text-sm' />
    </button>
  )
}

export default BackToTopButton
