import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import {
  SearchIcon,
  FilterIcon,
  ExternalLinkIcon,
  GithubIcon,
} from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'Ceylon Flavours - Restaurant Management System',
    description:
      'An end-to-end restaurant management system featuring online ordering, menu browsing, and seamless delivery processing, built with the MERN stack and styled using Tailwind CSS.',
    image:
      'https://i.postimg.cc/PxYrZhHN/Whats-App-Image-2025-05-22-at-18-19-07-1248a7bb.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
    demoLink: '#',
    codeLink: 'https://github.com/Vishmithahash/Ceylon-Flavours-MERN',
    category: 'Full Stack',
  },
  {
    id: 2,
    title: 'My Portfolio Website',
    description:
      'A personal portfolio website showcasing projects, skills, and contact options, enhanced with React and styled with Tailwind CSS, featuring integrated email functionality via EmailJS.',
    image:
      'https://i.postimg.cc/j27Vf1cd/Screenshot-2025-05-22-175917.png',
    technologies: ['React', 'Tailwind CSS', 'EmailJS', 'JavaScript'],
    demoLink: '#',
    codeLink: 'https://github.com/Vishmithahash/My-Portfolio-New',
    category: 'Frontend',
  },
  {
    id: 3,
    title: 'TravelEase - Travel Web App',
    description:
      'A travel-focused web application providing users with travel guides, destination highlights, and easy navigation, developed using React and Tailwind CSS for a smooth and responsive user experience.',
    image:
      'https://i.postimg.cc/cJypMBC4/Screenshot-2025-05-22-195113.png',
    technologies: ['React', 'Tailwind CSS', 'JavaScript'],
    demoLink: '#',
    codeLink: 'https://github.com/Vishmithahash/Travel-Web-App',
    category: 'Frontend',
  },
  {
    id: 4,
    title: 'Money Tracker Mobile Application',
    description:
      'A mobile application that provides real-time weather information based on location.',
    image:
      'https://i.postimg.cc/zfKGQ59r/Image-money-tracker.png',
    technologies: ['Kotlin', 'Java', 'Shared Preference'],
    demoLink: '#',
    codeLink: 'https://github.com/Vishmithahash/Money-Tracker-Mobile-App',
    category: 'Mobile',
  },
  {
    id: 5,
    title: 'Lotus Award Ceremony - Online Award Platform',
    description:
      'A responsive personal portfolio website to showcase projects and skills.',
    image:
      'https://i.postimg.cc/L6GGwRHN/Ss-1.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    demoLink: '#',
    codeLink: 'https://github.com/Vishmithahash/Lotus-Award-Ceramony-HTML',
    category: 'Full Stack',
  },
  {
    id: 6,
    title: 'Ceylon Flavours Mobile Application',
    description:
      'A comprehensive system for educational institutions to manage student data and academic records.',
    image:
      'https://i.postimg.cc/VLwhJZ24/image-app.png',
    technologies: ['Kotlin', 'Java'],
    demoLink: '#',
    codeLink: 'https://github.com/Vishmithahash/Ceylon-Flavours-Mobile-App',
    category: 'Mobile',
  },
];

const categories = ['All', 'Frontend', 'Backend', 'Full Stack', 'Mobile'];

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, rotateX: 10 },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.1, boxShadow: '0 4px 12px rgba(0,0,0,0.2)' },
    tap: { scale: 0.95 },
  };

  useEffect(() => {
    const results = projectsData.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchTerm.toLowerCase().trim())
        );
      const matchesCategory =
        selectedCategory === 'All' ||
        project.category.trim().toLowerCase() === selectedCategory.toLowerCase();
      return matchesSearch && matchesCategory;
    });

    // Debugging logs to verify filtering
    console.log('Search Term:', searchTerm);
    console.log('Selected Category:', selectedCategory);
    console.log('Filtered Projects:', results);

    setFilteredProjects(results);
  }, [searchTerm, selectedCategory]);

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/50 to-indigo-50/50 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30"
            animate={{
              y: [0, -50 + Math.random() * 100],
              opacity: [0.2, 0.5, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            style={{
              width: `${10 + Math.random() * 20}px`,
              height: `${10 + Math.random() * 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 mb-6 animate-text-shimmer">
            My Projects
          </h2>
          <motion.div
            className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
            animate={{ scaleX: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          ></motion.div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Explore my collection of projects showcasing innovative solutions and modern technologies. Dive into the code or check out the live demos!
          </p>
        </motion.div>

        {/* Sticky Filter & Search Bar */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12 sticky top-0 z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-gray-200/50 dark:border-gray-700/50"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full max-w-md">
              <SearchIcon
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500"
                size={20}
              />
              <input
                type="text"
                placeholder="Search projects by name or tech..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-3 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                aria-label="Search projects"
              />
            </div>
            <div className="flex items-center gap-3">
              <FilterIcon size={20} className="text-gray-500 dark:text-gray-400" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                    aria-label={`Filter by ${category}`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Grid */}
        <AnimatePresence mode="wait">
          {filteredProjects.length === 0 ? (
            <motion.div
              key="no-projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center py-12"
            >
              <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">
                No projects found matching your criteria.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="project-grid"
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <Tilt
                  key={project.id}
                  tiltMaxAngleX={15}
                  tiltMaxAngleY={15}
                  scale={1.02}
                  transitionSpeed={400}
                >
                  <motion.div
                    variants={itemVariants}
                    className="relative bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg rounded-xl overflow-hidden shadow-xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:shadow-2xl"
                  >
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold rounded-full shadow-md">
                        {project.category}
                      </span>
                    </div>
                    <div className="h-48 overflow-hidden relative">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1, rotate: 2 }}
                        transition={{ duration: 0.4 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 truncate">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 text-sm leading-relaxed">
                        {project.description}
                      </p>
                      <div className="mb-5 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <motion.span
                            key={tech}
                            className="px-3 py-1 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 text-gray-700 dark:text-gray-200 rounded-full text-xs font-medium"
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <motion.a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          variants={buttonVariants}
                          whileHover="hover"
                          whileTap="tap"
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300"
                          aria-label={`View live demo of ${project.title}`}
                        >
                          <ExternalLinkIcon size={16} />
                          Live Demo
                        </motion.a>
                        <motion.a
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          variants={buttonVariants}
                          whileHover="hover"
                          whileTap="tap"
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-600 dark:from-gray-600 dark:to-gray-500 text-white rounded-lg hover:from-gray-800 hover:to-gray-700 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300"
                          aria-label={`View source code of ${project.title}`}
                        >
                          <GithubIcon size={16} />
                          Code
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                </Tilt>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* See More Projects Button */}
      <div className="text-center py-12">
        <motion.a
          href="https://github.com/Vishmithahash?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:from-blue-700 hover:to-blue-600 transition-all duration-300"
          aria-label="See more projects on GitHub"
        >
          See More Projects on GitHub
        </motion.a>
      </div>

      <style jsx>{`
        @keyframes text-shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }

        .animate-text-shimmer {
          background-size: 400% 400%;
          animation: text-shimmer 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s infinite;
        }

        .bg-grid-slate-200 {
          background-image: radial-gradient(circle, #e2e8f0 1px, transparent 1px);
          background-size: 20px 20px;
        }

        .bg-grid-slate-700\/25 {
          background-image: radial-gradient(circle, rgba(51, 65, 85, 0.25) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  );
};

export default Projects;