import { useState } from 'react'
// import 
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Views/Landing'
import About from './Views/About'


function App() {
  

  return (
    <>
      <section >
        <Router>
        <Routes>
          <Route path={'/'} element={<Landing />} />
          <Route path={'/About'} element={<About />} />

        </Routes>
        </Router>
      </section>
    </>
  )
}

export default App
