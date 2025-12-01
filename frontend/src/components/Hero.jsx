/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useRef } from 'react'
import img2 from '../assets/img2.svg'

const Hero = () => {
  const ref = useRef(null)

  // Smooth scroll functions
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio')
    if (portfolioSection) {
      portfolioSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services')
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">

      {/* Background overlays and effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black opacity-90" />
        <div className="absolute -top-32 right-0 w-[36rem] h-[36rem] bg-indigo-500/30 blur-[160px]" />
        <div className="absolute bottom-0 -left-10 w-[28rem] h-[28rem] bg-cyan-500/30 blur-[200px]" />
      </div>

      {/* Main hero grid layout: left content, right image mockup */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-28 grid lg:grid-cols-2 gap-16 items-center">

        {/* Mobile: Image on top */}
        <motion.div
          className="lg:hidden w-full mb-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <img src={img2} alt="Creative workspace" className="w-80 h-auto object-contain mx-auto" />
        </motion.div>

        {/* Left: hero content */}
        <div className="order-2 lg:order-1">
          <motion.h1
            className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 sm:mb-8 leading-tight text-left text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Empowering Businesses Through Modern Tech.
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 sm:mb-14 font-light px-0 text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Where creativity blends with smart technology
            to build powerful solutions that move businesses forward.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-start items-center px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.button
              className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 cursor-pointer bg-gradient-to-r from-indigo-500 to-sky-800 text-white font-semibold rounded-full  transition-all duration-300 text-base sm:text-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToPortfolio}
            >
              Explore Our Work
            </motion.button>
            <motion.button
              className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 cursor-pointer bg-gradient-to-r from-indigo-500 to-sky-800 text-white hover:text-white font-semibold rounded-full hover:bg-orange-500 transition-all duration-300 text-base sm:text-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToServices}
            >
              Start a Project
            </motion.button>
          </motion.div>
        </div>

        {/* Right: image mockup for desktop */}
        <motion.div
          className="hidden lg:block relative order-1 lg:order-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {/* <div className="absolute -inset-6 bg-gradient-to-r from-indigo-500/20 to-sky-500/20 blur-3xl rounded-3xl" /> */}
          {/* <div className="relative rounded-3xl shadow-2xl border border-white/10 overflow-hidden"> */}
          <img src={img2} alt="Creative workspace" className="object-cover" />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" /> */}
          {/* </div> */}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-indigo-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
