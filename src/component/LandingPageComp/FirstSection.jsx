import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Image1 from "../../assets/images/FirstSectionImage1.jpg"
import { motion } from "framer-motion"

const FirstSection = () => {
    const indicators = (index) => (
        <div className="indicator">{index +1}</div>
    
    );
    const buttonStyle = {
        width: '15px',
        height: '35px', // Added height for better circular appearance
        background: 'transparent',
        borderWidth: '3px',
        borderColor: '#8AB863',
        display: 'flex',
        alignItems:"center",
        justifyContent:'center',
        // borderStyle: 'dotted',
        padding: '12px', 
        borderRadius: '1%',
        marginRight: '0px',
        marginLeft: '0px',// Using 'none' for no border
        color: 'white', 
        cursor: 'pointer',
        marginTop:'300px',
        webkitTapHighlightColor: 'transparent' ,
        outline: 'none' 
    };
    if (window.innerWidth <= 767) {
        // Adjust the marginTop for mobile devices
        buttonStyle.marginTop = '480px';
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
            ]
        },
        {
            img: [
                Image1,
            ]
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
        <Slide
        transitionDuration={500}
        indicators={indicators} scale={1.4}
        {...properties}
    >
        {imageSlides.map((image, index) => (
            <div>
           
             <div   className="each-slide-effect" key={index}>
                <div style={{ 'backgroundImage': `url(${image.img}) `,  "backgroundSize":"cover", "width":"100%" }}>
                    {/* <span>{`Slide ${index + 1}`}</span> */}
                    <div className='md:pt-32 pt-20   pb-72 md:px-14 px-6  bg-public bg-opacity-50'>
                    <p style ={{fontFamily:"'SangBleuSans', sans-serif"}}className="text-white text-2xl">CREDIT RATING <span className='text-private'>BBB</span></p>
        
                        <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className='md:mx-24 mx-0 my-10'>
                            <motion.p 
                            initial ={{y: 250}}
                            animate ={{y: -10}}
                        transition={{ delay: 2 }}
                            

                            className='text-white tracking-widest font-serif font-bold'>Featured Project</motion.p>
                            <p className=' text-white my-6 md:text-5xl text-4xl font-bold'>Queen Alima <br />By AfricanGroup</p>
                       
                            <div className='text-white flex flex-wrap text-small font-serif'>
                                <p className="max-w-full">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi soluta iusto porro beatae rem in veritatis asperiores obcaecati, incidunt quae distinctio sapiente sint sequi saepe odio, quo quam quidem lfuga?
                            </p>
                    
                            </div>
                        </motion.div>
                  
                    </div>
                </div>
                </div>
            </div>
        ))}
    </Slide>
    </>
    );
};

    
export default FirstSection;