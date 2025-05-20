import React from 'react'
import { motion } from 'framer-motion'
const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
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
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            viewport={{
              once: true,
            }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              My Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              I am an undergraduate Software Engineering student with a passion
              for creating innovative solutions through code. My journey in tech
              began when I was in high school, where I developed my first
              website and discovered my love for programming.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              Currently, I am focusing on web development and database
              management, with a particular interest in the MERN stack (MongoDB,
              Express.js, React, and Node.js). I believe in continuous learning
              and staying updated with the latest technologies and industry
              trends.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Outside of coding, I enjoy contributing to open-source projects,
              participating in hackathons, and mentoring junior developers. I am
              always looking for new challenges and opportunities to grow as a
              software engineer.
            </p>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.4,
            }}
            viewport={{
              once: true,
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Education
              </h4>
              <ul className="space-y-3">
                <li className="text-gray-600 dark:text-gray-300">
                  <span className="font-medium">
                    BSc in Software Engineering
                  </span>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    University Name, 2020 - Present
                  </p>
                </li>
                <li className="text-gray-600 dark:text-gray-300">
                  <span className="font-medium">High School Diploma</span>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    School Name, 2016 - 2020
                  </p>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Experience
              </h4>
              <ul className="space-y-3">
                <li className="text-gray-600 dark:text-gray-300">
                  <span className="font-medium">Web Development Intern</span>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Company Name, Summer 2022
                  </p>
                </li>
                <li className="text-gray-600 dark:text-gray-300">
                  <span className="font-medium">Freelance Developer</span>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Self-employed, 2021 - Present
                  </p>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Interests
              </h4>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>Web Development</li>
                <li>Mobile App Development</li>
                <li>UI/UX Design</li>
                <li>Artificial Intelligence</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Languages
              </h4>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>English - Fluent</li>
                <li>Sinhala - Native</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
export default About
