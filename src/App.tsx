import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Contact from './components/sections/Contact'
import { LazyBlog, LazyPortfolio } from './components/LazySection'


function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-16 md:pt-20" tabIndex={-1} role="main">
        <Hero />
        <About />
        <Services />
        <LazyBlog />
        <LazyPortfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App