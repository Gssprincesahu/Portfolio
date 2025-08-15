import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/skills'
import Project from './components/Project'
import Contact from './components/Contact'

function App() {

  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Navbar/>
      <About/>
      <Skills/>
      <Project />
      <Contact />
    </div>
  )
}

export default App
