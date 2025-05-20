import React from 'react'
import { motion } from 'framer-motion'
import { GithubIcon, LinkedinIcon, DownloadIcon } from 'lucide-react'
const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          <motion.div
            className="lg:w-1/2 order-2 lg:order-1"
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4">
              <span className="text-blue-600 dark:text-blue-400">
                Vishmitha
              </span>{' '}
              Hashendra
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
              Undergraduate Software Engineer
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
              I'm passionate about creating elegant solutions to complex
              problems through code. Currently pursuing my degree in Software
              Engineering with a focus on web development and database
              management.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-colors"
              >
                <DownloadIcon size={18} />
                Download CV
              </a>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 p-3 rounded-full transition-colors"
                >
                  <GithubIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 p-3 rounded-full transition-colors"
                >
                  <LinkedinIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="lg:w-1/2 order-1 lg:order-2 flex justify-center"
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 dark:bg-blue-600 rounded-full blur-3xl opacity-20"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-8 border-white dark:border-gray-800 shadow-xl overflow-hidden relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt="Vishmitha Hashendra"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
export default Home
