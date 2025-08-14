// Project-specific types
export interface Service {
  id: string
  title: string
  description: string
  icon: string
  link: string
}

export interface PortfolioItem {
  id: string
  title: string
  category: string
  thumbnail: string
  description: string
  technologies?: string[]
  link?: string
}

export interface ContactInfo {
  email: string
  phone: string
  address: string
  socialLinks: {
    facebook?: string
    twitter?: string
    linkedin?: string
    instagram?: string
  }
}

export interface HeroContent {
  title: string
  subtitle: string
  backgroundImage: string
  ctaText: string
  ctaLink: string
}

export interface AboutContent {
  title: string
  content: string
  image: string
  highlights: string[]
}

export interface PageContent {
  hero: HeroContent
  services: Service[]
  about: AboutContent
  portfolio: PortfolioItem[]
  contact: ContactInfo
}