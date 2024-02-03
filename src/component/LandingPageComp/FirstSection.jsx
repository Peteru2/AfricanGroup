import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Image1 from "../../assets/images/FirstSectionImage1.jpg"
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const FirstSection = () => {
    const indicators = (index) => (
        <div className="indicator">{index +1}</div>
    
    );
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
            title:"Featured Project",
            header:"We Are Africa's Finest",
            content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, mollitia? Odit, magni. Ducimus non, ad quam, fuga tempora voluptatum eligendi unde natus facilis libero incidunt atque voluptas enim cum ipsa."
        },
        {
            img: [
                Image1,
            ],
            title:"About",
            header:"We Are Africa's Finest",
            link: "/About",
            content:"The company is driven by a group of highly trained,experienced, self-motivated, and very dynamic Professionals equipped to handle various categories of projects."
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
        transitionDuration={500}
        scale={1.4}
        {...properties}
    >
        {imageSlides.map((image, index) => (
            <div>
           
             <div   className="each-slide-effect" key={index}>
                <div style={{ 'backgroundImage': `url(${image.img}) `,  "backgroundSize":"cover", "width":"100%" }}>
                    {/* <span>{`Slide ${index + 1}`}</span> */}
                    <div className='md:pt-32 pt-[90px]   md:pb-72 pb-[100px] md:px-14 px-6  bg-public bg-opacity-60'>
                    <motion.h2 
                    initial ={{x: "100vw"}}
                    animate ={{x: 0}}
                    transition={{ delay: 0.5, stiffness: 200, type: "spring" }}
                    style ={{fontFamily:"'SangBleuSans', sans-serif"}}className="text-white text-[17px] md:text-2xl md:ml-10 font-roboto">CREDIT RATING <span className='text-private font-bold'>BBB</span></motion.h2>
        
                        <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1, 
                        staggerChildren: 2 }}
                        className='md:mx-24 mx-0 mt-[60px]'>
                            <motion.p 
                            initial ={{y: -250}}
                            animate ={{y: -10}}
                            transition={{ delay: 1.5, stiffness: 300, type: "spring" }
                           
                    }
                            

                            className='text-white tracking-[4px] font-serif font-bold font-lora mt-[0px]'>{image.title}</motion.p>
                           <p className='text-white my-4 md:text-5xl text-2xl font-bold break-words md:w-[350px] font-roboto'>
                                    {image.header} 
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
    transition={{ delay: 0.2, 
    staggerChildren: 2}}
    className="xl:mx-[90px] md:mx-5 mx-6 my-10">
            <div className="mt-14 md:mt-24 mb-4">
                <h2 className="text-private  tracking-widest pb-4 border-b-[1px] border-black w-full">OUR STORY</h2>

                <h4 className="font-roboto text-[18px] md:text-[24px] mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fuga assumenda dolore soluta labore nobis, voluptate illum, non reprehenderit necessitatibus, eaque aspernatur itaque officiis? Non dolorum eos ex exercitationem distinctio. Lorem ipsum dolor, sit amet consectetur adipisicing elit. </h4>
            </div>
            <div className="grid md:grid-cols-2 font-serif grid-cols-1 gap-6 mt-16 w-full flex-wrap">
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, 
                    staggerChildren: 2}}
                className="grid md:grid-cols-3 grid-cols-1 md:mt-6 mt-0 gap-4 ">
                            <div className="">
                                <h2 className='text-private text-3xl font-lora my-2'>35</h2>
                                <h4>COMPLETED PROJECTS ACROSS THE WORLD</h4>
                            </div>
                            <div className="">
                            <h2 className='text-private text-3xl font-lora my-2'>800k +</h2>
                                <h4>LAND SURVEY ACROSS THE WORLD</h4>
                            </div>
                            <div className="">
                            <h2 className='text-private text-3xl font-lora my-2'>5</h2>
                                <h4>GLOBAL AWARDS </h4>
                            </div>
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, 
                    staggerChildren: 2}}
                    className="">
                        <h4 className="font-lora text-[16px]">
                        <strong>AFRICAN GROUP</strong> Nigeria, is a sole Nigerian Group of Companies existing over eight years, which was incorporated in 2020; for the purpose of providing first class services in theareas of: Surveying & Mapping, Real Estate, Construction & Agricultural services.
                        <br />
                        The company is driven by a group of highly trained, experienced, self-motivated, and very dynamic Professionals equipped to handle various categories of projects; LAND & ENGINEERING SURVEYING, MAPPING & GEO-DATA, ARCHITECTURAL DESIGNS, REAL ESTATE, CIVILCONSTRUCTION, AGRO, SITE CLEARING & GROUND LEVELLING, DRILLING, ELECTRICALENGINEERING, INTERIOR & EXTERIOR FINISHING, and PROJECT MANAGEMENT.
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