import { motion } from "framer-motion";
const CompanyValues = () => {
    return ( 
        <>
            <section>
           
            <div className="">
                    <motion.h2
                    initial={{y:-3}}
                    animate={{y:0}}
                    transition={{delay: 0.5, type: "spring"}} 
                    className="bg-white font-lora  font-bold text-private flex justify-center h-24 items-center">
                        <div>
                        <h2 className="md:text-4xl text-2xl">OUR CORE VALUES</h2>
                        <h2 className="text-[19px] text-center  ">D.I.E & L.I.E</h2>
                        </div>
                    </motion.h2>
            
                    <div className="flex flex-wrap justify-center mx-6 ">
                        
                    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
     // Animation settings
                                
                         className="bg-white md:w-[400px] w-[550px] md:mx-6  my-4 md:p-10 p-5">
                            <div className="flex w-full mb-7 md:text-6xl  text-4xl font-bold">
                            <h2><i className="fa fa-gavel  text-private"></i></h2>
                                <h2 className="ml-auto text-gray text-opacity-30 font-roboto">01</h2>
                            </div>
                                <h2 className="font-lora font-bold text-2xl my-4 text-private">Diligence</h2>
                                <h4 className="text-[17px] font-roboto md:text-justify">We are a team of professionals who take persistency, hardworking, and commitment to completion of projects as our first priority.</h4>
                        </motion.div>

                        <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, 
                         }}
                        className="bg-white md:w-[400px] w-[550px] md:mx-6 my-4 md:p-10 p-5">
                        <div className="flex w-full mb-7 md:text-6xl  text-4xl font-bold">
                        <h2><i className="fa fa-handshake text-private "></i></h2>

                                <h2 className="ml-auto text-gray text-opacity-30 font-roboto">02</h2>
                            </div>
                                <h2 className="font-lora font-bold text-2xl my-4 text-private">Integrity</h2>
                                <h4 className="text-[17px] font-roboto md:text-justify">Topnotch remarks and credibility based on trust in our services has been pivotal and a motivation to the brand. The standard and quality of services rendered in real-time has been the point of trust gained from our customers.</h4>
                        </motion.div>

                        <motion.div 
                         initial={{ opacity: 0 }}
                         whileInView={{ opacity: 1 }}
                         transition={{ delay: 0.3, }}
                        className="bg-white md:w-[400px] w-[550px] md:mx-6 my-4 md:p-10 p-5">
                        <div className="flex w-full mb-7 md:text-6xl l text-4xl font-bold">
                        <h2><i className=" fa fa-star text-private  "></i></h2>

                                <h2 className="ml-auto text-gray text-opacity-30 font-roboto">03</h2>
                            </div>
                                <h2 className="font-lora font-bold text-2xl my-4 text-private">Excellence</h2>
                                <h4 className="text-[17px] font-roboto md:text-justify">We are a team of professionals working together to deliver the best services to our valuable customers and shareholders. To achieve this, we demonstrate team-work and integrity.</h4>
                        </motion.div>
                        <motion.div 
                         initial={{ opacity: 0 }}
                         whileInView={{ opacity: 1 }}
                         transition={{ delay: 0.4, }}
                        className="bg-white     md:w-[400px] w-[550px] md:mx-6 my-4 md:p-10 p-5">
                        <div className="flex w-full mb-7 md:text-6xl  text-4xl  font-bold">
                        <h2><i className="fa fa-users text-private  "></i></h2>

                                <h2 className="ml-auto text-gray text-opacity-30 font-roboto">04</h2>
                            </div>
                                <h2 className="font-lora font-bold text-2xl my-4 text-private">Leadership</h2>
                                <h4 className="text-[17px] font-roboto md:text-justify">We thrive on being leaders in our business, markets, and communities. To drive this, we focus on continuous improvement, professionalism, and partnership.</h4>
                        </motion.div>
                        <motion.div 
                         initial={{ opacity: 0 }}
                         whileInView={{ opacity: 1 }}
                         transition={{ delay: 0.5, }}
                        className="bg-white md:w-[400px] w-[550px] md:mx-6 my-4 md:p-10 p-5">
                        <div className="flex w-full mb-7 md:text-6xl  text-4xl  font-bold">
                        <h2><i className="fas fa-landmark text-private  "></i></h2>

                                <h2 className="ml-auto text-gray text-opacity-30 font-roboto">05</h2>
                            </div>
                                <h2 className="font-lora font-bold text-2xl my-4 text-private">Innovation</h2>
                                <h4 className="text-[17px] font-roboto md:text-justify">eing part of a constant dynamic & developing industries with emerging technologies, method & partnership, we are at every point in time ready with creative & unique ideas in retaining our service value & relevance.</h4>
                        </motion.div>
                        <motion.div 
                         initial={{ opacity: 0 }}
                         whileInView={{ opacity: 1 }}
                         transition={{ delay: 0.6, }}
                        className="bg-white md:w-[400px] w-[550px] md:mx-6 my-4 md:p-10 p-5">
                        <div className="flex w-full mb-7 md:text-6xl  text-4xl  font-bold">
                        <h2><i className="fa fa-check-circle text-private  "></i></h2>

                                <h2 className="ml-auto text-gray text-opacity-30 font-roboto">06</h2>
                            </div>
                                <h2 className="font-lora font-bold text-2xl my-4 text-private">Enterpreneurship</h2>
                                <h4 className="text-[17px] font-roboto md:text-justify">We continuously strive and develop our business, while enhancing the SMEs and employing state of the art methods to retain our market leadership.</h4>
                        </motion.div>
                    </div>
                </div>

            </section>
        </>
     );
}
 
export default CompanyValues;