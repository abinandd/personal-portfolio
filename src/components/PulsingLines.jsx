import React from 'react'
import { motion } from 'framer-motion'

export default function PulsingLines() {
  const topPaths = [
    'M500 40 C 360 40 320 80 220 100 C 180 108 160 120 120 130',
    'M520 60 C 420 60 380 100 300 120',
    'M540 90 C 440 90 410 120 360 140',
    'M500 40 C 640 40 680 80 780 100 C 820 108 840 120 880 130',
    'M480 70 C 580 70 620 100 700 120',
    'M460 100 C 560 100 590 125 640 140'
  ]
  const bottomPaths = [
    'M500 280 C 360 280 320 240 220 220 C 180 212 160 200 120 190',
    'M520 260 C 420 260 380 220 300 200',
    'M540 230 C 440 230 410 200 360 180',
    'M500 280 C 640 280 680 240 780 220 C 820 212 840 200 880 190',
    'M480 250 C 580 250 620 220 700 200',
    'M460 220 C 560 220 590 195 640 180'
  ]

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <svg className="absolute inset-0 hidden" viewBox="0 0 1000 320" preserveAspectRatio="none">
        <defs>
          <linearGradient id="circuitBlue" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0" />
            <stop offset="30%" stopColor="#60a5fa" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#60a5fa" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="circuitWarm" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0" />
            <stop offset="30%" stopColor="#f59e0b" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#f59e0b" stopOpacity="0" />
          </linearGradient>
        </defs>

        {[...topPaths, ...bottomPaths].map((d, i) => (
          <g key={i}>
            <path id={`c-${i}`} d={d} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
            <motion.path
              d={d}
              fill="none"
              stroke={i % 2 === 0 ? 'url(#circuitBlue)' : 'url(#circuitWarm)'}
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="60 600"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: [-0, -660] }}
              transition={{ duration: 5 + (i % 6) * 0.6, repeat: Infinity, ease: 'linear' }}
            />
            <circle r="2.5" fill={i % 2 === 0 ? '#60a5fa' : '#f59e0b'} style={{ filter: 'drop-shadow(0 0 6px rgba(96,165,250,0.9))' }}>
              <animateMotion dur={`${4 + (i % 6) * 0.7}s`} repeatCount="indefinite" begin={`${(i % 6) * 0.4}s`}>
                <mpath xlinkHref={`#c-${i}`} />
              </animateMotion>
            </circle>
            <circle r="2" fill={i % 2 === 0 ? '#3b82f6' : '#fbbf24'} style={{ filter: 'drop-shadow(0 0 5px rgba(251,191,36,0.8))' }}>
              <animateMotion dur={`${6 + (i % 6) * 0.8}s`} repeatCount="indefinite" begin={`${0.8 + (i % 6) * 0.5}s`}>
                <mpath xlinkHref={`#c-${i}`} />
              </animateMotion>
            </circle>
          </g>
        ))}
      </svg>

      {/* Center sacred circuit (yantra-like) */}
      <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0" width="680" height="680" viewBox="-220 -220 440 440">
        <defs>
          <radialGradient id="ringGlow" cx="0" cy="0" r="1">
            <stop offset="60%" stopColor="rgba(59,130,246,0.9)" />
            <stop offset="100%" stopColor="rgba(59,130,246,0)" />
          </radialGradient>
        </defs>
        {/* Outer square frame with gates */}
        <g fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="6">
          <rect x="-190" y="-190" width="380" height="380" rx="6" />
          <path d="M-60,-190 v-20 h120 v20" />
          <path d="M-60,190 v20 h120 v-20" />
          <path d="M-190,-60 h-20 v120 h20" />
          <path d="M190,-60 h20 v120 h-20" />
        </g>
        {/* Concentric circles */}
        {[180, 150, 125].map((r, i) => (
          <motion.circle
            key={`ring-${r}`}
            r={r}
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth={i === 0 ? 3 : 2}
            strokeDasharray="8 8"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: [-64, 0] }}
            transition={{ duration: 8 + i * 2.5, repeat: Infinity, ease: 'linear' }}
          />
        ))}
        {/* Interlocking triangles */}
        {(() => {
          const sizes = [150, 135, 120, 105, 90]
          const triangles = []
          const toPoints = (s, dir) => {
            const h = s
            const w = s * Math.sqrt(3)
            return dir === 'up'
              ? `0,${-h} ${-w / 2},${h / 2} ${w / 2},${h / 2}`
              : `0,${h} ${-w / 2},${-h / 2} ${w / 2},${-h / 2}`
          }
          sizes.forEach((s, idx) => {
            const dir = idx % 2 === 0 ? 'up' : 'down'
            triangles.push(
              <motion.polygon
                key={`tri-${s}`}
                points={toPoints(s, dir)}
                fill="none"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="2.5"
                strokeDasharray="14 10"
                initial={{ strokeDashoffset: 0 }}
                animate={{ strokeDashoffset: [-120, 0] }}
                transition={{ duration: 6 + idx * 1.2, repeat: Infinity, ease: 'linear' }}
              />
            )
          })
          return triangles
        })()}
        {/* Traveling pulse around the main ring */}
        <circle id="outer-circle-path" r="180" fill="none" stroke="none" />
        <circle r="3.5" fill="#60a5fa" style={{ filter: 'drop-shadow(0 0 10px rgba(96,165,250,0.9))' }}>
          <animateMotion dur="6s" repeatCount="indefinite">
            <mpath xlinkHref="#outer-circle-path" />
          </animateMotion>
        </circle>
        <circle r="2.5" fill="#f59e0b" style={{ filter: 'drop-shadow(0 0 8px rgba(245,158,11,0.9))' }}>
          <animateMotion dur="9s" repeatCount="indefinite" begin="1.5s">
            <mpath xlinkHref="#outer-circle-path" />
          </animateMotion>
        </circle>
      </svg>

      {/* subtle vignette */}
      <div className="absolute inset-0 bg-transparent" />
    </div>
  )
}

