// src/components/layout/Navbar.jsx (ya jahan bhi hai)
import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const items = [
    { label: 'Home', to: '/' },
    { label: 'Shop', to: '/shop' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ]

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out
          ${
            scrolled
              ? 'h-16 bg-white/90 backdrop-blur-xl shadow-[0_8px_32px_rgba(15,23,42,0.06)] border-b border-neutral-100/50'
              : 'h-20 bg-transparent/90'
          }
          animate-in slide-in-from-top-4 duration-500
        `}
      >
        <div className="h-full px-6 lg:px-8 max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl lg:text-3xl font-light tracking-tight bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900/80 bg-clip-text text-transparent font-serif"
          >
            ESTATE
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-16 mx-auto">
            {items.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="relative text-lg font-light text-neutral-700 hover:text-neutral-900 group transition-all duration-300 flex items-center h-8"
              >
                <span>{item.label}</span>
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-neutral-900 to-neutral-800 opacity-0 group-hover:opacity-100 group-hover:w-5/6 transition-all duration-500 ease-out rounded-full origin-left" />
              </NavLink>
            ))}
          </div>

          {/* Desktop Icons */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Cart */}
            <div className="relative p-2 group cursor-pointer">
              <svg
                className="w-5 h-5 text-neutral-700 group-hover:text-neutral-900 transition-colors duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1 4c-.667.333-1.333.5-2 1h12a2 2 0 002-2l-1-4"
                />
              </svg>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-neutral-900 text-white text-xs rounded-full flex items-center justify-center font-medium shadow-lg">
                3
              </div>
            </div>

            {/* Account */}
            <div className="w-10 h-10 border border-neutral-200/50 hover:border-neutral-300 rounded-xl flex items-center justify-center hover:bg-neutral-50/50 backdrop-blur-sm transition-all duration-200 group">
              <svg
                className="w-5 h-5 text-neutral-700 group-hover:text-neutral-900 transition-colors duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2 rounded-xl hover:bg-neutral-100/50 transition-all duration-200"
          >
            <svg
              className="w-6 h-6 text-neutral-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                stroke="currentColor"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          lg:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-all duration-300
          ${mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`
          lg:hidden fixed top-20 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl shadow-2xl border-b border-neutral-100
          transition-all duration-300 ease-out overflow-hidden
          ${mobileOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'}
        `}
      >
        <div className="px-6 py-8 space-y-6">
          {items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="block text-xl font-light text-neutral-700 hover:text-neutral-900 hover:pl-6 py-4 border-l-4 border-transparent hover:border-neutral-900 transition-all duration-300"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}

          <div className="pt-6 border-t border-neutral-100 flex items-center space-x-4">
            <div className="flex-1 p-4 border border-neutral-200 rounded-xl hover:border-neutral-300 hover:bg-neutral-50 transition-all duration-200 flex items-center space-x-3">
              <svg
                className="w-5 h-5 text-neutral-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1 4c-.667.333-1.333.5-2 1h12a2 2 0 002-2l-1-4"
                />
              </svg>
              <span className="font-medium">Cart (3)</span>
            </div>
            <div className="w-14 h-14 border border-neutral-200 rounded-xl hover:border-neutral-300 hover:bg-neutral-50 flex items-center justify-center transition-all duration-200">
              <svg
                className="w-5 h-5 text-neutral-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
