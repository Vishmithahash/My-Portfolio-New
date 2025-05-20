import React, { useState } from 'react'
import Header from './components/Header'
import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import { ThemeProvider } from './context/ThemeContext'
export function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main className="flex-grow">
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <footer className="py-6 text-center text-gray-500 dark:text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Vishmitha Hashendra. All rights
            reserved.
          </p>
        </footer>
      </div>
    </ThemeProvider>
  )
}


export default App;
