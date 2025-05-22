import React, { useState, useEffect } from 'react'
import {
  Code2,
  Database,
  Server,
  Smartphone,
  Brain,
  Zap,
  Sparkles,
  TrendingUp,
  Layers,
  Star,
  Cpu,
  Terminal
} from 'lucide-react'

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const [activeCategory, setActiveCategory] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code2 className="h-8 w-8" />,
      color: 'from-blue-500 via-cyan-500 to-teal-500',
      borderColor: 'border-blue-500/20',
      glowColor: 'shadow-blue-500/25',
      accentColor: 'text-blue-600',
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'React', level: 85 },
      ],
    },
    {
      title: 'Backend',
      icon: <Server className="h-8 w-8" />,
      color: 'from-purple-500 via-violet-500 to-pink-500',
      borderColor: 'border-purple-500/20',
      glowColor: 'shadow-purple-500/25',
      accentColor: 'text-purple-600',
      skills: [
        { name: 'Python', level: 70 },
        { name: 'Express', level: 80 },
        { name: 'PHP', level: 75 },
        { name: 'Node.js', level: 78 },
        { name: 'Java', level: 75 },
      ],
    },
    {
      title: 'Database',
      icon: <Database className="h-8 w-8" />,
      color: 'from-green-500 via-emerald-500 to-teal-500',
      borderColor: 'border-green-500/20',
      glowColor: 'shadow-green-500/25',
      accentColor: 'text-green-600',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 80 },
      ],
    },
    {
      title: 'Mobile',
      icon: <Smartphone className="h-8 w-8" />,
      color: 'from-orange-500 via-amber-500 to-yellow-500',
      borderColor: 'border-orange-500/20',
      glowColor: 'shadow-orange-500/25',
      accentColor: 'text-orange-600',
      skills: [
        { name: 'Kotlin', level: 85 },
      ],
    },
    {
      title: 'Other Skills',
      icon: <Cpu className="h-8 w-8" />,
      color: 'from-indigo-500 via-blue-500 to-cyan-500',
      borderColor: 'border-indigo-500/20',
      glowColor: 'shadow-indigo-500/25',
      accentColor: 'text-indigo-600',
      skills: [
        { name: 'C++', level: 75 },
        { name: 'C', level: 80 },
      ],
    },
  ];


  const otherSkills = [
    { name: 'Version Control', icon: '🔧', color: 'from-red-400 to-pink-400', level: 90, description: 'Git, GitHub & collaboration workflows' },
    { name: 'REST API', icon: '🌐', color: 'from-blue-400 to-cyan-400', level: 85, description: 'API design & integration' },
    { name: 'Responsive Design', icon: '📱', color: 'from-green-400 to-teal-400', level: 88, description: 'Mobile-first development' },
    { name: 'UI/UX', icon: '🎨', color: 'from-purple-400 to-violet-400', level: 80, description: 'User interface & experience design' },
    { name: 'Problem Solving', icon: '🧩', color: 'from-yellow-400 to-orange-400', level: 95, description: 'Analytical thinking & debugging' },
    { name: 'Teamwork & Collaboration', icon: '🤝', color: 'from-indigo-400 to-blue-400', level: 92, description: 'Team coordination & communication' },
    { name: 'Decision Making', icon: '💡', color: 'from-pink-400 to-rose-400', level: 87, description: 'Strategic thinking & leadership' },
    { name: 'Command Line', icon: '💻', color: 'from-neutral-400 to-gray-500', level: 90, description: 'Efficient CLI workflows & scripting' },
  ]

  const getSkillRating = (level) => {
    if (level >= 90) return { stars: 5, label: 'Expert' }
    if (level >= 80) return { stars: 4, label: 'Advanced' }
    if (level >= 70) return { stars: 3, label: 'Intermediate' }
    if (level >= 60) return { stars: 2, label: 'Beginner' }
    return { stars: 1, label: 'Learning' }
  }

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Dynamic Cursor Glow */}
        <div
          className="fixed pointer-events-none z-50 w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-300 ease-out"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] animate-pulse-slow"></div>
        </div>

        {/* Enhanced Floating Orbs */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-multiply filter blur-3xl opacity-40 dark:opacity-20"
            style={{
              background: `radial-gradient(circle, ${i === 0 ? '#3B82F6' :
                  i === 1 ? '#10B981' :
                    i === 2 ? '#8B5CF6' :
                      i === 3 ? '#F59E0B' :
                        i === 4 ? '#EF4444' :
                          i === 5 ? '#06B6D4' :
                            i === 6 ? '#8B5CF6' : '#F97316'
                }60 0%, transparent 70%)`,
              width: `${200 + i * 80}px`,
              height: `${200 + i * 80}px`,
              left: `${(i * 15) % 100}%`,
              top: `${(i * 12) % 100}%`,
              animation: `float-${i % 3} ${4 + (i % 3)}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}

        {/* Enhanced Sparkle Effects */}
        {[...Array(30)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          >
            <Star className="w-3 h-3 text-blue-400/40 dark:text-blue-300/30" />
          </div>
        ))}

        {/* Code Rain Effect */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`code-${i}`}
            className="absolute animate-code-rain opacity-10 dark:opacity-5"
            style={{
              left: `${i * 7}%`,
              animationDelay: `${i * 0.2}s`,
            }}
          >
            <Terminal className="w-4 h-4 text-green-500" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Enhanced Header */}
        <div className={`mb-20 text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block p-6 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 rounded-3xl mb-8 shadow-2xl border border-blue-200/50 dark:border-blue-700/50 hover:scale-110 transition-all duration-500 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Brain className="w-12 h-12 text-blue-600 dark:text-blue-400 relative z-10 animate-pulse-subtle" />
          </div>

          <h2 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-gray-800 via-blue-800 to-indigo-800 dark:from-white dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent mb-8 tracking-tight animate-text-shimmer">
            My Skills
          </h2>

          <div className="flex justify-center mb-10">
            <div className="h-3 w-40 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full relative overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-slide-shine"></div>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 max-w-4xl mx-auto text-xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            Crafting exceptional digital experiences with cutting-edge technologies, from low-level system programming to AI-powered applications.
          </p>
        </div>

        {/* Enhanced Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className={`group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-2xl rounded-3xl p-8 border ${category.borderColor} shadow-2xl hover:shadow-3xl hover:${category.glowColor} transition-all duration-700 hover:-translate-y-3 ${activeCategory === idx ? 'scale-105 ring-4 ring-purple-500/20' : ''
                } animate-fade-in-up overflow-hidden`}
              style={{ animationDelay: `${idx * 0.2}s` }}
              onMouseEnter={() => setActiveCategory(idx)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              {/* Enhanced Glow Effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-15 transition-all duration-700 blur-2xl scale-110`}></div>

              {/* Floating particles */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-1000 animate-float-particle"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${10 + i * 20}%`,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  />
                ))}
              </div>

              <div className="relative">
                <div className="flex items-center mb-10">
                  <div className={`p-5 rounded-2xl bg-gradient-to-br ${category.color} mr-6 shadow-2xl group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="text-white drop-shadow-lg relative z-10">{category.icon}</span>
                  </div>
                  <div>
                    <h3 className={`text-4xl font-bold text-gray-800 dark:text-white mb-2 group-hover:${category.accentColor} dark:group-hover:text-blue-400 transition-colors duration-300`}>
                      {category.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <TrendingUp className="w-4 h-4 mr-2 animate-pulse" />
                      <span className="mr-4">{category.skills.length} Technologies</span>
                      <Cpu className="w-4 h-4 mr-1" />
                      <span>Core Stack</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  {category.skills.map((skill, skillIdx) => {
                    const rating = getSkillRating(skill.level)
                    return (
                      <div
                        key={skill.name}
                        className="group/skill transform transition-all duration-300 hover:scale-102"
                        onMouseEnter={() => setHoveredSkill(`${idx}-${skillIdx}`)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex items-center flex-wrap gap-2">
                            <div className="flex items-center">
                              {skill.icon && (
                                <span className="mr-2 text-2xl">{skill.icon}</span>
                              )}
                              <span className={`font-bold text-gray-700 dark:text-gray-300 text-lg group-hover/skill:${category.accentColor} dark:group-hover/skill:text-blue-400 transition-colors duration-300`}>
                                {skill.name}
                              </span>
                            </div>

                            {/* Skill Rating Stars */}
                            <div className="flex items-center ml-2">
                              {[...Array(5)].map((_, starIdx) => (
                                <Star
                                  key={starIdx}
                                  className={`w-4 h-4 ${starIdx < rating.stars
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-gray-300 dark:text-gray-600'
                                    } transition-colors duration-200`}
                                  style={{ animationDelay: `${starIdx * 0.1}s` }}
                                />
                              ))}
                              <span className="ml-1 text-xs font-medium text-gray-500 dark:text-gray-400">
                                {rating.label}
                              </span>
                            </div>

                            {hoveredSkill === `${idx}-${skillIdx}` && (
                              <div className="ml-3 px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-full text-xs text-gray-600 dark:text-gray-300 animate-slide-in shadow-lg border border-gray-200 dark:border-gray-500">
                                <div className="font-medium">Skill Level: {rating.label}</div>
                              </div>
                            )}

                          </div>
                          <div className="flex items-center">
                            <span className={`text-xl font-bold ${category.accentColor} dark:text-blue-400 group-hover/skill:scale-110 transition-transform duration-300`}>
                              {skill.level}%
                            </span>
                          </div>
                        </div>

                        <div className="relative h-5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${category.color} shadow-lg relative overflow-hidden group-hover/skill:animate-pulse-glow`}
                            style={{
                              width: `${skill.level}%`,
                              transition: 'width 2s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}
                          >
                            {/* Multiple shine effects */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 animate-shimmer"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer-delayed"></div>
                          </div>

                          {/* Enhanced skill level indicator */}
                          <div
                            className="absolute top-0 h-full w-1 bg-white shadow-xl transform -translate-x-0.5 transition-all duration-1000 group-hover/skill:scale-y-150"
                            style={{ left: `${skill.level}%` }}
                          >
                            <div className="absolute -top-2 -left-3 w-7 h-8 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-gray-200 dark:border-gray-600 group-hover/skill:animate-bounce">
                              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Additional Expertise */}
        <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-3xl rounded-3xl p-12 shadow-3xl border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"></div>
          </div>

          <div className="flex items-center justify-center mb-12 relative">
            <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 mr-6 shadow-2xl animate-pulse-subtle relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
              <Zap className="h-12 w-12 text-white relative z-10" />
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-bold text-gray-800 dark:text-white mb-3">
                Additional Expertise
              </h3>
              <div className="flex items-center justify-center text-gray-500 dark:text-gray-400">
                <Layers className="w-6 h-6 mr-2 animate-spin-slow" />
                <span className="text-lg">Core competencies & soft skills</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative">
            {otherSkills.map((skill, idx) => (
              <div
                key={skill.name}
                className="group relative p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-3xl border border-gray-200/50 dark:border-gray-600/50 hover:shadow-2xl hover:scale-110 hover:-rotate-1 transition-all duration-500 cursor-pointer overflow-hidden animate-fade-in-up"
                style={{
                  animationDelay: `${idx * 0.1}s`
                }}
              >
                {/* Enhanced background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-3xl`}></div>

                {/* Skill level indicator */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 dark:bg-gray-800/90 rounded-full px-2 py-1 text-xs font-bold text-gray-600 dark:text-gray-300">
                    {skill.level}%
                  </div>
                </div>

                <div className="relative text-center">
                  {/* Enhanced skill card with description on hover */}
                  <div className="text-3xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 filter group-hover:drop-shadow-lg">
                    {skill.icon}
                  </div>
                  <span className="font-semibold text-gray-700 dark:text-gray-300 text-sm leading-tight group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300 block mb-2">
                    {skill.name}
                  </span>

                  {/* Skill description on hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-gray-500 dark:text-gray-400 mb-3 h-8 flex items-center justify-center">
                    {skill.description}
                  </div>

                  {/* Mini progress bar */}
                  <div className="mt-3 h-1 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 delay-200`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>

                {/* Enhanced border animation */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-border-spin"></div>

                {/* Sparkle effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[...Array(3)].map((_, sparkleIdx) => (
                    <Sparkles
                      key={sparkleIdx}
                      className="absolute w-4 h-4 text-yellow-400 animate-ping"
                      style={{
                        left: `${20 + sparkleIdx * 30}%`,
                        top: `${15 + sparkleIdx * 25}%`,
                        animationDelay: `${sparkleIdx * 0.2}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style >{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        
        @keyframes shimmer-delayed {
          0% { transform: translateX(-100%) skewX(-12deg); }
          50% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-in {
          from { opacity: 0; transform: translateX(-20px) scale(0.9); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }
        
        @keyframes slide-shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes text-shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
          50% { opacity: 1; transform: scale(1) rotate(180deg); }
        }
        
        @keyframes float-0 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          33% { transform: translateY(-20px) translateX(10px) rotate(120deg); }
          66% { transform: translateY(10px) translateX(-10px) rotate(240deg); }
        }
        
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          50% { transform: translateY(-30px) translateX(20px) rotate(180deg); }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-15px) translateX(-15px) rotate(90deg); }
          75% { transform: translateY(15px) translateX(15px) rotate(270deg); }
        }
        
        @keyframes float-particle {
          0%, 100% { transform: translateY(0px) scale(0.8); opacity: 0.3; }
          50% { transform: translateY(-20px) scale(1.2); opacity: 0.8; }
        }
        
        @keyframes code-rain {
          0% { transform: translateY(-100vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes border-spin {
          0% { border-image: linear-gradient(0deg, #3B82F6, #8B5CF6, #EC4899) 1; }
          100% { border-image: linear-gradient(360deg, #3B82F6, #8B5CF6, #EC4899) 1; }
        }
        
        @keyframes pulse-subtle {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        .animate-shimmer-delayed {
          animation: shimmer-delayed 3s infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
        
        .animate-slide-shine {
          animation: slide-shine 2s infinite;
        }
        
        .animate-text-shimmer {
          background-size: 400% 400%;
          animation: text-shimmer 3s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 3s infinite;
        }
        
        .animate-float-particle {
          animation: float-particle 3s infinite;
        }
        
        .animate-code-rain {
          animation: code-rain 8s linear infinite;
        }
        
        .animate-border-spin {
          animation: border-spin 2s linear infinite;
        }
        
        .animate-pulse-subtle {
          animation: pulse-subtle 3s infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s infinite;
        }
        
        .hover\:scale-102:hover {
          transform: scale(1.02);
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
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
  )
}

export default Skills