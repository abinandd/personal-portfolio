import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMenu, FiX } from 'react-icons/fi'
import { SiLeetcode } from "react-icons/si";


const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleClick = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60 ">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
          </div>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className="link-underline text-sm font-medium text-gray-300 hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} className="p-2 rounded-md hover:bg-white/5">
              {open ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        className="md:hidden overflow-hidden "
      >
        <div className="px-4 py-3 space-y-2 flex flex-col items-end text-right">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="block w-full text-right text-sm font-medium text-gray-300 hover:text-white py-2"
            >
              {item.label}
            </button>
          ))}
          <div className="flex items-center gap-5 pt-2 text-xl justify-end w-full">
            <a className="hover:text-blue-400" href="https://github.com/abinandd" aria-label="GitHub"><FiGithub /></a>
            <a className="hover:text-blue-400" href="https://www.linkedin.com/in/abhinand-c-m-523b92238/" aria-label="LinkedIn"><FiLinkedin /></a>
            <a className="hover:text-blue-400" href="https://leetcode.com/u/abhinandabhi/" aria-label="Leetcode"><SiLeetcode /></a>
          </div>
        </div>
      </motion.div>
    </header>
  )
}

