import "../style.css"
import Navbar from "../component/Navbar/Navbar";
import Chat from "../component/SideChat";
import Footer from "../component/Footer";
import CompanyValues from "../component/AboutComp/CompanyValues";
import Mission from "../component/AboutComp/Mission";
import Team from "../component/AboutComp/Team";
import Helmett from "../component/Helmet";
import ImageWithOverlay from "../component/ImageWithOverlay";
import image from "../assets/images/about.jpg"
const About = () => {
    return ( 
        <>
        <section>
            <Helmett 
                title="About Us"
                content="Learn more about our reputable land surveying company in Oyo, Nigeria. Discover our commitment to precision, excellence, and client satisfaction. Meet our experienced surveyors dedicated to providing top-notch services for residential and commercial projects."
                />
            <Navbar />
            <ImageWithOverlay
                imageUrl={image}
                span1="About Us"
                span2=""
                title2="Who are we?"
                decrip="We are Africa's Finest"
                height="400px"
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