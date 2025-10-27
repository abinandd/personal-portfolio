import React from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const projects = [
  {
    title: 'Animated Portfolio',
    description: 'A sleek portfolio with motion-first interactions built with React and Framer Motion.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1080&auto=format&fit=crop',
    demo: '#',
    github: '#',
  },
  {
    title: 'Design System',
    description: 'Composable UI kit with Tailwind CSS and Storybook for rapid prototyping.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1080&auto=format&fit=crop',
    demo: '#',
    github: '#',
  },
  {
    title: 'Realtime Dashboard',
    description: 'Metrics dashboard with live updates and accessible charts.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1080&auto=format&fit=crop',
    demo: '#',
    github: '#',
  },
]

export default function Projects() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Projects</h2>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-animate="card-list">
        {projects.map((p, idx) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.99 }}
            className="group relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur transition-shadow hover:shadow-xl hover:shadow-blue-500/10 will-change-transform"
            data-animate="card"
            data-tilt
          >
            <div className="absolute inset-0 pointer-events-none pulsing-border rounded-2xl" />
            <div className="aspect-[16/10] overflow-hidden">
              <img src={p.image} alt="Project thumbnail" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" data-hover-pan loading="lazy" decoding="async" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{p.description}</p>
              <div className="mt-4 flex items-center gap-3">
                <a href={p.demo} className="inline-flex items-center gap-2 rounded-md bg-blue-500 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-400">
                  <FiExternalLink /> Live Demo
                </a>
                <a href={p.github} className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-1.5 text-sm font-medium text-gray-200 hover:border-blue-400 hover:text-blue-400">
                  <FiGithub /> GitHub
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

