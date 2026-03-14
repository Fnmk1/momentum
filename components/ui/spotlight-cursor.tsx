'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'

type SpotlightCursorProps = {
  className?: string
  size?: number
  springOptions?: { bounce?: number; duration?: number }
}

export function SpotlightCursor({
  className,
  size = 200,
  springOptions = { bounce: 0 },
}: SpotlightCursorProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const mouseX = useSpring(0, springOptions)
  const mouseY = useSpring(0, springOptions)

  const spotlightLeft = useTransform(mouseX, (x) => `${x - size / 2}px`)
  const spotlightTop = useTransform(mouseY, (y) => `${y - size / 2}px`)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    }

    const handleMouseEnter = () => setIsHovered(true)
    const handleMouseLeave = () => setIsHovered(false)

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseenter', handleMouseEnter)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [mouseX, mouseY])

  return (
    <div ref={containerRef} className={`relative ${className ?? ''}`}>
      <motion.div
        className="pointer-events-none absolute rounded-full bg-white/[0.06] blur-xl"
        style={{
          width: size,
          height: size,
          left: spotlightLeft,
          top: spotlightTop,
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s',
        }}
      />
    </div>
  )
}
