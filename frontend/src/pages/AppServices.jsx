/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import {
    Smartphone, ArrowLeft, Code, Palette, Users, Wrench,
    Globe, Shield, Zap, Star, CheckCircle, Monitor,
    Search, BarChart3, Headphones, Rocket, Award, X, Send, Calendar, Loader, ShoppingCart
} from 'lucide-react'
import { Link } from 'react-router-dom'
// import appBg from '../assets/ServicesImages/appbg.png'
import Footer from '../components/Footer'
import app from '../assets/ServicesImages/app.svg'
import { API_URL } from '../config/api'

const AppServices = () => {
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

    const [selectedPackage, setSelectedPackage] = useState('');
    const [expandedPackage, setExpandedPackage] = useState(null);

    useEffect(() => {
        if (selectedPackage) {
            setFormData(prev => ({
                ...prev,
                package: selectedPackage
            }));
        }
    }, [selectedPackage]);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        platform: '',
        budget: '',
        description: '',
        timeline: '',
        package: selectedPackage,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

     const handleProjectSubmit = async (e) => {
        e.preventDefault();
        setProjectFormLoading(true);

        try {
            // 1. Send to Google Sheet
            const sheetResponse = await fetch(`${API_URL}/submit`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, formType: "appService" }),
            });

            const sheetResult = await sheetResponse.json();

            // 2. Send Email
            const emailResponse = await fetch(`${API_URL}/send-email`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                formType: "appService",
                name: formData.name,
                email: formData.email,
                number: formData.phone,
                projectType: formData.projectType,
                budget: formData.budget,
                timeline: formData.timeline,
                package: formData.package || "Not selected",
                description: formData.description
            }),
        });
        const emailResult = await emailResponse.json();

        if (!sheetResult.success) throw new Error("Sheet submission failed");
        if (!emailResult.success) throw new Error("Email sending failed: " + emailResult.error);

        // ✅ Success
        setProjectFormLoading(false);
        setProjectFormSuccess(true);
        setFormData({
            name: "",
            email: "",
            phone: "",
            projectType: "",
            budget: "",
            timeline: "",
            description: "",
            package: "",
        });

        setTimeout(() => {
            setProjectFormSuccess(false);
            setShowProjectModal(false);
        }, 3000);
        
        } catch (error) {
            console.error("Error submitting form:", error);
            setProjectFormLoading(false);
            alert("There was an error submitting your form. Please try again.");
        }
    }

    const handleConsultationSubmit = async (e) => {
    e.preventDefault();
    setConsultationFormLoading(true);

    try {
        // Send to Google Sheet (optional if you have a separate sheet for consultations)
        const sheetResponse = await fetch(`${API_URL}/submit`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...formData, formType: "consultation" }),
        });
        const sheetResult = await sheetResponse.json();

        // Send Email
        const emailResponse = await fetch(`${API_URL}/send-email`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                formType: "consultation",  // important
                name: formData.name,
                email: formData.email,
                number: formData.phone,
                timeline: formData.timeline, // can be preferred date/time
                description: formData.description
            }),
        });
        const emailResult = await emailResponse.json();

        if (!sheetResult.success) throw new Error("Sheet submission failed");
        if (!emailResult.success) throw new Error("Email sending failed: " + emailResult.error);

        // ✅ Success
        setConsultationFormLoading(false);
        setConsultationFormSuccess(true);

        setFormData({
            name: "",
            email: "",
            phone: "",
            projectType: "",
            budget: "",
            timeline: "",
            description: "",
            package: "",
        });

        setTimeout(() => {
            setConsultationFormSuccess(false);
            setShowConsultationModal(false);
        }, 3000);

    } catch (error) {
        console.error("Error submitting consultation form:", error);
        setConsultationFormLoading(false);
        alert("There was an error submitting your consultation form. Please try again.");
    }
};


    const appCategories = [
        {
            icon: Smartphone,
            title: "Static Apps",
            description: "Simple, beautifully designed informational apps perfect for portfolios, company profiles, and digital presence"
        },
        {
            icon: Users,
            title: "Booking System Apps",
            description: "Efficient appointment and reservation management apps for service-based businesses and professionals"
        },
        {
            icon: ShoppingCart,
            title: "eCommerce Apps",
            description: "Complete mobile commerce solutions with product catalogs, shopping carts, and secure payment processing"
        }
    ]

    const ourExpertise = [
        // Static Apps Expertise
        {
            icon: Smartphone,
            title: "Static App Development",
            description: "Beautiful informational apps with clean UI for portfolios and company profiles"
        },

        // Booking System Apps Expertise
        {
            icon: Calendar,
            title: "Booking System Integration",
            description: "Advanced appointment scheduling with date/time slots and calendar sync"
        },


        // eCommerce Apps Expertise
        {
            icon: ShoppingCart,
            title: "E-Commerce Solutions",
            description: "Complete shopping cart, product catalog, and checkout flow implementation"
        },
        {
            icon: Shield,
            title: "Payment Gateway Integration",
            description: "Secure payment processing with Stripe, PayPal, and other payment providers"
        },


        // General App Expertise
        {
            icon: Zap,
            title: "Performance Optimization",
            description: "Fast loading times, smooth animations, and efficient memory management"
        },


        {
            icon: Smartphone,
            title: "Cross-Platform Apps",
            description: "Apps that work seamlessly across iOS and Android"
        },
        {
            icon: Globe,
            title: "API Integration",
            description: "Seamless integration with third-party services, databases, and cloud platforms"
        },
        {
            icon: Shield,
            title: "App Security",
            description: "Secure authentication, data encryption, and privacy protection implementation"
        }
    ]

    const technologies = [
        { name: "React Native", category: "Cross-Platform" },
        { name: "Flutter", category: "Cross-Platform" },
        { name: "Swift", category: "iOS Native" },
        { name: "Kotlin", category: "Android Native" },
        { name: "Java", category: "Android Native" },
        { name: "Dart", category: "Language" },
        { name: "Firebase", category: "Backend" },
        { name: "SQLite", category: "Database" },
        { name: "Redux", category: "State Management" },
        { name: "GraphQL", category: "API" },
        { name: "Jest", category: "Testing" },
        { name: "Fastlane", category: "CI/CD" }
    ]

    const whyChooseUs = [
        {
            icon: Users,
            title: "Mobile-First Mindset",
            description: "Two developers specialized in creating exceptional mobile experiences"
        },
        {
            icon: Rocket,
            title: "Rapid Prototyping",
            description: "Quick MVP development to test your app idea in the market fast"
        },
        {
            icon: Headphones,
            title: "Direct Collaboration",
            description: "Work directly with the developers throughout the entire app development process"
        },
        {
            icon: BarChart3,
            title: "Cost-Effective Solutions",
            description: "High-quality mobile apps at competitive freelancer rates"
        },
        {
            icon: Shield,
            title: "Quality Assurance",
            description: "Thorough testing on multiple devices and platforms before launch"
        },
        {
            icon: Star,
            title: "Post-Launch Support",
            description: "Continued support for updates, maintenance, and new feature development"
        }
    ]

    const latestFeatures = [
        "Push Notifications",
        "Offline Functionality",
        "Biometric Authentication",
        "Real-time Synchronization",
        "In-App Purchases",
        "Social Media Integration",
        "GPS & Location Services",
        "Camera & Media Integration",
        "Dark Mode Support",
        "Accessibility Features",
        "Analytics Integration",
        "Cloud Storage Integration"
    ]

    const appPackages = [
        {
            name: "Starter App",
            price: "₹9,999",
            startingPriceNote: "Starting price",
            description: "Perfect for individuals, portfolios, and simple service showcases",
            features: [
                "3–5 screens (Home, About, Services, Contact, etc.)",
                "Sleek UI/UX design with light animations",
                "Branding & app icon setup",
                "Launch-ready APK/IPA build",
                "1-month post-launch support"
            ],
            optionalAddons: [
                "Extra screens ₹1,500/screen",
                "Play Store / App Store deployment ₹3,000",
                "Push notifications setup ₹2,500",
                "AI Assistant / Chatbot ₹3,500"
            ],
            notes: "Expenses: tools ₹500–1,000, optional store accounts ₹4,900 (Google) + ₹8,200/year (Apple). Hosting not required for static apps. Profit margin ~90%.",
            ctaLabel: "Get Starter App Quote"
        },
        {
            name: "Professional App",
            price: "₹24,999",
            startingPriceNote: "Starting price",
            description: "Ideal for booking platforms and service businesses needing automation",
            features: [
                "Booking system with date/time slot selection",
                "Admin dashboard to manage bookings",
                "Backend (Firebase or MongoDB) integration",
                "Customer notifications (confirmation & reminders)",
                "2 months post-launch support"
            ],
            optionalAddons: [
                "Payment gateway for bookings ₹5,000+",
                "Multi-location support ₹3,500+",
                "AI Booking Assistant / Smart reminders ₹7,000",
                "Extra customization / branding ₹2,500"
            ],
            notes: "Expenses: hosting/backend ₹1,000–3,000/year, tools ₹1,000–2,000, store accounts optional (~₹4,900 + ₹8,200/year). Profit margin ~65–70%.",
            ctaLabel: "Book Professional App"
        },
        {
            name: "Commerce App",
            price: "₹49,999+",
            startingPriceNote: "Starting price varies by scope",
            description: "Best for brands launching full-featured mobile commerce experiences",
            features: [
                "Product listings with categories & filters",
                "Shopping cart & checkout flow",
                "Secure payment gateway integration",
                "Admin dashboard for product & order management",
                "3 months post-launch support"
            ],
            optionalAddons: [
                "AI Recommendation Engine ₹10,000+",
                "Push notifications & promotional campaigns ₹3,500",
                "Loyalty points, coupons, or subscriptions ₹5,000+",
                "Integration with website inventory / CMS ₹7,000+"
            ],
            notes: "Expenses: hosting/backend ₹2,000–5,000/year, payment gateway setup ₹2,000–3,000, tools ₹2,000–3,000, store accounts optional (~₹4,900 + ₹8,200/year). Profit margin ~55–60%.",
            ctaLabel: "Discuss Commerce App"
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
        <div className="bg-white text-gray-900">
            {/* Hero Section */}
            <section
                ref={heroRef}
                className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950 text-white"
            >
                {/* Background overlays */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black opacity-90" />
                    <div className="absolute top-0 right-0 w-[36rem] h-[36rem] bg-indigo-500/30 blur-[160px]" />
                    <div className="absolute bottom-0 -left-10 w-[28rem] h-[28rem] bg-cyan-500/30 blur-[200px]" />
                </div>

                {/* Hero content */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-28 grid lg:grid-cols-2 gap-6 items-center">

                    {/* Mobile: Illustrator image on top */}
                    <motion.div
                        className="lg:hidden w-full mb-10"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <img src={app} alt="App services illustration" className="w-80 h-auto object-contain mx-auto bg-transparent" />
                    </motion.div>


                    {/* Left: text */}
                    <motion.div
                        initial="hidden"
                        animate={isHeroInView ? "visible" : "hidden"}
                        variants={containerVariants}
                        className="space-y-6 order-2 lg:ordder-1"
                    >
                        <motion.p
                            className="uppercase tracking-[0.3em] text-xs text-indigo-300"
                            variants={cardVariants}
                        >
                            App Services
                        </motion.p>
                        <motion.h1
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-tight"
                            variants={cardVariants}
                        >
                            App Development
                        </motion.h1>
                        <motion.p
                            className="text-lg sm:text-xl md:text-2xl text-white/80"
                            variants={cardVariants}
                        >
                            Building Mobile Excellence
                        </motion.p>
                        <motion.p
                            className="text-base sm:text-lg text-white/70 max-w-xl"
                            variants={cardVariants}
                        >
                            We create powerful, intuitive mobile applications that users love to interact with.
                            From iOS to Android, we build apps that deliver exceptional performance and user experience.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-start items-center"
                            variants={cardVariants}
                        >
                            <button
                                onClick={() => {
                                    setSelectedPackage("")
                                    setShowProjectModal(true)
                                }}
                                className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-indigo-500 to-sky-800 text-white rounded-full font-semibold text-sm sm:text-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                            >
                                Start Your App
                            </button>
                            <button
                                onClick={() => setShowConsultationModal(true)}
                                className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 border-2 border-indigo-400 text-indigo-300 rounded-full hover:bg-indigo-500 hover:border-indigo-500 hover:text-white transition-all duration-300 font-semibold text-sm sm:text-lg hover:-translate-y-1 cursor-pointer"
                            >
                                Schedule Consultation
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Right: image */}
                    <motion.div
                        className="hidden lg:block relative order-1 lg:order-2"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >

                        <img src={app} alt="App services preview" className="object-cover" />
                        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" /> */}

                    </motion.div>

                    {/* Scroll indicator */}
                    <motion.div
                        className="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
                        variants={cardVariants}
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <div className="w-6 h-10 border-2 border-indigo-400 rounded-full flex justify-center">
                            <div className="w-1 h-3 bg-indigo-400 rounded-full mt-2 animate-pulse" />
                        </div>
                    </motion.div>
                </div>
            </section>


            {/* Our Expertise */}
            <section ref={expertiseRef} className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        animate={isExpertiseInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        <motion.p className="uppercase tracking-[0.3em] text-center text-2xl text-indigo-400 mb-4" variants={cardVariants}>Our App Expertise</motion.p>
                        <motion.h2
                            className="text-lg text-indigo-900 max-w-3xl mx-auto"
                            variants={cardVariants}
                        >
                            Comprehensive mobile app services to bring your ideas to life
                        </motion.h2>
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
                                    className="bg-white/80 border border-indigo-300 rounded-xl hover:bg-white p-6 hover:shadow-lg transition-all duration-300 group"
                                    variants={cardVariants}
                                >
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-sky-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <IconComponent className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{expertise.title}</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">{expertise.description}</p>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
            </section>

            {/* App Categories */}
            <section ref={categoriesRef} className="relative py-20 px-6 bg-gray-950">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black opacity-90" />
                    <div className="absolute top-0 right-0 w-[36rem] h-[36rem] bg-indigo-500/30 blur-[160px]" />
                    <div className="absolute bottom-0 -left-10 w-[28rem] h-[28rem] bg-cyan-500/30 blur-[200px]" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        animate={isCategoriesInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        <motion.p className="uppercase tracking-[0.3em] text-center text-2xl text-indigo-300 mb-4" variants={cardVariants}>App Categories</motion.p>

                        <motion.h2
                            className="text-lg text-white max-w-3xl mx-auto"
                            variants={cardVariants}
                        >
                            We specialize in three core types of mobile applications designed to meet your business needs
                        </motion.h2>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        initial="hidden"
                        animate={isCategoriesInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        {appCategories.map((category, index) => {
                            const IconComponent = category.icon
                            return (
                                <motion.div
                                    key={index}
                                    className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 mb-6  h-64 group flex flex-col"
                                    variants={cardVariants}
                                >
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-sky-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <IconComponent className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-4 text-indigo-300">{category.title}</h3>
                                    <p className="text-white/80 leading-relaxed flex-grow">{category.description}</p>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
            </section>



            {/* Technologies */}
            {/* <section ref={techRef} className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        animate={isTechInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        <motion.h2
                            className="text-4xl md:text-5xl font-serif text-indigo-300 mb-6"
                            variants={cardVariants}
                        >
                            Technologies & Frameworks
                        </motion.h2>
                        <motion.p
                            className="text-xl text-zinc-300 max-w-3xl mx-auto"
                            variants={cardVariants}
                        >
                            We use modern technologies to build fast, secure, and scalable mobile applications
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
                                className="bg-gradient-to-br from-zinc-800 to-zinc-700 rounded-lg p-4 text-center hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
                                variants={cardVariants}
                                whileHover={{ scale: 1.05 }}
                            >
                                <h3 className="text-white font-semibold mb-1">{tech.name}</h3>
                                <p className="text-indigo-300 text-sm">{tech.category}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section> */}

            {/* Why Choose Us */}
            <section ref={whyUsRef} className="py-20 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        animate={isWhyUsInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        <motion.p
                            className="uppercase tracking-[0.3em] text-center text-2xl text-indigo-400 mb-4"
                            variants={cardVariants}
                        >
                            Why Choose Us
                        </motion.p>
                        <motion.h2
                            className="text-lg text-indigo-900 max-w-3xl mx-auto"
                            variants={cardVariants}
                        >
                            We're committed to delivering exceptional mobile solutions that drive your business forward
                        </motion.h2>
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
                                    className="text-center group "
                                    variants={cardVariants}
                                >
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-sky-800 flex items-center  justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                        <IconComponent className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{reason.title}</h3>
                                    <p className="text-gray-700 leading-relaxed">{reason.description}</p>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
            </section >

            {/* Latest Features */}
            <section ref={featuresRef} className="relative py-20 px-6 bg-gray-950" >
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black opacity-90" />
                    <div className="absolute top-0 right-0 w-[36rem] h-[36rem] bg-indigo-500/30 blur-[160px]" />
                    <div className="absolute bottom-0 -left-10 w-[28rem] h-[28rem] bg-cyan-500/30 blur-[200px]" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        animate={isFeaturesInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        <motion.p className="uppercase tracking-[0.3em] text-center text-2xl text-indigo-400 mb-4" variants={cardVariants}>Latest Features & Functionality</motion.p>
                        <motion.h2
                            className="text-lg text-white max-w-3xl mx-auto"
                            variants={cardVariants}
                        >
                            Stay ahead with modern mobile features and cutting-edge functionalities
                        </motion.h2>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
                        initial="hidden"
                        animate={isFeaturesInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        {latestFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center p-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur mb-6"
                                variants={cardVariants}
                            >
                                <CheckCircle className="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0" />
                                <span className="text-indigo-300 font-medium">{feature}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section >

            {/* Pricing Packages */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        animate={isFeaturesInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        <motion.p className="uppercase tracking-[0.3em] text-center text-2xl text-indigo-400 mb-4" variants={cardVariants}>Packages</motion.p>
                        <motion.h2
                            className="text-lg text-indigo-900 max-w-3xl mx-auto"
                            variants={cardVariants}
                        >
                            Choose a package that best fits your app vision. All packages include a free consultation and can be customized based on your requirements.
                        </motion.h2>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-3 gap-8"
                        initial="hidden"
                        animate={isFeaturesInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        {appPackages.map((pkg) => {
                            const isExpanded = expandedPackage === pkg.name;
                            return (
                                <motion.div
                                    key={pkg.name}
                                    className="bg-white rounded-2xl p-8 border border-indigo-200 flex flex-col h-full max-h-[640px] shadow-sm"
                                    variants={cardVariants}
                                >
                                    <div className="text-center mb-6">
                                        <motion.p className="uppercase font-semibold tracking-[0.3em] text-center text-[18px] bg-gradient-to-r from-indigo-500 to-indigo-950 bg-clip-text text-transparent mb-2" variants={cardVariants}>{pkg.name}</motion.p>
                                        <div className="text-4xl font-bold bg-gradient-to-r from-indigo-500 to-indigo-950 bg-clip-text text-transparent">{pkg.price}</div>
                                        <p className="text-xs text-zinc-500">{pkg.startingPriceNote}</p>
                                        <p className="text-zinc-700 text-sm mt-4">{pkg.description}</p>
                                    </div>
                                    <div className={`flex-grow relative mb-4 max-h-80 ${isExpanded ? 'overflow-y-auto pr-3 scrollbar-thin' : 'overflow-hidden'}`}>
                                        <div className="space-y-6">
                                            <div>
                                                <p className="text-sm uppercase tracking-wide bg-gradient-to-r from-indigo-500 to-indigo-950 bg-clip-text text-transparent font-semibold mb-3">Features</p>
                                                <ul className="space-y-3">
                                                    {pkg.features.map((feature) => (
                                                        <li key={feature} className="flex items-start text-zinc-800">
                                                            <CheckCircle className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0 mt-0.5" />
                                                            <span>{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="text-sm uppercase tracking-wide bg-gradient-to-r from-indigo-500 to-indigo-950 bg-clip-text text-transparent font-semibold mb-3">Optional Add-ons</p>
                                                <ul className="space-y-3 text-sm text-zinc-700">
                                                    {pkg.optionalAddons.map((addon) => (
                                                        <li key={addon} className="flex items-start">
                                                            <span className="w-2 h-2 rounded-full bg-indigo-400 mt-2 mr-3 flex-shrink-0" />
                                                            <span>{addon}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <p className="text-xs text-zinc-500 italic">{pkg.notes}</p>
                                        </div>
                                        {!isExpanded && (
                                            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-white/0" />
                                        )}
                                    </div>
                                    <button
                                        onClick={() => setExpandedPackage(isExpanded ? null : pkg.name)}
                                        className="bg-gradient-to-r from-indigo-500 to-indigo-950 bg-clip-text text-transparent text-sm font-semibold hover:text-indigo-800 transition-colors mb-4 cursor-pointer"
                                    >
                                        {isExpanded ? 'Hide details' : 'See more'}
                                    </button>
                                    <button
                                        onClick={() => {
                                            setSelectedPackage(pkg.name)
                                            setShowProjectModal(true)
                                        }}
                                        className="w-full py-3 border-2 text-zinc-900 rounded-lg hover:bg-gradient-to-r hover:from-[#1a1c4b] hover:to-[#032536] hover:text-white transition-all duration-300 font-semibold hover:shadow-indigo-500/30 cursor-pointer border-indigo-500 mt-auto"
                                    >
                                        {pkg.ctaLabel}
                                    </button>
                                </motion.div>
                            )
                        })}
                    </motion.div>

                </div>
            </section>

            {/* CTA Section */}
            < section className="relative px-6 bg-gray-950" >
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black opacity-90" />
                    <div className="absolute top-0 right-0 w-[36rem] h-[36rem] bg-indigo-500/30 blur-[160px]" />
                    <div className="absolute bottom-0 -left-10 w-[28rem] h-[28rem] bg-cyan-500/30 blur-[200px]" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto text-center py-20 ">
                    <p className="text-xl md:text-2xl uppercase tracking-[0.3em] text-indigo-300 mb-6">
                        Ready to Build Your Mobile App
                    </p>
                    <p className="text-xl text-zinc-300 mb-8">
                        Let's discuss your app idea and create a mobile solution that stands out in the app stores
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            onClick={() => {
                                setSelectedPackage("")
                                setShowProjectModal(true)
                            }}
                            className="px-10 py-5 bg-gradient-to-r from-indigo-500 to-sky-800 text-zinc-900 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-105 cursor-pointer"
                        >
                            Start Your Project
                        </button>
                        <button
                            onClick={() => setShowConsultationModal(true)}
                            className="px-10 py-5 border-2 border-indigo-300 text-indigo-300 rounded-full hover:bg-indigo-400 hover:text-zinc-900 transition-all duration-300 font-semibold text-lg hover:scale-105 cursor-pointer"
                        >
                            Schedule Consultation
                        </button>
                    </div>
                </div>
                <div className='relative z-10 max-w-7xl mx-auto'>
                    <hr className='w-full text-gray-400' />
                    <Footer />
                </div>
            </section >


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
                            className="bg-zinc-800 rounded-2xl p-6 max-w-6xl w-full my-8 max-h-[90vh] overflow-y-auto"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex items-center">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-sky-800 flex items-center justify-center mr-4">
                                        <Send className="w-6 h-6 text-zinc-900" />
                                    </div>
                                    <h3 className="text-xl md:text-3xl font-semibold text-indigo-300">Start Your App Project</h3>
                                </div>
                                <button
                                    onClick={() =>
                                        setShowProjectModal(false)}
                                    className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                            {projectFormSuccess ? (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle className="w-8 h-8 text-white" />
                                    </div>
                                    <h4 className="text-2xl font-semibold text-green-400 mb-2">Success!</h4>
                                    <p className="text-zinc-300">
                                        Your app project details have been submitted successfully. We'll get back to you within 24 hours with a detailed proposal.
                                    </p>
                                </div>
                            ) : (
                                <>
                                    <div className="grid lg:grid-cols-2 gap-8">
                                        {/* Left Column - Form */}
                                        <div>
                                            <p className="text-zinc-300 mb-6 text-lg">
                                                Ready to bring your app idea to life? Fill out this form and we'll get back to you within 24 hours.
                                            </p>
                                            <form className="space-y-4" onSubmit={handleProjectSubmit}>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-indigo-300 font-medium mb-2">Your Name *</label>
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            value={formData.name}
                                                            onChange={handleInputChange}
                                                            className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:border-indigo-400 focus:outline-none"
                                                            placeholder="Enter your full name"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-indigo-300 font-medium mb-2">Email Address *</label>
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleInputChange}
                                                            className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:border-indigo-400 focus:outline-none"
                                                            placeholder="your@email.com"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-indigo-300 font-medium mb-2">Phone Number</label>
                                                        <input
                                                            type="tel"
                                                            name="phone"
                                                            value={formData.phone}
                                                            onChange={handleInputChange}
                                                            className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:border-indigo-400 focus:outline-none"
                                                            placeholder="+1 (555) 123-4567"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-indigo-300 font-medium mb-2">App Type *</label>
                                                        <select
                                                            name="projectType"
                                                            value={formData.projectType}
                                                            onChange={handleInputChange}
                                                            className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:border-indigo-400 focus:outline-none">
                                                            <option value="">Select app type</option>
                                                            <option value="productivity">Productivity App</option>
                                                            <option value="social">Social Platform</option>
                                                            <option value="ecommerce">E-Commerce App</option>
                                                            <option value="business">Business Solution</option>
                                                            <option value="utility">Utility Application</option>
                                                            <option value="other">Other</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-indigo-300 font-medium mb-2">Platform *</label>
                                                        <select
                                                            name="platform"
                                                            value={formData.platform}
                                                            onChange={handleInputChange}
                                                            className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:border-indigo-400 focus:outline-none">
                                                            <option value="">Select platform</option>
                                                            <option value="ios">iOS Only</option>
                                                            <option value="android">Android Only</option>
                                                            <option value="both">Both iOS & Android</option>
                                                            <option value="cross-platform">Cross-Platform (React Native/Flutter)</option>
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <label className="block text-indigo-300 font-medium mb-2">Project Budget</label>
                                                        <select
                                                            name="budget"
                                                            value={formData.budget}
                                                            onChange={handleInputChange}
                                                            className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:border-indigo-400 focus:outline-none">
                                                            <option value="">Select your budget range</option>
                                                            <option value="5000-10000">$5,000 - $10,000</option>
                                                            <option value="10000-20000">$10,000 - $20,000</option>
                                                            <option value="20000-50000">$20,000 - $50,000</option>
                                                            <option value="50000+">$50,000+</option>
                                                            <option value="discuss">Let's discuss</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-indigo-300 font-medium mb-2">App Description *</label>
                                                    <textarea
                                                        name="description"
                                                        value={formData.description}
                                                        onChange={handleInputChange}
                                                        rows="3"
                                                        className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:border-indigo-400 focus:outline-none"
                                                        placeholder="Tell us about your app idea, features, and goals..."
                                                    ></textarea>
                                                </div>
                                                <div>
                                                    <label className="block text-indigo-300 font-medium mb-2">Timeline</label>
                                                    <select
                                                        name="timeline"
                                                        value={formData.timeline}
                                                        onChange={handleInputChange}
                                                        className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:border-indigo-400 focus:outline-none">
                                                        <option value="">When do you need this completed?</option>
                                                        <option value="asap">ASAP</option>
                                                        <option value="3months">Within 3 months</option>
                                                        <option value="6months">3–6 months</option>
                                                        <option value="flexible">I'm flexible</option>
                                                    </select>
                                                </div>
                                                <div className="flex flex-wrap gap-4 pt-4">
                                                    <button
                                                        type="submit"
                                                        disabled={projectFormLoading}
                                                        className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-sky-800 text-zinc-900 rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center cursor-pointer"
                                                    >
                                                        {projectFormLoading ? (
                                                            <>
                                                                <Loader className="w-4 h-4 mr-2 animate-spin" />
                                                                Sending...
                                                            </>
                                                        ) : (
                                                            'Send App Details'
                                                        )}
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => setShowProjectModal(false)}
                                                        disabled={projectFormLoading}
                                                        className="px-6 py-2 border-2 border-zinc-600 text-zinc-300 rounded-lg hover:border-zinc-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                                                    >
                                                        Cancel
                                                    </button>
                                                    <input type="hidden" name="package" value={selectedPackage} />
                                                </div>
                                            </form>
                                        </div>
                                        {/* Right Column - Info */}
                                        <div className="bg-zinc-700 rounded-xl p-6">
                                            <h4 className="text-indigo-300 font-semibold text-xl mb-4">What happens next?</h4>
                                            <div className="space-y-4">
                                                <div className="flex items-center">
                                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-sky-800 text-zinc-900 flex items-center justify-center text-sm font-semibold mr-3 mt-1 flex-shrink-0">1</div>
                                                    <div>
                                                        <h5 className="text-white font-medium">App Review</h5>
                                                        <p className="text-zinc-300 text-sm">We’ll review your app requirements and prepare a detailed plan.</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center">
                                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-sky-800 text-zinc-900 flex items-center justify-center text-sm font-semibold mr-3 mt-1 flex-shrink-0">2</div>
                                                    <div>
                                                        <h5 className="text-white font-medium">Consultation Call</h5>
                                                        <p className="text-zinc-300 text-sm">30-minute session to discuss your goals and target users.</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center">
                                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-sky-800 text-zinc-900 flex items-center justify-center text-sm font-semibold mr-3 mt-1 flex-shrink-0">3</div>
                                                    <div>
                                                        <h5 className="text-white font-medium">Proposal & Roadmap</h5>
                                                        <p className="text-zinc-300 text-sm">You’ll get a detailed proposal with costs, milestones, and delivery dates.</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center">
                                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-sky-800 text-zinc-900 flex items-center justify-center text-sm font-semibold mr-3 mt-1 flex-shrink-0">4</div>
                                                    <div>
                                                        <h5 className="text-white font-medium">Project Kickoff</h5>
                                                        <p className="text-zinc-300 text-sm">Our developers start building your app.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-6 p-4 bg-zinc-600 rounded-lg">
                                                <h5 className="text-indigo-300 font-medium mb-2">Why choose us?</h5>
                                                <ul className="text-zinc-300 text-sm space-y-1">
                                                    <li>• Experienced app developers (React Native, Flutter)</li>
                                                    <li>• Scalable architecture and modern UI</li>
                                                    <li>• Timely delivery and continuous support</li>
                                                    <li>• Transparent communication throughout</li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Consultation Modal */}
            <AnimatePresence>
                {showConsultationModal && (
                    <motion.div
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowConsultationModal(false)}
                    >
                        <motion.div
                            className="bg-zinc-800 rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex items-center">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-sky-600 flex items-center justify-center mr-4">
                                        <Calendar className="w-6 h-6 text-zinc-900" />
                                    </div>
                                    <h3 className="text-3xl font-semibold text-indigo-300">Schedule Consultation</h3>
                                </div>
                                <button
                                    onClick={() => setShowConsultationModal(false)}
                                    className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {consultationFormSuccess ? (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle className="w-8 h-8 text-white" />
                                    </div>
                                    <h4 className="text-2xl font-semibold text-green-400 mb-2">Consultation Scheduled!</h4>
                                    <p className="text-zinc-300">
                                        Thank you for scheduling a consultation. We'll contact you within 24 hours to confirm your appointment.
                                    </p>
                                </div>
                            ) : (
                                <div>
                                    <p className="text-zinc-300 mb-6 text-lg">
                                        Let's discuss your web project in detail. Schedule a free 30-minute consultation call.
                                    </p>

                                    <form className="space-y-4" onSubmit={handleConsultationSubmit}>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-indigo-300 font-medium mb-2">Your Name *</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:border-indigo-400 focus:outline-none"
                                                    placeholder="Enter your full name"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-indigo-300 font-medium mb-2">Email Address *</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:border-indigo-400 focus:outline-none"
                                                    placeholder="your@email.com"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-indigo-300 font-medium mb-2">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:border-indigo-400 focus:outline-none"
                                                    placeholder="+1 (555) 123-4567"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-indigo-300 font-medium mb-2">Preferred Time</label>
                                                <select 
                                                    name="timeline"
                                                    value={formData.timeline}
                                                    onChange={handleInputChange}
                                                    className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:border-indigo-400 focus:outline-none">
                                                    <option value="">Select preferred time</option>
                                                    <option value="morning">Morning (9 AM - 12 PM)</option>
                                                    <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                                                    <option value="evening">Evening (5 PM - 8 PM)</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-indigo-300 font-medium mb-2">Project Brief</label>
                                            <textarea
                                                rows="3"
                                                name="description"
                                                value={formData.description}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:border-indigo-400 focus:outline-none"
                                                placeholder="Brief description of your web project..."
                                            ></textarea>
                                        </div>

                                        <div className="flex flex-wrap gap-4 pt-4">
                                            <button
                                                type="submit"
                                                disabled={consultationFormLoading}
                                                className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-sky-600 text-zinc-900 rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                                            >
                                                {consultationFormLoading ? (
                                                    <>
                                                        <Loader className="w-4 h-4 mr-2 animate-spin" />
                                                        Scheduling...
                                                    </>
                                                ) : (
                                                    'Schedule Consultation'
                                                )}
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setShowConsultationModal(false)}
                                                disabled={consultationFormLoading}
                                                className="px-6 py-2 border-2 border-zinc-600 text-zinc-300 rounded-lg hover:border-zinc-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div >
    )
}

export default AppServices
