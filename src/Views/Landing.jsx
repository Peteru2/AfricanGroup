import Footer from "../component/Footer";
import FirstSection from "../component/LandingPageComp/FirstSection";
import LoadingComponent from "../component/LandingPageComp/Load";
import Services from "../component/LandingPageComp/Services";
import Testimonials from "../component/LandingPageComp/Testimonials";
import Values from "../component/LandingPageComp/values";
import Navbar from "../component/Navbar/Navbar";
import NewsLetter from "../component/NewsLetter";
import Chat from "../component/SideChat";
import { useEffect,useState } from "react";
// import "../style.css"

const Landing = () => {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Simulate loading delay for 2 seconds
      setTimeout(() => {
        setLoading(false);
      }, 10000);
    }, []);

    return ( 
       <>

{loading ? <LoadingComponent /> : (
    <>
             <section>
                <Navbar />
                <FirstSection />
                <Services />
                <Testimonials />
                <Values />
            </section>
            <Chat />
            <NewsLetter />

            <Footer />
            </> 
            )}
       </>
     );
}
 
export default Landing;