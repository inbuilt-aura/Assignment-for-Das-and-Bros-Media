import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { 
  Award, 
  Target, 
  TrendingUp,
  CheckCircle 
} from 'lucide-react'
import { Card, CardContent } from '../ui/card'
import { useCountUp } from '../../hooks/useCountUp'
import { useInView } from 'framer-motion'
import { fadeInUp, slideInLeft, slideInRight } from '../../lib/animations'

const About = () => {
  // Define the stats and their animation targets
  const stats = [
    { number: 50, label: 'Projects Delivered', icon: Award, suffix: '+' },
    { number: 98, label: 'Client Satisfaction', icon: Target, suffix: '%' },
    { number: 24, label: 'Support', icon: TrendingUp, suffix: '/7' },
  ]

  // Refs and hooks for animation
  const statsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(statsRef, { once: true, margin: '-100px' })
  const countUps = [
    useCountUp({ end: 50, duration: 2000 }),
    useCountUp({ end: 98, duration: 2500 }),
    useCountUp({ end: 24, duration: 1500 }),
  ]

  useEffect(() => {
    if (isInView) {
      countUps.forEach(cu => cu.startAnimation())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView, ...countUps])

  const highlights = [
    'Expert team with 10+ years of combined experience',
    'Proven track record in digital transformation',
    'Cutting-edge cybersecurity solutions',
    'Data-driven growth marketing strategies',
    '24/7 support and consultation services',
    'Tailored solutions for every business size'
  ]

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={slideInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-lg text-primary-900 mb-6">
              Elevating Businesses Through 
              <span className="text-brand-red block">Digital Innovation</span>
            </h2>
            
            <p className="text-body mb-6">
              At Das and Bros Media, we specialize in transforming businesses through 
              strategic digital solutions. Our expertise spans growth marketing, cybersecurity, 
              and digital transformation, helping companies achieve unprecedented growth and 
              secure their digital assets.
            </p>

            <p className="text-body mb-8">
              We believe in building long-term partnerships with our clients, providing 
              tailored solutions that drive measurable results and sustainable growth.
            </p>

            {/* Highlights */}
            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CheckCircle className="h-5 w-5 text-brand-red mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            variants={slideInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-brand-blue/5 rounded-2xl transform rotate-3" />
            
            <div className="relative bg-background border border-border rounded-2xl overflow-hidden shadow-lg">
              {/* Hero Image */}
              <div className="h-32 relative">
                      <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=128&fit=crop&crop=center"
                        alt="Team working together"
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-brand-red/80" />
              </div>
              
              <div className="p-8">
                <h3 className="heading-md text-primary-900 mb-8 text-center">
                  Our Impact in Numbers
                </h3>
              
              <div className="grid grid-cols-2 gap-6" ref={statsRef}>
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="text-center p-6 border-0 bg-primary-50/50 hover:bg-primary-50 transition-colors">
                        <CardContent className="p-0">
                          <div className="inline-flex p-3 rounded-full bg-brand-red/10 text-brand-red mb-4">
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <div className="text-2xl lg:text-3xl font-heading font-bold text-primary-900 mb-2">
                            {countUps[index].count}
                            {stat.suffix}
                          </div>
                          <div className="text-sm text-muted-foreground font-medium">
                            {stat.label}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          className="mt-20 text-center max-w-4xl mx-auto"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-primary-900 to-brand-red text-white rounded-2xl p-8 lg:p-12">
            <h3 className="heading-md mb-6">Our Mission</h3>
            <p className="text-lg leading-relaxed opacity-90">
              "To empower businesses with innovative digital solutions that drive growth, 
              enhance security, and create lasting competitive advantages in an ever-evolving 
              digital landscape."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About