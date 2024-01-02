import "../style.css"
import Navbar from "../component/Navbar/Navbar";
import Chat from "../component/SideChat";
import Footer from "../component/Footer";
import { motion } from "framer-motion";
import NewsLetter from "../component/NewsLetter";
import CompanyValues from "../component/AboutComp/CompanyValues";
import BackgroundImgWord from "../component/AboutComp/BackgroundImgAndWord";
import Mission from "../component/AboutComp/Mission";
import Team from "../component/AboutComp/Team";
const About = () => {
    return ( 
        <>
        <section>
            <Navbar />
            <BackgroundImgWord />
            <Mission />
            <CompanyValues />
            <Team />

        </section>
        {/* <NewsLetter /> */}
            <Footer />
        <Chat />

        </>
     );
}
 
export default About;