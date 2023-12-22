import "../style.css"
import Navbar from "../component/Navbar/Navbar";
const About = () => {
    return ( 
        <>
        <section>
        <Navbar />
            <div className="about">
                <div className="h-[600px] md:pt-44 pt-32   pb-72 text-white  bg-public bg-opacity-50 ">
                    <h2 className="items-center font-bold flex justify-center">We Are AfricanGroup <span className="h-2 w-2 mx-4 bg-white rounded-full"></span> About Us</h2>
                    <h1 className="text-white text-6xl san-serif flex justify-center mt-4">The Number in African</h1>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default About;