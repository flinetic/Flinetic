import { useState, useEffect } from 'react'

const useScrollSpy = (sectionIds, options = {}) => {
  const [activeSection, setActiveSection] = useState('')
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the section that's most visible
        let maxVisibleSection = null
        let maxVisibleRatio = 0

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxVisibleRatio) {
            maxVisibleRatio = entry.intersectionRatio
            maxVisibleSection = entry.target.id
          }
        })

        // If we found a visible section, set it as active
        if (maxVisibleSection) {
          setActiveSection(maxVisibleSection)
        }
        
        // Special handling for when we're at the very top of the page
        if (window.scrollY < 100) {
          setActiveSection('home')
        }
      },
      {
        threshold: [0.1, 0.3, 0.5, 0.7],
        rootMargin: '-20% 0px -20% 0px',
        ...options
      }
    )

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    // Handle scroll to detect when we're at the very top
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection('home')
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sectionIds])

  return activeSection
}

export default useScrollSpy