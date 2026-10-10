import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { nav } from '../data/siteContent.js'
import './header.css'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container site-header__inner">
        <Link to="/" className="site-header__brand" onClick={() => setOpen(false)} aria-label="OGINFINITUM">
          <span className="wordmark"><span className="wordmark__og">OG</span>INFINITUM</span>
        </Link>

        <nav className={`site-header__nav ${open ? 'is-open' : ''}`}>
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `site-header__link${isActive ? ' is-active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-primary site-header__cta" onClick={() => setOpen(false)}>
            Start Your Journey
          </Link>
        </nav>

        <button
          className={`site-header__toggle ${open ? 'is-open' : ''}`}
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
