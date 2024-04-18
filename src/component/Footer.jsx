import { Link } from "react-router-dom";
import Logo from "../assets/images/AFLOG.jpg"
import NewsLetter from "./NewsLetter";
import { motion } from "framer-motion";
const Footer = () => {
    return ( 
        <>
            <section className="footer   bg-public bg-opacity-90 px-6 md:px-4 xl:px-[90px] md:py-9  pb-12 mt-[150px] w-full font-DMsans font-light text-[12px] text-white    ">
                <NewsLetter />
                <div className="grid md:grid-cols-9  md:pt-[100px] pt-[290px] pb-10 grid-cols-1 gap-4 border-b-[1px] border-white ">
                    <motion.div
                     variants ={{
                        hidden:{opacity: 0, y: 75},
                        visible:{opacity: 1, y: 0},
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{delay: 0.5, 
                    duration: 0.5}}
                      
                    className="col-span-2 w-full border-b-[1px]  md:py-0 py-4 pb-6 border-white md:border-0">
                       
                        <img src={Logo} alt="logo"  className="mb-4 rounded-[10px]"/>
                        
                        <div className="flex mt-2 text-[20px]">
                           <Link to={"https://web.facebook.com/africansurvey"} className="hover:text-vintage  transition ease-in-out  duration-300"> <i className="fa fa-facebook mr-2"></i></Link>
                           <Link to={"https://twitter.com/africanrealty"} className="hover:text-vintage  transition ease-in-out  duration-300">  <i className="fa fa-twitter mx-2"></i></Link>
                           <Link to={"https://instagram.com/africangroupng"} className="hover:text-vintage  transition ease-in-out  duration-300"><i className="fa fa-instagram mx-2"></i></Link>
                           <Link to ={"https://www.linkedin.com/in/africangroupng/"}className="hover:text-vintage  transition ease-in-out  duration-300"><i className="fa fa-linkedin mx-2"></i></Link>
                           


                        </div>
                    </motion.div>
                    <motion.div
                     variants ={{
                        hidden:{opacity: 0, y: 75},
                        visible:{opacity: 1, y: 0},
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{delay: 0.6, 
                    duration: 0.5}}
                      
                    className="col-span-4 md:col-span-1">
                        <h2 className="md:mb-4 mb-6 font-medium text-[14px]">USEFUL LINKS</h2>

                        <Link to={"/Blog"}><h4 className="my-2"> <button className="hover:text-vintage  transition ease-in-out  duration-300">Blog </button></h4></Link>
                        <Link to={"/Contact-us"}> <h4 className="my-2"> <button className="hover:text-vintage  transition ease-in-out  duration-300">Contact</button></h4></Link>
                       <Link to ={"/About"}> <h4 className="my-2"> <button className="hover:text-vintage  transition ease-in-out  duration-300 text-left">About Us</button></h4></Link>
                       <Link to ={"/priority"}> <h4 className="my-2"> <button className="hover:text-vintage  transition ease-in-out  duration-300 text-left">Priority On Quality</button></h4></Link>

                    </motion.div>
                    <motion.div
                     variants ={{
                        hidden:{opacity: 0, y: 75},
                        visible:{opacity: 1, y: 0},
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{delay:  0.7, 
                    duration: 0.5}}
                      
                    className="col-span-2">
                        <h2 className="mb-6  font-medium text-[14px]">CONTACT INFO</h2>
                        <h4 className="my-2"><i className="fa fa-building mr-2"></i> House 3, 1st Close, Behind Union Bank, Owode, Oyo, Oyo State.</h4>
                        <h4 className="my-2"> <button className="hover:text-vintage  transition ease-in-out  duration-300"><i className="fa fa-phone mr-2"></i>+234 706 4255 373 </button></h4>
                        <h4 className="my-2"> <button className="hover:text-vintage  transition ease-in-out  duration-300"> cc:     +234 901 7730 877 </button></h4>
                      
                            <h4 className="my-2"> <button onClick={() => window.location = 'mailto:africangroupng@gmail.com'} className="hover:text-vintage  transition ease-in-out  duration-300"><i className="fa fa-envelope mr-2"></i>africangroupng@gmail.com</button></h4> 



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
                      
                    className="col-span-4">
                        
                        <h2 className="mb-6 font-serif md:text-[14px] font-medium text-[14px]">CAREERS</h2>
                        <h4>We are constantly in quest of talented, passion-driven folks with a tenacity for excellence.</h4>
                        <Link to={"/FAQs"}><h2 className="md:text-[22px] text-[18px] mt-4 hover:text-vintage  transition ease-in-out  duration-300">FAQs</h2></Link>
                    </motion.div>                
                    </div>
                    <div className="my-3">
                        <p>
                        African Group Nigeria is duly registered by the Corporate Affairs Commission, Nigeria (RC:7385369). It is duly registered with the Real Estate Developer Association of Nigeria (REDAN) and the Economic and Financial Crimes Commission via its Special Control Unit Money Laundering (SCUML) in accordance with the provisions of section 5 (1)(a) and (4) of the money laundering (Prevention and prohibition) Act, 2011 and any other law or regulation. 

                        </p>
                    </div>
                    <h2 className="my-4">©2023 All Rights Reserved</h2>
            </section>
        </>
     );
}
 
export default Footer;