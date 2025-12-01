// Background image utilities for the Hero section
// You can add your own custom images here
import techbg from '../assets/HeroSectionImages/backgroundImages/techbg.jpg'
import teambg from '../assets/HeroSectionImages/backgroundImages/teambg.jpg'
import officebg from '../assets/HeroSectionImages/backgroundImages/officebg.jpg'

export const backgroundImages = {
  // Tech & Digital themes
  tech: techbg,
  team: teambg,

  // Workspace & Professional
  workspace: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop&q=80',
  office: officebg,
  
  // Minimal & Clean
  minimal: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&h=1080&fit=crop&q=80',
  geometric: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&h=1080&fit=crop&q=80',
  
  // Urban & Modern
  city: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1920&h=1080&fit=crop&q=80',
  skyline: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&h=1080&fit=crop&q=80',
  
  // Creative & Artistic
  creative: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop&q=80',
  artistic: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&q=80',

  // No background
  none: null
}

// Helper function to get optimized image URL
export const getOptimizedImageUrl = (imageUrl, width = 1920, height = 1080, quality = 80) => {
  if (!imageUrl || imageUrl.startsWith('/')) return imageUrl
  
  // For Unsplash images, add optimization parameters
  if (imageUrl.includes('unsplash.com')) {
    return `${imageUrl}&w=${width}&h=${height}&fit=crop&q=${quality}`
  }
  
  return imageUrl
}

// Preload images for better performance
export const preloadImages = (imageUrls) => {
  imageUrls.forEach(url => {
    if (url) {
      const img = new Image()
      img.src = url
    }
  })
}

// Get random background from a category
export const getRandomBackground = (category = 'all') => {
  const categories = {
    tech: ['tech', 'team'],
    professional: ['workspace', 'office'],
    minimal: ['minimal', 'geometric'],
    urban: ['city', 'skyline'],
    creative: ['creative', 'artistic'],
    all: Object.keys(backgroundImages).filter(key => key !== 'none' && !key.startsWith('custom'))
  }
  
  const categoryImages = categories[category] || categories.all
  const randomKey = categoryImages[Math.floor(Math.random() * categoryImages.length)]
  return backgroundImages[randomKey]
}