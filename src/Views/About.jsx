import "../style.css"
import Navbar from "../component/Navbar/Navbar";
import Chat from "../component/SideChat";
import Footer from "../component/Footer";
import CompanyValues from "../component/AboutComp/CompanyValues";
import Mission from "../component/AboutComp/Mission";
import Team from "../component/AboutComp/Team";
import ImageWithOverlay from "../component/ImageWithOverlay";
import image from "../assets/images/about.jpg"
const About = () => {
    return ( 
        <>
        <section>
            <Navbar />
            <ImageWithOverlay
                imageUrl={image}
                span1="About Us"
                span2=""
                title2="Who are we?"
                decrip="We are Africa's Finest"
      />
            <Mission />
            <CompanyValues />
            <Team />

        </section>
       
        <Chat />
            <Footer />

        </>
     );
}
 
export default About;