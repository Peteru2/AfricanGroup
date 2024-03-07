import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Values = () => {
    return ( 
        <>
            <section className="">
                  <div className="values ">
                                <div className="bg-public pt-6 xl:px-16 md:px-5 px-6 font-bold bg-opacity-95 ">
                                    <h2 className="e text-center text-white text-opacity-80  my-2 tracking-widest">Our Core Values</h2>
                                    <h2 className="text-white text-4xl text-center my-6 mb-10 font-roboto">D.I.E. & L.I.E.</h2>
                        <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-6">

                        <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4, 
                        staggerChildren: 2}}
                         className="">
                            <div className="flex w-full  text-5xl md:justify-center font-bold">
                                <h2><i className="fa fa-gavel text-white  md:text-center text-left "></i></h2>
                                
                                </div>
                                    <h2 className="font-lora font-bold text-2xl my-4 text-white md:text-center text-left">Diligence</h2>
                                    <h4 className="text-[17px] font-roboto text-white md:text-center text-left">We are a team of professionals who take persistency, hardworking, and commitment to completion of projects as our first priority. </h4>
                                </motion.div>
                           

                            <motion.div className="  "
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5, 
                            staggerChildren: 2}}
                            >
                            <div className="flex w-full  text-5xl md:justify-center mt-8 md:mt-0 font-bold">
                                <h2><i className="fa fa-handshake text-white  "></i></h2>
                                
                                </div>
                                    <h2 className="font-lora font-bold text-2xl my-4 text-white md:text-center text-left">Integrity</h2>
                                    <h4 className="text-[17px] font-roboto text-white md:text-center text-left">Topnotch remarks and credibility based on trust in our services has been pivotal and a motivation to the brand. The standard and quality of services rendered in real-time has been the point of trust gained from our customers.  </h4>
                                </motion.div>
                        
                                <motion.div className="  "
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.6, 
                                staggerChildren: 2}}
                                >
                            <div className="flex w-full  text-5xl md:mt-0  mt-8 md:justify-center text-center font-bold">
                                <h2><i className=" fa fa-star text-white  text-center "></i></h2>
                                
                                </div>
                                    <h2 className="font-lora font-bold text-2xl my-4 text-white md:text-center text-left">Excellence</h2>
                                    <h4 className="text-[17px] font-roboto text-white md:text-center text-left">We are a team of professionals working together to deliver the best services to our valuable customers and shareholders. To achieve this, we demonstrate team-work and integrity.  </h4>
                                </motion.div>

                                <motion.div className="  "
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.7, 
                                staggerChildren: 2}}>
                            <div className="flex w-full  text-5xl mt-8 md:mt-0 md:justify-center text-center font-bold">
                                <h2><i className="fa fa-users text-white md:text-center text-left "></i></h2>
                                
                                </div>
                                    <h2 className="font-lora font-bold text-2xl my-4 text-white md:text-center text-left">Leadership</h2>
                                    <h4 className="text-[17px] font-roboto text-white md:text-center text-left">We thrive on being leaders in our business, markets, and communities. To drive this, we focus on continuous improvement, professionalism, and partnership.  </h4>
                                </motion.div>

                                <motion.div className="  "
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.7, 
                                staggerChildren: 2}}>
                            <div className="flex w-full  text-5xl mt-8 md:mt-0 md:justify-center text-center font-bold">
                                <h2><i className="fas fa-landmark text-white md:text-center text-left "></i></h2>
                                
                                </div>
                                    <h2 className="font-lora font-bold text-2xl my-4 text-white md:text-center text-left">Innovation</h2>
                                    <h4 className="text-[17px] font-roboto text-white md:text-center text-left">Being part of a constant dynamic & developing industries with emerging technologies, method & partnership, we are at every point in time ready with creative & unique ideas in retaining our service value & relevance.  </h4>
                                </motion.div>


                                <motion.div className="  "
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.7, 
                                staggerChildren: 2}}>
                            <div className="flex w-full  text-5xl mt-8 md:mt-0 md:justify-center text-center font-bold">
                                <h2><i className="fa fa-check-circle text-white md:text-center text-left "></i></h2>
                                
                                </div>
                                    <h2 className="font-lora font-bold text-2xl my-4 text-white md:text-center text-left">Enterpreneur</h2>
                                    <h4 className="text-[17px] font-roboto text-white md:text-center text-left">We continuously strive and develop our business, while enhancing the SMEs and employing state of the art methods to retain our market leadership.  </h4>
                                </motion.div>
                                </div>
                                <div className="flex justify-center mt-16">
                                    <motion.button
                                    whileHover={{scale: 1.3}}
                                     transition={{type:"spring", stiffness:200}}
                                 className="w-28 py-2 text-white border-white rounded-full  border-[1px]"> <Link to={'/About'}>About Us </Link> </motion.button>
                                </div>
                                <div className="w-full flex justify-center mt-16">
                                <div className="w-[.5px] h-28 bg-gray  ">
                                        
                                </div>
                                </div>
                    </div>
                                       
                    </div>  
                    <div 
        
        className="about ">
            <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-private mb-[0px] grid  items-center md:grid-cols-2 grid-cols-1 xl:px-[90px] px-6 bg-opacity-70 font-roboto py-[80px]">
                <div className="">
                   
                    <motion.h2 
                      initial={{scale:0.8}}
                      transition={{duration:1}}
                      whileInView={{ scale: 1.0 }}
                   
                    className="text-white text-[40px] font-playfair font-bold  md:w-[500px] ">Professional Land Surveying And Mapping</motion.h2>
                </div>
                <div>
                
     
                    <motion.h4
                    initial={{scale:0.8}}
                    transition={{duration:1}}
                    whileInView={{ scale: 1.0 }}
                     className="text-[20px] text-white">African Group routinely provides surveying solutions for business, real estate, land development and civil engineering in Boise area.</motion.h4>
                    <div className="mt-2 flex">
                        <h3 className="w-20 h-2 bg-vintage"></h3>
                        <h3 className="w-2 h-2 bg-public ml-2"></h3>

                    </div>
                </div>
            </motion.section>
            </div>
            </section>
        </>
     );
}
 
export default Values;