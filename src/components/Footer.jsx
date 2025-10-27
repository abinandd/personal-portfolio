import React from 'react'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex items-center gap-4 text-xl">
          <a className="hover:text-blue-400" href="#" aria-label="GitHub"><FiGithub /></a>
          <a className="hover:text-blue-400" href="#" aria-label="LinkedIn"><FiLinkedin /></a>
          <a className="hover:text-blue-400" href="#" aria-label="Twitter"><FiTwitter /></a>
        </div>
      </div>
    </footer>
  )
}

