import React, { Children } from 'react'
import { motion } from 'framer-motion'
import {
  Code2Icon,
  DatabaseIcon,
  ServerIcon,
  SmartphoneIcon,
} from 'lucide-react'
const Skills = () => {
  const frontendSkills = [
    {
      name: 'HTML',
      level: 90,
    },
    {
      name: 'CSS',
      level: 85,
    },
    {
      name: 'JavaScript',
      level: 80,
    },
    {
      name: 'React',
      level: 75,
    },
  ]
  const backendSkills = [
    {
      name: 'Node.js',
      level: 70,
    },
    {
      name: 'PHP',
      level: 75,
    },
    {
      name: 'Express',
      level: 65,
    },
  ]
  const databaseSkills = [
    {
      name: 'MongoDB',
      level: 70,
    },
    {
      name: 'MySQL',
      level: 80,
    },
  ]
  const mobileSkills = [
    {
      name: 'Kotlin',
      level: 65,
    },
  ]
  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
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
            My Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development
            world. Here's an overview of my technical skills.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            }}
            viewport={{
              once: true,
            }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
          >
            <div className="flex items-center mb-6">
              <Code2Icon className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                Frontend
              </h3>
            </div>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
              }}
              className="space-y-5"
            >
              {frontendSkills.map((skill) => (
                <motion.div key={skill.name} variants={item}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{
                        width: `${skill.level}%`,
                      }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
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
            }}
            viewport={{
              once: true,
            }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
          >
            <div className="flex items-center mb-6">
              <ServerIcon className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                Backend
              </h3>
            </div>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
              }}
              className="space-y-5"
            >
              {backendSkills.map((skill) => (
                <motion.div key={skill.name} variants={item}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{
                        width: `${skill.level}%`,
                      }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
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
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
          >
            <div className="flex items-center mb-6">
              <DatabaseIcon className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                Database
              </h3>
            </div>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
              }}
              className="space-y-5"
            >
              {databaseSkills.map((skill) => (
                <motion.div key={skill.name} variants={item}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{
                        width: `${skill.level}%`,
                      }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
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
              delay: 0.2,
            }}
            viewport={{
              once: true,
            }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
          >
            <div className="flex items-center mb-6">
              <SmartphoneIcon className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                Mobile
              </h3>
            </div>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
              }}
              className="space-y-5"
            >
              {mobileSkills.map((skill) => (
                <motion.div key={skill.name} variants={item}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{
                        width: `${skill.level}%`,
                      }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.4,
          }}
          viewport={{
            once: true,
          }}
          className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Other Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              'Git',
              'REST API',
              'GraphQL',
              'Responsive Design',
              'UI/UX',
              'Agile',
              'SCRUM',
              'Problem Solving',
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
export default Skills
