'use client'

import { useEffect, useRef, useState } from 'react'

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate sending
    const formData = new FormData()
    formData.append("name", form.name)
    formData.append("email", form.email)
    formData.append("phone", form.phone)
    formData.append("message", form.message)

    await fetch("https://formspree.io/f/xjgenzon", {
      method: "POST",
      body: formData,
      headers: {
      Accept: "application/json",
      },
    })
    setStatus('sent')
    setForm({ name: '', email: '', phone: '', message: '' })
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 px-6 reveal"
      style={{ background: 'oklch(0.09 0.015 260)' }}
    >
      <div className="max-w-2xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-3">
            Get in touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">
            Contact <span className="neon-text">Me</span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-[2px] rounded-full bg-primary opacity-60" />
          <p className="mt-5 text-muted-foreground text-sm leading-relaxed max-w-md mx-auto">
            Have a project in mind or want to collaborate? Send me a message and
            I'll get back to you as soon as possible.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handelSubmit}
          className="glass rounded-2x1 p-8 neon-border space-y-6"
          aria-label="Contact form"
        >
          {/* Name */}
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-xs font-mono uppercase tracking-widest text-muted-foreground"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-xl text-sm font-sans text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-300 focus:ring-2 focus:ring-primary/50"
              style={{
                background: 'oklch(0.12 0.03 260)',
                border: '1px solid oklch(0.25 0.04 260)',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'oklch(0.78 0.18 195 / 0.7)'
                e.target.style.boxShadow = '0 0 15px oklch(0.78 0.18 195 / 0.2)'
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'oklch(0.25 0.04 260)'
                e.target.style.boxShadow = 'none'
              }}
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-xs font-mono uppercase tracking-widest text-muted-foreground"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-xl text-sm font-sans text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-300"
              style={{
                background: 'oklch(0.12 0.03 260)',
                border: '1px solid oklch(0.25 0.04 260)',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'oklch(0.78 0.18 195 / 0.7)'
                e.target.style.boxShadow = '0 0 15px oklch(0.78 0.18 195 / 0.2)'
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'oklch(0.25 0.04 260)'
                e.target.style.boxShadow = 'none'
              }}
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <label
              htmlFor="phone"
              className="block text-xs font-mono uppercase tracking-widest text-muted-foreground"
            >
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
              className="w-full px-4 py-3 rounded-xl text-sm font-sans text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-300"
              style={{
                background: 'oklch(0.12 0.03 260)',
                border: '1px solid oklch(0.25 0.04 260)',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'oklch(0.78 0.18 195 / 0.7)'
                e.target.style.boxShadow = '0 0 15px oklch(0.78 0.18 195 / 0.2)'
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'oklch(0.25 0.04 260)'
                e.target.style.boxShadow = 'none'
              }}
            />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="block text-xs font-mono uppercase tracking-widest text-muted-foreground"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project or idea..."
              className="w-full px-4 py-3 rounded-xl text-sm font-sans text-foreground placeholder:text-muted-foreground/50 outline-none resize-none transition-all duration-300"
              style={{
                background: 'oklch(0.12 0.03 260)',
                border: '1px solid oklch(0.25 0.04 260)',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'oklch(0.78 0.18 195 / 0.7)'
                e.target.style.boxShadow = '0 0 15px oklch(0.78 0.18 195 / 0.2)'
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'oklch(0.25 0.04 260)'
                e.target.style.boxShadow = 'none'
              }}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === 'sending' || status === 'sent'}
            className="btn-primary w-full py-3 rounded-xl font-semibold text-sm tracking-wide flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === 'idle' && (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Send Message
              </>
            )}
            {status === 'sending' && (
              <>
                <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" aria-hidden="true" />
                Sending...
              </>
            )}
            {status === 'sent' && (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Message Sent!
              </>
            )}
            {status === 'error' && 'Try Again'}
          </button>

          {status === 'sent' && (
            <p className="text-center text-xs font-mono neon-text animate-fade-in">
              Thanks for reaching out! I'll reply soon.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
