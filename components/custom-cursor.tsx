"use client"

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isPointer, setIsPointer] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      const target = e.target as HTMLElement
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      )
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  if (theme === 'light') return null

  return (
    <>
      {/* Outer ring */}
      <div
        className="pointer-events-none fixed z-50 mix-blend-difference transition-transform duration-150"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
        }}
      >
        <div className="h-8 w-8 rounded-full border-2 border-cyan-400 opacity-75" />
      </div>

      {/* Inner dot */}
      <div
        className="pointer-events-none fixed z-50"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
      </div>
    </>
  )
}
