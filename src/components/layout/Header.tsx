import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '../ui/button'
import Logo from '../ui/Logo'
import { cn } from '../../lib/utils'
import { Link } from 'react-router-dom'

interface HeaderProps {
  activeNav?: string;
}

const Header: React.FC<HeaderProps> = ({ activeNav }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { label: 'About Us', id: 'about' },
    { 
      label: 'Services', 
      id: 'services',
      hasDropdown: true,
      dropdownItems: [
        'Growth Marketing',
        'Cybersecurity', 
        'Digital Transformation',
        'Other Services & Partnerships'
      ]
    },
    { label: 'Blog', id: 'blog', isExternal: true },
    { label: 'Contact Us', id: 'contact' },
    { label: 'Hiring', id: 'hiring', isRoute: true },
  ];

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo size="md" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <div key={item.id} className="relative group">
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-sm font-medium text-foreground hover:text-brand-red transition-colors duration-200 flex items-center"
                    >
                      {item.label}
                      <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        {item.dropdownItems?.map((dropdownItem, index) => (
                          <button
                            key={index}
                            className="block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-brand-red transition-colors"
                          >
                            {dropdownItem}
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                ) : item.isRoute ? (
                  <Link
                    to="/hiring"
                    className={
                      cn(
                        "text-sm font-medium transition-colors duration-200",
                        activeNav === 'hiring'
                          ? 'text-brand-red underline underline-offset-4'
                          : 'text-foreground hover:text-brand-red'
                      )
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm font-medium text-foreground hover:text-brand-red transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex">
            <Button
              variant="accent"
              onClick={() => scrollToSection('contact')}
              className="font-medium"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-foreground hover:text-brand-red transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={cn(
            'md:hidden overflow-y-auto',
            isMobileMenuOpen ? 'max-h-[80vh]' : 'max-h-0'
          )}
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="py-4 space-y-2 border-t border-border bg-background/95 backdrop-blur-sm">
            {navItems.map((item) => (
              <div key={item.id}>
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setOpenMobileDropdown(openMobileDropdown === item.id ? null : item.id)}
                      className="w-full text-left px-4 py-2 text-base font-medium text-foreground hover:text-brand-red hover:bg-accent/50 rounded-md transition-colors duration-200 flex items-center justify-between"
                      aria-expanded={openMobileDropdown === item.id}
                      aria-controls={`mobile-dropdown-${item.id}`}
                    >
                      <span>{item.label}</span>
                      <svg className={`ml-2 h-4 w-4 transition-transform ${openMobileDropdown === item.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openMobileDropdown === item.id && (
                      <div className="ml-4 mt-2 space-y-1" id={`mobile-dropdown-${item.id}`}> 
                        {item.dropdownItems?.map((dropdownItem, index) => (
                          <button
                            key={index}
                            className="block w-full text-left px-4 py-1 text-sm text-muted-foreground hover:text-brand-red hover:bg-accent/30 rounded-md transition-colors"
                          >
                            {dropdownItem}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : item.isRoute ? (
                  <Link
                    to="/hiring"
                    className={
                      cn(
                        "block w-full text-left px-4 py-2 text-base font-medium transition-colors duration-200",
                        activeNav === 'hiring'
                          ? 'text-brand-red underline underline-offset-4 bg-accent/30'
                          : 'text-foreground hover:text-brand-red hover:bg-accent/50'
                      )
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-2 text-base font-medium text-foreground hover:text-brand-red hover:bg-accent/50 rounded-md transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
            <div className="px-4 pt-2">
              <Button
                variant="accent"
                onClick={() => scrollToSection('contact')}
                className="w-full font-medium"
              >
                Get Started
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}

export default Header