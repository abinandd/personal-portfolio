import React from 'react'
import { motion } from 'framer-motion'
import { 
  SiJavascript, SiReact, SiNodedotjs, SiTailwindcss, SiFramer, SiRedux, SiGit
} from 'react-icons/si'

const skills = [
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
  { name: 'Tailwind', Icon: SiTailwindcss, color: '#38BDF8' },
  { name: 'Framer Motion', Icon: SiFramer, color: '#0055FF' },
  { name: 'Redux', Icon: SiRedux, color: '#764ABC' },
  { name: 'Git', Icon: SiGit, color: '#F05032' },
]

export default function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          My <span className="text-sky-400">Skills</span>
        </h2>
      </div>

      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-6 place-items-center"
      >
        {skills.map(({ name, Icon, color }) => (
          <motion.li
            key={name}
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ scale: 1.1, y: -3 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="group flex flex-col items-center justify-center cursor-pointer"
          >
            <Icon
              className="text-3xl sm:text-4xl transition-transform duration-300"
              style={{ color }}
            />
            <span className="mt-1 text-xs font-medium text-gray-300 group-hover:text-white transition-colors">
              {name}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}
