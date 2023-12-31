import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Image1 from "../../assets/images/FirstSectionImage1.jpg"
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';

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
            title:"Featured Project"
        },
        {
            img: [
                Image1,
            ],
            title:"About",
            link: "/About"
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
                    <div className='md:pt-32 pt-[90px]   md:pb-72 pb-[100px] md:px-14 px-6  bg-public bg-opacity-40'>
                    <motion.h2 
                    initial ={{x: "100vw"}}
                    animate ={{x: 0}}
                    transition={{ delay: 0.5, stiffness: 200, type: "spring" }}
                    style ={{fontFamily:"'SangBleuSans', sans-serif"}}className="text-white text-[17px] md:text-2xl md:ml-6 font-roboto">CREDIT RATING <span className='text-private font-bold'>BBB</span></motion.h2>
        
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
  Queen Alima By AfricanGroup
</p>
                       
                            <div className='text-white flex flex-wrap text-small font-serif'>
                                <p className="max-w-full">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi soluta iusto porro beatae rem in veritatis asperiores obcaecati, incidunt quae distinctio sapiente sint sequi saepe odio, quo quam quidem lfuga?
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
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.5, 
    staggerChildren: 2}}
    className="xl:mx-6 md:mx-0 mx-6 my-10">
            <div className="mt-24 mb-4">
                <h2 className="text-private  tracking-widest pb-4 border-b-[1px] border-black w-full">OUR STORY</h2>

                <h4 className="font-roboto text-[18px] mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fuga assumenda dolore soluta labore nobis, voluptate illum, non reprehenderit necessitatibus, eaque aspernatur itaque officiis? Non dolorum eos ex exercitationem distinctio. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum saepe quam voluptates, excepturi nihil commodi quisquam, totam molestias dolore deleniti consequatur. Fugiat esse dolorem quibusdam illo ea. Iusto praesentium vitae cupiditate. Esse quaerat a, perspiciatis, sapiente non ullam qui praesentium sint beatae, magni eveniet illum! Quos eaque sit harum enim esse. Vel amet harum illo a delectus maxime soluta rem repudiandae necessitatibus ducimus quod labore reprehenderit facere qui nostrum animi vitae, praesentium optio molestiae ipsam in dolorem doloremque! Itaque, quibusdam!</h4>
            </div>
            <div className="grid md:grid-cols-2 font-serif grid-cols-1 gap-6 mt-20 w-full flex-wrap">
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
                        <h4 className="font-lora text-[15px]">
                        AFRICAN GROUP Nigeria, is a sole Nigerian Group of Companies existing over eight years, which was incorporated in 2020; for the purpose of providing first class services in theareas of: Surveying & Mapping, Real Estate, Construction & Agricultural services.
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