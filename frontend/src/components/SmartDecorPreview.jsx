/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Sparkles, ArrowRight, ShoppingCart, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'

const SmartDecorPreview = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
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
        <section ref={ref} className="py-32 px-6 bg-zinc-900">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="text-center"
                >
                    {/* Icon */}
                    <motion.div
                        className="flex justify-center mb-8"
                        variants={cardVariants}
                    >
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center relative">
                            <Sparkles className="w-10 h-10 text-zinc-900" />
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 animate-pulse opacity-50" />
                        </div>
                    </motion.div>

                    {/* Title and Tagline */}
                    <motion.div variants={cardVariants}>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-center mb-4 sm:mb-6 text-emerald-400">
                            Smart Décor Collection
                        </h2>
                        <p className="text-lg sm:text-xl text-zinc-300 font-light mb-6">
                            Where Art Meets Intelligence
                        </p>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        className="text-lg sm:text-xl text-zinc-300 mb-12 leading-relaxed max-w-4xl mx-auto font-light px-4"
                        variants={cardVariants}
                    >
                        Discover the future of home décor with our exclusive collection of IoT-powered artistic pieces. 
                        Each product seamlessly blends cutting-edge technology with breathtaking design, creating 
                        an ecosystem of intelligent beauty for the modern connoisseur.
                    </motion.p>

                    {/* Featured Products Preview */}
                    <motion.div
                        className="grid md:grid-cols-3 gap-8 mb-12"
                        variants={containerVariants}
                    >
                        {[
                            {
                                name: "Aurora Smart Lamp",
                                description: "Butterfly-inspired IoT lamp with 16M colors and voice control",
                                price: "$299"
                            },
                            {
                                name: "Zen Garden Controller", 
                                description: "Smart meditation companion with biometric feedback",
                                price: "$199"
                            },
                            {
                                name: "Floating Display Hub",
                                description: "Holographic-style home automation control center",
                                price: "$449"
                            }
                        ].map((product, index) => (
                            <motion.div
                                key={index}
                                className="bg-zinc-800 rounded-2xl p-6 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 group"
                                variants={cardVariants}
                                whileHover={{ y: -10 }}
                            >
                                {/* Product Icon */}
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    <Sparkles className="w-8 h-8 text-zinc-900" />
                                </div>
                                
                                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-zinc-300 text-sm mb-4 leading-relaxed">
                                    {product.description}
                                </p>
                                <div className="text-2xl font-bold text-emerald-400">
                                    {product.price}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
                        variants={cardVariants}
                    >
                        <Link
                            to="/smart-decor"
                            className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-emerald-400 to-emerald-600 text-zinc-900 rounded-full font-semibold text-sm sm:text-lg hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                        >
                            <ShoppingCart className="w-5 h-5" />
                            Explore Collection
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            to="/smart-decor"
                            className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 border-2 border-emerald-400 text-emerald-400 rounded-full hover:bg-emerald-400 hover:text-zinc-900 transition-all duration-300 font-semibold text-sm sm:text-lg hover:scale-105 flex items-center justify-center gap-2"
                        >
                            <Calendar className="w-5 h-5" />
                            Schedule Demo
                        </Link>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
                        variants={cardVariants}
                    >
                        <div className="text-center">
                            <div className="text-3xl font-bold text-emerald-400 mb-2">50+</div>
                            <div className="text-zinc-300">Smart Products</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-emerald-400 mb-2">98%</div>
                            <div className="text-zinc-300">Satisfaction Rate</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-emerald-400 mb-2">24/7</div>
                            <div className="text-zinc-300">Smart Support</div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default SmartDecorPreview