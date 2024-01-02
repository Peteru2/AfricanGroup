import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
const Team = () => {
    return ( 
        <>
        <Navbar />
            <div className="TeamBackGroundImg">
            
                <div className="h-[500px] md:pt-52 pt-32   pb-72 text-white  bg-public bg-opacity-70 ">
                    <motion.h2
                    initial={{x:'100vw'}}
                    animate={{x:0}}
                    transition={{delay: 0.5, type: "spring"}}
                    className="items-center font-bold flex justify-center text-[16px]">AfricanGroup <span className="h-2 w-2 mx-4 bg-white bg-opacity-60 rounded-full"></span> About Us <span className="h-2 w-2 mx-4 bg-white bg-opacity-60 rounded-full"></span> Team
                    </motion.h2>

                    <motion.div 
                    initial={{x:'-100vw'}}
                    animate={{x:0}}
                    transition={{delay: 0.5, type: "spring"}}
                    className="mt-20 ">
                        <h4 className="text-white text-2xl font-lora flex justify-center "> Our Team</h4>
                    <h1 className="text-white md:text-6xl text-3xl   flex justify-center  font-roboto">Meet With Expert Team</h1>
                    </motion.div>
                </div>
                
            </div>
            
        </>
     );
}
 
export default Team;