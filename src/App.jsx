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
import Team from './component/Team/Team';
import Services from './Views/Service';
import ServicePost from './component/ServicesComp/ServicePost';
import FaqsMain from './component/FAQS/Faqs';
import ProjPost from './component/ProjectComp/ProjPost';
import POQ from './component/POG';
import RequestQuote from './component/Navbar/RequestQuote';
import OngoingProjList from './component/ProjectComp/OngoingProjectList';
import OngoingInfoList from './component/ProjectComp/OngoingInfoList';
import Blog from './Views/Blog';
import BlogPost from './component/BlogComp/BlogPost';


function App() {
  return (
    <>
      <section >
        <Router>
        <ScrollToTop />
        <Routes>
          <Route path={'/'} element={<Landing />} />
          <Route path={'/about'} element={<About />} />
          <Route path={'/project'} element={<Project />} />
          <Route path={'/project/ongoing-Project'} element={<OngoingProjList />} />

          <Route path={'/services'} element={<Services />} />
          <Route path={'/contact-us'} element={<Contact />} />
          <Route path={'/quote-data'} element={<QuoteData />} />
          <Route path={'/priority'} element={<POQ />} />
          <Route path={'/request-quote'} element={<RequestQuote  />} />



          <Route path={'/blog'} element={<BlogList />} />
          <Route path={'/about/team'} element={<Team />} />

          <Route path="/blog/:titleParam" element={<Blog />} />
          <Route path="/service/:titleParam" element={<ServicePost />} />
          <Route path="/project/:titleParam" element={<ProjPost />} />
          <Route path="/project/ongoing-project/:titleParam" element={<ProjPost />} />
          <Route path="/project/ongoing-project/:titleparam/:titleParam" element={<OngoingInfoList/>} />




          <Route path={'/faqs'} element={<FaqsMain />} />

        </Routes> 
  </Router>
      </section>
    </>
  )
}

export default App
