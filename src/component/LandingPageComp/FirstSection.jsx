import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Image1 from "../../assets/images/FirstSectionImage1.jpg"
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const FirstSection = () => {

    const buttonStyle = {
        width: '60px',
        height: '60px', // Added height for better circular appearance
        background: 'rgba(225,225,225,.4)',
        // borderWidth: '3px',
        // borderColor: '#8AB863',
        borderRadius:'50%',
        display: 'flex',
        alignItems:"center",
        justifyContent:'center',
        // borderStyle: 'dotted',
        padding: '20px', 
        marginRight: '10px',
        marginLeft: '10px',// Using 'none' for no border
        color: 'white', 
        cursor: 'pointer',
        marginTop:'400px',
        webkitTapHighlightColor: 'transparent' ,
        outline: 'none' 
    };
    if (window.innerWidth <= 767) {
        // Adjust the marginTop for mobile devices
        buttonStyle.marginTop = '320px';
        buttonStyle.marginRight= '0px';
        buttonStyle.marginLeft='0px';
        buttonStyle.width= '45px';
        buttonStyle.height= '45px';
        // buttonStyle.borderStyle= 'dotted';
        // buttonStyle.borderColor= '#FD972D';
        
      }
      
    const imageSlides = [
        {
            img: [
                Image1,
                
            ],
            title:"About",
            header:"We are the Kabiesi of all Lands and Housing",
            vip:"",
            link: "/about",
            content:"African Group stands as beacon of excellence in the realms of Survey, Real Estate and Construction across Africa. Our mission is to redefine luxury living locally and elevate the industry with transformative experiences rooted in intricately designed architecture. "
        },
        {
            img: [
                Image1,
            ],
            title:"Our Team",
            header:"We Are Africa's Finest",
            vip:"",
            link: "about/team",
            content:"The company is driven by a group of highly trained, experienced, self-motivated, and very dynamic Professionals equipped to handle various categories of projects."
        },
        {
            img: [
                Image1,
            ],
            title:"Featured Project",
            header:"At African Group, we blend innovation with artistry",
            vip:"",
            link: "/project",
            content:"Experience the pinnacle of luxury living with African Group, where every project is testament to our unwavering commitment to excellence in Survey, Real Estate and Construction. "
        },
        {
            img: [
                Image1,
            ],
            title:"Construction",
            header:"Luxury Duplex By African Group",
            vip:"Only for the VIPs",
            link: "/project/construction-of-luxury-duplex-building",
            content:"Built on a pedestal of D.I.E the luxury duplex embodies our dedication to Diligence, Innovation and Excellence, setting a global standard locally in a luxury real estate with transformative experiences through intricately designed architecture. "
        },
    ]
    
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
        <Helmet>
    <meta charSet="utf-8" />
    <title>Home - Land Surveying in Oyo Nigeria</title>
    <meta name="description" content="Leading land surveying services in Oyo, Nigeria. Accurate property assessments, boundary surveys, and topographic mapping. Expert surveyors for residential and commercial projects." />
   
</Helmet>
        <section>
            
        <Slide
        transitionDuration={400}
        scale={1.4}
        {...properties}
        className=""
    >   
        {imageSlides.map((image, index) => ( 
                <div  style={{ 'backgroundImage': `url(${image.img}) `,  "backgroundSize":"cover", "width":"100%" }}>
                    <div className='md:pt-32 pt-[90px]   md:pb-72 pb-[100px] md:px-14 px-6  bg-public bg-opacity-60'>
                    <motion.h2 
                    initial ={{x: "100vw"}}
                    animate ={{x: 0}}
                    transition={{ delay: 0.5, stiffness: 200, type: "spring" }}
                    style ={{fontFamily:"'SangBleuSans', sans-serif"}} className="text-white text-[17px] md:text-2xl md:ml-10  font-roboto">CREDIT RATING <span className='text-private font-bold'>BBB</span></motion.h2>
                        <motion.div 
                         variants ={{
                            hidden:{opacity: 0, y: 75},
                            visible:{opacity: 1, y: 0},
                        }}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ delay: 0.25, 
                        duration: 0.5}}
                        className='md:mx-24 mx-0 mt-[60px]'>
                            <motion.p 
                            initial ={{y: -250}}
                            animate ={{y: -10}}
                            transition={{ delay: 1.5, stiffness: 300, type: "spring" }
                    }
                            
                            className='text-white tracking-[4px] font-serif font-bold font-lora mt-[0px]'>{image.title}</motion.p>
                           <p className='text-white my-4 md:text-5xl text-2xl font-bold break-words md:w-[440px] font-roboto'>
                                   <p> {image.header} </p> 
                                    <p className="text-sm font-thin">{image.vip}</p>

                        </p>
                            <div className='text-white flex flex-wrap text-small font-serif'>
                                <p className="md:w-[400px]">
                            {image.content}
                            </p>
                    
                            </div>
                            <Link to={image.link}>
                        <div className='bg-private rounded-full md:mt-8 mt-6 flex justify-center items-center text-white w-12 h-12'>
                            <i className='fa fa-arrow-right'></i>
                    </div>
                    </Link>
                        </motion.div>
                        
                    </div>
                    
                
                
            </div>
        ))}
    </Slide>
    </section>

    <motion.section 
    variants ={{
        hidden:{opacity: 0, y: 75},
        visible:{opacity: 1, y: 0},
    }}
    initial="hidden"
    whileInView="visible"
    transition={{ delay: 0.25, 
    duration: 0.5}}
    className="xl:mx-[90px] md:mx-5 mx-6 my-10">
            <div className="mt-14 md:mt-0 mb-4">
                <h2 className="text-private  tracking-widest pb-4 border-b-[1px] border-black w-full">OUR STORY</h2>

                <h4 className="font-roboto text-[18px] md:text-[24px] mt-8"><b>AFRICAN GROUP NG</b>, is a sole Nigerian Group of Companies in operation about a decade, which is duly registered with corporate affairs commission; for the purpose of providing first class services in the areas of: Surveying & Mapping, Real Estate, Construction, Agricultural, and Technology services. </h4>
            </div>
            <div className="grid md:grid-cols-2 font-serif grid-cols-1 gap-6 mt-16 w-full flex-wrap">
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, 
                    staggerChildren: 2}}
                className="grid md:grid-cols-3 grid-cols-1 md:mt-6 mt-0 gap-4 ">
                            <div className="">
                                <h2 className='text-private text-3xl font-lora my-2'>48</h2>
                                <h4>COMPLETED PROJECTS ACROSS AFRICA</h4>
                            </div>
                            <div className="">
                            <h2 className='text-private text-3xl font-lora my-2'>2k +</h2>
                                <h4>LAND SURVEYED ACROSS THE WORLD</h4>
                            </div>
                            <div className="">
                            <h2 className='text-private text-3xl font-lora my-2'>2</h2>
                                <h4>GLOBAL AWARDS </h4>
                            </div>
                    </motion.div>
                    <motion.div
                    variants ={{
                        hidden:{opacity: 0, y: 75},
                        visible:{opacity: 1, y: 0},
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: 0.25, 
                    duration: 0.5}}
                    className="">
                        <h4 className="font-lora text-[16px]"> At 
                        African Group, our core competencies include high precision surveying, expertise in delivering high-quality construction projects with highest quality materials that can stand the test of time and within budget. We don’t just build structures; we build legacies. 
                        <p className="pt-2">We build for the man who wants to live differently. 
                        Our real estate projects includes Peace Court, Evergreen Estate and Navy Park Estate while our core business models are Survey, Real Estate, Construction, Agro and Tech.
</p>
                        <br />
                        
                        </h4>
                        <div className="mt-8">
                             <motion.button 
                             
                             className="btnValueCore" >
                                <Link
                                to={"/About"}
                                >About us</Link> 
                            </motion.button> 

                            
                        </div>
                    </motion.div>
            </div>
    </motion.section>
    </>
    );
};

    
export default FirstSection;