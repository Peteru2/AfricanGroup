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
import ProjPost from './component/ProjectComp/ProjPost';
import POQ from './component/POG';
import RequestQuote from './component/Navbar/RequestQuote';
import OngoingProjList from './component/ProjectComp/OngoingProjectList';
import OngoingInfoList from './component/ProjectComp/OngoingInfoList';


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
          <Route path={'/project/ongoing-Project'} element={<OngoingProjList />} />

          <Route path={'/Services'} element={<Services />} />
          <Route path={'/Contact-us'} element={<Contact />} />
          <Route path={'/quote-data'} element={<QuoteData />} />
          <Route path={'/priority'} element={<POQ />} />
          <Route path={'/request-quote'} element={<RequestQuote  />} />



          <Route path={'/Blog'} element={<BlogList />} />
          <Route path={'/About/Team'} element={<Team />} />

          <Route path="/blog/:titleParam" element={<BlogPost />} />
          <Route path="/service/:titleParam" element={<ServicePost />} />
          <Route path="/project/:titleParam" element={<ProjPost />} />
          <Route path="/project/ongoing-project/:titleParam" element={<ProjPost />} />
          <Route path="/project/ongoing-project/:titleparam/:titleParam" element={<OngoingInfoList/>} />




          <Route path={'/FAQs'} element={<FaqsMain />} />

        </Routes> 
  </Router>
      </section>
    </>
  )
}

export default App
