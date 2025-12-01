/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Founders = ({ sectionId = 'about', title = 'Meet the Visionaries', subtitle = "We're two developers from Pune bringing creative design and technology together to help businesses grow" }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <section id={sectionId} ref={ref} className="py-32 px-6 bg-gray-100">

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-serif text-center mb-6 text-emerald-600"
            variants={cardVariants}
          >
            {title}
          </motion.h2>

          <motion.p
            className="text-xl text-gray-700 text-center mb-20 max-w-3xl mx-auto font-light"
            variants={cardVariants}
          >
            {subtitle}
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Founder 1 */}
            <motion.div
              className="group"
              variants={cardVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-50/80 border border-emerald-200 p-8 hover:shadow-2xl hover:shadow-emerald-500/10 hover:bg-white transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 p-1">
                    <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center text-4xl font-bold text-emerald-600">
                      S
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold text-center mb-2 text-gray-900">Swaraj</h3>
                  <p className="text-emerald-600 text-center mb-4 font-medium">Full-Stack Developer & UI/UX Designer</p>
                  <p className="text-gray-700 text-center leading-relaxed">
                    Passionate about creating seamless digital experiences that blend beautiful design with powerful functionality.
                    Specializes in modern web technologies and user-centered design.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Founder 2 */}
            <motion.div
              className="group"
              variants={cardVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-50/80 border border-emerald-200 p-8 hover:shadow-2xl hover:shadow-emerald-500/10 hover:bg-white transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 p-1">
                    <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center text-4xl font-bold text-emerald-600">
                      P
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold text-center mb-2 text-gray-900">Partner</h3>
                  <p className="text-emerald-600 text-center mb-4 font-medium">IoT Specialist & Backend Architect</p>
                  <p className="text-gray-700 text-center leading-relaxed">
                    Expert in smart systems and automation technologies. Brings innovative IoT solutions and robust
                    backend architectures to life, making the impossible possible.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Founders