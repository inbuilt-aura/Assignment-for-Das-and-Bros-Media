import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'
import LazyImage from '../ui/LazyImage'
import { staggerContainer, staggerItem, hoverLift } from '../../lib/animations'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'growth-marketing', label: 'Growth Marketing' },
    { id: 'cybersecurity', label: 'Cybersecurity' },
    { id: 'digital-transformation', label: 'Digital Transformation' },
    { id: 'web-development', label: 'Web Development' },
  ]

  const projects = [
    {
      id: 1,
      title: 'E-commerce Growth Strategy',
      category: 'growth-marketing',
      description: 'Increased online sales by 300% through targeted digital marketing campaigns and conversion optimization.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center',
      results: ['300% Sales Increase', '150% Traffic Growth', '45% Better Conversion Rate'],
      client: 'Tech Innovations Ltd',
      duration: '6 months',
    },
    {
      id: 2,
      title: 'Enterprise Security Overhaul',
      category: 'cybersecurity',
      description: 'Comprehensive cybersecurity implementation for a Fortune 500 company, reducing security incidents by 95%.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop&crop=center',
      results: ['95% Incident Reduction', 'Zero Data Breaches', 'Compliance Achieved'],
      client: 'Global Corp',
      duration: '12 months',
    },
    {
      id: 3,
      title: 'Digital Transformation Initiative',
      category: 'digital-transformation',
      description: 'Complete digital transformation of legacy systems, improving operational efficiency by 60%.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center',
      results: ['60% Efficiency Gain', '40% Cost Reduction', 'Cloud Migration'],
      client: 'Manufacturing Inc',
      duration: '18 months',
    },
    {
      id: 4,
      title: 'Modern Web Platform',
      category: 'web-development',
      description: 'Built a high-performance web platform serving 1M+ users with 99.9% uptime.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center',
      results: ['1M+ Users', '99.9% Uptime', 'Mobile Optimized'],
      client: 'StartupXYZ',
      duration: '8 months',
    },
    {
      id: 5,
      title: 'Multi-Channel Marketing Campaign',
      category: 'growth-marketing',
      description: 'Integrated marketing campaign across multiple channels resulting in 250% ROI improvement.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center',
      results: ['250% ROI Increase', '500K New Leads', 'Brand Recognition'],
      client: 'Retail Chain',
      duration: '4 months',
    },
    {
      id: 6,
      title: 'Cloud Security Implementation',
      category: 'cybersecurity',
      description: 'Secure cloud migration with advanced threat protection and monitoring systems.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=center',
      results: ['100% Secure Migration', 'Real-time Monitoring', 'Threat Prevention'],
      client: 'FinTech Solutions',
      duration: '10 months',
    },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="portfolio" className="section-padding bg-primary-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-lg text-primary-900 mb-4">
            Success Stories
          </h2>
          <p className="text-body">
            Discover how we've helped businesses achieve remarkable growth and transformation 
            through our strategic digital solutions.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? 'accent' : 'outline'}
              onClick={() => setActiveFilter(category.id)}
              className="font-medium"
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          key={activeFilter} // Re-animate when filter changes
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={staggerItem}
              {...hoverLift}
              className="h-full"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-background/80 backdrop-blur-sm overflow-hidden">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <LazyImage 
                    src={project.image} 
                    alt={project.title}
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-brand-red text-white text-xs font-medium rounded-full">
                      {categories.find(cat => cat.id === project.category)?.label}
                    </span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-primary-900 mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Results */}
                  <div className="space-y-2 mb-4">
                    {project.results.slice(0, 2).map((result, index) => (
                      <div key={index} className="flex items-center text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-brand-red rounded-full mr-2 flex-shrink-0" />
                        {result}
                      </div>
                    ))}
                  </div>

                  {/* Project Details */}
                  <div className="flex justify-between items-center text-xs text-muted-foreground mb-4">
                    <span>Client: {project.client}</span>
                    <span>Duration: {project.duration}</span>
                  </div>

                  <Button 
                    variant="ghost" 
                    className="group p-0 h-auto font-medium text-brand-red hover:text-brand-red/80"
                  >
                    View Case Study
                    <ExternalLink className="ml-1 h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="heading-md text-primary-900 mb-4">
            Ready to Create Your Success Story?
          </h3>
          <p className="text-body mb-8 max-w-2xl mx-auto">
            Join our growing list of satisfied clients who have transformed their businesses 
            with our innovative digital solutions.
          </p>
          <Button 
            variant="accent" 
            size="lg"
            onClick={() => {
              const element = document.getElementById('contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="font-semibold px-8 py-3"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio