import Footer from "../component/Footer";
import FirstSection from "../component/LandingPageComp/FirstSection";
import LoadingComponent from "../component/LandingPageComp/Load";
import Services from "../component/LandingPageComp/Services";
import Testimonials from "../component/LandingPageComp/Testimonials";
import Values from "../component/LandingPageComp/values";
import Navbar from "../component/Navbar/Navbar";
import BlogSection from "../component/LandingPageComp/BlogSection";
import Chat from "../component/SideChat";
import { useEffect,useState } from "react";
import Layout from "../component/Layout";
import Partners from "../component/LandingPageComp/Partners";
// import "../style.css"

const Landing = () => {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Simulate loading delay for 2 seconds
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }, []);

    return ( 
       <>

{loading ? (<LoadingComponent /> ) : (
    <>
    <Layout>
             <section>
               
                <FirstSection />
                <Services />
                <Testimonials />
                <Partners />
                <Values />
                <BlogSection />
            </section>
           
            </Layout>
            </> 
            )}
       </>
     );
}
 
export default Landing;