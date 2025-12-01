/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { ArrowLeft, Clock } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const ComingSoon = ({ serviceName, backLink }) => {
  const location = useLocation()

  // Determine service type from URL
  const getServiceType = () => {
    if (location.pathname.includes('/web/')) return 'Web'
    if (location.pathname.includes('/app/')) return 'App'
    if (location.pathname.includes('/iot/')) return 'IoT'
    return 'Service'
  }

  return (
    <div className="bg-zinc-900 text-white min-h-screen">
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            to={backLink}
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to {getServiceType()} Services
          </Link>

          <div className="text-center">
            <motion.div
              className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              <Clock className="w-12 h-12 text-zinc-900" />
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl font-serif text-emerald-400 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Coming Soon
            </motion.h1>

            <motion.p
              className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {serviceName ? `${serviceName} service page` : 'This service page'} is currently under development.
              We're working hard to bring you detailed information about our offerings.
            </motion.p>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-zinc-400">
                In the meantime, feel free to contact us for more information about this service.
              </p>

              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-emerald-400 to-emerald-600 text-zinc-900 rounded-full font-semibold hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ComingSoon