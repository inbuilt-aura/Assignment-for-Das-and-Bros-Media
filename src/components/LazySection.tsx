import React, { Suspense, lazy } from 'react'

// Lazy load non-critical sections
const Blog = lazy(() => import('./sections/Blog'))
const Portfolio = lazy(() => import('./sections/Portfolio'))


// Loading fallback component
const SectionSkeleton = () => (
  <div className="section-padding bg-primary-50/30">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-200 rounded-lg h-64"></div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export const LazyBlog = () => (
  <Suspense fallback={<SectionSkeleton />}>
    <Blog />
  </Suspense>
)

export const LazyPortfolio = () => (
  <Suspense fallback={<SectionSkeleton />}>
    <Portfolio />
  </Suspense>
)

