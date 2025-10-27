import React from 'react'
import { motion } from 'framer-motion'
import { 
  SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiTailwindcss, SiFramer, SiGraphql, SiRedux, SiGit, SiJest, SiCypress, SiAmazon
} from 'react-icons/si'

// Brand colors from Simple Icons
const skills = [
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
  { name: 'Tailwind', Icon: SiTailwindcss, color: '#38BDF8' },
  { name: 'Framer Motion', Icon: SiFramer, color: '#0055FF' },
  { name: 'GraphQL', Icon: SiGraphql, color: '#E10098' },
  { name: 'Redux', Icon: SiRedux, color: '#764ABC' },
  { name: 'Git', Icon: SiGit, color: '#F05032' },
  { name: 'Jest', Icon: SiJest, color: '#C21325' },
  { name: 'Cypress', Icon: SiCypress, color: '#17202C' },
  { name: 'AWS', Icon: SiAmazon, color: '#FF9900' },
]

export default function Skills() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Skills</h2>
      </div>

      <div className="relative mt-10">
        {/* Animated background removed */}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
          className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3"
        >
          {skills.map(({ name, Icon, color }) => (
            <motion.li
              key={name}
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              className="relative flex flex-col items-center justify-center gap-1 p-0.5"
            >
              <Icon className="text-2xl sm:text-3xl" style={{ color }} />
              <span className="text-xs text-gray-300 font-medium text-center">{name}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}