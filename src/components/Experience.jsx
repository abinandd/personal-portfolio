import React from 'react'
import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'Trogon Media Pvt Ltd',
    role: 'React Developer',
    duration: 'Aug 2025',
    description: 'Developed Webapplications'
  },
]

export default function Experience() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" data-animate="section">
      <h2 className="text-2xl font-bold">Experience</h2>
      <div className="mt-8 relative">
        <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <ol className="space-y-8" data-animate="timeline">
          {experiences.map((item, idx) => (
            <motion.li
              key={item.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="relative pl-12 sm:pl-16"
            >
              <div className="absolute left-0 sm:left-2 top-2 h-3 w-3 rounded-full bg-blue-500 shadow-glow" />
              <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold">{item.role} · <span className="text-gray-300 font-normal">{item.company}</span></h3>
                  <span className="text-xs text-gray-400 whitespace-nowrap">{item.duration}</span>
                </div>
                <p className="mt-2 text-sm text-gray-300">{item.description}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}

