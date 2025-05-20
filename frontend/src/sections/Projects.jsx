import React, { useEffect, useState, Children } from 'react'
import { motion } from 'framer-motion'
import {
  SearchIcon,
  FilterIcon,
  ExternalLinkIcon,
  GithubIcon,
} from 'lucide-react'
const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-featured online shopping platform with product catalog, shopping cart, and payment integration.',
    image:
      'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    demoLink: '#',
    codeLink: '#',
    category: 'Full Stack',
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'A drag-and-drop task management application with user authentication and task categorization.',
    image:
      'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
    technologies: ['React', 'Firebase', 'CSS'],
    demoLink: '#',
    codeLink: '#',
    category: 'Frontend',
  },
  {
    id: 3,
    title: 'Blog Platform',
    description:
      'A content management system for creating and managing blog posts with markdown support.',
    image:
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML'],
    demoLink: '#',
    codeLink: '#',
    category: 'Backend',
  },
  {
    id: 4,
    title: 'Weather App',
    description:
      'A mobile application that provides real-time weather information based on location.',
    image:
      'https://images.unsplash.com/photo-1530563885674-66db50a1af19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
    technologies: ['Kotlin', 'Android SDK', 'OpenWeather API'],
    demoLink: '#',
    codeLink: '#',
    category: 'Mobile',
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description:
      'A responsive personal portfolio website to showcase projects and skills.',
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    technologies: ['React', 'Tailwind CSS', 'JavaScript'],
    demoLink: '#',
    codeLink: '#',
    category: 'Frontend',
  },
  {
    id: 6,
    title: 'Student Management System',
    description:
      'A comprehensive system for educational institutions to manage student data and academic records.',
    image:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    demoLink: '#',
    codeLink: '#',
    category: 'Full Stack',
  },
]
const categories = ['All', 'Frontend', 'Backend', 'Full Stack', 'Mobile']
const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [filteredProjects, setFilteredProjects] = useState(projectsData)
  useEffect(() => {
    const results = projectsData.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchTerm.toLowerCase()),
        )
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    setFilteredProjects(results)
  }, [searchTerm, selectedCategory])
  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }
  const item = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  }
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Feel free to explore
            them and check out the code.
          </p>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          viewport={{
            once: true,
          }}
          className="mb-10 flex flex-col md:flex-row gap-4 justify-between"
        >
          <div className="relative flex-grow max-w-md">
            <SearchIcon
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <FilterIcon
              size={20}
              className="text-gray-500 dark:text-gray-400"
            />
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
        {filteredProjects.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No projects found matching your criteria.
            </p>
          </div>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={item}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02]"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                    >
                      <ExternalLinkIcon size={18} />
                      Live Demo
                    </a>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium"
                    >
                      <GithubIcon size={18} />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}
export default Projects
