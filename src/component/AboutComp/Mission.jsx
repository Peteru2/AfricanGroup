import { motion } from "framer-motion";
const Mission = () => {
    return ( 
        <>
                <section className="border-t-[1px] pt-6 mt-20 xl:mx-[90px] md:mx-5 mx-6 font-roboto">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-14">

                        <motion.div
                       initial={{ opacity: 0 }}
                       whileInView={{ opacity: 1 }}
                       transition={{ delay: 0.5, 
                       staggerChildren: 2}}
                        >
                            <h4 className="text-private font-roboto tracking-[3px] font-bold mb-6">COMPANY OVERVIEW</h4>
                            <h2 className="font-playfair  text-[35px]">Diverse International recognition in the whole World</h2>
                            <div className="grid md:grid-cols-2 grid-cols-1 mt-6   gap-6">
                                <motion.div
                                 initial={{ opacity: 0 }}
                                 whileInView={{ opacity: 1 }}
                                 transition={{ delay: 0.5, 
                                 staggerChildren: 2}}
                                >
                                    <div className="flex items-center">
                                        <h2 className="h-2 w-2 rounded-full bg-private mr-4"></h2>
                                        <h2 className="my-3 tracking-[3px]">OUR MISSION</h2>
                                    </div>
                                    <h4 
                                     
                                    className="text-[15px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem assumenda, nobis expedita voluptatem consequatur ducimus laborum amet, aliquam architecto vero tenetur et, sint natus sequi? Laudantium earum vitae beatae qui. Dolorum natus labore dolorem, voluptate molestias laborum, blanditiis eligendi quam deserunt optio harum in error, unde alias sunt dolor x1</h4>
                                </motion.div>

                                <div>
                                    <div className="flex items-center">
                                        <h2 className="h-2 w-2 rounded-full bg-private mr-4"></h2>
                                        <h2 className="my-3 tracking-[3px]">OUR MISSION</h2>
                                    </div>
                                    <h4 className="text-[15px] mb-6">
                        
                         </h4>
                       
                                </div>
                            </div>

                            
                        </motion.div>
                        <motion.div 
                         initial={{ opacity: 0 }}
                         whileInView={{ opacity: 1 }}
                         transition={{ delay: 0.5, 
                         staggerChildren: 2}}
                        className="text-[15px]">
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