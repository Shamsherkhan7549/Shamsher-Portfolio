import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Project from './pages/Projects/Project'
import Contact from './pages/Contact/Contact'
import Skills from './pages/Skills/Skills'
import Navbar from './components/Navbar'
import AddSkills from './components/AddSkills'


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="//add-skill" element={<AddSkills />} />
      </Routes>
    </Router>
  )
}

export default App