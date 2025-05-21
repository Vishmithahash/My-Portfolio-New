import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import {
  BookOpenIcon,
  BrainIcon,
  GlobeIcon,
  ChevronRightIcon,
} from 'lucide-react'

const About = () => {
  const sections = [
    {
      id: 'education',
      title: 'Education',
      icon: <BookOpenIcon className="w-6 h-6" />,
      content: (
        <ul className="space-y-4">
          <li className="text-gray-600 dark:text-gray-300">
            <span className="font-medium block text-lg mb-1">
              BSc (Hons) in Information Technology, specializing in Software
              Engineering
            </span>
            <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
              <span className="w-24">Period:</span>
              <span>2023 - 2027</span>
            </p>
          </li>
          <li className="text-gray-600 dark:text-gray-300">
            <span className="font-medium block text-lg mb-1">
              Thurstan College
            </span>
            <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
              <span className="w-24">Period:</span>
              <span>2012 - 2020</span>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Completed GCE O/L and A/L examinations
            </p>
          </li>
        </ul>
      ),
    },
    {
      id: 'interests',
      title: 'Interests',
      icon: <BrainIcon className="w-6 h-6" />,
      content: (
        <ul className="space-y-3">
          {['Full Stack Development', 'Mobile Application Development', 'UI/UX Design'].map(
            (interest) => (
              <li
                key={interest}
                className="flex items-center text-gray-600 dark:text-gray-300"
              >
                <ChevronRightIcon className="w-4 h-4 mr-2 text-blue-500" />
                {interest}
              </li>
            ),
          )}
        </ul>
      ),
    },
    {
      id: 'languages',
      title: 'Languages',
      icon: <GlobeIcon className="w-6 h-6" />,
      content: (
        <ul className="space-y-3">
          {[
            {
              lang: 'English',
              level: 'Fluent',
              percent: 85,
            },
            {
              lang: 'Sinhala',
              level: 'Native',
              percent: 100,
            },
          ].map((lang) => (
            <li key={lang.lang} className="space-y-2">
              <div className="flex justify-between text-gray-600 dark:text-gray-300">
                <span>{lang.lang}</span>
                <span>{lang.level}</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <motion.div
                  className="bg-blue-600 h-2 rounded-full"
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: `${lang.percent}%`,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.3,
                  }}
                  viewport={{
                    once: true,
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      ),
    },
  ]

  return (
    <section
      id="about"
      className="py-20 bg-gray-100 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
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
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          {/* Navigation Pills */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 * index,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  transition: {
                    duration: 0.2,
                    type: "spring",
                    stiffness: 400,
                    damping: 15,
                  }
                }}
                whileTap={{
                  scale: 0.95,
                  transition: {
                    duration: 0.1,
                  }
                }}
              >
                <Link
                  to={section.id}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className="inline-flex items-center px-6 py-3 bg-gray-700 dark:bg-gray-700 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer group relative overflow-hidden"
                >
                  {/* Background Animation */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    initial={false}
                    whileHover={{
                      scale: 1,
                      opacity: 0.1,
                    }}
                  />
                  
                  <motion.span
                    className="text-gray-200 dark:text-gray-200 group-hover:text-blue-400 dark:group-hover:text-blue-400 transition-colors relative z-10"
                    whileHover={{
                      scale: 1.2,
                      rotate: [0, -10, 10, 0],
                      transition: {
                        duration: 0.4,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    {section.icon}
                  </motion.span>
                  
                  <motion.span 
                    className="ml-2 font-medium text-gray-200 dark:text-gray-200 group-hover:text-blue-400 dark:group-hover:text-blue-400 transition-colors relative z-10"
                    whileHover={{
                      x: 2,
                      transition: {
                        duration: 0.2,
                        ease: "easeOut"
                      }
                    }}
                  >
                    {section.title}
                  </motion.span>
                  
                  {/* Ripple Effect */}
                  <motion.div
                    className="absolute inset-0 bg-blue-400 rounded-full opacity-0"
                    whileHover={{
                      scale: [0, 1.5],
                      opacity: [0.3, 0],
                      transition: {
                        duration: 0.6,
                        ease: "easeOut"
                      }
                    }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* About Text */}
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
            className="prose prose-lg dark:prose-invert"
          >
            <div className="bg-gray-700 dark:bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <motion.p
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
                  delay: 0.3,
                }}
                viewport={{
                  once: true,
                }}
                className="text-gray-300 dark:text-gray-300 mb-6 leading-relaxed border-l-4 border-blue-500 pl-4"
              >
                I'm a software engineering enthusiast with a strong foundation in
                languages like <span className="text-blue-600 dark:text-blue-400 font-medium">Java</span>, 
                <span className="text-blue-600 dark:text-blue-400 font-medium"> Python</span>, 
                <span className="text-blue-600 dark:text-blue-400 font-medium"> C</span>, 
                <span className="text-blue-600 dark:text-blue-400 font-medium"> C++</span>, and 
                <span className="text-blue-600 dark:text-blue-400 font-medium"> JavaScript</span>. 
                I'm deeply passionate about full-stack development, where I use 
                <span className="text-blue-600 dark:text-blue-400 font-medium"> HTML</span>, 
                <span className="text-blue-600 dark:text-blue-400 font-medium"> CSS</span>, 
                <span className="text-blue-600 dark:text-blue-400 font-medium"> React</span>, 
                <span className="text-blue-600 dark:text-blue-400 font-medium"> Node.js</span>, and 
                <span className="text-blue-600 dark:text-blue-400 font-medium"> Express.js</span> to create seamless web
                applications.
              </motion.p>
              <motion.p
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
                  delay: 0.4,
                }}
                viewport={{
                  once: true,
                }}
                className="text-gray-300 dark:text-gray-300 mb-6 leading-relaxed border-l-4 border-purple-500 pl-4"
              >
                I also enjoy <span className="text-purple-600 dark:text-purple-400 font-medium">Mobile Application Development</span>, crafting
                user-friendly apps that run smoothly on any device. I love diving
                into <span className="text-purple-600 dark:text-purple-400 font-medium">UI/UX design</span> with Figma to build intuitive interfaces and
                collaborating with teams to solve challenges creatively.
              </motion.p>
              <motion.p
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
                  delay: 0.5,
                }}
                viewport={{
                  once: true,
                }}
                className="text-gray-300 dark:text-gray-300 leading-relaxed border-l-4 border-green-500 pl-4"
              >
                My goal is to build impactful solutions that combine the best of
                <span className="text-green-600 dark:text-green-400 font-medium"> Full-Stack Application Development </span>  
                & <span className="text-green-600 dark:text-green-400 font-medium"> Mobile Application Development</span>.
                 I'm currently focused on
                growing my skills through practical experience, driven by my love
                for software engineering. I enjoy solving tough challenges that help me
                improve and evolve as a developer.
              </motion.p>
            </div>
          </motion.div>
          {/* Info Cards */}
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
            className="grid grid-cols-1 gap-6"
          >
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                id={section.id}
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
                  delay: 0.2 * index,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut"
                  }
                }}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <motion.div 
                    className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3"
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: {
                        duration: 0.2,
                        ease: "easeOut"
                      }
                    }}
                  >
                    <motion.span 
                      className="text-blue-600 dark:text-blue-400"
                      whileHover={{
                        scale: 1.2,
                        transition: {
                          duration: 0.2,
                          ease: "easeOut"
                        }
                      }}
                    >
                      {section.icon}
                    </motion.span>
                  </motion.div>
                  <motion.h4 
                    className="text-xl font-semibold text-gray-800 dark:text-white"
                    whileHover={{
                      color: "#3B82F6",
                      transition: {
                        duration: 0.2,
                        ease: "easeOut"
                      }
                    }}
                  >
                    {section.title}
                  </motion.h4>
                </div>
                <motion.div 
                  className="pl-2"
                  whileHover={{
                    x: 5,
                    transition: {
                      duration: 0.2,
                      ease: "easeOut"
                    }
                  }}
                >
                  {section.content}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About