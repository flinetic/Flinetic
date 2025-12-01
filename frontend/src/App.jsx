
import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Founders from './components/Founders'
import Expertise from './components/Expertise'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WebServices from './pages/WebServices'
import AppServices from './pages/AppServices'
import IoTServices from './pages/IoTServices'
import SmartDecor from './pages/SmartDecor'
import SmartDecorPreview from './components/SmartDecorPreview'
import useScrollNavigation from './hooks/useScrollNavigation'
import About from './components/About'
import WhyChoose from './components/WhyChoose'
import HowItWorks from './components/HowItWorks'
import SaaS from './pages/saas/SaaSPlatform'
import Dashboard from './pages/saas/dashboard/DashboardLayout'

function HomePage({ section }) {
  // Use scroll navigation hook for smooth scrolling to sections
  useScrollNavigation(section)

  return (
    <>
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="whychooseus">
        <WhyChoose />
      </div>
      <div id="services">
        <Expertise />
      </div>
      <div id="howitworks">
        <HowItWorks />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      
      {/* <div id="smart-decore">
        <SmartDecorPreview />
      </div> */}
      <div id="contact">
        <Contact />
      </div>
    </>
  )
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    // Make Lenis available globally for hash navigation
    window.lenis = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      window.lenis = null
    }
  }, [])

  
  

  return (
    <Router>
      <AppContent />
    </Router>
  )
}

function AppContent() {
  const location = useLocation()
  const hideNavigation = location.pathname.startsWith('/services/saas/dashboard')

  return (
    <div className="bg-white text-gray-900">
      {!hideNavigation && <Navigation />}
      <Routes>
        {/* Home page and section-scrolling routes */}
        <Route path="/" element={<HomePage section="home" />} />
        <Route path="/about" element={<HomePage section="about" />} />
        <Route path="/whychooseus" element={<HomePage section="whychooseus" />} />
        <Route path="/services" element={<HomePage section="services" />} />
        <Route path="/howitworks" element={<HomePage section="howitworks" />} />
        <Route path="/portfolio" element={<HomePage section="portfolio" />} />
        {/* <Route path="/smart-decore" element={<HomePage section="smart-decore" />} /> */}
        <Route path="/contact" element={<HomePage section="contact" />} />

        {/* Service detail pages */}
        <Route path="/services/web" element={<WebServices />} />
        <Route path="/services/app" element={<AppServices />} />
        <Route path="/services/saas" element={<SaaS />} />
        <Route path="/services/iot" element={<IoTServices />} />
        <Route path="/services/saas/dashboard" element={<Dashboard />} />
        {/* <Route path="/smart-decor" element={<SmartDecor />} /> */}
        {/* New informational pages */}
      </Routes>
    </div>
  )
} 

export default App
