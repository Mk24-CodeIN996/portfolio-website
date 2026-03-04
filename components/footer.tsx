export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="py-10 px-6 border-t"
      style={{
        background: 'oklch(0.07 0.015 260)',
        borderColor: 'oklch(0.20 0.04 260)',
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo & copyright */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span className="font-mono font-bold text-xl neon-text tracking-widest">AP</span>
          <p className="text-xs text-muted-foreground font-mono">
            &copy; {year} Aditya Pandit. All rights reserved.
          </p>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-4" aria-label="Social media links">
          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 glass rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:neon-border transition-all duration-300 hover:scale-110"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
            </svg>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-10 h-10 glass rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:neon-border transition-all duration-300 hover:scale-110"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          {/* Phone */}
          <a
            href="tel:+91"
            aria-label="Phone"
            className="w-10 h-10 glass rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:neon-border transition-all duration-300 hover:scale-110"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
