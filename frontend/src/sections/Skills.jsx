import React, { useState } from 'react'
import { 
  Code2, 
  Database, 
  Server, 
  Smartphone, 
  Brain, 
  Zap,
  Sparkles,
  TrendingUp,
  Layers
} from 'lucide-react'

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const [activeCategory, setActiveCategory] = useState(null)

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code2 className="h-8 w-8" />,
      color: 'from-blue-500 via-cyan-500 to-teal-500',
      borderColor: 'border-blue-500/20',
      glowColor: 'shadow-blue-500/25',
      skills: [
        { name: 'HTML', level: 90, description: 'Semantic markup & accessibility' },
        { name: 'CSS', level: 85, description: 'Modern layouts & animations' },
        { name: 'JavaScript', level: 80, description: 'ES6+ & async programming' },
        { name: 'React', level: 85, description: 'Hooks, Context & performance' },
      ],
    },
    {
      title: 'Backend',
      icon: <Server className="h-8 w-8" />,
      color: 'from-purple-500 via-violet-500 to-pink-500',
      borderColor: 'border-purple-500/20',
      glowColor: 'shadow-purple-500/25',
      skills: [
        { name: 'Express', level: 80, description: 'RESTful APIs & middleware' },
        { name: 'PHP', level: 75, description: 'Server-side development' },
        { name: 'Node.js', level: 70, description: 'Runtime & package management' },
      ],
    },
    {
      title: 'Database',
      icon: <Database className="h-8 w-8" />,
      color: 'from-green-500 via-emerald-500 to-teal-500',
      borderColor: 'border-green-500/20',
      glowColor: 'shadow-green-500/25',
      skills: [
        { name: 'MongoDB', level: 85, description: 'NoSQL & aggregation pipelines' },
        { name: 'MySQL', level: 80, description: 'Relational design & queries' },
      ],
    },
    {
      title: 'Mobile',
      icon: <Smartphone className="h-8 w-8" />,
      color: 'from-orange-500 via-amber-500 to-yellow-500',
      borderColor: 'border-orange-500/20',
      glowColor: 'shadow-orange-500/25',
      skills: [
        { name: 'Kotlin', level: 85, description: 'Android native development' },
      ],
    },
  ]

  const otherSkills = [
    { name: 'Version Control', icon: '🔧', color: 'from-red-400 to-pink-400' },
    { name: 'REST API', icon: '🌐', color: 'from-blue-400 to-cyan-400' },
    { name: 'Responsive Design', icon: '📱', color: 'from-green-400 to-teal-400' },
    { name: 'UI/UX', icon: '🎨', color: 'from-purple-400 to-violet-400' },
    { name: 'Problem Solving', icon: '🧩', color: 'from-yellow-400 to-orange-400' },
    { name: 'Teamwork & Collaboration', icon: '🤝', color: 'from-indigo-400 to-blue-400' },
    { name: 'Decision Making', icon: '💡', color: 'from-pink-400 to-rose-400' },
  ]

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        </div>
        
        {/* Floating Orbs */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-multiply filter blur-2xl opacity-60 dark:opacity-30 animate-pulse"
            style={{
              background: `radial-gradient(circle, ${
                i === 0 ? '#3B82F6' : 
                i === 1 ? '#10B981' : 
                i === 2 ? '#8B5CF6' : 
                i === 3 ? '#F59E0B' : '#EF4444'
              }40 0%, transparent 70%)`,
              width: `${300 + i * 100}px`,
              height: `${300 + i * 100}px`,
              left: `${i * 20}%`,
              top: `${i * 15}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i}s`,
            }}
          />
        ))}

        {/* Sparkle Effects */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          >
            <Sparkles className="w-4 h-4 text-blue-400/30 dark:text-blue-300/20" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Enhanced Header */}
        <div
          className="mb-20 text-center"
        >
          <div
            className="inline-block p-4 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 rounded-3xl mb-6 shadow-lg border border-blue-200/50 dark:border-blue-700/50 hover:scale-110 transition-transform duration-300"
          >
            <Brain className="w-10 h-10 text-blue-600 dark:text-blue-400" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-gray-800 via-blue-800 to-indigo-800 dark:from-white dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent mb-6 tracking-tight">
            My Skills
          </h2>
          
          <div className="flex justify-center mb-8">
            <div className="h-2 w-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
            </div>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-xl leading-relaxed">
            Crafting exceptional digital experiences with cutting-edge technologies and creative problem-solving approaches.
          </p>
        </div>

        {/* Enhanced Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className={`group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 border ${category.borderColor} shadow-xl hover:shadow-2xl hover:${category.glowColor} transition-all duration-500 hover:-translate-y-2 ${
                activeCategory === idx ? 'scale-105' : ''
              }`}
              onMouseEnter={() => setActiveCategory(idx)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}></div>
              
              <div className="relative">
                <div className="flex items-center mb-8">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.color} mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white drop-shadow-sm">{category.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {category.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      <span>{category.skills.length} Technologies</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIdx) => (
                    <div
                      key={skill.name}
                      className="group/skill"
                      onMouseEnter={() => setHoveredSkill(`${idx}-${skillIdx}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center">
                          <span className="font-semibold text-gray-700 dark:text-gray-300 text-lg group-hover/skill:text-blue-600 dark:group-hover/skill:text-blue-400 transition-colors">
                            {skill.name}
                          </span>
                          {hoveredSkill === `${idx}-${skillIdx}` && (
                            <div className="ml-3 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs text-gray-600 dark:text-gray-300 animate-fadeIn">
                              {skill.description}
                            </div>
                          )}
                        </div>
                        <span className="text-lg font-bold text-gray-500 dark:text-gray-400 group-hover/skill:text-blue-500 transition-colors">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="relative h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${category.color} shadow-lg relative overflow-hidden`}
                          style={{
                            width: `${skill.level}%`,
                            transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)'
                          }}
                        >
                          {/* Animated shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer"></div>
                        </div>
                        
                        {/* Skill level indicator */}
                        <div
                          className="absolute top-0 h-full w-1 bg-white shadow-lg transform -translate-x-0.5 transition-all duration-1000"
                          style={{ left: `${skill.level}%` }}
                        >
                          <div className="absolute -top-1 -left-2 w-5 h-6 bg-white rounded-full shadow-md flex items-center justify-center">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Other Skills */}
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-2xl rounded-3xl p-10 shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center justify-center mb-10">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 mr-6 shadow-lg">
              <Zap className="h-10 w-10 text-white" />
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
                Additional Expertise
              </h3>
              <div className="flex items-center justify-center text-gray-500 dark:text-gray-400">
                <Layers className="w-5 h-5 mr-2" />
                <span>Core competencies & soft skills</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {otherSkills.map((skill, idx) => (
              <div
                key={skill.name}
                className="group relative p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl border border-gray-200/50 dark:border-gray-600/50 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden"
                style={{
                  animationDelay: `${idx * 0.1}s`
                }}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
                
                <div className="relative text-center">
                  <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <span className="font-medium text-gray-700 dark:text-gray-300 text-sm leading-tight group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
                
                {/* Subtle border animation */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
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