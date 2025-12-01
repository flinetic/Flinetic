/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import {
  CalendarDays,
  CreditCard,
  QrCode,
  BarChart3,
  ShieldCheck,
  Zap,
  Layers,
  Users,
  PhoneCall,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  LineChart,
  LayoutDashboard,
  Briefcase,
  Star,
} from 'lucide-react'

import saas from '../../assets/ServicesImages/saas.svg'

const heroMockup = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2100&q=80'

const modules = [
  {
    name: 'Booking System',
    icon: CalendarDays,
    tagline: 'Appointments, reminders, and synced calendars in one click.',
    features: ['Smart reminders & confirmations', 'Calendar & channel sync', 'Team availability & capacity'],
  },
  {
    name: 'Invoice & Billing',
    icon: CreditCard,
    tagline: 'Generate invoices, track payments, and reconcile in real time.',
    features: ['One-click invoices', 'Automated payment tracking', 'Financial reports & exports'],
  },
  {
    name: 'QR Menu System',
    icon: QrCode,
    tagline: 'Digital menus with instant updates and contactless ordering.',
    features: ['Custom branded QR menus', 'Instant price / item updates', 'Multi-location publishing'],
  },
]

const whyUs = [
  'Multi-module access with a single subscription',
  'Easy setup and intuitive dashboard',
  'Scalable plans for every stage',
  'Premium analytics and executive reports',
  '24/7 success team & product updates',
]

const packages = [
  {
    name: 'Starter',
    price: 999,
    highlight: 'Any 1 module, perfect for early teams.',
    perks: ['Choose 1 module', 'Basic analytics', 'Email notifications', 'Single workspace'],
  },
  {
    name: 'Professional',
    price: 1999,
    highlight: 'Our best seller for growing brands.',
    popular: true,
    perks: ['Choose any 2 modules', 'Smart analytics suite', 'Multi-user support', 'Priority success manager'],
  },
  {
    name: 'Business',
    price: 2999,
    highlight: 'Full platform access and enterprise controls.',
    perks: ['All 3 modules included', 'Premium analytics & AI insights', 'Multi-branch support', 'Custom SLAs & add-ons'],
  },
]

const journeySteps = [
  'Create your workspace & invite your team',
  'Pick the plan that fits and checkout securely',
  'Access the dashboard & enable modules',
  'Customize content, branding, and workflows',
  'Launch modules live and monitor performance',
  'Track analytics and optimize continuously',
]

const testimonials = [
  {
    quote:
      '“Every tool we needed under one roof. Bookings, invoices, and menus run themselves now—our ops team finally sleeps.”',
    name: 'Aisha Raman',
    company: 'Co-Founder, TableFlow Hospitality',
    avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80',
  },
  {
    quote:
      '“The dashboard feels like mission control. We cut onboarding time by 70% and unlock insights we never had before.”',
    name: 'Jacob Mehta',
    company: 'COO, Nova Clinics',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
  },
  {
    quote:
      '“Clients love the seamless QR menu updates and automated billing. Revenue is up 32% after switching.”',
    name: 'Leila Banerjee',
    company: 'Founder, Urban Dine Group',
    avatar: 'https://images.unsplash.com/photo-1544723795-432537dcfb71?auto=format&fit=crop&w=400&q=80',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const glowButton =
  'px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-indigo-900 to-sky-900 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-400/60 transition-transform duration-300 hover:-translate-y-1'

export default function SaaSPlatform() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [])

  return (
    <main className="bg-white text-gray-900">
      <Hero />
      <About />
      <WhyChoose />
      <Modules />
      <Pricing />
      <Journey />
      <DemoCTA />
      <DashboardPreview />
      <hr />
      {/* <TestimonialsSection active={activeTestimonial} /> */}
      <Footer />
    </main>
  )
}

const FAQ_DATA = [
  {
    q: "Do I need to install anything to use the platform?",
    a: "No — the platform is cloud-hosted. Your customers use the booking/menu pages and you manage everything from the dashboard. We handle hosting, backups, and updates."
  },
  {
    q: "Can I try the platform before paying?",
    a: "Yes — we provide a trial period. You can create an account, explore the dashboard and test one module. After the trial ends you can choose a plan."
  },
  {
    q: "How do payments and billing work?",
    a: "You can enable online payments with Razorpay or Stripe. For monthly SaaS billing, we handle recurring subscriptions and invoice generation for you."
  },
  {
    q: "Can I use multiple modules at the same time?",
    a: "Absolutely. Our plans allow you to activate multiple modules. The Professional plan includes any 2 modules and the Business plan includes all 3 modules."
  },
  {
    q: "Do you offer custom integrations (API/ERP/CRM)?",
    a: "Yes — API integrations and custom work are possible as paid add-ons. We connect to payment gateways, WhatsApp/SMS APIs, calendar sync and popular CRMs."
  },
  {
    q: "What support is included?",
    a: "Starter: 1 month support. Professional: 2 months. Business: 3 months premium support. You can also buy dedicated support packages."
  }
];

function Hero() {
  return (
    <section className="relative overflow-hidden py-18 md:py-20 bg-gray-950 text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black opacity-90" />
        <div className="absolute -top-32 right-0 w-[36rem] h-[36rem] bg-indigo-500/30 blur-[160px]" />
        <div className="absolute bottom-0 -left-10 w-[28rem] h-[28rem] bg-cyan-500/30 blur-[200px]" />
      </div>


      {/* Mobile: Illustrator image on top */}
      <motion.div
        className="lg:hidden w-full mb-10 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <img src={saas} alt="SaaS services illustration" className="mt-10 w-full h-auto object-contain mx-auto bg-transparent" />

      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-28 grid lg:grid-cols-2 gap-16 items-stretch">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.8 }} className="order-2 lg:order-1">
          <p className="uppercase tracking-[0.3em] text-sm text-indigo-300 mb-5">All-in-One SaaS Platform</p>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            One platform. Three powerful modules.
          </h1>
          <p className="mt-6 text-lg text-white/80">
            One dashboard. Three powerful modules. Empower teams with real-time insights, automated workflows, and
            conversion-ready experiences.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <a href="/register" className={glowButton}>
              Get Started
            </a>
            <a
              href="/contact"
              className="px-6 py-3 rounded-full font-semibold border border-white/30 text-white hover:bg-white/10 transition-colors"
            >
              Book a Demo
            </a>
          </div>
          {/* <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-indigo-300" />
              SOC2-ready infrastructure
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-indigo-300" />
              Trusted by 5,000+ businesses
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              Rated 4.9 / 5
            </div>
          </div> */}
        </motion.div>
        <motion.div
          className="hidden lg:block relative h-full order-1 lg:order-2"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <img src={saas} alt="Platform mockup" className="object-cover" />
        </motion.div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="uppercase tracking-[0.3em] text-xs text-indigo-500 mb-4">About the platform</p>
          <h2 className="text-4xl font-semibold text-gray-900 mb-6">One command center for modern businesses.</h2>
          <p className="text-lg text-gray-600 mb-6">
            Give every team a live, intuitive dashboard that centralizes booking, billing, and customer-facing experiences.
            Real-time analytics unlock better decisions while AI nudges keep operations moving.
          </p>
          <p className="text-lg text-gray-600">
            Whether you manage a boutique studio or hundreds of locations, the platform adapts with scalable modules,
            instant updates, and unified reporting.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-3 gap-6">
          {modules.map((module) => {
            const Icon = module.icon
            return (
              <motion.div
                key={module.name}
                className="rounded-3xl border border-gray-100 bg-gradient-to-b from-gray-50 to-white p-6 shadow-sm"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <p className="text-sm font-semibold text-gray-900">{module.name}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function WhyChoose() {
  return (
    <section className="py-24 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div className="text-center max-w-3xl mx-auto mb-14" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="uppercase tracking-[0.3em] text-lg text-indigo-300 mb-4">Why choose us</p>
          <h2 className="text-4xl font-semibold">Built for ambitious teams that demand clarity.</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {whyUs.map((point, index) => (
            <motion.div
              key={point}
              className="flex items-start gap-4 p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-indigo-300" />
              </div>
              <p className="text-lg text-white/90">{point}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Modules() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div className="text-center max-w-3xl mx-auto mb-16" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="uppercase tracking-[0.3em] text-xs text-indigo-500 mb-4">Feature spotlight</p>
          <h2 className="text-4xl font-semibold text-gray-900 mb-4">Modules engineered to work smarter together.</h2>
          <p className="text-gray-600">
            Activate any module independently or combine all three for a full command center experience.
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-3 gap-8">
          {modules.map((module, index) => {
            const Icon = module.icon
            return (
              <motion.div
                key={module.name}
                className="p-8 rounded-3xl bg-white border border-gray-100 shadow-xl shadow-indigo-100/40 group"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-900 to-sky-900 text-white flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">{module.name}</h3>
                <p className="text-gray-600 mb-5">{module.tagline}</p>
                <ul className="space-y-3 text-gray-600">
                  {module.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-indigo-500 flex-shrink-0" /> {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section className="py-24 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div className="text-center max-w-3xl mx-auto mb-14" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="uppercase tracking-[0.3em] text-xs text-indigo-500 mb-4">Packages</p>
          <h2 className="text-4xl font-semibold text-gray-900 mb-4">Flexible plans shaped for your growth curve.</h2>
          <p className="text-gray-600">
            All plans include centralized dashboard access, real-time analytics, and unlimited updates. Add-ons for SMS
            credits, AI insights, and white-labeling are available at checkout.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`rounded-3xl border p-8 shadow-lg bg-white border-gray-300`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* {plan.popular && (
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/20 text-black text-sm font-semibold mb-4">
                  Most Popular
                </div>
              )} */}
              <h3 className={`text-2xl font-semibold mb-2text-gray-900`}>{plan.name}</h3>
              <p className={`'text-gray-500 mb-6`}>{plan.highlight}</p>
              <div className="flex items-baseline gap-2 mb-6">
                <span className={`text-4xl font-semibold text-gray-900`}>₹{plan.price}</span>
                <span className={'text-gray-500'}>/ month</span>
              </div>
              <ul className={`space-y-3 mb-8 text-gray-600`}>
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-2">
                    <BarChart3 className={`w-4 h-4 ${plan.popular ? 'text-white' : 'text-indigo-500'}`} /> {perk}
                  </li>
                ))}
              </ul>
              <button className={`${glowButton} w-full ${plan.popular ? 'bg-white text-indigo-600 hover:-translate-y-1' : ''}`}>Select Package</button>
              <p className={`mt-4 text-sm text-gray-500`}>Login or register to complete purchase.</p>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 mt-10 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-indigo-500" />
          Cancel anytime • No credit card needed for trial
        </p>
      </div>
    </section>
  )
}

function Journey() {
  return (
    <section className="py-24 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div className="text-center max-w-3xl mx-auto mb-14" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="uppercase tracking-[0.3em] text-xs text-indigo-300 mb-4">How it works</p>
          <h2 className="text-4xl font-semibold">From signup to insights in under 10 minutes.</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {journeySteps.map((step, index) => (
            <motion.div
              key={step}
              className="p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur flex items-start gap-5"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/30 flex items-center justify-center text-2xl font-semibold">
                {String(index + 1).padStart(2, '0')}
              </div>
              <p className="text-white/90 text-lg">{step}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DemoCTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="uppercase tracking-[0.3em] text-xs text-indigo-500 mb-3">Need a walkthrough?</p>
          <h2 className="text-4xl font-semibold text-gray-900 mb-4">See the platform in action.</h2>
          <p className="text-lg text-gray-600 mb-6">
            Book a live session with our product team. We’ll tailor the demo around your modules of interest, data
            sources, and rollout timelines.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/contact" className={glowButton}>
              Book a Demo
            </a>
            <a
              href="/register"
              className="px-6 py-3 rounded-full font-semibold border border-gray-200 text-gray-900 hover:bg-gray-50 transition-colors"
            >
              Start Free Trial
            </a>
          </div>
          <div className="mt-8 flex items-center gap-4 text-sm text-gray-500">
            <PhoneCall className="w-5 h-5 text-indigo-500" />
            Average response time: under 2 hours.
          </div>
        </motion.div>
        <motion.form
          className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 space-y-5"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div>
            <label className="text-sm font-semibold text-gray-700">Full Name</label>
            <input type="text" className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-indigo-200 focus:outline-none" placeholder="Avery Sharma" />
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-700">Email</label>
            <input type="email" className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-indigo-200 focus:outline-none" placeholder="you@company.com" />
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-700">Company</label>
            <input type="text" className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-indigo-200 focus:outline-none" placeholder="Company name" />
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-700">Interested Module</label>
            <select className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-indigo-200 focus:outline-none">
              <option>Booking System</option>
              <option>Invoice & Billing</option>
              <option>QR Menu System</option>
              <option>All Modules</option>
            </select>
          </div>
          <button type="button" className={`${glowButton} w-full`}>
            Request Live Demo
          </button>
        </motion.form>
      </div>
    </section>
  )
}

function DashboardPreview() {
  return (
    <section className="py-24 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div className="mb-16 text-center max-w-3xl mx-auto" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="uppercase tracking-[0.3em] text-xs text-indigo-300 mb-4">Dashboard preview</p>
          <h2 className="text-4xl font-semibold mb-4">Clarity across modules, locations, and outcomes.</h2>
          <p className="text-white/70">
            A single timeline for alerts, revenue snapshots, booking health, menu changes, and invoice statuses. Drill
            down to see every action and automate the next best move.
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 shadow-2xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <LayoutDashboard className="w-6 h-6 text-indigo-300" />
              <h3 className="text-xl font-semibold">Live Command Center</h3>
            </div>
            <ul className="space-y-4 text-white/80">
              <li className="flex items-center gap-3">
                <ArrowRight className="w-4 h-4 text-indigo-300" /> Real-time analytics: revenue, bookings, and table turns
              </li>
              <li className="flex items-center gap-3">
                <ArrowRight className="w-4 h-4 text-indigo-300" /> Module toggles and automation rules
              </li>
              <li className="flex items-center gap-3">
                <ArrowRight className="w-4 h-4 text-indigo-300" /> AI alerts and recommended optimizations
              </li>
              <li className="flex items-center gap-3">
                <ArrowRight className="w-4 h-4 text-indigo-300" /> Multi-location status heatmaps
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600 to-sky-500 p-8 shadow-2xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <LineChart className="w-6 h-6 text-white" />
              <h3 className="text-xl font-semibold">Data in one glance</h3>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-2xl p-5 text-center">
                <p className="text-3xl font-semibold">+48%</p>
                <p className="text-sm text-white/80">Bookings converted</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-5 text-center">
                <p className="text-3xl font-semibold">₹1.2M</p>
                <p className="text-sm text-white/80">Invoices settled</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-5 text-center">
                <p className="text-3xl font-semibold">3.4s</p>
                <p className="text-sm text-white/80">QR menu load time</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-5 text-center">
                <p className="text-3xl font-semibold">99.95%</p>
                <p className="text-sm text-white/80">Uptime guarantee</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection({ active }) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-xs text-indigo-500 mb-4">Testimonials</p>
          <h2 className="text-4xl font-semibold text-gray-900">What visionary teams are saying</h2>
        </div>
        <div className="relative min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="rounded-3xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 shadow-2xl p-10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <img src={testimonials[active].avatar} alt={testimonials[active].name} className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-gray-900">{testimonials[active].name}</p>
                  <p className="text-sm text-gray-500">{testimonials[active].company}</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">{testimonials[active].quote}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(i) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <section className="container mx-auto px-6 lg:px-20 py-16" id="faq">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-white">Frequently asked questions</h2>
        <p className="mt-3 text-gray-400">Answers to the most common questions about the platform, pricing and setup.</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-3">
        {FAQ_DATA.map((item, i) => (
          <FAQItem
            key={i}
            index={i}
            question={item.q}
            answer={item.a}
            isOpen={openIndex === i}
            onToggle={() => toggle(i)}
          />
        ))}
      </div>
    </section>
  );
}

function FAQItem({ index, question, answer, isOpen, onToggle }) {
  return (
    <div className="bg-[#0b0a0f] border border-gray-800 rounded-2xl overflow-hidden">
      <button
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${index}`}
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
      >
        <span className="text-left">
          <div className="text-white font-semibold">{question}</div>
          <div className="text-sm text-gray-400 mt-1 hidden lg:block">Click to expand for the full answer.</div>
        </span>

        <svg
          className={`w-5 h-5 transform transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"} text-gray-300`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        id={`faq-panel-${index}`}
        role="region"
        aria-labelledby={`faq-button-${index}`}
        className={`px-6 pb-6 text-gray-300 transition-all duration-200 ${isOpen ? "block" : "hidden"}`}
      >
        <p className="text-sm leading-7">{answer}</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
            <Layers className="w-6 h-6 text-indigo-400" />
            <span className='tracking-widest font-semibold bg-gradient-to-r from-indigo-500  to-indigo-950 bg-clip-text text-transparent'>FLINETIC</span>
          </div>
          <p className="text-white/70 mb-6">
            Crafting Tomorrow's Digital Experiences
          </p>
          <div className="flex gap-4 text-white/70 text-sm">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
            <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="hover:text-white">Dribbble</a>
          </div>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-[0.3em] text-white/60 mb-4">Navigate</h4>
          <ul className="space-y-2 text-white/70 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            <li><a href="/register" className="hover:text-white">Get Started</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-[0.3em] text-white/60 mb-4">Support</h4>
          <ul className="space-y-2 text-white/70 text-sm">
            <li><a href="/" className="hover:text-white">Help Center</a></li>
            <li><a href="/" className="hover:text-white">Status</a></li>
            <li><a href="/" className="hover:text-white">Privacy</a></li>
            <li><a href="/" className="hover:text-white">Terms</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-10 text-center text-white/50 text-sm">
        © {new Date().getFullYear()} <span className='tracking-widest font-semibold bg-gradient-to-r from-white/70  to-indigo-600 bg-clip-text text-transparent'>FLINETIC</span>. All rights reserved.
      </div>
    </footer>
  )
}


