import { motion } from "framer-motion";
const Mission = () => {
    return ( 
        <>
                <section className="border-t-[1px] pt-6 mt-20 xl:mx-[90px] md:mx-5 mx-6 font-roboto">

                        <div>
                            <h4 className="text-private font-roboto tracking-[3px] font-bold mb-6">COMPANY OVERVIEW</h4>
                            <h2 className="font-playfair  text-[35px]">Diverse International recognition in the whole World</h2>
                        </div>

                    <div className="flex flex-col md:flex-row md:gap-10 md:gap-6">

                        <motion.div
                       variants ={{
                        hidden:{opacity: 0, y: 75},
                        visible:{opacity: 1, y: 0},
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{delay:  0.5, 
                    duration: 0.5}}
                        >
                           
                            <div className="grid md:grid-cols-2 grid-cols-1 md:mt-6 md:mb-0 mb-6   order-last md:order-first gap-6">
                                <motion.div
                                  variants ={{
                                    hidden:{opacity: 0, y: 75},
                                    visible:{opacity: 1, y: 0},
                                }}
                                initial="hidden"
                                whileInView="visible"
                                transition={{delay:  0.5, 
                                duration: 0.5}}

                                >
                                    <div className="flex items-center">
                                        <h2 className="h-2 w-2 rounded-full bg-private mr-4"></h2>
                                        <h2 className="my-3 tracking-[3px]">OUR MISSION</h2>
                                    </div>
                                    <h4 className="text-[15px]">
                                        Our mission is to redifing luxury living locally in a global standard and deliver optimal solutions with top quality and best services.
                                    </h4>
                                </motion.div>

                                <motion.div 
                                variants ={{
                                    hidden:{opacity: 0, y: 75},
                                    visible:{opacity: 1, y: 0},
                                }}
                                initial="hidden"
                                whileInView="visible"
                                transition={{delay:  0.5, 
                                duration: 0.5}}
                                // className="md:order-2 order-1"
                                >
                                    <div className="flex items-center">
                                        <h2 className="h-2 w-2 rounded-full bg-private mr-4"></h2>
                                        <h2 className="my-3 tracking-[3px]">OUR VISION</h2>
                                    </div>
                                    <h4 c className="text-[15px]">To be a world class and leading company in the surveying and Mapping, Real estate, Construction, Agro and Tech industries by offering quality and standard services to our customers, share our success with our partners and staff base and enhance our share holders investment. </h4>

                                </motion.div    >

                            </div>

                            
                        </motion.div>

                        <motion.div 
                         variants ={{
                            hidden:{opacity: 0, y: 75},
                            visible:{opacity: 1, y: 0},
                        }}
                        initial="hidden"
                        whileInView="visible"
                        transition={{delay:  0.5, 
                        duration: 0.5}}
                        className="text-[15px] mt-6  order-first md:order-last">
                            <h4><b>AFRICAN GROUP</b> Nigeria, is a sole Nigerian Group of Companies existing over eight years, which was incorporated in 2020; for the purpose of providing first class services in the areas of: Surveying & Mapping, Real Estate, Construction & Agricultural services.</h4>
                            <h4 className="text-[15px] my-6">
                        The company is driven by a group of highly trained, experienced, self-motivated, and very dynamic Professionals equipped to handle various categories of projects; LAND & ENGINEERING SURVEYING, MAPPING & GEO-DATA, ARCHITECTURAL DESIGNS, REAL ESTATE, CIVIL CONSTRUCTION, AGRO, SITE CLEARING & GROUND LEVELLING, DRILLING, ELECTRICAL ENGINEERING, INTERIOR & EXTERIOR FINISHING, and PROJECT MANAGEMENT.
                        </h4>
                        </motion.div>
                        <div>

                        </div>
                        
                    </div>
                    
                </section>
        </>
     );
}
 
export default Mission;