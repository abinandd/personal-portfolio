import React from 'react'
import { motion } from 'framer-motion'

export default function AvatarCircuit({ className = '' }) {
  // Single pulse with blue-green gradient
  const d = 'M50 2 a48 48 0 1 1 0 96 a48 48 0 1 1 0 -96'
  
  return (
    <svg className={className} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" shapeRendering="geometricPrecision">
      <defs>
        <linearGradient id="blueGreen" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(52,211,153,0)" />
          <stop offset="30%" stopColor="rgba(52,211,153,1)" />
          <stop offset="50%" stopColor="rgba(96,165,250,1)" />
          <stop offset="70%" stopColor="rgba(96,165,250,0.8)" />
          <stop offset="100%" stopColor="rgba(52,211,153,0)" />
        </linearGradient>
      </defs>

      {/* base faint circle */}
      <path d={d} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" />

      {/* single animated pulse */}
      <motion.path
        d={d}
        fill="none"
        stroke="url(#blueGreen)"
        strokeWidth="0.6"
        strokeLinecap="round"
        strokeDasharray="120 240"
        style={{ filter: 'drop-shadow(0 0 12px rgba(96,165,250,0.9)) drop-shadow(0 0 6px rgba(52,211,153,0.8))' }}
        initial={{ strokeDashoffset: 0, opacity: 0.8 }}
        animate={{ strokeDashoffset: -360, opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
      />
    </svg>
  )
}

