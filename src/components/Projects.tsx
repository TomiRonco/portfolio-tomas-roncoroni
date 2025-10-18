'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Play } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'Community AR',
      description: 'Plataforma comunitaria desarrollada con tecnologías modernas. Una aplicación web que conecta personas y facilita la interacción en comunidades locales.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      liveUrl: 'https://community-ar.vercel.app/',
      githubUrl: 'https://github.com/TomiRonco',
      featured: true
    },
    {
      title: 'Club Los Leones Norte',
      description: 'Sitio web institucional para el Club Los Leones Norte. Plataforma moderna y responsiva que presenta la información del club, actividades, eventos y servicios para la comunidad.',
      image: '/api/placeholder/600/400',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Responsive Design'],
      liveUrl: 'https://clublosleonesnorte.com/',
      githubUrl: 'https://github.com/TomiRonco',
      featured: true
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

  const projectVariants = {
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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mis <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Proyectos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Proyectos reales desarrollados para clientes y comunidades
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              whileHover={{ y: -5 }}
              className="bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-700"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-900 to-purple-900 overflow-hidden group">
                {/* Placeholder for project image */}
                <div className="w-full h-full flex items-center justify-center">
                  <Play className="h-12 w-12 text-gray-600" />
                </div>
                
                {/* Overlay with links */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="px-2 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs rounded-full">
                      Destacado
                    </span>
                  )}
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Ver Proyecto</span>
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-2 border-2 border-gray-600 text-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-400 transition-all duration-300"
                  >
                    <Github className="h-4 w-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-gray-300 mb-6">
              Estoy disponible para nuevos proyectos y colaboraciones. ¡Hablemos!
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <span>Contactar</span>
              <ExternalLink className="h-4 w-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
