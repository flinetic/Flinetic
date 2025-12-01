/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, Linkedin, Instagram, Heart, Layers } from 'lucide-react'

const Footer = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    // <footer ref={ref} className="py-16 px-6 bg-gray-950 relative overflow-hidden">
    //   {/* Background elements */}
    //   {/* <div className="absolute inset-0">
    //     <div className="absolute bottom-0 left-1/2 transform -tranzinc-x-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
    //   </div> */}

    //   <div className="max-w-7xl mx-auto relative z-10">
    //     <motion.div
    //       initial="hidden"
    //       animate={isInView ? "visible" : "hidden"}
    //       variants={containerVariants}
    //       className="text-center"
    //     >
    //       {/* Logo/Brand */}
    //       <motion.div variants={itemVariants} className="mb-8">
    //         <h3 className="text-3xl font-serif bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 bg-clip-text text-transparent mb-2">FLINETIC</h3>
    //         <p className="text-zinc-400">Crafting Tomorrow's Digital Experiences</p>
    //       </motion.div>

    //       {/* Social Links */}
    //       <motion.div variants={itemVariants} className="flex justify-center gap-6 mb-8">
    //         {socialLinks.map((social, index) => {
    //           const IconComponent = social.icon
    //           return (
    //             <motion.a
    //               key={index}
    //               href={social.href}
    //               className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:bg-zinc-700 transition-all duration-300"
    //               whileHover={{ scale: 1.1, y: -2 }}
    //               whileTap={{ scale: 0.95 }}
    //               aria-label={social.label}
    //             >
    //               <IconComponent className="w-5 h-5" />
    //             </motion.a>
    //           )
    //         })}
    //       </motion.div>

    //       {/* Navigation Links */}
    //       <motion.div variants={itemVariants} className="mb-8">
    //         <div className="flex flex-wrap justify-center gap-8 text-zinc-400">
    //           {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((link, index) => (
    //             <motion.a
    //               key={index}
    //               href={`#${link.toLowerCase()}`}
    //               className="hover:text-emerald-400 transition-colors duration-300"
    //               whileHover={{ y: -2 }}
    //             >
    //               {link}
    //             </motion.a>
    //           ))}
    //         </div>
    //       </motion.div>

    //       {/* Divider */}
    //       <motion.div 
    //         variants={itemVariants}
    //         className="w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent mb-8"
    //       />

    //       {/* Copyright */}
    //       <motion.div variants={itemVariants} className="space-y-2">
    //         <p className="text-zinc-400 flex items-center justify-center gap-2">
    //           Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> in Pune, Maharashtra
    //         </p>
    //         <p className="text-zinc-500 text-sm">
    //           © {new Date().getFullYear()} FLINETIC. All rights reserved.
    //         </p>
    //       </motion.div>

    //       {/* Scroll to top indicator */}
    //       <motion.div
    //         variants={itemVariants}
    //         className="mt-8"
    //       >
    //         <motion.button
    //           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    //           className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 hover:bg-emerald-500/30 transition-all duration-300 mx-auto"
    //           whileHover={{ scale: 1.1, y: -2 }}
    //           whileTap={{ scale: 0.95 }}
    //         >
    //           <motion.div
    //             animate={{ y: [-2, 2, -2] }}
    //             transition={{ duration: 2, repeat: Infinity }}
    //           >
    //             ↑
    //           </motion.div>
    //         </motion.button>
    //       </motion.div>
    //     </motion.div>
    //   </div>
    // </footer>
    <footer className="bottom-0 text-white pt-16 pb-5">
      <div className="mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-5">
        <div className="md:col-span-2">
          <div className="text-2xl font-semibold text-white mb-4 flex items-center gap-2 tracking-widest">
            <Layers className="w-6 h-6 text-indigo-400" />
            <span className='tracking-widest font-semibold bg-gradient-to-r from-white/70  to-indigo-600 bg-clip-text text-transparent'>FLINETIC</span>
          </div>
          <p className="text-indigo-200">
            Empowering Business Through Modern Tech.
          </p>
        </div>
        <div className='flex flex-row justify-between gap-4 w-full'>
          <div>
            <h4 className="text-sm uppercase tracking-[0.3em] text-white/90 font-bold mb-4">Navigate</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="/register" className="hover:text-white">Get Started</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-[0.3em] text-white/90 font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><a href="/" className="hover:text-white">Help Center</a></li>
              <li><a href="/" className="hover:text-white">Status</a></li>
              <li><a href="/" className="hover:text-white">Privacy</a></li>
              <li><a href="/" className="hover:text-white">Terms</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-[0.3em] text-white/90 font-bold mb-4">Socials</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a></li>
              <li><a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white">Instagram</a></li>
              <li><a href="https://faceboook.com" target="_blank" rel="noreferrer" className="hover:text-white">Facebook</a></li>
            </ul>
          </div>

        </div>
      </div>
      <div className="mt-10 text-center text-white/50 text-sm">
        © {new Date().getFullYear()} <span className='tracking-widest font-semibold bg-gradient-to-r from-white/70  to-indigo-600 bg-clip-text text-transparent'>FLINETIC</span>. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer