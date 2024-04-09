import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Slide } from 'react-slideshow-image';
import Image1 from "../../assets/images/FirstSectionImage1.jpg"
import Image2 from "../../assets/images/about.jpg"


const Team = () => {
    const imageSlides = [
        {
            img: [
                Image1,
                
            ],
            
            header:"We Are Africa's Finest",
            content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, mollitia? Odit, magni. Ducimus non, ad quam, fuga tempora voluptatum eligendi unde natus facilis libero incidunt atque voluptas enim cum ipsa."
        },
        {
            img: [
                Image2,
            ],
            title:"About",
            header:"Professional Land Surveying And Mapping",
            link: "/About",
            content:"African Group routinely provides surveying solutions for business, real estate, land development and civil engineering in Boise area."
        },
    ]
    const buttonStyle = {
        width: '0px',
        display: 'none',
        margin: '0px'
        
    };
    const properties = {
        prevArrow:(
           
         <button style={{ ...buttonStyle }}><i className='fa fa-arrow-left'></i></button>
        
         ),
        nextArrow: (
       
            <button  className ="hidden"style={{ ...buttonStyle }}><i className='fa fa-arrow-right'></i></button>
        )
    }
    return ( 
        <>
         <Slide
            transitionDuration={400}
            scale={1.4}
            {...properties}

        >
            {imageSlides.map((image, index) => (
        <div style={{ 'backgroundImage': `url(${image.img}) `,  "backgroundSize":"cover"}}>
            <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, 
            staggerChildren: 2}}
            className="bg-private mb-[0px] grid  items-center md:grid-cols-2 grid-cols-1 xl:px-[90px] md:px-5 px-6 bg-opacity-70 font-roboto py-6">
                <div className="">
                   
                    <h2 className="text-white text-[40px] font-playfair font-bold  md:w-[500px] ">{image.header}</h2>
                </div>
                <div>
                    <h4 className="text-[20px] text-white">{image.content}</h4>
                    <div className="mt-2 flex">
                        <h3 className="w-20 h-2 bg-vintage"></h3>
                        <h3 className="w-2 h-2 bg-public ml-2"></h3>

                    </div>
                </div>
                
            </motion.section>
            </div>
             
              ))}
        </Slide>

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