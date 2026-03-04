'use client'

import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setFadeOut(true), 200)
          setTimeout(() => setVisible(false), 900)
          return 100
        }
        return prev + 2
      })
    }, 40) // ~2 seconds to reach 100

    return () => clearInterval(interval)
  }, [])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-700 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        background:
          'radial-gradient(ellipse at center, oklch(0.12 0.04 260) 0%, oklch(0.06 0.01 260) 100%)',
      }}
      aria-label="Loading"
      role="status"
    >
      {/* Logo */}
      <div className="flex flex-col items-center gap-6 animate-scale-in">
        {/* AP Logo */}
        <div
          className="relative flex items-center justify-center w-24 h-24 rounded-2xl neon-border animate-pulse-glow"
          style={{ background: 'oklch(0.12 0.04 260)' }}
        >
          <span
            className="font-mono font-bold text-4xl neon-text tracking-widest select-none"
          >
            AP
          </span>
          {/* Corner decorations */}
          <span className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-primary opacity-70" />
          <span className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-primary opacity-70" />
          <span className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-primary opacity-70" />
          <span className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-primary opacity-70" />
        </div>

        {/* Loading text */}
        <p
          className="font-mono text-sm tracking-[0.3em] uppercase text-muted-foreground"
        >
          starting web...
        </p>

        {/* Progress bar */}
        <div
          className="w-56 h-[2px] rounded-full overflow-hidden"
          style={{ background: 'oklch(0.20 0.04 260)' }}
        >
          <div
            className="h-full rounded-full transition-all duration-100"
            style={{
              width: `${progress}%`,
              background:
                'linear-gradient(90deg, oklch(0.60 0.20 255), oklch(0.78 0.18 195))',
              boxShadow: '0 0 8px oklch(0.78 0.18 195 / 0.7)',
            }}
          />
        </div>

        {/* Progress percentage */}
        <span className="font-mono text-xs neon-text opacity-60">
          {progress}%
        </span>
      </div>
    </div>
  )
}
