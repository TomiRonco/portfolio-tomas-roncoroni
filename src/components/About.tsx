'use client'

import { motion } from 'framer-motion'
import { Code, Users, Coffee, Award } from 'lucide-react'

export default function About() {
  const stats = [
    { 
      number: '3+', 
      label: 'Años de experiencia',
      icon: Code
    },
    { 
      number: '5+', 
      label: 'Proyectos destacados',
      icon: Award
    },
    { 
      number: '10+', 
      label: 'Tecnologías dominadas',
      icon: Coffee
    },
    { 
      number: '5+', 
      label: 'Repositorios públicos',
      icon: Users
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sobre <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">mí</span>
          </h2>
          <p className="text-xl text-gray-600 text-gray-300 max-w-3xl mx-auto">
            Conoce más sobre mi experiencia, pasión por el desarrollo y enfoque profesional
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-lg text-gray-300 leading-relaxed">
                Soy un desarrollador Full Stack con experiencia en tecnologías modernas y una pasión por resolver problemas complejos a través del código. Me especializo en crear aplicaciones web escalables y experiencias de usuario intuitivas.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Mi enfoque se centra en escribir código limpio, mantenible y eficiente, siempre buscando las mejores prácticas y las últimas tendencias en desarrollo web.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Cuando no estoy programando, disfruto aprendiendo nuevas tecnologías, contribuyendo a proyectos open source y explorando las últimas tendencias en el mundo del desarrollo.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-blue-900 bg-blue-900 rounded-lg">
                  <Code className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Filosofía de Desarrollo</h3>
                  <p className="text-gray-600 text-gray-400">Código limpio, diseño intuitivo</p>
                </div>
              </div>
              <p className="text-gray-300">
                Creo en la importancia de escribir código que no solo funcione, sino que sea fácil de leer, mantener y escalar. La experiencia del usuario siempre está en el centro de mis decisiones de desarrollo.
              </p>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}