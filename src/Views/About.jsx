import "../style.css"
import Navbar from "../component/Navbar/Navbar";
import Chat from "../component/SideChat";
import Footer from "../component/Footer";
import { motion } from "framer-motion";
const About = () => {
    return ( 
        <>
        <section>
        <Navbar />
            <div className="about">
                <div className="h-[500px] md:pt-52 pt-32   pb-72 text-white  bg-public bg-opacity-70 ">
                    <motion.h2
                    initial={{x:'100vw'}}
                    animate={{x:0}}
                    transition={{delay: 0.5, type: "spring"}}
                    className="items-center font-bold flex justify-center text-2xl">AfricanGroup <span className="h-2 w-2 mx-4 bg-white bg-opacity-60 rounded-full"></span> About Us
                    </motion.h2>

                    <motion.div 
                    initial={{x:'-100vw'}}
                    animate={{x:0}}
                    transition={{delay: 0.5, type: "spring"}}
                    className="mt-20 ">
                        <h4 className="text-white text-2xl font-lora flex justify-center ">Who are we?</h4>
                    <h1 className="text-white md:text-6xl text-3xl   flex justify-center  font-roboto">We are Africa's Finest</h1>
                    </motion.div>
                </div>
                
            </div>
            <div className="">
                    <motion.h2
                    initial={{y:-3}}
                    animate={{y:0}}
                    transition={{delay: 0.5, type: "spring"}} 
                    className="bg-white font-lora md:text-4xl text-2xl font-bold text-private flex justify-center h-40 items-center">OUR COMPANY VALUES</motion.h2>

                    <div className="flex flex-wrap justify-center mx-6 mt-8">
                    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
     // Animation settings
                                
                         className="bg-white w-[550px] md:mx-6  my-4 md:p-10 p-5">
                            <div className="flex w-full mb-7 md:text-6xl  text-4xl font-bold">
                                <h2><i className="fa fa-black-tie text-private"></i></h2>
                                <h2 className="ml-auto text-gray text-opacity-30 font-roboto">01</h2>
                            </div>
                                <h2 className="font-lora font-bold text-2xl my-4 text-private">Professionalism</h2>
                                <h4 className="text-[17px] font-roboto md:text-justify">Professionalism is the cornerstone of our operations at NY Land Surveyor. We maintain the highest level of professional conduct in all aspects of our work, upholding ethical standards and adhering to industry best practices. Our team is composed of licensed professionals who possess the expertise and knowledge required to handle complex surveying projects with utmost professionalism. We are committed to staying up-to-date with the latest advancements in our field, continuously honing our skills to provide our clients with exceptional service. With NYLS, you can expect a professional approach that instills confidence and ensures a seamless surveying experience.</h4>
                        </motion.div>

                        <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.8, 
                         }}
                        className="bg-white w-[550px] md:mx-6 my-4 md:p-10 p-5">
                        <div className="flex w-full mb-7 md:text-6xl  text-4xl font-bold">
                                <h2><i className="fa fa-check-circle text-private"></i></h2>
                                <h2 className="ml-auto text-gray text-opacity-30 font-roboto">02</h2>
                            </div>
                                <h2 className="font-lora font-bold text-2xl my-4 text-private">Quality</h2>
                                <h4 className="text-[17px] font-roboto md:text-justify">Professionalism is the cornerstone of our operations at NY Land Surveyor. We maintain the highest level of professional conduct in all aspects of our work, upholding ethical standards and adhering to industry best practices. Our team is composed of licensed professionals who possess the expertise and knowledge required to handle complex surveying projects with utmost professionalism. We are committed to staying up-to-date with the latest advancements in our field, continuously honing our skills to provide our clients with exceptional service. With NYLS, you can expect a professional approach that instills confidence and ensures a seamless surveying experience.</h4>
                        </motion.div>

                        <motion.div 
                         initial={{ opacity: 0 }}
                         whileInView={{ opacity: 1 }}
                         transition={{ delay: 0.8, }}
                        className="bg-white w-[550px] md:mx-6 my-4 md:p-10 p-5">
                        <div className="flex w-full mb-7 md:text-6xl l text-4xl font-bold">
                                <h2><i className="fa fa-comments text-private"></i></h2>
                                <h2 className="ml-auto text-gray text-opacity-30 font-roboto">03</h2>
                            </div>
                                <h2 className="font-lora font-bold text-2xl my-4 text-private">Customer dedication</h2>
                                <h4 className="text-[17px] font-roboto md:text-justify">Professionalism is the cornerstone of our operations at NY Land Surveyor. We maintain the highest level of professional conduct in all aspects of our work, upholding ethical standards and adhering to industry best practices. Our team is composed of licensed professionals who possess the expertise and knowledge required to handle complex surveying projects with utmost professionalism. We are committed to staying up-to-date with the latest advancements in our field, continuously honing our skills to provide our clients with exceptional service. With NYLS, you can expect a professional approach that instills confidence and ensures a seamless surveying experience.</h4>
                        </motion.div>
                        <motion.div 
                         initial={{ opacity: 0 }}
                         whileInView={{ opacity: 1 }}
                         transition={{ delay: 0.8, }}
                        className="bg-white w-[550px] md:mx-6 my-4 md:p-10 p-5">
                        <div className="flex w-full mb-7 md:text-6xl  text-4xl  font-bold">
                        <h2><i className="fa fa-handshake-o text-private"></i></h2>
                                <h2 className="ml-auto text-gray text-opacity-30 font-roboto">04</h2>
                            </div>
                                <h2 className="font-lora font-bold text-2xl my-4 text-private">Reliable</h2>
                                <h4 className="text-[17px] font-roboto md:text-justify">Professionalism is the cornerstone of our operations at NY Land Surveyor. We maintain the highest level of professional conduct in all aspects of our work, upholding ethical standards and adhering to industry best practices. Our team is composed of licensed professionals who possess the expertise and knowledge required to handle complex surveying projects with utmost professionalism. We are committed to staying up-to-date with the latest advancements in our field, continuously honing our skills to provide our clients with exceptional service. With NYLS, you can expect a professional approach that instills confidence and ensures a seamless surveying experience.</h4>
                        </motion.div>
                    </div>
                </div>
        </section>
        <Chat />
            <Footer />
        </>
     );
}
 
export default About;