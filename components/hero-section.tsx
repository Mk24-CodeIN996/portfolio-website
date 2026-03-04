'use client'

import { useEffect, useState } from 'react'
import ParticleCanvas from './particle-canvas'

const taglines = [
  'Professional Developer.',
  'UI/UX Designer & Developer.',
  'Full Stack Developer.',
  'AI & Robotics Builder.',
]

function TypewriterTagline() {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = taglines[index]
    let timeout: NodeJS.Timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setIndex((i) => (i + 1) % taglines.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, index])

  return (
    <span className="neon-text-blue font-semibold">
      {displayed}
      <span
        className="inline-block w-[2px] h-5 ml-[2px] align-middle bg-accent"
        style={{ animation: 'blink 1s step-end infinite' }}
        aria-hidden="true"
      />
    </span>
  )
}

export default function HeroSection() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg"
    >
      <ParticleCanvas />

      {/* Decorative glow orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, oklch(0.60 0.20 255 / 0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, oklch(0.78 0.18 195 / 0.07) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span
            className="w-2 h-2 rounded-full bg-primary"
            style={{ animation: 'pulseGlow 2s ease-in-out infinite' }}
            aria-hidden="true"
          />
          <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
            Available for work
          </span>
        </div>

        {/* Main heading */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 text-balance transition-all duration-700 delay-100 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Hi, I'm{' '}
          <span className="neon-text">Aditya Pandit</span>
        </h1>

        <p
          className={`text-xl sm:text-2xl font-medium text-muted-foreground mb-3 transition-all duration-700 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Developer {'&'} Game Creator
        </p>

        {/* Typewriter tagline */}
        <div
          className={`text-base sm:text-lg mb-10 h-8 transition-all duration-700 delay-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <TypewriterTagline />
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-[400ms] ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button
            onClick={() => scrollTo('about')}
            className="btn-primary font-semibold px-7 py-3 rounded-lg text-sm tracking-wide w-full sm:w-auto"
          >
            About Me
          </button>
          <button
            onClick={() => scrollTo('projects')}
            className="btn-outline font-semibold px-7 py-3 rounded-lg text-sm tracking-wide w-full sm:w-auto"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="btn-outline font-semibold px-7 py-3 rounded-lg text-sm tracking-wide w-full sm:w-auto"
            style={{
              borderColor: 'oklch(0.60 0.20 255 / 0.6)',
              color: 'oklch(0.70 0.20 255)',
            }}
          >
            Contact Me
          </button>
        </div>

        {/* Scroll indicator */}
        <div
          className={`mt-16 flex justify-center transition-all duration-700 delay-500 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
            <div
              className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent"
              style={{ animation: 'fadeIn 2s ease infinite' }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
