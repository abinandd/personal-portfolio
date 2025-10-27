import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Name is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Valid email is required'
    if (form.message.trim().length < 10) nextErrors.message = 'Message should be at least 10 characters'
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
  }

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" data-animate="section">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-1"
        >
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="mt-3 text-gray-300">Have a question or want to work together? Send a message.</p>
          <div className="mt-6 flex items-center gap-4 text-xl">
            <a className="hover:text-blue-400" href="#" aria-label="Email"><FiMail /></a>
            <a className="hover:text-blue-400" href="#" aria-label="GitHub"><FiGithub /></a>
            <a className="hover:text-blue-400" href="#" aria-label="LinkedIn"><FiLinkedin /></a>
            <a className="hover:text-blue-400" href="#" aria-label="Twitter"><FiTwitter /></a>
          </div>
        </motion.div>
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2 grid grid-cols-1 gap-4 rounded-2xl bg-white/5 ring-1 ring-white/10 p-6"
        >
          {submitted && (
            <div className="rounded-md bg-green-500/10 text-green-400 border border-green-500/30 p-3 text-sm">Thanks! I will get back to you soon.</div>
          )}
          <div>
            <label htmlFor="name" className="text-sm text-gray-300">Name</label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-1 w-full rounded-md bg-gray-800/60 border border-white/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Jane Doe"
            />
            {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="text-sm text-gray-300">Email</label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-1 w-full rounded-md bg-gray-800/60 border border-white/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="jane@example.com"
            />
            {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="message" className="text-sm text-gray-300">Message</label>
            <textarea
              id="message"
              rows="5"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-1 w-full rounded-md bg-gray-800/60 border border-white/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Let's build something great together."
            />
            {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
          </div>
          <div className="pt-2">
            <button type="submit" className="inline-flex items-center rounded-md bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900">
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

