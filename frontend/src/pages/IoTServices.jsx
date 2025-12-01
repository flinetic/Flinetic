/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import {
    Cpu, ArrowLeft, Code, Palette, Users, Wrench,
    Globe, Shield, Zap, Star, CheckCircle, Monitor,
    Search, BarChart3, Headphones, Rocket, Award, X, Send, Calendar, Loader, Clock
} from 'lucide-react'
import { Link } from 'react-router-dom'
import iotBg from '../assets/ServicesImages/iotbg.png'

const IoTServices = () => {
    const heroRef = useRef(null)
    const categoriesRef = useRef(null)
    const expertiseRef = useRef(null)
    const techRef = useRef(null)
    const whyUsRef = useRef(null)
    const featuresRef = useRef(null)

    const [showProjectModal, setShowProjectModal] = useState(false)
    const [showConsultationModal, setShowConsultationModal] = useState(false)
    const [projectFormLoading, setProjectFormLoading] = useState(false)
    const [consultationFormLoading, setConsultationFormLoading] = useState(false)
    const [projectFormSuccess, setProjectFormSuccess] = useState(false)
    const [consultationFormSuccess, setConsultationFormSuccess] = useState(false)

    // Body scroll lock effect
    useEffect(() => {
        if (showProjectModal || showConsultationModal) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        
        // Cleanup on unmount
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [showProjectModal, showConsultationModal])

    const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" })
    const isCategoriesInView = useInView(categoriesRef, { once: true, margin: "-100px" })
    const isExpertiseInView = useInView(expertiseRef, { once: true, margin: "-100px" })
    const isTechInView = useInView(techRef, { once: true, margin: "-100px" })
    const isWhyUsInView = useInView(whyUsRef, { once: true, margin: "-100px" })
    const isFeaturesInView = useInView(featuresRef, { once: true, margin: "-100px" })

    const handleProjectSubmit = async (e) => {
        e.preventDefault()
        setProjectFormLoading(true)
        
        setTimeout(() => {
            setProjectFormLoading(false)
            setProjectFormSuccess(true)
            
            setTimeout(() => {
                setProjectFormSuccess(false)
                setShowProjectModal(false)
            }, 3000)
        }, 2000)
    }

    const handleConsultationSubmit = async (e) => {
        e.preventDefault()
        setConsultationFormLoading(true)
        
        setTimeout(() => {
            setConsultationFormLoading(false)
            setConsultationFormSuccess(true)
            
            setTimeout(() => {
                setConsultationFormSuccess(false)
                setShowConsultationModal(false)
            }, 3000)
        }, 2000)
    }

    const iotCategories = [
        {
            icon: Users,
            title: "Smart Garden Watering System",
            description: "Intelligent home systems for lighting, security, climate control, and energy management"
        },
        {
            icon: Wrench,
            title: "Industrial IoT Solutions",
            description: "Manufacturing automation, predictive maintenance, and industrial monitoring systems"
        },
        {
            icon: Star,
            title: "Healthcare IoT",
            description: "Remote patient monitoring, medical device connectivity, and health data analytics"
        },
        {
            icon: Globe,
            title: "Smart Agriculture",
            description: "Precision farming, crop monitoring, irrigation control, and livestock management"
        },
        {
            icon: BarChart3,
            title: "Smart City Solutions",
            description: "Traffic management, environmental monitoring, and urban infrastructure optimization"
        },
        {
            icon: Monitor,
            title: "Wearable Technology",
            description: "Fitness trackers, smartwatches, and health monitoring wearable devices"
        }
    ]

    const ourExpertise = [
        {
            icon: Code,
            title: "Device Programming",
            description: "Firmware development for microcontrollers, sensors, and embedded systems"
        },
        {
            icon: Cpu,
            title: "Hardware Integration",
            description: "Circuit design, sensor integration, and hardware-software communication"
        },
        {
            icon: Globe,
            title: "Connectivity Solutions",
            description: "WiFi, Bluetooth, LoRaWAN, and cellular connectivity implementation"
        },
        {
            icon: Shield,
            title: "IoT Security",
            description: "Device authentication, data encryption, and secure communication protocols"
        },
        {
            icon: BarChart3,
            title: "Data Analytics",
            description: "Real-time data processing, analytics dashboards, and predictive insights"
        },
        {
            icon: Zap,
            title: "Cloud Integration",
            description: "AWS IoT, Azure IoT, and Google Cloud IoT platform integration"
        },
        {
            icon: Search,
            title: "Edge Computing",
            description: "Local data processing, edge AI, and reduced latency solutions"
        },
        {
            icon: Wrench,
            title: "System Maintenance",
            description: "Remote monitoring, OTA updates, and predictive maintenance systems"
        }
    ]

    const technologies = [
        { name: "Arduino", category: "Hardware" },
        { name: "Raspberry Pi", category: "Hardware" },
        { name: "ESP32/ESP8266", category: "Microcontroller" },
        { name: "C/C++", category: "Programming" },
        { name: "Python", category: "Programming" },
        { name: "MQTT", category: "Protocol" },
        { name: "LoRaWAN", category: "Connectivity" },
        { name: "Bluetooth LE", category: "Connectivity" },
        { name: "AWS IoT Core", category: "Cloud" },
        { name: "Node-RED", category: "Platform" },
        { name: "InfluxDB", category: "Database" },
        { name: "Grafana", category: "Visualization" }
    ]

    const whyChooseUs = [
        {
            icon: Users,
            title: "IoT Specialists",
            description: "Two developers with deep expertise in IoT hardware and software integration"
        },
        {
            icon: Rocket,
            title: "Rapid Prototyping",
            description: "Quick proof-of-concept development to validate your IoT solution ideas"
        },
        {
            icon: Headphones,
            title: "End-to-End Support",
            description: "From hardware design to cloud integration and mobile app development"
        },
        {
            icon: BarChart3,
            title: "Scalable Solutions",
            description: "IoT systems designed to scale from prototype to mass production"
        },
        {
            icon: Shield,
            title: "Security First",
            description: "Built-in security measures to protect your IoT devices and data"
        },
        {
            icon: Star,
            title: "Future-Ready",
            description: "Solutions designed with emerging IoT standards and technologies in mind"
        }
    ]

    const plannedFeatures = [
        "Real-time Monitoring",
        "Remote Control Capabilities",
        "Predictive Analytics",
        "Machine Learning Integration",
        "Voice Control Integration",
        "Mobile App Connectivity",
        "Cloud Data Storage",
        "Energy Optimization",
        "Automated Alerts",
        "OTA Updates",
        "Multi-device Synchronization",
        "Advanced Security Protocols"
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
        <div className="bg-zinc-900 text-white min-h-screen">
            {/* Hero Section */}
            <section
                ref={heroRef}
                className="min-h-screen relative overflow-hidden flex items-center justify-center"
                style={{
                    backgroundImage: `url(${iotBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-zinc-900/80" />
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-transparent" />

                {/* Back to Home Link */}
                {/* <Link
                    to="/"
                    className="absolute top-8 left-8 inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors z-20"
                >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back to Home
                </Link> */}

                {/* Hero Content */}
                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
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
                            {/* <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                                <Cpu className="w-10 h-10 text-zinc-900" />
                            </div> */}
                        </motion.div>

                        {/* Title and Tagline */}
                        <motion.div variants={cardVariants}>
                            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-emerald-400 mb-4">
                                IoT Solutions
                            </h1>
                            <p className="text-2xl md:text-3xl text-zinc-300 font-light mb-6">
                                Connecting the Future
                            </p>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            className="text-xl md:text-2xl text-zinc-300 mb-12 leading-relaxed max-w-4xl mx-auto"
                            variants={cardVariants}
                        >
                            We create intelligent IoT systems that connect devices, collect data, and automate processes.
                            From smart homes to industrial automation, we bring the Internet of Things to life.
                        </motion.p>

                        {/* Coming Soon Badge */}
                        <motion.div
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-red-500 rounded-full mb-8"
                            variants={cardVariants}
                        >
                            <Clock className="w-5 h-5 mr-2" />
                            <span className="font-semibold">Coming Soon - Q2 2025</span>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-wrap justify-center gap-6"
                            variants={cardVariants}
                        >
                            <button
                                onClick={() => setShowProjectModal(true)}
                                className="px-10 py-5 bg-gradient-to-r from-emerald-400 to-emerald-600 text-white rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105"
                            >
                                Get Early Access
                            </button>
                            <button
                                onClick={() => setShowConsultationModal(true)}
                                className="px-10 py-5 border-2 border-emerald-400 text-emerald-400 rounded-full hover:bg-emerald-400 hover:text-zinc-900 transition-all duration-300 font-semibold text-lg hover:scale-105"
                            >
                                Schedule Consultation
                            </button>
                        </motion.div>

                        {/* Scroll Indicator */}
                        <motion.div
                            className="absolute bottom-8 left-1/2 transform -tranzinc-x-1/2"
                            variants={cardVariants}
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <div className="w-6 h-10 border-2 border-emerald-400 rounded-full flex justify-center">
                                <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2 animate-pulse" />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* IoT Categories */}
            <section ref={categoriesRef} className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        animate={isCategoriesInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        <motion.h2
                            className="text-4xl md:text-5xl font-serif text-emerald-400 mb-6"
                            variants={cardVariants}
                        >
                            IoT Solution Categories
                        </motion.h2>
                        <motion.p
                            className="text-xl text-zinc-300 max-w-3xl mx-auto"
                            variants={cardVariants}
                        >
                            We develop IoT solutions across various industries and use cases
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        initial="hidden"
                        animate={isCategoriesInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        {iotCategories.map((category, index) => {
                            const IconComponent = category.icon
                            return (
                                <motion.div
                                    key={index}
                                    className="bg-gradient-to-br from-zinc-800 to-zinc-700 rounded-2xl p-8 h-64 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 group flex flex-col relative"
                                    variants={cardVariants}
                                >
                                    <div className="absolute top-4 right-4">
                                        <span className="text-emerald-500 font-semibold text-sm bg-emerald-500/20 px-2 py-1 rounded-full">
                                            Coming Soon
                                        </span>
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <IconComponent className="w-6 h-6 text-zinc-900" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-4 text-white">{category.title}</h3>
                                    <p className="text-zinc-300 leading-relaxed flex-grow">{category.description}</p>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Our Expertise */}
            <section ref={expertiseRef} className="py-20 px-6 bg-gradient-to-br from-zinc-800 to-zinc-900">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        animate={isExpertiseInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        <motion.h2
                            className="text-4xl md:text-5xl font-serif text-emerald-400 mb-6"
                            variants={cardVariants}
                        >
                            Our IoT Expertise
                        </motion.h2>
                        <motion.p
                            className="text-xl text-zinc-300 max-w-3xl mx-auto"
                            variants={cardVariants}
                        >
                            Comprehensive IoT services from hardware to cloud integration
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                        initial="hidden"
                        animate={isExpertiseInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        {ourExpertise.map((expertise, index) => {
                            const IconComponent = expertise.icon
                            return (
                                <motion.div
                                    key={index}
                                    className="bg-zinc-700 rounded-xl p-6 hover:bg-zinc-600 transition-all duration-300 group"
                                    variants={cardVariants}
                                >
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <IconComponent className="w-5 h-5 text-zinc-900" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2 text-white">{expertise.title}</h3>
                                    <p className="text-zinc-300 text-sm leading-relaxed">{expertise.description}</p>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Technologies */}
            <section ref={techRef} className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        animate={isTechInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        <motion.h2
                            className="text-4xl md:text-5xl font-serif text-emerald-400 mb-6"
                            variants={cardVariants}
                        >
                            IoT Technologies & Platforms
                        </motion.h2>
                        <motion.p
                            className="text-xl text-zinc-300 max-w-3xl mx-auto"
                            variants={cardVariants}
                        >
                            We use cutting-edge IoT technologies to build reliable and scalable solutions
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                        initial="hidden"
                        animate={isTechInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={index}
                                className="bg-gradient-to-br from-zinc-800 to-zinc-700 rounded-lg p-4 text-center hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300"
                                variants={cardVariants}
                                whileHover={{ scale: 1.05 }}
                            >
                                <h3 className="text-white font-semibold mb-1">{tech.name}</h3>
                                <p className="text-emerald-400 text-sm">{tech.category}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section ref={whyUsRef} className="py-20 px-6 bg-gradient-to-br from-zinc-800 to-zinc-900">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        animate={isWhyUsInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        <motion.h2
                            className="text-4xl md:text-5xl font-serif text-emerald-400 mb-6"
                            variants={cardVariants}
                        >
                            Why Choose Us for IoT
                        </motion.h2>
                        <motion.p
                            className="text-xl text-zinc-300 max-w-3xl mx-auto"
                            variants={cardVariants}
                        >
                            We're committed to delivering innovative IoT solutions that transform your business
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        initial="hidden"
                        animate={isWhyUsInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        {whyChooseUs.map((reason, index) => {
                            const IconComponent = reason.icon
                            return (
                                <motion.div
                                    key={index}
                                    className="text-center group"
                                    variants={cardVariants}
                                >
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                        <IconComponent className="w-8 h-8 text-zinc-900" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 text-white">{reason.title}</h3>
                                    <p className="text-zinc-300 leading-relaxed">{reason.description}</p>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Planned Features */}
            <section ref={featuresRef} className="py-20 px-6">
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
                            Planned IoT Features & Capabilities
                        </motion.h2>
                        <motion.p
                            className="text-xl text-zinc-300 max-w-3xl mx-auto"
                            variants={cardVariants}
                        >
                            Advanced IoT features and functionalities we're planning to implement
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
                        initial="hidden"
                        animate={isFeaturesInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        {plannedFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center p-4 bg-gradient-to-br from-zinc-800 to-zinc-700 rounded-lg hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300"
                                variants={cardVariants}
                            >
                                <Clock className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                                <span className="text-white font-medium">{feature}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Pricing Packages */}
            {/* <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        animate={isFeaturesInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        <motion.h2
                            className="text-4xl md:text-5xl font-serif text-blue-400 mb-6"
                            variants={cardVariants}
                        >
                            IoT Solution Packages
                        </motion.h2>
                        <motion.p
                            className="text-xl text-zinc-300 max-w-3xl mx-auto mb-4"
                            variants={cardVariants}
                        >
                            Planned pricing for our IoT solutions. Get early access pricing when we launch.
                        </motion.p>
                        <motion.div
                            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-600 to-red-500 rounded-full"
                            variants={cardVariants}
                        >
                            <Clock className="w-4 h-4 mr-2" />
                            <span className="font-semibold text-sm">Expected Launch: Q2 2025</span>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-3 gap-8"
                        initial="hidden"
                        animate={isFeaturesInView ? "visible" : "hidden"}
                        variants={containerVariants}
                        >
                        
                        
                        Basic Package 
                        <motion.div
                            className="bg-gradient-to-br from-zinc-800 to-zinc-700 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 relative"
                            variants={cardVariants}
                        >
                            <div className="absolute top-4 right-4">
                                <span className="text-emerald-500 font-semibold text-xs bg-emerald-500/20 px-2 py-1 rounded-full">
                                    Coming Soon
                                </span>
                            </div>
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-semibold text-white mb-2">Basic IoT</h3>
                                <p className="text-zinc-400 mb-4">Simple IoT solution</p>
                                <div className="text-4xl font-bold text-blue-400 mb-2">$3,500</div>
                                <p className="text-zinc-500 text-sm">Estimated price</p>
                            </div>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-zinc-300">
                                    <Clock className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                                    Up to 5 sensors
                                </li>
                                <li className="flex items-center text-zinc-300">
                                    <Clock className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                                    Basic dashboard
                                </li>
                                <li className="flex items-center text-zinc-300">
                                    <Clock className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                                    Mobile app
                                </li>
                                <li className="flex items-center text-zinc-300">
                                    <Clock className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                                    Cloud integration
                                </li>
                                <li className="flex items-center text-zinc-300">
                                    <Clock className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                                    3 months support
                                </li>
                            </ul>
                            <button
                                onClick={() => setShowProjectModal(true)}
                                className="w-full py-3 border-2 border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300 font-semibold"
                            >
                                Join Waitlist
                            </button>
                        </motion.div>

                        
                        Professional Package
                        <motion.div
                            className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 relative"
                            variants={cardVariants}
                        >
                            <div className="absolute -top-4 left-1/2 transform -tranzinc-x-1/2">
                                <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                    Most Popular
                                </span>
                            </div>
                            <div className="absolute top-4 right-4">
                                <span className="text-emerald-500 font-semibold text-xs bg-emerald-500/20 px-2 py-1 rounded-full">
                                    Coming Soon
                                </span>
                            </div>
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-semibold text-white mb-2">Professional IoT</h3>
                                <p className="text-blue-200 mb-4">Advanced IoT system</p>
                                <div className="text-4xl font-bold text-blue-400 mb-2">$8,500</div>
                                <p className="text-blue-300 text-sm">Estimated price</p>
                            </div>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-blue-100">
                                    <Clock className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                                    Up to 20 sensors
                                </li>
                                <li className="flex items-center text-blue-100">
                                    <Clock className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                                    Advanced analytics
                                </li>
                                <li className="flex items-center text-blue-100">
                                    <Clock className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                                    Real-time alerts
                                </li>
                                <li className="flex items-center text-blue-100">
                                    <Clock className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                                    API integrations
                                </li>
                                <li className="flex items-center text-blue-100">
                                    <Clock className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                                    Custom hardware
                                </li>
                                <li className="flex items-center text-blue-100">
                                    <Clock className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                                    6 months support
                                </li>
                            </ul>
                            <button
                                onClick={() => setShowProjectModal(true)}
                                className="w-full py-3 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 font-semibold"
                            >
                                Join Waitlist
                            </button>
                        </motion.div>

                         
                        Enterprise Package
                        <motion.div
                            className="bg-gradient-to-br from-zinc-800 to-zinc-700 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 relative"
                            variants={cardVariants}
                        >
                            <div className="absolute top-4 right-4">
                                <span className="text-emerald-500 font-semibold text-xs bg-emerald-500/20 px-2 py-1 rounded-full">
                                    Coming Soon
                                </span>
                            </div>
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-semibold text-white mb-2">Enterprise IoT</h3>
                                <p className="text-zinc-400 mb-4">Industrial IoT solution</p>
                                <div className="text-4xl font-bold text-blue-400 mb-2">$25,000+</div>
                                <p className="text-zinc-500 text-sm">Custom pricing</p>
                            </div>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-zinc-300">
                                    <Clock className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                                    Unlimited sensors
                                </li>
                                <li className="flex items-center text-zinc-300">
                                    <Clock className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                                    AI/ML integration
                                </li>
                                <li className="flex items-center text-zinc-300">
                                    <Clock className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                                    Edge computing
                                </li>
                                <li className="flex items-center text-zinc-300">
                                    <Clock className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                                    Custom protocols
                                </li>
                                <li className="flex items-center text-zinc-300">
                                    <Clock className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                                    Scalable infrastructure
                                </li>
                                <li className="flex items-center text-zinc-300">
                                    <Clock className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                                    12 months support
                                </li>
                            </ul>
                            <button
                                onClick={() => setShowConsultationModal(true)}
                                className="w-full py-3 border-2 border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300 font-semibold"
                            >
                                Contact Us
                            </button>
                        </motion.div>

                    </motion.div>

                    <motion.div
                        className="text-center mt-12"
                        initial="hidden"
                        animate={isFeaturesInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        <motion.p
                            className="text-zinc-400 text-lg mb-4"
                            variants={cardVariants}
                        >
                            Early access members will receive special launch pricing and priority support.
                        </motion.p>
                        <motion.div
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full text-white font-semibold"
                            variants={cardVariants}
                        >
                            <Star className="w-5 h-5 mr-2" />
                            Save 30% with Early Access
                        </motion.div>
                    </motion.div>
                </div>
            </section> */}

            {/* CTA Section */}
            <section className="py-20 px-6 bg-gradient-to-br from-zinc-800 to-zinc-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-serif text-emerald-400 mb-6">
                        Ready to Connect Your World?
                    </h2>
                    <p className="text-xl text-zinc-300 mb-4">
                        Get early access to our IoT solutions and be among the first to experience the future of connected devices.
                    </p>
                    <p className="text-lg text-emerald-500 mb-8 font-semibold">
                        Expected Launch: Q2 2025
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            onClick={() => setShowProjectModal(true)}
                            className="px-8 py-4 bg-gradient-to-r from-emerald-400 to-emerald-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
                        >
                            Get Early Access
                        </button>
                        <button
                            onClick={() => setShowConsultationModal(true)}
                            className="px-8 py-4 border-2 border-emerald-400 text-emerald-400 rounded-full hover:bg-emerald-400 hover:text-white transition-all duration-300 font-semibold"
                        >
                            Schedule Consultation
                        </button>
                    </div>
                </div>
            </section>

            {/* Early Access Modal */}
            <AnimatePresence>
                {showProjectModal && (
                    <motion.div
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start justify-center p-6 overflow-y-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowProjectModal(false)}
                    >
                        <motion.div
                            className="bg-zinc-800 rounded-2xl p-8 max-w-2xl w-full my-8 max-h-[80vh] overflow-y-auto"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex items-center">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mr-4">
                                        <Send className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-3xl font-semibold text-blue-400">Get Early Access</h3>
                                </div>
                                <button
                                    onClick={() => setShowProjectModal(false)}
                                    className="text-zinc-400 hover:text-white transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {projectFormSuccess ? (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle className="w-8 h-8 text-white" />
                                    </div>
                                    <h4 className="text-2xl font-semibold text-emerald-400 mb-2">Welcome to Early Access!</h4>
                                    <p className="text-zinc-300">
                                        Thank you for your interest! We'll notify you as soon as our IoT solutions are available and keep you updated on our progress.
                                    </p>
                                </div>
                            ) : (
                                <>
                                    <p className="text-zinc-300 mb-8 text-lg">
                                        Be among the first to experience our IoT solutions. Sign up for early access and get notified when we launch in Q2 2025.
                                    </p>

                                    <form className="space-y-6" onSubmit={handleProjectSubmit}>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-emerald-400 font-medium mb-2">Your Name *</label>
                                                <input
                                                    type="text"
                                                    className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:border-emerald-400 focus:outline-none"
                                                    placeholder="Enter your full name"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-emerald-400 font-medium mb-2">Email Address *</label>
                                                <input
                                                    type="email"
                                                    className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:border-emerald-400 focus:outline-none"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-emerald-400 font-medium mb-2">Company/Organization</label>
                                                <input
                                                    type="text"
                                                    className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:border-emerald-400 focus:outline-none"
                                                    placeholder="Your company name"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-emerald-400 font-medium mb-2">Industry *</label>
                                                <select className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:border-emerald-400 focus:outline-none">
                                                    <option value="">Select your industry</option>
                                                    <option value="manufacturing">Manufacturing</option>
                                                    <option value="healthcare">Healthcare</option>
                                                    <option value="agriculture">Agriculture</option>
                                                    <option value="smart-home">Smart Home</option>
                                                    <option value="retail">Retail</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-emerald-400 font-medium mb-2">IoT Interest Area *</label>
                                            <select className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:border-emerald-400 focus:outline-none">
                                                <option value="">What IoT solution interests you most?</option>
                                                <option value="smart-home">Smart Home Automation</option>
                                                <option value="industrial">Industrial IoT</option>
                                                <option value="healthcare">Healthcare IoT</option>
                                                <option value="agriculture">Smart Agriculture</option>
                                                <option value="wearables">Wearable Technology</option>
                                                <option value="smart-city">Smart City Solutions</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-emerald-400 font-medium mb-2">Tell us about your IoT needs</label>
                                            <textarea
                                                rows="4"
                                                className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:border-emerald-400 focus:outline-none"
                                                placeholder="Describe your IoT project ideas or requirements..."
                                            ></textarea>
                                        </div>

                                        <div className="bg-zinc-700 rounded-lg p-4">
                                            <h4 className="text-emerald-400 font-medium mb-2">Early Access Benefits:</h4>
                                            <ul className="text-zinc-300 text-sm space-y-1">
                                                <li>• First access to our IoT solutions</li>
                                                <li>• Special early adopter pricing</li>
                                                <li>• Direct input on feature development</li>
                                                <li>• Priority support and consultation</li>
                                                <li>• Exclusive updates and previews</li>
                                            </ul>
                                        </div>

                                        <div className="flex flex-wrap gap-4 pt-4">
                                            <button
                                                type="submit"
                                                disabled={projectFormLoading}
                                                className="px-8 py-3 bg-gradient-to-r from-emerald-400 to-emerald-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                                            >
                                                {projectFormLoading ? (
                                                    <>
                                                        <Loader className="w-4 h-4 mr-2 animate-spin" />
                                                        Signing Up...
                                                    </>
                                                ) : (
                                                    'Join Early Access'
                                                )}
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setShowProjectModal(false)}
                                                disabled={projectFormLoading}
                                                className="px-8 py-3 border-2 border-zinc-600 text-zinc-300 rounded-lg hover:border-zinc-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                </>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Schedule Consultation Modal */}
            <AnimatePresence>
                {showConsultationModal && (
                    <motion.div
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start justify-center p-6 overflow-y-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowConsultationModal(false)}
                    >
                        <motion.div
                            className="bg-zinc-800 rounded-2xl p-8 max-w-2xl w-full my-8 max-h-none"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex items-center">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mr-4">
                                        <Calendar className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-3xl font-semibold text-emerald-400">Schedule IoT Consultation</h3>
                                </div>
                                <button
                                    onClick={() => setShowConsultationModal(false)}
                                    className="text-zinc-400 hover:text-white transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {consultationFormSuccess ? (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle className="w-8 h-8 text-white" />
                                    </div>
                                    <h4 className="text-2xl font-semibold text-emerald-400 mb-2">Consultation Scheduled!</h4>
                                    <p className="text-zinc-300">
                                        Your IoT consultation request has been submitted successfully. We'll contact you within 24 hours to discuss your IoT needs.
                                    </p>
                                </div>
                            ) : (
                                <>
                                    <p className="text-zinc-300 mb-8 text-lg">
                                        Book a free 30-minute consultation to discuss your IoT project ideas, requirements, and get expert advice on implementation.
                                    </p>

                                    <form className="space-y-6" onSubmit={handleConsultationSubmit}>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-emerald-400 font-medium mb-2">Your Name *</label>
                                                <input
                                                    type="text"
                                                    className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:border-emerald-400 focus:outline-none"
                                                    placeholder="Enter your full name"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-emerald-400 font-medium mb-2">Email Address *</label>
                                                <input
                                                    type="email"
                                                    className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:border-emerald-400 focus:outline-none"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-emerald-400 font-medium mb-2">Phone Number *</label>
                                                <input
                                                    type="tel"
                                                    className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:border-emerald-400 focus:outline-none"
                                                    placeholder="+1 (555) 123-4567"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-emerald-400 font-medium mb-2">Preferred Time *</label>
                                                <select className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:border-emerald-400 focus:outline-none">
                                                    <option value="">Select preferred time</option>
                                                    <option value="morning">Morning (9 AM - 12 PM)</option>
                                                    <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                                                    <option value="evening">Evening (5 PM - 8 PM)</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-emerald-400 font-medium mb-2">IoT Project Type</label>
                                            <select className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:border-emerald-400 focus:outline-none">
                                                <option value="">What type of IoT project are you considering?</option>
                                                <option value="smart-home">Smart Home Automation</option>
                                                <option value="industrial">Industrial IoT Solution</option>
                                                <option value="healthcare">Healthcare IoT</option>
                                                <option value="agriculture">Smart Agriculture</option>
                                                <option value="wearables">Wearable Technology</option>
                                                <option value="other">Other/Not Sure</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-emerald-400 font-medium mb-2">What would you like to discuss? *</label>
                                            <textarea
                                                rows="4"
                                                className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:border-emerald-400 focus:outline-none"
                                                placeholder="Describe your IoT project ideas, challenges, or questions..."
                                            ></textarea>
                                        </div>

                                        <div className="bg-zinc-700 rounded-lg p-4">
                                            <h4 className="text-emerald-400 font-medium mb-2">What to expect:</h4>
                                            <ul className="text-zinc-300 text-sm space-y-1">
                                                <li>• Free 30-minute consultation call</li>
                                                <li>• IoT project feasibility assessment</li>
                                                <li>• Technology and platform recommendations</li>
                                                <li>• Timeline and budget estimation</li>
                                                <li>• Next steps and development roadmap</li>
                                            </ul>
                                        </div>

                                        <div className="flex flex-wrap gap-4 pt-4">
                                            <button
                                                type="submit"
                                                disabled={consultationFormLoading}
                                                className="px-8 py-3 bg-gradient-to-r from-emerald-400 to-emerald-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                                            >
                                                {consultationFormLoading ? (
                                                    <>
                                                        <Loader className="w-4 h-4 mr-2 animate-spin" />
                                                        Booking...
                                                    </>
                                                ) : (
                                                    'Book IoT Consultation'
                                                )}
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setShowConsultationModal(false)}
                                                disabled={consultationFormLoading}
                                                className="px-8 py-3 border-2 border-zinc-600 text-zinc-300 rounded-lg hover:border-zinc-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                </>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default IoTServices