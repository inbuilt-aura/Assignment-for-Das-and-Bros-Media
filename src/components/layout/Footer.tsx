import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ArrowUp
} from 'lucide-react'
import { Button } from '../ui/button'
import Logo from '../ui/Logo'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const quickLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About Us', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Contact', id: 'contact' },
    { label: 'Hiring', isRoute: true },
  ]

  const services = [
    'Growth Marketing',
    'Cybersecurity',
    'Digital Transformation',
    'Web Development',
    'SEO & Content Strategy',
    'Consulting & Partnerships',
  ]

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ]

  return (
  <footer className="bg-primary-900 text-white relative overflow-hidden" role="contentinfo" aria-label="Footer">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-red rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-blue rounded-full blur-3xl" />
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="mb-4">
                <Logo size="md" variant="light" />
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Elevating businesses through innovative digital solutions. 
                We specialize in growth marketing, cybersecurity, and digital transformation.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-300">
                  <Mail className="h-4 w-4 mr-3 text-brand-red" />
                  dasandbrosmediaodisha@gmail.com
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <Phone className="h-4 w-4 mr-3 text-brand-red" />
                  +91 (XXX) XXX-XXXX
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <MapPin className="h-4 w-4 mr-3 text-brand-red" />
                  Bhubaneswar, Odisha, India
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    {link.isRoute ? (
                      <Link
                        to="/hiring"
                        className="text-gray-300 hover:text-brand-red transition-colors duration-200 text-sm"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      link.id ? (
                        <button
                          onClick={() => scrollToSection(link.id!)}
                          className="text-gray-300 hover:text-brand-red transition-colors duration-200 text-sm"
                        >
                          {link.label}
                        </button>
                      ) : null
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-gray-300 text-sm hover:text-brand-red transition-colors duration-200 cursor-pointer">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter & Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold mb-6">Stay Connected</h4>
              <p className="text-gray-300 text-sm mb-4">
                Subscribe to our newsletter for the latest updates and insights.
              </p>
              
              {/* Newsletter Signup */}
              <div className="flex mb-6">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-primary-800 border border-primary-700 rounded-l-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                />
                <Button
                  variant="accent"
                  className="rounded-l-none px-4"
                >
                  Subscribe
                </Button>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm text-gray-300 mb-3">Follow us:</p>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        className="p-2 bg-primary-800 hover:bg-brand-red rounded-md transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={social.label}
                      >
                        <IconComponent className="h-4 w-4" />
                      </motion.a>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-sm text-gray-400 mb-4 md:mb-0"
              >
                © 2024 Das & Bros Media. All rights reserved.
              </motion.div>
              
              <div className="flex items-center space-x-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex space-x-6 text-sm text-gray-400"
                >
                  <a href="#" className="hover:text-brand-red transition-colors">
                    Privacy Policy
                  </a>
                  <a href="#" className="hover:text-brand-red transition-colors">
                    Terms of Service
                  </a>
                  <a href="#" className="hover:text-brand-red transition-colors">
                    Cookie Policy
                  </a>
                </motion.div>

                {/* Back to Top Button */}
                <motion.button
                  onClick={scrollToTop}
                  className="p-2 bg-primary-800 hover:bg-brand-red rounded-md transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  aria-label="Back to top"
                >
                  <ArrowUp className="h-4 w-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer