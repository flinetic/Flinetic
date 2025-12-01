/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Salon Owner",
      company: "Elegance Beauty Studio",
      content: "They made our brand feel alive — visually stunning and efficient! Our booking system has never been smoother.",
      rating: 5,
      avatar: "PS"
    },
    {
      name: "Rajesh Kumar", 
      role: "Gym Owner",
      company: "FitZone Fitness",
      content: "Incredible attention to detail and user experience. Our members love the new platform and management is effortless.",
      rating: 5,
      avatar: "RK"
    },
    {
      name: "Anita Desai",
      role: "Restaurant Manager", 
      company: "Café Aroma",
      content: "Professional, creative, and delivered beyond expectations. Our online orders increased by 300% after launch!",
      rating: 5,
      avatar: "AD"
    }
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
    hidden: { opacity: 0, y: 60, rotateX: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section ref={ref} className="py-32 px-6 bg-zinc-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-serif text-center mb-6 text-emerald-400"
            variants={cardVariants}
          >
            Client Stories
          </motion.h2>
          
          <motion.p 
            className="text-xl text-zinc-300 text-center mb-20 max-w-3xl mx-auto font-light"
            variants={cardVariants}
          >
            Hear from the businesses we've helped transform
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="group"
                variants={cardVariants}
                whileHover={{ y: -10, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-700 p-8 h-full hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Quote icon */}
                  <div className="absolute top-6 right-6 opacity-20">
                    <Quote className="w-12 h-12 text-emerald-400" />
                  </div>

                  <div className="relative z-10">
                    {/* Stars */}
                    <div className="flex mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-emerald-400 fill-current" />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-zinc-300 mb-8 leading-relaxed text-lg italic">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-zinc-900 font-bold mr-4">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{testimonial.name}</h4>
                        <p className="text-emerald-400 text-sm">{testimonial.role}</p>
                        <p className="text-zinc-400 text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust indicators */}
          <motion.div 
            className="mt-20 text-center"
            variants={cardVariants}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">50+</div>
                <div className="text-zinc-300">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">100%</div>
                <div className="text-zinc-300">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">2+</div>
                <div className="text-zinc-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">24/7</div>
                <div className="text-zinc-300">Support Available</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials