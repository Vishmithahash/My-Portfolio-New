import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CvMyPdf from '../assets/CvMy.pdf'
import {
  GithubIcon,
  LinkedinIcon,
  DownloadIcon,
  ChevronDownIcon,
} from 'lucide-react'
import { Link } from 'react-scroll'

const Home = () => {
  const floatingAnimation = {
    y: ['-10px', '10px'],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
    },
  }

  const particleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.2, 0.5, 0.2],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  const waveAnimation = {
    animate: {
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-100 dark:from-gray-900 dark:via-gray-800 dark:to-blue-950"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 80 + 20,
              height: Math.random() * 80 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.1)`,
            }}
            variants={particleVariants}
            animate="animate"
            custom={i}
          />
        ))}
      </div>
      {/* Main Content */}
      <div className="container mx-auto px-4 min-h-screen flex flex-col justify-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 text-center lg:text-left p-6 lg:p-10 bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg backdrop-blur-sm"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6"
            >
              <span className="px-6 py-3 rounded-full bg-blue-100/70 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-sm font-medium shadow-md backdrop-blur-md">
                Welcome to my portfolio
              </span>
            </motion.div>
            {/* Name and Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-cyan-500 dark:from-cyan-300 dark:to-blue-300 text-blue-900 dark:text-cyan-100">
                {"Hi, I'm Vishmitha".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 + index * 0.05, duration: 0.05 }}
                    className="inline"
                  >
                    {char === " " ? <span> </span> : char}
                  </motion.span>
                ))}
                <br />
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  {"Hashendra".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 + index * 0.05, duration: 0.05 }}
                      className="inline"
                    >
                      {char === " " ? <span> </span> : char}
                    </motion.span>
                  ))}
                </motion.span>
                <span className="relative inline-block">
                  <motion.span
                    className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 dark:bg-blue-400"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.0, duration: 0.8 }}
                  />
                </span>
              </span>
            </motion.h1>
            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
                  Undergraduate Software Engineer
                </span>
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-lg mx-auto lg:mx-0">
                Passionate about crafting innovative solutions through code. I specialize in full-stack development for both web and mobile platforms, using modern technologies to deliver efficient, user-friendly applications.
              </p>
            </motion.div>
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href={CvMyPdf}
                download
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-white/30 dark:bg-gray-800/30"
              >
                <DownloadIcon className="w-5 h-5 mr-2" />
                Download CV
              </motion.a>
              <div className="flex items-center gap-4">
                <motion.a
                  href="https://github.com/Vishmithahash"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <GithubIcon className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/vishmitha-hashendra-419b072b0"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <LinkedinIcon className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative mx-auto w-72 h-72 md:w-96 md:h-96">
              {/* Animated background elements */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-20 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              <motion.div
                className="absolute inset-4 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 opacity-20 blur-3xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              {/* Profile image container */}
              <motion.div
                className="relative z-10 w-full h-full rounded-full border-8 border-white dark:border-gray-800 shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 dark:to-black/40" />
                <img
                  src="https://i.postimg.cc/CxRQLq4L/WhatsApp.jpg"
                  alt="Vishmitha Hashendra"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </motion.div>
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"
                animate={floatingAnimation}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"
                animate={floatingAnimation}
                transition={{ delay: 0.5 }}
              />
            </div>
          </motion.div>
        </div>
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
          >
            <motion.div
              animate={{
                y: [0, 10, 0],
                ...waveAnimation.animate,
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="flex flex-col items-center"
            >
              <motion.span
                className="text-sm text-gray-500 dark:text-gray-400 mb-2"
                animate={waveAnimation.animate}
              >
                Scroll Down
              </motion.span>
              <ChevronDownIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Home