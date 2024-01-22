import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Footer from './components/footer'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <Navbar/>
      <Hero />
      <About />
      <Portfolio />
      <Contact/>
      <Footer />
    </>
  )
}

export default App
