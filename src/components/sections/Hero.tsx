import React, { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { Button } from '../ui/button'
import { fadeInUp, slideInLeft, slideInRight, easeTransition } from '../../lib/animations'
import { useCountUp } from '../../hooks/useCountUp'

const Hero = () => {
  const statsRef = useRef(null)
  const isInView = useInView(statsRef, { once: true, margin: '-100px' })
  
  const projectsCount = useCountUp({ end: 50, duration: 2000 })
  const satisfactionCount = useCountUp({ end: 98, duration: 2500 })
  const supportCount = useCountUp({ end: 24, duration: 1500 })

  useEffect(() => {
    if (isInView) {
      projectsCount.startAnimation()
      satisfactionCount.startAnimation()
      supportCount.startAnimation()
    }
  }, [isInView, projectsCount, satisfactionCount, supportCount])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
  <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden sm:pt-20 pt-12">
      {/* Background with parallax effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary-50 via-background to-primary-100"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main headline with staggered animation */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            transition={easeTransition}
            className="mb-6"
          >
            <motion.h1
              className="heading-xl text-primary-900 mb-4"
              variants={{
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Premium Digital
              <motion.span
                className="block text-brand-red"
                variants={{
                  initial: { opacity: 0, x: -30 },
                  animate: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Experiences
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-body max-w-3xl mx-auto mb-8"
            variants={slideInLeft}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            We craft sophisticated web solutions inspired by the precision of McLaren, 
            the passion of Ferrari, and the elegance of Apple. Transform your digital 
            presence with cutting-edge design and flawless performance.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            variants={slideInRight}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <Button
              variant="accent"
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="group font-semibold px-8 py-3"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('portfolio')}
              className="group font-semibold px-8 py-3"
            >
              <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              View Our Work
            </Button>
          </motion.div>

          {/* Stats or highlights */}
          <motion.div
            ref={statsRef}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto pb-16"
            initial="initial"
            animate="animate"
            variants={{
              initial: {},
              animate: {
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 1.4,
                },
              },
            }}
          >
            <motion.div
              className="text-center"
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-2xl lg:text-3xl font-heading font-bold text-brand-red mb-1">
                {projectsCount.count}+
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                Projects Delivered
              </div>
            </motion.div>

            <motion.div
              className="text-center"
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-2xl lg:text-3xl font-heading font-bold text-brand-red mb-1">
                {satisfactionCount.count}%
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                Client Satisfaction
              </div>
            </motion.div>

            <motion.div
              className="text-center"
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-2xl lg:text-3xl font-heading font-bold text-brand-red mb-1">
                {supportCount.count}/7
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                Support Available
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 sn:mt-12 mt-22"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-primary-300 rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <motion.div
            className="w-1 h-3 bg-primary-600 rounded-full mt-2"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero