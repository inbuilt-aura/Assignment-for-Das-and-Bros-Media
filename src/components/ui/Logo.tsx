import React from 'react'
import { motion } from 'framer-motion'
import logoSvg from '../../assets/logo.svg'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'light' | 'dark'
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', variant = 'dark' }) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12'
  }

  return (
    <motion.div
      className={`flex items-center ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Das and Bros Media Logo with proper styling */}
      <div 
        className={`${sizeClasses[size]} w-auto relative`}
        style={{
          filter: variant === 'dark' ? 'invert(1) brightness(0)' : 'none',
          aspectRatio: '380/67'
        }}
      >
        <img
          src={logoSvg}
          alt="Das and Bros Media Pvt Ltd"
          className="w-full h-full object-contain"
          onError={(e) => {
            // Fallback if logo doesn't load
            const target = e.target as HTMLImageElement
            const parent = target.parentElement
            if (parent) {
              parent.style.display = 'none'
              parent.nextElementSibling?.classList.remove('hidden')
            }
          }}
        />
      </div>
      
      {/* Fallback text logo */}
      <div className="hidden flex-col">
        <h1 className={`text-xl lg:text-2xl font-heading font-bold leading-tight ${
          variant === 'dark' ? 'text-primary-900' : 'text-white'
        }`}>
          Das and Bros Media
        </h1>
        <span className={`text-xs font-medium tracking-wider ${
          variant === 'dark' ? 'text-muted-foreground' : 'text-gray-300'
        }`}>
          PVT LTD
        </span>
      </div>
    </motion.div>
  )
}

export default Logo