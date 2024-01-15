import { useState } from 'react'
// import 
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Views/Landing'
import About from './Views/About'
import Project from './Views/Project';
import Contact from './Views/Contact';
import QuoteData from './component/QuoteData';
import ScrollToTop from './component/ScrollTop';
import BlogList from './component/BlogComp/BlogLists';
import BlogPost from './component/BlogComp/BlogPost';
import Team from './component/Team/Team';
import Services from './Views/Service';
import ServicePost from './component/ServicesComp/ServicePost';
import FaqsMain from './component/FAQS/Faqs';


function App() {
  

  return (
    <>
      <section >
        <Router>
        <ScrollToTop />
        <Routes>
          <Route path={'/'} element={<Landing />} />
          <Route path={'/About'} element={<About />} />
          <Route path={'/Project'} element={<Project />} />
          <Route path={'/Services'} element={<Services />} />
          <Route path={'/Contact-us'} element={<Contact />} />
          <Route path={'/Quote_data'} element={<QuoteData />} />


          <Route path={'/Blog'} element={<BlogList />} />
          <Route path={'/About/Team'} element={<Team />} />

          <Route path="/blog/" element={<BlogPost />} />
          <Route path="/service/:titleParam" element={<ServicePost />} />

          <Route path={'/FAQs'} element={<FaqsMain />} />

        </Routes>
        </Router>
      </section>
    </>
  )
}

export default App
