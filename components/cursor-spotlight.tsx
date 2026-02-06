"use client"

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export function CursorSpotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.body.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.body.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isVisible])

  if (theme === 'light') return null

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        opacity: isVisible ? 1 : 0,
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(6, 182, 212, 0.15), transparent 40%)`,
      }}
    />
  )
}
