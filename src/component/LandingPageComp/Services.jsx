import { Bounce, Fade } from "react-awesome-reveal"
import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import Image1 from "../../assets/images/FirstSectionImage1.jpg"
import { Link } from "react-router-dom"
const Services = () => {
    const str = "AFRICAN GROUP A"
    const textRef = useRef(null);

    useEffect(() => {
        const textContainer = textRef.current;
        if (textContainer) {
          for (let i = 0; i < str.length; i++) {
            let span = document.createElement('mark');
            span.innerHTML = str[i];
            textContainer.appendChild(span);
            span.style.transform = `rotate(${11 * i}deg)`;
          }
        }
      }, [str]);
       
    
    return ( 
        <>
         <Fade triggerOnce direction="left"  >
            <section className="md:bg-public bg-white md:bg-opacity-50 md:h-[300px]  w-full  md:mb-[350px]">
                <div></div>
                <div className=" flex justify-center md:bg-transparent md:bg-opacity-0 bg-public bg-opacity-50 py-4 md:py-0">
                  <div>

                 
                    <h2 className="font-playfair md:text-3xl text-2xl  text-white text-center md:py-4">Our Services</h2>
                    <h1 className="font-playfair text-3xl md:text-4xl text-white md:py-4">Quality without compromise</h1>
                    </div>
                </div>
                <div className="flex justify-center">
                        <div className="grid md:grid-cols-3 mt-4 md:mt-0 w-[1100px] gap-6 my-4  mx-6 md:mx-0">
                        <Bounce cascade triggerOnce direction=""> 
                                <motion.div 
                                  whileHover={{scale: 0.9}}
                                  transition={{type:"spring", stiffness:200}}
                                className="md:bg-white  md:shadow-none rounded-md">
                                    <img src={Image1} alt="image1" className='px-6 md:px-0 rounded-md'/>
                                    <div className=" bg-white shadow-2xl rounded-md">
                                      <h2 className="px-4 py-4 "><Link> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum aperiam ipsum minima provident dolores exercitationem soluta quas excepturi, rem laboriosam voluptatem eum eos fuga expedita labore ut ab aliquam voluptate?</Link></h2>
                                    </div>
                                </motion.div>
                                <motion.div 
                                  whileHover={{scale: 0.9}}
                                  transition={{type:"spring", stiffness:200}}
                                className="md:bg-white  md:shadow-none rounded-md">
                                    <img src={Image1} alt="image1" className='px-6 md:px-0 rounded-md'/>
                                    <div className=" bg-white shadow-2xl rounded-md">
                                      <h2 className="px-4 py-4 "><Link> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum aperiam ipsum minima provident dolores exercitationem soluta quas excepturi, rem laboriosam voluptatem eum eos fuga expedita labore ut ab aliquam voluptate?</Link></h2>
                                    </div>
                                </motion.div>
                                <motion.div 
                                  whileHover={{scale: 0.9}}
                                  transition={{type:"spring", stiffness:200}}
                                className="md:bg-white  md:shadow-none rounded-md">
                                    <img src={Image1} alt="image1" className='px-6 md:px-0 rounded-md'/>
                                    <div className=" bg-white shadow-2xl rounded-md">
                                      <h2 className="px-4 py-4 "><Link> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum aperiam ipsum minima provident dolores exercitationem soluta quas excepturi, rem laboriosam voluptatem eum eos fuga expedita labore ut ab aliquam voluptate?</Link></h2>
                                    </div>
                                </motion.div>
                                
                                 </Bounce>
                                
                        </div>
                        
                        </div>
                        <div className="circle-container">
                                    <p className="text" ref={textRef}></p>
                                </div>
            </section> 
            
        </Fade>
        </>
     );
}
 
export default Services;