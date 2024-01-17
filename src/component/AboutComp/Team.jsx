import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Team = () => {
    return ( 
        <>
        <div 
        
        className="about ">
            <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-private mb-[0px] grid  items-center md:grid-cols-2 grid-cols-1 px-8 bg-opacity-70 font-roboto py-6">
                <div className="">
                   
                    <h2 className="text-white text-[40px] font-playfair font-bold  md:w-[500px] ">Professional Land Surveying And Mapping</h2>
                </div>
                <div>
                    <h4 className="text-[20px] text-white">African Group routinely provides surveying solutions for business, real estate, land development and civil engineering in Boise area.</h4>
                    <div className="mt-2 flex">
                        <h3 className="w-20 h-2 bg-vintage"></h3>
                        <h3 className="w-2 h-2 bg-public ml-2"></h3>

                    </div>
                </div>
            </motion.section>
            </div>
            <Link to={'/About/Team'}>
            <div className="flex justify-center text-vintage font-roboto" >
                            <div className="mb-[10px] h-20 shadow-xl flex justify-center w-[200px] bg-white">
                <button className="text-center ">Meet Our Team</button>
            </div>
            </div>
            </Link>


        </>
     );
}
 
export default Team;