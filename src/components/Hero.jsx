import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import AvatarCircuit from './AvatarCircuit'

const container = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  const roles = ['Developer', 'Frontend Developer', 'Backend Developer','Full Stack Developer']
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]

    // Transition pauses
    if (!isDeleting && displayText === current) {
      const t = setTimeout(() => setIsDeleting(true), 900)
      return () => clearTimeout(t)
    }
    if (isDeleting && displayText === '') {
      const t = setTimeout(() => {
        setIsDeleting(false)
        setRoleIndex((roleIndex + 1) % roles.length)
      }, 400)
      return () => clearTimeout(t)
    }

    const delay = isDeleting ? 45 : 100
    const t = setTimeout(() => {
      const next = isDeleting
        ? current.slice(0, displayText.length - 1)
        : current.slice(0, displayText.length + 1)
      setDisplayText(next)
    }, delay)
    return () => clearTimeout(t)
  }, [displayText, isDeleting, roleIndex])

  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={container} className="order-2 lg:order-1">
          <p className="text-blue-400 font-semibold text-lg">Hi, I’m</p>
          <h1 className="mt-2 text-5xl sm:text-6xl font-extrabold tracking-tight" data-split="words">Abhinand</h1>
          <p className="mt-3 text-xl text-gray-200">
            <span className="text-gray-400">I'm a </span>
            <span className="font-semibold text-blue-400">{displayText}</span>
            <motion.span
              aria-hidden
              className="ml-1 inline-block text-blue-400"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.9, repeat: Infinity }}
            >
              |
            </motion.span>
          </p>
          <p className="mt-5 text-gray-300 text-xl leading-relaxed max-w-2xl">
            I craft modern, performant web apps with a focus on clean design, accessibility, and motion.
            Passionate about developer experience, animations, and building delightful product UI.
          </p>
          <p className="mt-3 text-gray-400 text-lg max-w-2xl">
            Tech I love: React, Tailwind, Framer Motion, Node.js
          </p>
          <div className="mt-6 flex items-center gap-4 text-2xl">
            <a className="hover:text-blue-400" href="#" aria-label="GitHub"><FiGithub /></a>
            <a className="hover:text-blue-400" href="#" aria-label="LinkedIn"><FiLinkedin /></a>
            <a className="hover:text-blue-400" href="#" aria-label="Twitter"><FiTwitter /></a>
          </div>
          <div className="mt-8">
            <a href="#projects" className="inline-flex items-center rounded-md bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900" data-float>
              View Projects
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative order-1 lg:order-2"
        >
          <div className="relative mx-auto h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96" data-animate="section">
            <AvatarCircuit className="absolute -inset-1 sm:-inset-2 lg:-inset-3 z-0" />
            <div className="relative z-10 h-full w-full rounded-full overflow-hidden ring-2 ring-blue-500/30" data-hero-img>
              <img
                className="h-full w-full object-cover"
                srcSet="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=480&auto=format&fit=crop 480w, https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=768&auto=format&fit=crop 768w, https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1080&auto=format&fit=crop 1080w"
                sizes="(max-width: 640px) 16rem, (max-width: 1024px) 20rem, 24rem"
                src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=768&auto=format&fit=crop"
                alt="Developer portrait"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

