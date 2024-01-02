import { useState } from 'react'
// import 
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Views/Landing'
import About from './Views/About'
import BlogList from './component/BlogComp/BlogLists';
import BlogPost from './component/BlogComp/BlogPost';
import Team from './component/Team/Team';


function App() {
  

  return (
    <>
      <section >
        <Router>
        <Routes>
          <Route path={'/'} element={<Landing />} />
          <Route path={'/About'} element={<About />} />
          <Route path={'/Blog'} element={<BlogList />} />
          <Route path={'/About/Team'} element={<Team />} />

          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
        </Router>
      </section>
    </>
  )
}

export default App
