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


function App() {
  // Function to calculate the absolute difference between the sums of matrix diagonals
function diagonalDifference(matrixSize, matrix) {
  // Initialize the sums of the two diagonals
  let primaryDiagonalSum = 0;
  let secondaryDiagonalSum = 0;


  for (let i = 0; i < matrixSize; i++) {
      primaryDiagonalSum += matrix[i][i]; 
      secondaryDiagonalSum += matrix[i][matrixSize - 1 - i]; 
      console.log(secondaryDiagonalSum)

  }


  const absoluteDifference = Math.abs(primaryDiagonalSum - secondaryDiagonalSum);

  return absoluteDifference;
}


const matrixSize = 3;
const matrix = [
  [6, 2, 9],
  [4, 5, 6],
  [6, 8, -12]
];


const result = diagonalDifference(matrixSize, matrix);
console.log(result);


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
          <Route path={'/quote-data'} element={<QuoteData />} />


          <Route path={'/Blog'} element={<BlogList />} />
          <Route path={'/About/Team'} element={<Team />} />

          <Route path="/blog/:titleParam" element={<BlogPost />} />
          <Route path="/service/:titleParam" element={<ServicePost />} />
          <Route path="/project/:titleParam" element={<ProjPost />} />


          <Route path={'/FAQs'} element={<FaqsMain />} />

        </Routes> 
  </Router>
      </section>
    </>
  )
}

export default App
