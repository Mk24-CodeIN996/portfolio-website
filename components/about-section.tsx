'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const skills = [
  { name: 'C++', level: 80, icon: '⚙' },
  { name: 'Python', level: 85, icon: '🐍' },
  { name: 'HTML', level: 95, icon: '🌐' },
  { name: 'CSS', level: 90, icon: '🎨' },
  { name: 'JavaScript', level: 88, icon: '⚡' },
  { name: 'AI Dev', level: 75, icon: '🤖' },
  { name: 'UI/UX Dev', level: 85, icon: '✏' },
  { name: 'Unreal Engine', level: 70, icon: '🎮' },
]

const skillColors = [
  { bar: 'oklch(0.78 0.18 195)', glow: 'oklch(0.78 0.18 195 / 0.4)' },
  { bar: 'oklch(0.65 0.18 140)', glow: 'oklch(0.65 0.18 140 / 0.4)' },
  { bar: 'oklch(0.70 0.18 40)', glow: 'oklch(0.70 0.18 40 / 0.4)' },
  { bar: 'oklch(0.60 0.20 255)', glow: 'oklch(0.60 0.20 255 / 0.4)' },
  { bar: 'oklch(0.75 0.18 70)', glow: 'oklch(0.75 0.18 70 / 0.4)' },
  { bar: 'oklch(0.78 0.18 195)', glow: 'oklch(0.78 0.18 195 / 0.4)' },
  { bar: 'oklch(0.68 0.18 320)', glow: 'oklch(0.68 0.18 320 / 0.4)' },
  { bar: 'oklch(0.65 0.18 30)', glow: 'oklch(0.65 0.18 30 / 0.4)' },
]

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const skillRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    skillRefs.current.forEach((el) => el && observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-6 reveal"
      style={{ background: 'oklch(0.09 0.015 260)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-3">
            Get to know me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">
            About <span className="neon-text">Me</span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-[2px] rounded-full bg-primary opacity-60" />
        </div>

        {/* Bio grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Profile image */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Glow ring */}
              <div
                className="absolute inset-[-4px] rounded-full animate-pulse-glow"
                style={{
                  background:
                    'conic-gradient(from 0deg, oklch(0.78 0.18 195), oklch(0.60 0.20 255), oklch(0.78 0.18 195))',
                  padding: '3px',
                  borderRadius: '9999px',
                }}
                aria-hidden="true"
              />
              <div
                className="relative w-60 h-60 sm:w-72 sm:h-72 rounded-full overflow-hidden neon-border"
                style={{ zIndex: 1 }}
              >
                <Image
                  src="/images/profile.jpg"
                  alt="Aditya Pandit — Developer & Game Creator"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 240px, 288px"
                  priority
                />
              </div>
              {/* Corner badge */}
              <div
                className="absolute -bottom-3 -right-3 glass rounded-xl px-3 py-2 neon-border z-10"
              >
                <p className="text-xs font-mono neon-text font-bold">Full Stack</p>
                <p className="text-xs font-mono text-muted-foreground">Developer</p>
              </div>
            </div>
          </div>

          {/* Bio text */}
          <div className="space-y-5">
            <h3 className="text-2xl font-bold">
              Hello! I'm{' '}
              <span className="neon-text">Aditya Pandit</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate developer and game creator with a strong focus on building
              immersive digital experiences. From crafting responsive web applications to
              developing intelligent humanoid AI systems, I blend creativity with
              cutting-edge technology.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My expertise spans full-stack development, UI/UX design, AI development, and
              robotics engineering. I love pushing boundaries and bringing bold ideas to life
              through code, design, and innovation.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              {[
                { value: '100+', label: 'Projects' },
                { value: '3+', label: 'Years Exp.' },
                { value: '2', label: 'AI Bots' },
              ].map((stat) => (
                <div key={stat.label} className="glass rounded-xl p-4 text-center glass-hover">
                  <p className="text-2xl font-bold neon-text">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-xl font-bold text-center mb-10">
            Tech <span className="neon-text">Skills</span>
          </h3>
          <div className="grid sm:grid-cols-2 gap-5">
            {skills.map((skill, i) => (
              <div
                key={skill.name}
                ref={(el) => { skillRefs.current[i] = el }}
                className="glass rounded-xl p-5 glass-hover reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-lg" aria-hidden="true">{skill.icon}</span>
                    <span className="font-semibold text-sm">{skill.name}</span>
                  </div>
                  <span
                    className="text-xs font-mono font-bold"
                    style={{ color: skillColors[i % skillColors.length].bar }}
                  >
                    {skill.level}%
                  </span>
                </div>
                <div
                  className="h-[6px] rounded-full overflow-hidden"
                  style={{ background: 'oklch(0.18 0.03 260)' }}
                >
                  <div
                    className="progress-bar h-full rounded-full"
                    style={{
                      '--progress': `${skill.level}%`,
                      background: `linear-gradient(90deg, ${skillColors[i % skillColors.length].bar}, ${skillColors[(i + 1) % skillColors.length].bar})`,
                      boxShadow: `0 0 8px ${skillColors[i % skillColors.length].glow}`,
                    } as React.CSSProperties}
                    role="progressbar"
                    aria-valuenow={skill.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${skill.name} proficiency: ${skill.level}%`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
