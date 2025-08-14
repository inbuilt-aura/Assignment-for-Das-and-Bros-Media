import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight, ExternalLink } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import LazyImage from '../ui/LazyImage'
import { staggerContainer, staggerItem } from '../../lib/animations'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Maximizing Your Marketing ROI',
      excerpt: 'Learn strategies to improve your marketing return on investment effectively.',
      author: 'John Doe',
      date: '2024-01-11',
      readTime: '5 min read',
      category: 'Marketing',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center&auto=format&q=75'
    },
    {
      id: 2,
      title: 'Protecting Your Digital Assets',
      excerpt: 'Essential tips for safeguarding your online presence and data.',
      author: 'Jane Smith',
      date: '2024-02-12',
      readTime: '6 min read',
      category: 'Cybersecurity',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop&crop=center&auto=format&q=75'
    },
    {
      id: 3,
      title: 'Harnessing AI for Marketing',
      excerpt: 'Discover how AI can transform your marketing strategies and execution.',
      author: 'Alex Brown',
      date: '2024-03-15',
      readTime: '4 min read',
      category: 'AI & Marketing',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop&crop=center&auto=format&q=75'
    }
  ]

  return (
    <section id="blog" className="section-padding bg-primary-50/30">
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
            Latest Insights
          </h2>
          <p className="text-body">
            Stay updated with the latest trends, tips, and insights in digital marketing, 
            cybersecurity, and business transformation.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
        >
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={staggerItem}
              className="h-full"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-background/80 backdrop-blur-sm overflow-hidden group">
                {/* Post Image */}
                <div className="relative h-48 overflow-hidden">
                  <LazyImage 
                    src={post.image} 
                    alt={post.title}
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-brand-red text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-heading font-semibold text-primary-900 group-hover:text-brand-red transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Post Meta */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {post.readTime}
                    </span>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="group/btn p-0 h-auto font-medium text-brand-red hover:text-brand-red/80"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA to Full Blog */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.open('#', '_blank')}
            className="font-semibold px-8 py-3"
          >
            View All Articles
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog