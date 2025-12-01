/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Monitor, Smartphone, Cpu, X, ArrowRight, Cloud } from 'lucide-react'
import { Link } from 'react-router-dom'

const Expertise = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedExpertise, setSelectedExpertise] = useState(null)
  const [showComingSoonModal, setShowComingSoonModal] = useState(false)

  const expertiseData = [
    {
      icon: Monitor,
      title: "Web Experiences",
      description: "Empowering your brand with responsive, modern, and visually stunning web solutions.",
      link: "/services/web",
      services: [
        "E-Commerce Platforms",
        "Real Estate Portals",
        "Portfolio Websites",
        "Corporate Sites",
        "Restaurant & Food",
        "Healthcare Platforms"
      ]
    },
    {
      icon: Smartphone,
      title: "App Interfaces",
      description: "Seamless, intuitive mobile and desktop experiences",
      link: "/services/app",
      services: [
        "Productivity Apps",
        "Utility Applications",
        "Lifestyle & Wellness",
        "Social Platforms",
        "Business Solutions",
        "Educational Tools"
      ]
    },
    {
      icon: Cpu,
      title: "Smart Systems",
      description: "IoT automation that brings convenience and efficiency",
      link: "/services/iot",
      comingSoon: true,
      services: [
        "Smart Garden Watering",
        "Home Lighting Control",
        "Security Systems",
        "Environmental Monitoring",
        "Energy Management",
        "Industrial Automation"
      ]
    },
    // {
    //   icon: Cloud,
    //   title: "SaaS Platforms",
    //   description: "Our SaaS platforms transform everyday business operations into smart, automated digital workflows — effortless, fast, and scalable.",
    //   link: "/services/saas",
    //   services: [
    //     "Appointment Booking System",
    //     "Invoice & Billing System",
    //     "QR Menu System",
    //     "Membership Management",
    //     "Subscription Payments",
    //     "Multi-Business Dashboards"
    //   ]
    // }

  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <>
      <section id='services' ref={ref} className="relative py-32 px-6 bg-white">
        <div className="relative z-10 max-w-7xl mx-auto ">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {/* <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-center mb-4 sm:mb-6 text-indigo-300"
             
            >
              Our Expertise
            </motion.h2> */}
            <motion.p className="uppercase tracking-[0.3em] text-center text-2xl text-indigo-400 mb-4" variants={cardVariants}>Our Expertise</motion.p>

            <motion.h2
              className="text-lg sm:text-xl text-indigo-900 text-center mb-12 sm:mb-20 max-w-3xl mx-auto font-light px-4"
              variants={cardVariants}
            >
              Transforming ideas into digital reality across multiple domains
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {expertiseData.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <motion.div
                    key={index}
                    className="group"
                    variants={cardVariants}
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.comingSoon ? (
                      <div
                        className="block cursor-pointer"
                        onClick={() => setShowComingSoonModal(true)}
                      >
                        <div className="flex justifty-center items-center overflow-hidden rounded-2xl bg-transparent border border-indigo-200 p-6 sm:p-8 min-h-[300px] xl:h-[50vh]  transition-all duration-500 relative">
                          {/* Coming Soon Badge */}
                          <div className="absolute top-4 right-4 z-20">
                            <span className="bg-gradient-to-r from-indigo-500 to-sky-800 text-white px-3 py-1 rounded-full text-xs font-semibold">
                              Coming Soon
                            </span>
                          </div>


                          <div className="relative z-10 text-center h-full flex flex-col items-center">
                            <div className="flex-grow flex flex-col justify-center">
                              <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-indigo-500 to-sky-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <IconComponent className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                              </div>

                              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-black">{item.title}</h3>
                              <p className="text-black mb-6 leading-relaxed text-sm sm:text-base">{item.description}</p>
                            </div>

                            <div className="mt-auto">
                              <motion.div
                                className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border-2 border-indigo-500 text-black rounded-full hover:bg-gradient-to-r hover:from-indigo-900 hover:to-sky-900 hover:text-white transition-all duration-300 font-medium text-sm sm:text-base whitespace-nowrap"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                Coming Soon
                                <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                              </motion.div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link to={item.link} className="block">
                        <div className="flex justifty-center items-center overflow-hidden rounded-2xl bg-transparent border border-indigo-300 p-6 sm:p-8 min-h-[300px] xl:h-[50vh]  transition-all duration-500">
                          <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                          <div className="relative z-10 text-center h-full flex flex-col items-center">
                            <div className="flex-grow flex flex-col justify-center">
                              <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-indigo-500 to-sky-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <IconComponent className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                              </div>

                              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-black">{item.title}</h3>
                              <p className="text-black mb-6 leading-relaxed text-sm sm:text-base">{item.description}</p>
                            </div>

                            <div className="mt-auto">
                              <motion.div
                                className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border-2 border-indigo-600 text-black rounded-full hover:bg-gradient-to-r hover:from-indigo-900 hover:to-sky-900 hover:text-white transition-all duration-300 font-medium text-sm sm:text-base whitespace-nowrap"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                Explore More
                                <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                              </motion.div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal - Commented out as requested, now using dedicated sub-pages */}

      <AnimatePresence>
        {selectedExpertise && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedExpertise(null)}
          >
            <motion.div
              className="bg-zinc-800 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-semibold text-indigo-600">{selectedExpertise.title}</h3>
                <button
                  onClick={() => setSelectedExpertise(null)}
                  className="text-gray-400 hover:text-gray-900 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <p className="text-gray-700 mb-8 text-lg">{selectedExpertise.description}</p>

              <div className="grid sm:grid-cols-2 gap-4 ">
                {selectedExpertise.services.map((service, index) => (
                  <motion.div
                    key={index}
                    className="p-4 bg-zinc-700 rounded-lg hover:bg-zinc-600 transition-colors cursor-pointer h-72"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <p className="text-white font-medium">{service}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Coming Soon Modal */}
      <AnimatePresence>
        {showComingSoonModal && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowComingSoonModal(false)}
          >
            <motion.div
              className="bg-zinc-800 rounded-2xl p-8 max-w-md w-full text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-full">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-sky-800 flex items-center justify-center mx-auto mb-4">
                    <Cpu className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-indigo-400 mb-2">Smart Systems</h3>
                  <span className="bg-gradient-to-r from-indigo-500 to-sky-800 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Coming Soon
                  </span>
                </div>
                <button
                  onClick={() => setShowComingSoonModal(false)}
                  className="text-zinc-400 hover:text-white transition-colors absolute top-4 right-4"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <p className="text-zinc-300 mb-6 text-lg leading-relaxed">
                We're working hard to bring you innovative IoT automation solutions. Our Smart Systems service will be available soon with cutting-edge IoT technologies.
              </p>

              <div className="space-y-2 mb-6">
                <p className="text-indigo-300 font-medium">What to expect:</p>
                <ul className="text-zinc-300 text-sm space-y-1">
                  <li>• Smart Home Automation</li>
                  <li>• IoT Device Integration</li>
                  <li>• Energy Management Systems</li>
                  <li>• Security & Monitoring Solutions</li>
                </ul>
              </div>

              <button
                onClick={() => setShowComingSoonModal(false)}
                className="w-full py-3 bg-gradient-to-r from-indigo-500 to-sky-800 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-600/30 transition-all duration-300"
              >
                Got it!
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  )
}

export default Expertise