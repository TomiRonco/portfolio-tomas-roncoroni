'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Award } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      title: 'Desarrollador Freelancer',
      company: 'Trabajo Independiente',
      location: 'Rosario, Argentina',
      period: '2023 - Presente',
      type: 'Freelance',
      description: 'Desarrollo de aplicaciones web personalizadas para clientes diversos, especializado en soluciones modernas con React, Next.js y tecnologías actuales.',
      achievements: [
        'Desarrollo de sitios web institucionales',
        'Implementación de sistemas de gestión',
        'Optimización de rendimiento web',
        'Consultoría en tecnologías frontend'
      ],
      technologies: ['React', 'Next.js', 'JavaScript', 'HTML/CSS', 'Git']
    },
    {
      title: 'Desarrollador Web',
      company: 'Club Los Leones Norte',
      location: 'Rosario, Argentina',
      period: '2023',
      type: 'Proyecto',
      description: 'Desarrollo y mantenimiento del sitio web institucional del club. Creación de una plataforma moderna y responsive para mostrar información del club y sus actividades.',
      achievements: [
        'Diseño y desarrollo del sitio web completo',
        'Implementación de diseño responsive',
        'Optimización para motores de búsqueda',
        'Integración de contenido dinámico'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design']
    }
  ]

  const education = [
    {
      title: 'Tecnicatura en Programación',
      institution: 'Universidad Tecnológica Nacional de Rosario',
      period: '2022 - 2024',
      description: 'Especialización en desarrollo de software y sistemas de información.'
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experiencia <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Profesional</span>
          </h2>
          <p className="text-xl text-gray-600 text-gray-300 max-w-3xl mx-auto">
            Mi trayectoria profesional y crecimiento en el mundo del desarrollo
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Award className="h-6 w-6 mr-2 text-blue-600" />
              Experiencia Laboral
            </h3>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-12 pb-12"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-2 top-2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white border-gray-900"></div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white">
                          {exp.title}
                        </h4>
                        <p className="text-blue-400 font-semibold">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col md:items-end mt-2 md:mt-0">
                        <div className="flex items-center text-gray-600 text-gray-400 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-gray-600 text-gray-400 text-sm">
                          <MapPin className="h-4 w-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h5 className="font-semibold text-white mb-2">
                        Logros principales:
                      </h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-300 text-sm flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-900/30 text-blue-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Education & Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Award className="h-6 w-6 mr-2 text-purple-600" />
              Educación
            </h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 from-blue-900/20 to-purple-900/20 rounded-lg p-6 border border-blue-800 border-blue-800"
                >
                  <h4 className="text-lg font-bold text-white mb-2">
                    {edu.title}
                  </h4>
                  <p className="text-blue-400 font-semibold mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex items-center text-gray-600 text-gray-400 text-sm mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    {edu.period}
                  </div>
                  <p className="text-gray-300 text-sm">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Skills Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8"
            >
              <h4 className="text-lg font-bold text-white mb-4">
                Competencias Clave
              </h4>
              <div className="space-y-3">
                {[
                  'Liderazgo técnico',
                  'Arquitectura de software',
                  'Metodologías ágiles',
                  'Code review',
                  'Mentoring',
                  'Problem solving'
                ].map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></div>
                    <span className="text-gray-300 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}