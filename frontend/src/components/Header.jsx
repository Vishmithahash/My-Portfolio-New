import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import ThemeToggle from './ThemeToggle'
import { MenuIcon, XIcon } from 'lucide-react'
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const navLinks = [
    {
      name: 'Home',
      to: 'home',
    },
    {
      name: 'About',
      to: 'about',
    },
    {
      name: 'Skills',
      to: 'skills',
    },
    {
      name: 'Projects',
      to: 'projects',
    },
    {
      name: 'Contact',
      to: 'contact',
    },
  ]
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
          Vishmitha Hashendra
        </h1>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium cursor-pointer transition-colors"
              activeClass="text-blue-600 dark:text-blue-400"
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="ml-4 text-gray-600 dark:text-gray-300 focus:outline-none"
          >
            {mobileMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-800 py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium cursor-pointer transition-colors"
                activeClass="text-blue-600 dark:text-blue-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
export default Header
