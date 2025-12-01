/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import {
    Lightbulb, Wifi, Smartphone, Home, Zap, Star, 
    ShoppingCart, Eye, Heart, ArrowRight, Sparkles,
    Palette, Shield, Clock, Award, CheckCircle, X,
    Send, Calendar, Loader, Play, Volume2, Thermometer
} from 'lucide-react'
import { Link } from 'react-router-dom'

const SmartDecor = () => {
    const heroRef = useRef(null)
    const featuresRef = useRef(null)
    const productsRef = useRef(null)
    const showcaseRef = useRef(null)
    const testimonialsRef = useRef(null)

    const [showProductModal, setShowProductModal] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [showContactModal, setShowContactModal] = useState(false)
    const [contactFormLoading, setContactFormLoading] = useState(false)
    const [contactFormSuccess, setContactFormSuccess] = useState(false)

    // Body scroll lock effect
    useEffect(() => {
        if (showProductModal || showContactModal) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [showProductModal, showContactModal])

    const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" })
    const isFeaturesInView = useInView(featuresRef, { once: true, margin: "-100px" })
    const isProductsInView = useInView(productsRef, { once: true, margin: "-100px" })
    const isShowcaseInView = useInView(showcaseRef, { once: true, margin: "-100px" })
    const isTestimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" })

    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        phone: '',
        product: '',
        message: ''
    })

    const handleContactSubmit = async (e) => {
        e.preventDefault()
        setContactFormLoading(true)

        setTimeout(() => {
            setContactFormLoading(false)
            setContactFormSuccess(true)
            setContactForm({ name: '', email: '', phone: '', product: '', message: '' })

            setTimeout(() => {
                setContactFormSuccess(false)
                setShowContactModal(false)
            }, 3000)
        }, 2000)
    }

    const smartProducts = [
        {
            id: 1,
            name: "Aurora Smart Lamp",
            category: "Ambient Lighting",
            price: "$299",
            image: "/api/placeholder/400/400",
            description: "Butterfly-inspired IoT lamp with 16M colors, voice control, and circadian rhythm sync",
            features: ["Voice Control", "App Integration", "Color Therapy", "Energy Efficient"],
            rating: 4.9,
            inStock: true
        },
        {
            id: 2,
            name: "Zen Garden Controller",
            category: "Wellness Tech",
            price: "$199",
            image: "/api/placeholder/400/400",
            description: "Smart meditation companion with ambient sounds, aromatherapy, and biometric feedback",
            features: ["Biometric Sensors", "Aromatherapy", "Sound Therapy", "App Sync"],
            rating: 4.8,
            inStock: true
        },
        {
            id: 3,
            name: "Floating Display Hub",
            category: "Smart Display",
            price: "$449",
            image: "/api/placeholder/400/400",
            description: "Holographic-style floating display for home automation control and ambient information",
            features: ["Holographic Display", "Gesture Control", "Home Integration", "Weather Sync"],
            rating: 4.9,
            inStock: false
        },
        {
            id: 4,
            name: "Butterfly Motion Sensor",
            category: "Security & Automation",
            price: "$149",
            image: "/api/placeholder/400/400",
            description: "Elegant butterfly-shaped motion sensor with AI learning and artistic design",
            features: ["AI Learning", "Artistic Design", "Motion Detection", "Smart Alerts"],
            rating: 4.7,
            inStock: true
        },
        {
            id: 5,
            name: "Crystal Climate Pod",
            category: "Climate Control",
            price: "$349",
            image: "/api/placeholder/400/400",
            description: "Crystalline smart thermostat with air quality monitoring and aesthetic appeal",
            features: ["Air Quality Monitor", "Smart Scheduling", "Crystal Design", "Energy Saving"],
            rating: 4.8,
            inStock: true
        },
        {
            id: 6,
            name: "Infinity Mirror Portal",
            category: "Decorative Tech",
            price: "$399",
            image: "/api/placeholder/400/400",
            description: "Mesmerizing infinity mirror with smart lighting effects and music synchronization",
            features: ["Infinity Effect", "Music Sync", "Custom Patterns", "Remote Control"],
            rating: 4.9,
            inStock: true
        }
    ]

    const keyFeatures = [
        {
            icon: Wifi,
            title: "Seamless Connectivity",
            description: "Advanced IoT integration with all major smart home platforms and voice assistants"
        },
        {
            icon: Palette,
            title: "Artistic Design",
            description: "Each piece is crafted as functional art, blending technology with aesthetic excellence"
        },
        {
            icon: Shield,
            title: "Premium Security",
            description: "Enterprise-grade encryption and privacy protection for your smart home ecosystem"
        },
        {
            icon: Zap,
            title: "Instant Setup",
            description: "Plug-and-play installation with guided setup through our intuitive mobile app"
        }
    ]

    const testimonials = [
        {
            name: "Sarah Chen",
            role: "Interior Designer",
            content: "These IoT décor pieces have transformed my clients' homes into futuristic sanctuaries. The butterfly lamp is absolutely mesmerizing!",
            rating: 5,
            image: "/api/placeholder/80/80"
        },
        {
            name: "Marcus Rodriguez",
            role: "Tech Enthusiast",
            content: "Finally, smart home tech that doesn't compromise on aesthetics. The floating display hub is like something from a sci-fi movie.",
            rating: 5,
            image: "/api/placeholder/80/80"
        },
        {
            name: "Elena Volkov",
            role: "Architect",
            content: "The perfect fusion of form and function. These pieces elevate any space while providing cutting-edge smart home capabilities.",
            rating: 5,
            image: "/api/placeholder/80/80"
        }
    ]

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
        <div className="bg-zinc-900 text-white">
            {/* Hero Section */}
            <section
                ref={heroRef}
                className="min-h-screen relative overflow-hidden flex items-center justify-center"
            >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700" />
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-20 w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <div className="absolute top-40 right-32 w-1 h-1 bg-emerald-500 rounded-full animate-ping" />
                    <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-emerald-400 rounded-full animate-bounce" />
                    <div className="absolute top-1/3 right-20 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
                    <motion.div
                        initial="hidden"
                        animate={isHeroInView ? "visible" : "hidden"}
                        variants={containerVariants}
                        className="space-y-8"
                    >
                        {/* Icon */}
                        <motion.div
                            className="flex justify-center mb-8"
                            variants={cardVariants}
                        >
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center relative">
                                <Sparkles className="w-12 h-12 text-zinc-900" />
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 animate-pulse opacity-50" />
                            </div>
                        </motion.div>

                        {/* Title and Tagline */}
                        <motion.div variants={cardVariants}>
                            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-emerald-400 mb-6">
                                Smart Décor
                            </h1>
                            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-zinc-300 font-light mb-6">
                                Where Art Meets Intelligence
                            </p>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            className="text-lg sm:text-xl md:text-2xl text-zinc-300 mb-12 leading-relaxed max-w-4xl mx-auto"
                            variants={cardVariants}
                        >
                            Discover the future of home décor with our exclusive collection of IoT-powered artistic pieces. 
                            Each product seamlessly blends cutting-edge technology with breathtaking design, creating 
                            an ecosystem of intelligent beauty for the modern connoisseur.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
                            variants={cardVariants}
                        >
                            <button
                                onClick={() => {
                                    document.getElementById('products').scrollIntoView({ behavior: 'smooth' })
                                }}
                                className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-emerald-400 to-emerald-600 text-zinc-900 rounded-full font-semibold text-sm sm:text-lg hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                            >
                                <ShoppingCart className="w-5 h-5" />
                                Explore Collection
                            </button>
                            <button
                                onClick={() => setShowContactModal(true)}
                                className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 border-2 border-emerald-400 text-emerald-400 rounded-full hover:bg-emerald-400 hover:text-zinc-900 transition-all duration-300 font-semibold text-sm sm:text-lg hover:scale-105 flex items-center justify-center gap-2"
                            >
                                <Calendar className="w-5 h-5" />
                                Schedule Demo
                            </button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
                            variants={cardVariants}
                        >
                            <div className="text-center">
                                <div className="text-3xl font-bold text-emerald-400">50+</div>
                                <div className="text-zinc-400 text-sm">Smart Products</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-emerald-400">98%</div>
                                <div className="text-zinc-400 text-sm">Satisfaction Rate</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-emerald-400">24/7</div>
                                <div className="text-zinc-400 text-sm">Smart Support</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Key Features */}
            <section ref={featuresRef} className="py-20 px-6 bg-gradient-to-br from-zinc-800 to-zinc-900">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        animate={isFeaturesInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        <motion.h2
                            className="text-4xl md:text-5xl font-serif text-emerald-400 mb-6"
                            variants={cardVariants}
                        >
                            Intelligent by Design
                        </motion.h2>
                        <motion.p
                            className="text-xl text-zinc-300 max-w-3xl mx-auto"
                            variants={cardVariants}
                        >
                            Every piece in our collection represents the pinnacle of smart home innovation
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                        initial="hidden"
                        animate={isFeaturesInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        {keyFeatures.map((feature, index) => {
                            const IconComponent = feature.icon
                            return (
                                <motion.div
                                    key={index}
                                    className="text-center group"
                                    variants={cardVariants}
                                >
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                        <IconComponent className="w-8 h-8 text-zinc-900" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                                    <p className="text-zinc-300 leading-relaxed">{feature.description}</p>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Products Showcase */}
            <section id="products" ref={productsRef} className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        animate={isProductsInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        <motion.h2
                            className="text-4xl md:text-5xl font-serif text-emerald-400 mb-6"
                            variants={cardVariants}
                        >
                            Signature Collection
                        </motion.h2>
                        <motion.p
                            className="text-xl text-zinc-300 max-w-3xl mx-auto"
                            variants={cardVariants}
                        >
                            Handcrafted IoT masterpieces that redefine the boundaries between technology and art
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        initial="hidden"
                        animate={isProductsInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        {smartProducts.map((product, index) => (
                            <motion.div
                                key={product.id}
                                className="bg-gradient-to-br from-zinc-800 to-zinc-700 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 group"
                                variants={cardVariants}
                                whileHover={{ y: -10 }}
                            >
                                {/* Product Image */}
                                <div className="relative h-64 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 flex items-center justify-center">
                                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                                        <Lightbulb className="w-16 h-16 text-zinc-900" />
                                    </div>
                                    {!product.inStock && (
                                        <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                                            Coming Soon
                                        </div>
                                    )}
                                    <div className="absolute top-4 left-4 flex gap-2">
                                        <button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                                            <Heart className="w-4 h-4 text-white" />
                                        </button>
                                        <button 
                                            onClick={() => {
                                                setSelectedProduct(product)
                                                setShowProductModal(true)
                                            }}
                                            className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                                        >
                                            <Eye className="w-4 h-4 text-white" />
                                        </button>
                                    </div>
                                </div>

                                {/* Product Info */}
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-emerald-400 text-sm font-medium">{product.category}</span>
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 text-emerald-400 fill-current" />
                                            <span className="text-zinc-300 text-sm">{product.rating}</span>
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                                    <p className="text-zinc-300 text-sm mb-4 leading-relaxed">{product.description}</p>
                                    
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {product.features.slice(0, 2).map((feature, idx) => (
                                            <span key={idx} className="px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="text-2xl font-bold text-white">{product.price}</span>
                                        <button 
                                            className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                                                product.inStock 
                                                    ? 'bg-gradient-to-r from-emerald-400 to-emerald-600 text-zinc-900 hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-105' 
                                                    : 'bg-zinc-600 text-zinc-400 cursor-not-allowed'
                                            }`}
                                            disabled={!product.inStock}
                                        >
                                            {product.inStock ? (
                                                <>
                                                    <ShoppingCart className="w-4 h-4" />
                                                    Add to Cart
                                                </>
                                            ) : (
                                                'Notify Me'
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Testimonials */}
            <section ref={testimonialsRef} className="py-20 px-6 bg-gradient-to-br from-zinc-800 to-zinc-900">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        animate={isTestimonialsInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        <motion.h2
                            className="text-4xl md:text-5xl font-serif text-emerald-400 mb-6"
                            variants={cardVariants}
                        >
                            What Visionaries Say
                        </motion.h2>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-3 gap-8"
                        initial="hidden"
                        animate={isTestimonialsInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className="bg-zinc-700 rounded-xl p-6 hover:bg-zinc-600 transition-all duration-300"
                                variants={cardVariants}
                            >
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mr-4">
                                        <span className="text-zinc-900 font-bold">{testimonial.name[0]}</span>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold">{testimonial.name}</h4>
                                        <p className="text-zinc-400 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                                <div className="flex mb-3">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-emerald-400 fill-current" />
                                    ))}
                                </div>
                                <p className="text-zinc-300 leading-relaxed">{testimonial.content}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Product Modal */}
            <AnimatePresence>
                {showProductModal && selectedProduct && (
                    <motion.div
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowProductModal(false)}
                    >
                        <motion.div
                            className="bg-zinc-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">{selectedProduct.name}</h3>
                                        <p className="text-emerald-400">{selectedProduct.category}</p>
                                    </div>
                                    <button
                                        onClick={() => setShowProductModal(false)}
                                        className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center hover:bg-zinc-600 transition-colors"
                                    >
                                        <X className="w-4 h-4 text-white" />
                                    </button>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="h-64 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-xl flex items-center justify-center">
                                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                                            <Lightbulb className="w-16 h-16 text-zinc-900" />
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-zinc-300 mb-4">{selectedProduct.description}</p>
                                        
                                        <div className="mb-4">
                                            <h4 className="text-white font-semibold mb-2">Features:</h4>
                                            <div className="space-y-2">
                                                {selectedProduct.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-center gap-2">
                                                        <CheckCircle className="w-4 h-4 text-green-400" />
                                                        <span className="text-zinc-300 text-sm">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <span className="text-3xl font-bold text-white">{selectedProduct.price}</span>
                                            <button className="px-6 py-3 bg-gradient-to-r from-emerald-400 to-emerald-600 text-zinc-900 rounded-full font-semibold hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300">
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Contact Modal */}
            <AnimatePresence>
                {showContactModal && (
                    <motion.div
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowContactModal(false)}
                    >
                        <motion.div
                            className="bg-zinc-800 rounded-2xl max-w-md w-full"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {contactFormSuccess ? (
                                <div className="p-8 text-center">
                                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-white mb-2">Demo Scheduled!</h3>
                                    <p className="text-zinc-300">We'll contact you within 24 hours to arrange your personalized demo.</p>
                                </div>
                            ) : (
                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="text-2xl font-bold text-white">Schedule Demo</h3>
                                        <button
                                            onClick={() => setShowContactModal(false)}
                                            className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center hover:bg-zinc-600 transition-colors"
                                        >
                                            <X className="w-4 h-4 text-white" />
                                        </button>
                                    </div>

                                    <form onSubmit={handleContactSubmit} className="space-y-4">
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="Your Name"
                                                value={contactForm.name}
                                                onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                                                className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:border-emerald-400"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="email"
                                                placeholder="Email Address"
                                                value={contactForm.email}
                                                onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                                                className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:border-emerald-400"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="tel"
                                                placeholder="Phone Number"
                                                value={contactForm.phone}
                                                onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                                                className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:border-emerald-400"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <select
                                                value={contactForm.product}
                                                onChange={(e) => setContactForm({...contactForm, product: e.target.value})}
                                                className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:outline-none focus:border-emerald-400"
                                                required
                                            >
                                                <option value="">Select Product Interest</option>
                                                {smartProducts.map(product => (
                                                    <option key={product.id} value={product.name}>{product.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <textarea
                                                placeholder="Tell us about your smart home vision..."
                                                value={contactForm.message}
                                                onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                                                rows={3}
                                                className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:border-emerald-400 resize-none"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={contactFormLoading}
                                            className="w-full py-3 bg-gradient-to-r from-emerald-400 to-emerald-600 text-zinc-900 rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                                        >
                                            {contactFormLoading ? (
                                                <Loader className="w-5 h-5 animate-spin" />
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5" />
                                                    Schedule Demo
                                                </>
                                            )}
                                        </button>
                                    </form>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default SmartDecor