import React from 'react'
import Headers from './components/Headers'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/home'

function App() {
  return (
    <div className='container'>
      <Headers />
      <Nav />
      <Home />
      <Footer/>
    </div>
  )
}

export default App
