'use client'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'

interface Project {
  id: number
  title: string
  shortDesc: string
  fullDesc: string
  image: string
  category: string
  languages: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Modern Portfolio Websites',
    shortDesc: 'A modern dark-themed personal portfolio with animations and glassmorphism.',
    fullDesc:
      'A fully responsive portfolio website designed with a futuristic dark theme, glassmorphism cards, smooth CSS animations, particle effects, and neon glow accents. Built for maximum performance and visual impact.',
    image: '/images/proj-portfolio.jpg',
    category: 'Web',
    languages: ['Python', 'HTML', 'CSS', 'JavaScript', 'TypeScript'],
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    shortDesc: 'Full-stack online store with cart, auth, and payment integration.',
    fullDesc:
      'A complete full-stack e-commerce web application featuring product listings, user authentication, shopping cart, payment gateway integration, and an admin dashboard. Optimized for mobile and desktop.',
    image: '/images/proj-ecommerce.jpg',
    category: 'Web',
    languages: ['Python', 'HTML', 'CSS', 'JavaScript', 'TypeScript'],
  },
  {
    id: 3,
    title: 'Cool Stuffs - Hand Gesture Semulation',
    shortDesc: 'Real-time hand gesture simulation that forms a magical power ball using your camera.',
    fullDesc:
      'This is a hand gesture simulation — with the help of your camera and your hand you can form a magical power ball which will explode in a few seconds after forming. Powered by MediaPipe hand landmark tracking with cinematic visual effects rendered in real time.',
    image: '/images/proj-gesture.jpg',
    category: 'Creative',
    languages: ['Python', 'Java', 'JavaScript', 'MediaPipe'],
  },
  {
    id: 4,
    title: 'MAIKON AI — Humanoid AI #1',
    shortDesc: 'Conversational AI with natural language processing, emotion detection, and its own memory system.',
    fullDesc:
      'MAIKON AI is an interactive humanoid AI system powered by deep learning models for natural language understanding, emotion detection, and contextual awareness. Features real-time speech recognition and response generation. MAIKON AI has its own memory system with self thinking — allowing it to retain context, recall past interactions, and reason independently over time.',
    image: '/images/proj-maikon.jpg',
    category: 'AI',
    languages: ['Python', 'C++', 'PyTorch', 'R', 'Java', 'JavaScript'],
  },
  {
    id: 5,
    title: 'ANYA AI — Humanoid AI #2',
    shortDesc: 'Autonomous female companion AI with its own memory system and self-thinking capabilities.',
    fullDesc:
      'ANYA AI is an advanced autonomous AI system using reinforcement learning for real-world decision making. Designed with a modular neural architecture, it adapts behavior based on environmental feedback. ANYA AI has its own memory system and she is the best female companion — retaining context across conversations and responding with warmth and intelligence.',
    image: '/images/proj-anya.jpg',
    category: 'AI',
    languages: ['Python', 'C++', 'PyTorch', 'R', 'Java'],
  },
  {
    id: 6,
    title: 'Robotics & ML',
    shortDesc: 'An ongoing journey into Robotics and Machine Learning.',
    fullDesc:
      'I am still developing a robot but I am also still learning Robotics and Machine Learning.',
    image: '/images/proj-robotics.jpg',
    category: 'Robotics',
    languages: ['C++', 'Python', 'ROS', 'OpenCV', 'Arduino', 'CAD/SolidWorks'],
  },
]

const categoryColors: Record<string, string> = {
  Web: 'oklch(0.60 0.20 255)',
  Creative: 'oklch(0.68 0.18 320)',
  AI: 'oklch(0.78 0.18 195)',
  Robotics: 'oklch(0.70 0.18 40)',
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', handleKey)
    // Do NOT hide body overflow — it prevents the fixed overlay from scrolling
    return () => {
      document.removeEventListener('keydown', handleKey)
    }
  }, [onClose])

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center animate-fade-in"
      style={{
        background: 'oklch(0.04 0.01 260 / 0.85)',
        backdropFilter: 'blur(8px)',
        overscrollBehavior: 'contain',
        WebkitOverflowScrolling: 'touch',
      }}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Outer padding wrapper — clicking the padding area closes the modal */}
      <div
        className="min-h-full flex items-center justify-center py-10 px-4"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        {/* Card — no max-height, the overlay above scrolls to reveal it fully */}
        <div
          className="glass neon-border rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-scale-in"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image */}
          <div className="relative h-48 sm:h-56 rounded-t-2xl overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 512px"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to top, oklch(0.12 0.04 260) 0%, transparent 50%)',
              }}
              aria-hidden="true"
            />
            {/* Category badge */}
            <span
              className="absolute top-4 left-4 text-xs font-mono font-bold px-3 py-1 rounded-full"
              style={{
                background: `${categoryColors[project.category]}33`,
                border: `1px solid ${categoryColors[project.category]}66`,
                color: categoryColors[project.category],
              }}
            >
              {project.category}
            </span>
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 glass rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:neon-border transition-all"
              aria-label="Close modal"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Content — no scroll here, the whole card scrolls via the overlay */}
          <div className="p-5 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {project.fullDesc}
            </p>

            {/* Languages used */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-primary mb-3">
                Languages Used
              </h4>
              <ul className="flex flex-wrap gap-2">
                {project.languages.map((lang) => (
                  <li key={lang}>
                    <span
                      className="inline-block text-xs font-mono px-3 py-1 rounded-md glass-hover transition-all"
                      style={{
                        background: 'oklch(0.18 0.04 260)',
                        border: '1px solid oklch(0.78 0.18 195 / 0.2)',
                        color: 'oklch(0.78 0.18 195)',
                      }}
                    >
                      {lang}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Close button at bottom for easy mobile access */}
            <button
              onClick={onClose}
              className="mt-6 w-full btn-outline text-xs font-mono py-2 rounded-xl"
            >
              Close
            </button>
            <div className="mt-4 text-center text-xs font-mono text-muted-forground opacity-80 animate-pulse">
              Scroll down to se full project details . sorry for inconvenience!!
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [selected, setSelected] = useState<Project | null>(null)
  const [filter, setFilter] = useState<string>('All')

  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))]
  const filtered =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 px-6 reveal"
      style={{ background: 'oklch(0.08 0.01 260)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-3">
            My Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">
            Featured <span className="neon-text">Projects</span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-[2px] rounded-full bg-primary opacity-60" />
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-semibold tracking-wide transition-all duration-300 ${
                filter === cat
                  ? 'btn-primary'
                  : 'btn-outline'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className="glass rounded-2xl overflow-hidden glass-hover group cursor-pointer"
              style={{ animationDelay: `${i * 100}ms` }}
              aria-label={`View ${project.title} project details`}
            >
              {/* Thumbnail */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, oklch(0.10 0.02 260) 0%, transparent 60%)',
                  }}
                  aria-hidden="true"
                />
                {/* Category badge */}
                <span
                  className="absolute top-3 right-3 text-xs font-mono font-bold px-2 py-1 rounded-full"
                  style={{
                    background: `${categoryColors[project.category]}33`,
                    border: `1px solid ${categoryColors[project.category]}66`,
                    color: categoryColors[project.category],
                  }}
                >
                  {project.category}
                </span>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-bold text-base mb-1 group-hover:neon-text transition-all">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                  {project.shortDesc}
                </p>
                <button
                  onClick={() => setSelected(project)}
                  className="btn-outline text-xs font-mono px-4 py-2 rounded-lg w-full"
                  aria-label={`Open ${project.title} details`}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
      {selected && (
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[110] text-xs font-mono px-4 py-2 rounded-full glass neon-border animate-pulse">
      </div>
      )}
    </section>
  )
}
