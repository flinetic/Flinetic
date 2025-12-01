/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import useScrollSpy from '../hooks/useScrollSpy'
import logo from '../assets/logo.svg'


const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  // Define section IDs for scroll spy
  const sectionIds = ['home', 'about', 'services', 'portfolio', 'smart-decor', 'contact']
  const activeSection = useScrollSpy(sectionIds)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', route: '/', section: 'home' },
    { name: 'About', route: '/about', section: 'about' },
    { name: 'WhyChoose', route: '/whychooseus', section: 'whychooseus' },
    { name: 'Services', route: '/services', section: 'services' },
    { name: 'HowItWorks', route: '/howitworks', section: 'howitworks' },
    { name: 'Portfolio', route: '/portfolio', section: 'portfolio' },
    // { name: 'Smart Décor', route: '/smart-decor-preview', section: 'smart-decor' }
    // { name: 'Contact', route: '/contact', section: 'contact' },
  ]

  const handleNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  // Function to check if a nav item is active
  const isActiveRoute = (route, section) => {
    // Special handling for Services - should be active on all service pages
    if (route === '/services') {
      return location.pathname === '/services' || location.pathname.startsWith('/services/')
    }

    // Special handling for Smart Décor - should be active on smart decor pages
    if (route === '/smart-decor-preview') {
      return location.pathname === '/smart-decor' || location.pathname === '/smart-decor-preview'
    }

    // For service detail pages (like /services/web), don't use scroll spy
    if (location.pathname.startsWith('/services/') ||
      location.pathname === '/smart-decor') {
      return false // These pages don't use scroll spy, handled above
    }

    const isScrollSpyPage = location.pathname === '/'
    if (isScrollSpyPage && section) {
      return activeSection === section
    }

    // For other pages, use exact route matching
    return location.pathname === route
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm'
        : 'bg-transparent'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={`max-w-7xl mx-auto px-6 py-4 ${isMobileMenuOpen ? 'bg-white border-b border-gray-200' : ''}`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <motion.div
              className="flex items-center cursor-pointer gap-2 sm:gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {/* <img 
                src={logo} 
                alt="FLINETIC Logo" 
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain" 
              /> */}
              <div
                className={`text-2xl sm:text-3xl ${isScrolled
                  ? 'bg-gradient-to-r from-indigo-500 to-indigo-950 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-white/70 to-indigo-600 bg-clip-text text-transparent'
                  } font-semibold tracking-widest`}
              >
                FLINETIC
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => {
              const isActive = isActiveRoute(item.route, item.section)
              return (
                <Link key={index} to={item.route}>
                  <motion.div
                    className={`
                      relative transition-all duration-300
                      ${isActive
                        ? "text-indigo-400 font-semibold"
                        : isScrolled
                          ? "text-gray-900 hover:text-indigo-600"
                          : "text-white font-bold hover:text-indigo-400"
                      }
                    `}
                    whileHover={{ y: isActive ? 0 : -2 }}
                    transition={{ duration: 0.2 }}
                  >

                    {item.name}
                    {isActive && (
                      <motion.div
                        className={`absolute -bottom-1 left-0 h-0.5 rounded-full ${isScrolled ? 'bg-indigo-600' : 'bg-indigo-400'
                          }`}
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.div>
                </Link>
              )
            })}
            <Link to="/contact">
              <motion.button
                className="cursor-pointer px-6 py-2 bg-gradient-to-r from-indigo-900 to-sky-900 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className={`lg:hidden transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`lg:hidden overflow-hidden ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-4">
            {navItems.map((item, index) => {
              const isActive = isActiveRoute(item.route, item.section)
              return (
                <Link key={index} to={item.route}>
                  <motion.div
                    className={`block relative transition-all duration-300 ${isActive
                      ? 'text-indigo-600 font-semibold'
                      : 'text-gray-700 hover:text-indigo-600'
                      }`}
                    onClick={handleNavClick}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: isMobileMenuOpen ? 0 : -20 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center pb-6">
                      {isActive && (
                        <motion.div
                          className="w-1 h-6 bg-indigo-600 rounded-full mr-2"
                          initial={{ height: 0 }}
                          animate={{ height: '1.5rem' }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                      {item.name}
                    </div>
                  </motion.div>
                </Link>
              )
            })}
            <Link to="/contact">
              <motion.button
                className="w-full px-6 py-2 bg-gradient-to-r from-indigo-500 to-sky-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : 20 }}
                transition={{ delay: 0.3 }}
                onClick={handleNavClick}
              >
                Get Started
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navigation