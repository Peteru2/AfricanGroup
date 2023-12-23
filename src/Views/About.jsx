import "../style.css"
import Navbar from "../component/Navbar/Navbar";
const About = () => {
    return ( 
        <>
        <section>
        <Navbar />
            <div className="about">
                <div className="h-[500px] md:pt-52 pt-32   pb-72 text-white  bg-public bg-opacity-70 ">
                    <h2 className="items-center font-bold flex justify-center text-2xl">AfricanGroup <span className="h-2 w-2 mx-4 bg-white rounded-full"></span> About Us</h2>
                    <div className="mt-20 ">
                        <h4 className="text-white text-2xl font-lora flex justify-center ">Who are we?</h4>
                    <h1 className="text-white md:text-6xl text-3xl   flex justify-center  font-roboto">We are Africa's Finest</h1>
                    </div>
                </div>
                
            </div>
            <div className="">
                    <h2 className="bg-white font-roboto md:text-4xl text-3xl text-private flex justify-center h-40 items-center">OUR COMPANY VALUES</h2>

                    <div className="flex flex-wrap justify-center mx-6 mt-8">
                        <div className="bg-white w-[450px] md:mx-6 my-2 p-6">
                                <h2 className="font-lora font-bold text-2xl my-4 text-private">Professionalism</h2>
                                <h4 className="text-[20px]">Professionalism is the cornerstone of our operations at NY Land Surveyor. We maintain the highest level of professional conduct in all aspects of our work, upholding ethical standards and adhering to industry best practices. Our team is composed of licensed professionals who possess the expertise and knowledge required to handle complex surveying projects with utmost professionalism. We are committed to staying up-to-date with the latest advancements in our field, continuously honing our skills to provide our clients with exceptional service. With NYLS, you can expect a professional approach that instills confidence and ensures a seamless surveying experience.</h4>
                        </div>

                        <div className="bg-white w-[450px] md:mx-6 my-4 p-6">
                                <h2 className="font-lora font-bold text-2xl my-4 text-private">Professionalism</h2>
                                <h4 className="text-[20px]">Professionalism is the cornerstone of our operations at NY Land Surveyor. We maintain the highest level of professional conduct in all aspects of our work, upholding ethical standards and adhering to industry best practices. Our team is composed of licensed professionals who possess the expertise and knowledge required to handle complex surveying projects with utmost professionalism. We are committed to staying up-to-date with the latest advancements in our field, continuously honing our skills to provide our clients with exceptional service. With NYLS, you can expect a professional approach that instills confidence and ensures a seamless surveying experience.</h4>
                        </div>
                    </div>
                </div>
        </section>
        </>
     );
}
 
export default About;