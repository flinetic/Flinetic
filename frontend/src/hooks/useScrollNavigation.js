import { useEffect } from 'react'
import { scrollToElement, scrollToTop } from '../utils/scrollUtils'

const useScrollNavigation = (section) => {
  useEffect(() => {
    if (section) {
      // Small delay to ensure page is fully loaded and DOM is ready
      const timer = setTimeout(() => {
        if (section === 'home') {
          // Scroll to top for home section
          scrollToTop()
        } else {
          // Scroll to specific section
          scrollToElement(section)
        }
      }, 150) // Slightly longer delay for better reliability

      return () => clearTimeout(timer)
    }
  }, [section])
}

export default useScrollNavigation