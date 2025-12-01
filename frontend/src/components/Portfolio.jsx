/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Globe, Smartphone, Cpu, Clock } from 'lucide-react'

const Portfolio = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState('all')
  const [showAllProjects, setShowAllProjects] = useState(false)

  const tabs = [
    { id: 'all', name: 'All', icon: Globe },
    { id: 'websites', name: 'Websites', icon: Globe },
    { id: 'apps', name: 'Apps', icon: Smartphone },
    // { id: 'iot', name: 'IoT Systems', icon: Cpu }
  ]

  const projects = {
    websites: [
      {
        title: "Luxe Fashion Boutique",
        category: "E-Commerce Website",
        description: "Premium fashion e-commerce platform with advanced filtering, wishlist, and secure checkout",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
        color: "from-indigo-500 to-sky-800",
        type: "website",
        featured: true
      },
      {
        title: "Bella Beauty Parlour",
        category: "Beauty Salon Website",
        description: "Elegant beauty parlour website with service showcase, online booking, and gallery",
        image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop",
        color: "from-indigo-500 to-sky-800",
        type: "website"
      },
      {
        title: "PowerFit Gym & Fitness",
        category: "Gym Website",
        description: "Dynamic gym website with membership plans, trainer profiles, and class schedules",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
        color: "from-indigo-500 to-sky-800",
        type: "website"
      },
      {
        title: "Elena Rodriguez Studio",
        category: "Fashion Designer Portfolio",
        description: "Sophisticated fashion designer portfolio showcasing collections and design philosophy",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
        color: "from-indigo-500 to-sky-800",
        type: "website"
      },
      {
        title: "Marcus Photography Studio",
        category: "Studio Portfolio Website",
        description: "Professional photography studio portfolio with stunning galleries and client testimonials",
        image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&h=400&fit=crop",
        color: "from-indigo-500 to-sky-800",
        type: "website"
      },
      {
        title: "Glamour Hair Salon",
        category: "Hair Salon Website",
        description: "Modern hair salon website with stylist profiles, service menu, and appointment booking",
        image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&h=400&fit=crop",
        color: "from-indigo-500 to-sky-800",
        type: "website"
      },
      {
        title: "Brew & Beans Cafe",
        category: "Cafe Website",
        description: "Cozy cafe website with menu showcase, online ordering, and event booking system",
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=400&fit=crop",
        color: "from-indigo-500 to-sky-800",
        type: "website"
      },
      // {
      //   title: "TechGadgets Store",
      //   category: "E-Commerce Website",
      //   description: "Electronics e-commerce platform with product comparisons, reviews, and warranty tracking",
      //   image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      //   color: "from-indigo-500 to-sky-800",
      //   type: "website"
      // },
      {
        title: "Restaurant",
        category: "Restaurant Website",
        description: "Elegant restaurant website with menu display, table reservations, and chef profiles",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
        color: "from-indigo-500 to-sky-800",
        type: "website"
      },
      {
        title: "HealthCare Plus Clinic",
        category: "Medical Website",
        description: "Professional medical clinic website with doctor profiles, appointment booking, and services",
        image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xpbmljfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
        color: "from-indigo-500 to-sky-800",
        type: "website"
      },
      // {
      //   title: "HomeDecor Emporium",
      //   category: "E-Commerce Website",
      //   description: "Home decor e-commerce site with room visualization, style guides, and interior tips",
      //   image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      //   color: "from-indigo-500 to-sky-800",
      //   type: "website"
      // },
      // {
      //   title: "Johnson & Associates Law",
      //   category: "Law Firm Website",
      //   description: "Professional law firm website with practice areas, attorney profiles, and consultation booking",
      //   image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
      //   color: "from-indigo-500 to-sky-800",
      //   type: "website"
      // }
    ],
    apps: [
      {
        title: "StyleMart Shopping App",
        category: "E-Commerce App",
        description: "Feature-rich shopping app with product catalog, cart management, and secure payments",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
        color: "from-indigo-500 to-sky-800",
        type: "app"
      },
      {
        title: "BookEasy Appointment App",
        category: "Booking System App",
        description: "Comprehensive booking app for salons, clinics, and service businesses with calendar integration",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
        color: "from-indigo-500 to-sky-800",
        type: "app"
      },
      {
        title: "MyBusiness Info App",
        category: "Static Business App",
        description: "Clean informational app showcasing company profile, services, and contact details",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
        color: "from-indigo-500 to-sky-800",
        type: "app"
      },
      {
        title: "FreshMart Grocery App",
        category: "E-Commerce App",
        description: "Grocery shopping app with fresh produce selection, delivery tracking, and loyalty rewards",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop",
        color: "from-indigo-500 to-sky-800",
        type: "app"
      },
      {
        title: "MediCare Appointment App",
        category: "Booking System App",
        description: "Medical appointment booking app with doctor profiles, health records, and prescription tracking",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
        color: "from-indigo-500 to-sky-800",
        type: "app"
      },
      {
        title: "Cafe Connect Info App",
        category: "Static Business App",
        description: "Simple cafe information app with menu display, location details, and contact information",
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=400&fit=crop",
        color: "from-indigo-500 to-sky-800",
        type: "app"
      }
    ],
    iot: [
      {
        title: "GreenThumb Smart Garden",
        category: "IoT Garden Automation",
        description: "Intelligent garden watering system with soil sensors and weather-based scheduling",
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop",
        color: "from-indigo-500 to-sky-800",
        type: "iot",
        comingSoon: true
      },
      {
        title: "SecureHome IoT System",
        category: "Smart Home Security",
        description: "Advanced home security with smart cameras, motion sensors, and mobile notifications",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
        color: "from-indigo-500 to-sky-800",
        type: "iot",
        comingSoon: true
      },
      {
        title: "EcoSmart Energy Hub",
        category: "IoT Energy Management",
        description: "Smart energy monitoring with automated optimization and cost-saving insights",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop",
        color: "from-indigo-500 to-sky-800",
        type: "iot",
        comingSoon: true
      },
      {
        title: "IndustryWatch IoT Platform",
        category: "Industrial IoT Solution",
        description: "Comprehensive industrial monitoring with real-time equipment tracking and analytics",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
        color: "from-indigo-500 to-sky-800",
        type: "iot",
        comingSoon: true
      }
    ]
  }

  const getAllProjects = () => {
    return [...projects.websites, ...projects.apps, ...projects.iot]
  }

  const getFilteredProjects = () => {
    let filteredProjects
    if (activeTab === 'all') {
      filteredProjects = getAllProjects()
      // For "All" tab, show only 6 projects initially unless "View All" is clicked
      if (!showAllProjects) {
        return filteredProjects.slice(0, 6)
      }
    } else {
      filteredProjects = projects[activeTab] || []
    }
    return filteredProjects
  }

  const shouldShowViewAllButton = () => {
    return activeTab === 'all' && !showAllProjects && getAllProjects().length > 6
  }

  // Reset showAllProjects when tab changes
  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
    setShowAllProjects(false)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.8
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id='portfolio' ref={ref} className="py-32 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.p className="uppercase tracking-[0.3em] text-center text-2xl text-indigo-400 mb-4" variants={cardVariants}>Portfolio</motion.p>


          <motion.p
            className="text-lg sm:text-xl text-gray-700 text-center mb-8 sm:mb-12 max-w-3xl mx-auto font-light px-4"
            variants={cardVariants}
          >
            Showcasing our passion for creating exceptional digital experiences across web & mobile platforms
          </motion.p>

          {/* Tabs */}
          <motion.div
            className="grid grid-cols-2 sm:flex sm:justify-center gap-2 sm:gap-4 mb-12 sm:mb-16 px-4 max-w-md sm:max-w-none mx-auto"
            variants={cardVariants}
          >
            {tabs.map((tab) => {
              const IconComponent = tab.icon
              const isActive = activeTab === tab.id
              const count = tab.id === 'all'
                ? (showAllProjects ? getAllProjects().length : Math.min(6, getAllProjects().length))
                : (projects[tab.id]?.length || 0)
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`flex cursor-pointer items-center justify-center px-3 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${isActive
                    ? 'bg-gradient-to-r from-indigo-500 to-sky-800 text-white shadow-lg shadow-indigo-500/25'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-indigo-600 border border-gray-200'
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent className="w-4 sm:w-5 h-4 sm:h-5 mr-1 sm:mr-2" />
                  {tab.name}
                  <span className={`ml-1 sm:ml-2 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs ${isActive ? 'bg-white/20' : 'bg-gray-200'
                    }`}>
                    {count}
                  </span>
                </motion.button>
              )
            })}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 min-h-[400px]"
            key={`${activeTab}-${showAllProjects}`} // Force re-render when tab or view state changes
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {getFilteredProjects().map((project, index) => (
              <motion.div
                key={`${activeTab}-${index}`}
                className="group cursor-pointer"
                variants={cardVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gray-50/70 border border-gray-200 hover:shadow-2xl hover:bg-white hover:shadow-indigo-500/20 transition-all duration-500">
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-gradient-to-r from-indigo-500 to-sky-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Coming Soon Badge */}
                  {project.comingSoon && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-gradient-to-r from-indigo-600 to-fuchsia-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        Coming Soon
                      </span>
                    </div>
                  )}

                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />

                    {/* Coming Soon Overlay */}
                    {project.comingSoon && (
                      <div className="absolute inset-0 bg-gray-900/70 flex items-center justify-center">
                        <div className="text-center">
                          <Clock className="w-16 h-16 text-indigo-400 mx-auto mb-4" />
                          <p className="text-white font-semibold text-lg">Coming Soon</p>
                          <p className="text-gray-300 text-sm">Q2 2025</p>
                        </div>
                      </div>
                    )}

                    {/* Hover overlay for available projects */}
                    {!project.comingSoon && (
                      <div className="absolute inset-0 bg-gray-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <motion.div
                          className="text-center"
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileHover={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ExternalLink className="w-12 h-12 text-indigo-500 mx-auto mb-2" />
                          <p className="text-white font-semibold">View Demo</p>
                        </motion.div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 bg-gradient-to-r ${project.color} text-white`}>
                      {project.category}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View All / Show Less Button */}
          {activeTab === 'all' && getAllProjects().length > 6 && (
            <motion.div
              className="text-center mt-12"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="px-8 py-4 cursor-pointer bg-white text-gray-700 font-semibold rounded-full hover:bg-gray-100 hover:text-indigo-600 transition-all duration-300 border-2 border-indigo-600 "
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {showAllProjects
                  ? 'Show Less'
                  : `View All Projects (${getAllProjects().length})`}
              </motion.button>
            </motion.div>
          )}


          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-8  mt-20 pt-16 border-t border-gray-200"
            variants={cardVariants}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">{projects.websites.length}</div>
              <div className="text-gray-700">Websites</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">{projects.apps.length}</div>
              <div className="text-gray-700">Mobile Apps</div>
            </div>
            {/* <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">{projects.iot.length}</div>
              <div className="text-gray-700">IoT Systems</div>
            </div> */}
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">{getAllProjects().length}</div>
              <div className="text-gray-700">Total Projects</div>
            </div>
          </motion.div>

          <motion.div
            className="text-center mt-16"
            variants={cardVariants}
          >
            <motion.button
              className="px-8 py-4 cursor-pointer bg-gradient-to-r from-indigo-500 to-sky-800 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-indigo-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio