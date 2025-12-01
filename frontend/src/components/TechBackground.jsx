/* eslint-disable no-unused-vars */
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const TechBackground = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Multiple parallax layers with different speeds
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 75])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -25])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 10])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -8])

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large Gradient Blobs */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-60 -right-60 w-[500px] h-[500px] bg-gradient-to-br from-emerald-200/6 to-emerald-400/8 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-1/4 -left-40 w-96 h-96 bg-gradient-to-tr from-emerald-300/7 to-emerald-500/9 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-gradient-to-bl from-emerald-400/6 to-emerald-200/7 rounded-full blur-3xl"
      />

      {/* Hexagonal Grid Pattern */}
      <motion.svg
        style={{ y: y1, rotate: rotate1 }}
        className="absolute top-10 right-10 w-full h-full opacity-[1]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse">
            <path
              d="M25,0 L50,14.43 L50,28.87 L25,43.3 L0,28.87 L0,14.43 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-emerald-600"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </motion.svg>

      {/* Circuit Board Lines */}
      <motion.svg
        style={{ y: y2 }}
        className="absolute top-0 left-0 w-full h-full opacity-[0.05]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,100 L200,100 L200,200 L400,200 L400,100 L600,100"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-emerald-500"
        />
        <path
          d="M100,0 L100,150 L300,150 L300,300 L500,300"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
          className="text-emerald-600"
        />
        <circle cx="200" cy="100" r="4" fill="currentColor" className="text-emerald-600" />
        <circle cx="200" cy="200" r="4" fill="currentColor" className="text-emerald-600" />
        <circle cx="400" cy="200" r="4" fill="currentColor" className="text-emerald-600" />
        <circle cx="100" cy="150" r="4" fill="currentColor" className="text-emerald-500" />
        <circle cx="300" cy="150" r="4" fill="currentColor" className="text-emerald-500" />
      </motion.svg>

      {/* Dotted Grid */}
      <motion.svg
        style={{ y: y3 }}
        className="absolute bottom-0 right-0 w-full h-full opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="tech-dots" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="1.5" fill="currentColor" className="text-emerald-500" />
            <circle cx="15" cy="15" r="1" fill="currentColor" className="text-emerald-400" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tech-dots)" />
      </motion.svg>

      {/* Floating Tech Shapes */}
      <motion.div
        style={{ y: y1, rotate: rotate1 }}
        className="absolute top-1/4 right-1/4 w-40 h-40 border border-emerald-400/7 rotate-45"
      >
        <div className="absolute inset-4 border border-emerald-500/6" />
      </motion.div>

      <motion.div
        style={{ y: y2, rotate: rotate2 }}
        className="absolute bottom-1/3 left-1/5 w-32 h-32 border border-emerald-500/6 rounded-full"
      >
        <div className="absolute inset-2 border border-emerald-400/5 rounded-full" />
      </motion.div>

      <motion.div
        style={{ y: y4 }}
        className="absolute top-2/3 right-1/2 w-24 h-24 border border-emerald-300/7"
      >
        <div className="absolute top-1/2 left-0 w-full h-px bg-emerald-400/6" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-emerald-400/6" />
      </motion.div>

      {/* Diagonal Lines */}
      <motion.svg
        style={{ y: y3 }}
        className="absolute top-1/3 left-0 w-full h-full opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="0.5" className="text-emerald-500" />
        <line x1="20%" y1="0" x2="100%" y2="80%" stroke="currentColor" strokeWidth="0.5" className="text-emerald-400" />
        <line x1="0" y1="20%" x2="80%" y2="100%" stroke="currentColor" strokeWidth="0.5" className="text-emerald-600" />
      </motion.svg>

      {/* Subtle Wave Pattern */}
      <motion.svg
        style={{ y: y4 }}
        className="absolute bottom-0 left-0 w-full h-48 opacity-[0.05]"
        viewBox="0 0 1200 150"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,75 Q200,25 400,75 T800,75 T1200,75"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-emerald-600"
        />
        <path
          d="M0,90 Q200,40 400,90 T800,90 T1200,90"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-emerald-500"
        />
      </motion.svg>

      {/* Depth Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/40" />
    </div>
  )
}

export default TechBackground
