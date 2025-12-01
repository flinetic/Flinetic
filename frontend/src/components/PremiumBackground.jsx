/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'

const PremiumBackground = ({ variant = 'light' }) => {
  const isDark = variant === 'dark'
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Glowing Glass-morphism Blobs */}
      <motion.div
        className={`absolute -top-32 -right-32 w-80 h-80 ${isDark ? 'bg-emerald-500/10' : 'bg-emerald-200/30'} rounded-full blur-3xl`}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`absolute -bottom-32 -left-32 w-72 h-72 ${isDark ? 'bg-emerald-400/8' : 'bg-emerald-100/40'} rounded-full blur-3xl`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Dotted Grid Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`dot-grid-${variant}`} width="25" height="25" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill={isDark ? "#10b981" : "#059669"} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#dot-grid-${variant})`} />
      </svg>

      {/* Flowing Wave Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        {[...Array(6)].map((_, i) => {
          const yPos = 15 + i * 15
          return (
            <motion.path
              key={`wave-${i}`}
              d={`M0,${yPos}% Q25,${yPos - 2}% 50,${yPos}% T100,${yPos}%`}
              fill="none"
              stroke={isDark ? "#10b981" : "#059669"}
              strokeWidth="1"
              strokeDasharray="8 4"
              animate={{ 
                strokeDashoffset: [0, 80]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.3
              }}
            />
          )
        })}
      </svg>

      {/* Abstract Tech Icons */}
      {[...Array(8)].map((_, i) => {
        const randomX = 10 + Math.random() * 80
        const randomY = 10 + Math.random() * 80
        const randomDelay = Math.random() * 2
        const size = 15 + Math.random() * 20
        
        return (
          <motion.div
            key={`tech-icon-${i}`}
            className="absolute"
            style={{
              left: `${randomX}%`,
              top: `${randomY}%`,
            }}
            animate={{
              rotate: [0, 360],
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 5, repeat: Infinity, delay: randomDelay }
            }}
          >
            {i % 4 === 0 && (
              // Circuit Node
              <svg width={size} height={size} className="opacity-30">
                <circle cx={size/2} cy={size/2} r={size/4} fill="none" stroke={isDark ? "#10b981" : "#059669"} strokeWidth="1" />
                <line x1={size/2} y1="0" x2={size/2} y2={size/4} stroke={isDark ? "#10b981" : "#059669"} strokeWidth="0.5" />
                <line x1={size/2} y1={size*3/4} x2={size/2} y2={size} stroke={isDark ? "#10b981" : "#059669"} strokeWidth="0.5" />
              </svg>
            )}
            {i % 4 === 1 && (
              // Hexagon
              <svg width={size} height={size} className="opacity-25">
                <polygon 
                  points={`${size/2},${size*0.15} ${size*0.85},${size*0.35} ${size*0.85},${size*0.65} ${size/2},${size*0.85} ${size*0.15},${size*0.65} ${size*0.15},${size*0.35}`}
                  fill="none" 
                  stroke={isDark ? "#10b981" : "#059669"} 
                  strokeWidth="1"
                />
              </svg>
            )}
            {i % 4 === 2 && (
              // 3D Sphere
              <svg width={size} height={size} className="opacity-20">
                <defs>
                  <radialGradient id={`sphere-${variant}-${i}`}>
                    <stop offset="0%" stopColor={isDark ? "#10b981" : "#059669"} stopOpacity="0.4" />
                    <stop offset="100%" stopColor={isDark ? "#10b981" : "#059669"} stopOpacity="0.05" />
                  </radialGradient>
                </defs>
                <circle cx={size/2} cy={size/2} r={size/2} fill={`url(#sphere-${variant}-${i})`} />
              </svg>
            )}
            {i % 4 === 3 && (
              // Diamond
              <svg width={size} height={size} className="opacity-25">
                <polygon 
                  points={`${size/2},0 ${size},${size/2} ${size/2},${size} 0,${size/2}`}
                  fill="none" 
                  stroke={isDark ? "#10b981" : "#059669"} 
                  strokeWidth="1"
                />
              </svg>
            )}
          </motion.div>
        )
      })}
    </div>
  )
}

export default PremiumBackground
