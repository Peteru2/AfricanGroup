import { useState } from 'react'
// import 
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Views/Landing'

function App() {
  

  return (
    <>
      <section >
        <Router>
        <Routes>
          <Route path={'/'} element={<Landing />} />
        </Routes>
        </Router>
      </section>
    </>
  )
}

export default App
