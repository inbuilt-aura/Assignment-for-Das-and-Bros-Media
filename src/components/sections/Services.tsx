import React from 'react'
import { motion } from 'framer-motion'
import { 
  Code, 
  Smartphone, 
  Palette, 
  Search, 
  Zap, 
  Shield,
  ArrowRight 
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { staggerContainer, staggerItem, hoverLift } from '../../lib/animations'

const Services = () => {
  const services = [
    {
      id: 'growth-marketing',
      title: 'Growth Marketing',
      description: 'Data-driven marketing strategies that accelerate business growth and maximize ROI through targeted campaigns and optimization.',
      icon: Zap,
      features: ['Digital Strategy', 'Performance Marketing', 'Conversion Optimization', 'Analytics & Reporting'],
      color: 'text-brand-red',
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from cyber threats and ensure data integrity.',
      icon: Shield,
      features: ['Security Audits', 'Threat Assessment', 'Compliance Management', 'Incident Response'],
      color: 'text-brand-blue',
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize your business processes and technology infrastructure.',
      icon: Code,
      features: ['Process Automation', 'Cloud Migration', 'System Integration', 'Digital Strategy'],
      color: 'text-brand-gold',
    },
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Custom websites and web applications built with cutting-edge technologies for optimal performance.',
      icon: Smartphone,
      features: ['React & Next.js', 'E-commerce Solutions', 'CMS Development', 'API Integration'],
      color: 'text-green-600',
    },
    {
      id: 'seo-optimization',
      title: 'SEO & Content Strategy',
      description: 'Comprehensive SEO strategies and content marketing to improve search rankings and drive organic traffic.',
      icon: Search,
      features: ['Technical SEO', 'Content Marketing', 'Local SEO', 'Link Building'],
      color: 'text-purple-600',
    },
    {
      id: 'consulting-partnerships',
      title: 'Consulting & Partnerships',
      description: 'Strategic consulting services and partnership opportunities to accelerate your business growth.',
      icon: Palette,
      features: ['Business Strategy', 'Technology Consulting', 'Partnership Development', 'Market Analysis'],
      color: 'text-orange-600',
    },
  ]

  return (
    <section id="services" className="section-padding bg-primary-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-lg text-primary-900 mb-4">
            Our Services
          </h2>
          <p className="text-body">
            We offer comprehensive digital solutions tailored to your business needs. 
            From concept to deployment, we ensure every project meets the highest standards 
            of quality and performance.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.id}
                variants={staggerItem}
                {...hoverLift}
                className="h-full"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-background/80 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className={`inline-flex p-3 rounded-lg bg-primary-100 ${service.color} mb-4 w-fit`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-heading text-primary-900">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-brand-red rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant="ghost" 
                      className="group p-0 h-auto font-medium text-brand-red hover:text-brand-red/80"
                    >
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
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
            Ready to Start Your Project?
          </h3>
          <p className="text-body mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your digital presence with our 
            premium development and design services.
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
            Get Free Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Services