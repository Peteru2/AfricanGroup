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
                    <div className='md:pt-32 pt-32   pb-72 md:px-14 px-6  bg-public bg-opacity-60'>
                    <p style ={{fontFamily:"'SangBleuSans', sans-serif"}}className="text-white text-2xl ml-6 font-roboto">CREDIT RATING <span className='text-private'>BBB</span></p>
        
                        <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className='md:mx-24 mx-0 my-10'>
                            <motion.p 
                            initial ={{y: 250}}
                            animate ={{y: -10}}
                        transition={{ delay: 2 }}
                            

                            className='text-white tracking-widest font-serif font-bold font-lora mt-28'>Featured Project</motion.p>
                            <p className=' text-white my-6 md:text-5xl text-4xl font-bold font-roboto'>Queen Alima <br />By AfricanGroup</p>
                       
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
    </section>
    <section className="xl:mx-6 md:mx-0 mx-6">
            <div className="mt-24 mb-4">
                <h2 className="text-private  tracking-widest pb-4 border-b-[1px] border-black w-full">OUR STORY</h2>

                <h4 className="font-roboto text-[18px] mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fuga assumenda dolore soluta labore nobis, voluptate illum, non reprehenderit necessitatibus, eaque aspernatur itaque officiis? Non dolorum eos ex exercitationem distinctio. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum saepe quam voluptates, excepturi nihil commodi quisquam, totam molestias dolore deleniti consequatur. Fugiat esse dolorem quibusdam illo ea. Iusto praesentium vitae cupiditate. Esse quaerat a, perspiciatis, sapiente non ullam qui praesentium sint beatae, magni eveniet illum! Quos eaque sit harum enim esse. Vel amet harum illo a delectus maxime soluta rem repudiandae necessitatibus ducimus quod labore reprehenderit facere qui nostrum animi vitae, praesentium optio molestiae ipsam in dolorem doloremque! Itaque, quibusdam!</h4>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-20 w-full flex-wrap">
                <div className="grid md:grid-cols-3 grid-cols-1 gap-4 ">
                    <div className="my-3">
                        <h2 className='text-private text-3xl font-lora my-2'>35</h2>
                        <h4>COMPLETED PROJECTS ACROSS THE WORLD</h4>
                    </div>
                    <div className=" ">
                        <h2>35</h2>
                        <h4>COMPLETED PROJECT ACROSS THE WORLD</h4>
                    </div>

                    <div className=" ">
                        <h2>35</h2>
                        <h4>COMPLETED PROJECT ACROSS THE WORLD</h4>
                    </div>
                    </div>
                    <div className="  " >
                        <h4>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi odio amet, culpa in ab consectetur itaque sed, perspiciatis inventore id expedita distinctio et aperiam. Ea, expedita asperiores iure, velit blanditiis pariatur facilis quisquam iste repellendus dolorem id! Voluptatum ab consequatur velit, asperiores molestiae laudantium perferendis ratione? Nemo, numquam quis non odit accusantium eligendi et excepturi explicabo reprehenderit officia obcaecati fuga delectus molestias aliquid vel dolor iure neque quidem ex inventore impedit repudiandae similique, nostrum eveniet. Architecto cumque fugiat nisi voluptatum!
                        </h4>
                    </div>
            </div>
    </section>
    </>
    );
};

    
export default FirstSection;