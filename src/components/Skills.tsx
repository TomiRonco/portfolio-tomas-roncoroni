'use client'

import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5', level: 95, color: 'from-orange-500 to-red-500' },
        { name: 'CSS3', level: 90, color: 'from-blue-500 to-cyan-500' },
        { name: 'JavaScript', level: 88, color: 'from-yellow-400 to-orange-500' },
        { name: 'TypeScript', level: 70, color: 'from-blue-600 to-blue-800' },
        { name: 'React', level: 90, color: 'from-cyan-400 to-blue-500' },
        { name: 'Next.js', level: 65, color: 'from-gray-800 to-gray-900' },
        { name: 'Tailwind CSS', level: 88, color: 'from-teal-400 to-blue-500' },
        { name: 'Vue.js', level: 10, color: 'from-green-400 to-emerald-500' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85, color: 'from-green-500 to-green-700' },
        { name: 'Express.js', level: 82, color: 'from-gray-600 to-gray-800' },
        { name: 'Python', level: 80, color: 'from-blue-500 to-yellow-500' },
        { name: 'PostgreSQL', level: 78, color: 'from-blue-600 to-blue-800' },
        { name: 'MongoDB', level: 75, color: 'from-green-600 to-green-800' },
        { name: 'GraphQL', level: 10, color: 'from-pink-500 to-purple-600' },
        { name: 'REST APIs', level: 88, color: 'from-indigo-500 to-purple-600' },
        { name: 'Prisma', level: 5, color: 'from-gray-700 to-gray-900' }
      ]
    },
    {
      title: 'DevOps & Herramientas',
      skills: [
        { name: 'Git', level: 90, color: 'from-orange-600 to-red-600' },
        { name: 'Docker', level: 40, color: 'from-blue-500 to-blue-700' },
        { name: 'AWS', level: 10, color: 'from-orange-400 to-yellow-500' },
        { name: 'CI/CD', level: 30, color: 'from-green-500 to-blue-500' },
        { name: 'Linux', level: 50, color: 'from-gray-700 to-black' },
        { name: 'Figma', level: 90, color: 'from-purple-500 to-pink-500' },
        { name: 'VS Code', level: 100, color: 'from-blue-600 to-blue-800' },
        { name: 'Postman', level: 45, color: 'from-orange-500 to-red-500' }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4
      }
    }
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Habilidades <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Técnicas</span>
          </h2>
          <p className="text-xl text-gray-600 text-gray-300 max-w-3xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones completas
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={categoryVariants}
              className="bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={skillVariants}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-600 text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1.2, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                      >
                        <motion.div
                          animate={{ 
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="absolute inset-0 bg-white/20 rounded-full"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 from-blue-900/20 to-purple-900/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Siempre Aprendiendo
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              El mundo del desarrollo web evoluciona constantemente, y yo evoluciono con él. 
              Siempre estoy explorando nuevas tecnologías, frameworks y mejores prácticas 
              para mantenerme al día con las tendencias de la industria.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}