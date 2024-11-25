import { motion } from "framer-motion";

import TeamImg from "../../assets/images/Team1.jpg";
import image from "../../assets/images/about.jpg";
import avatar from "../../assets/images/avatar.jfif";
import mrMicheal from "../../assets/images/teamImg/mrMicheal.jpeg";



import ImageWithOverlay from "../ImageWithOverlay";
import TeamData from "./TeamData";
import Layout from "../Layout";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";

const Team = () => {
  const handleNext = () => {
    const items = document.querySelectorAll(".item");
    document.querySelector(".slide").appendChild(items[0]);
  };

  const handlePrev = () => {
    const items = document.querySelectorAll(".item");
    document.querySelector(".slide").prepend(items[items.length - 1]);
  };
  return (
    <>
      <Layout>
        <ImageWithOverlay
          imageUrl={image}
          span1="About Us"
          span2="Team"
          title2="Our Team"
          decrip="Meet With The Expert Team"
          height="400px"
        />
        {/* <section className="font-roboto mt-8 xl:mx-[90px] md:mx-5 mx-6 my-10">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
                    {TeamFirstData.map((data, index)=>{
                            return(
                                <>
               <motion.div 
              variants ={{
                hidden:{opacity: 0, y: 75},
                visible:{opacity: 1, y: 0},
            }}
            initial="hidden"
            whileInView="visible"
            transition={{delay: index * 0.1, 
            duration: 0.5}}
               key={index} 
               className="grid md:grid-cols-1 xl:grid-cols-2 grid-cols-1">
  <div className="relative" style={{ 'maxWidth': '100%', 'height': 'auto' }}>
    <img
      className="w-full h-full object-cover"
      src={data.img}
      alt={data.name}
    />
    <div className="absolute  px-10 flex bottom-4">
      <Link>
      <div className="w-10 mx-4 text-white h-10 rounded-full bg-private flex justify-center items-center">
        <i className="fa fa-facebook"></i>
      </div>
      </Link>
      <Link>
      <div className="w-10 mx-4 text-white h-10 rounded-full bg-private flex justify-center items-center">
        <i className="fa fa-twitter"></i>
      </div>
      </Link>
      <Link>
      <div className="w-10 mx-4 text-white h-10 rounded-full bg-private flex justify-center items-center">
        <i className="fa fa-linkedin"></i>
      </div>
      </Link>
    </div>
  </div>
  <div className="bg-white p-6">
    <h2 className="font-bold text-[25px] mb-1">{data.name}</h2>
    <h4 className="text-gray">{data.office}</h4>
    <h4 className="my-6 text-sm">{data.description}</h4>
  </div>
</motion.div>

                       </>     )
                    })}
                
                </div>      
                <div className="grid md:grid-cols-2 xl:grid-cols-4 mt-10 gap-4 grid-cols-1">
                        <div>
                           
                            
                            <div className="relative" style={{ 'maxWidth': '100%', 'height': 'auto' }}>
                                    <img
                                    className="w-full h-full object-cover"
                                    src={TeamImg}
                                    alt={'ldff'}
                                    />
                                    <div className="absolute  px-10 flex bottom-4">
                                    <div className="w-10 mx-4 text-white h-10 rounded-full bg-private flex justify-center items-center">
                                        <i className="fa fa-facebook"></i>
                                    </div>
                                    <div className="w-10 mx-4 text-white h-10 rounded-full bg-private flex justify-center items-center">
                                        <i className="fa fa-twitter"></i>
                                    </div>
                                    <div className="w-10 mx-4 text-white h-10 rounded-full bg-private flex justify-center items-center">
                                        <i className="fa fa-linkedin"></i>
                                    </div>
                                    </div>
                                </div>
                            <h2 className="font-bold text-[25px] mb-1">James Brown</h2>
                            <div className="bg-white p-4">
                            <h4 className="text-gray">Data</h4>

                            
                            <h2 className="mt-3 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eveniet ut, explicabo nesciunt, dolore libero, omnis quisquam aperiam vel dolorem quo amet accusamus quae quasi. Dignissimos molestiae earum ipsum repudiandae!</h2>
                            </div>
                        </div>
                        
                    </div>          
            </section> */}

        <div className="slider-container">
          <div className="container">
            <div className="slide">
             {TeamData.map((data, index)=>{
                            return(
                              <>
                               <div
                className="item bg-primary"
                onClick={handleNext}

              >
                              <div className="content">
                 <div className="md:flex items-center">

                  <div className="mr-[30px]  md:w-[500px] w-cover">
                    <img src={data.img} alt="" className="rounded-[14px] object-cover w-[500px] h-[500px]"/>
                  </div>

                  <div> 
                  <div className="text-[26px] font-lora  text-white font-semibold mb-2">
                    {data.name}
                  </div>
                  <div className="text-[18px] uppercase text-white font-semibold mb-2">
                    {data.office}
                  </div>
                  <div className="text-white md:h-auto md:w-[500px] w-cover h-[550px] bg-private">
                 {data.description}

                  </div> 
                  </div>
                  </div>
                </div>
                </div>
            
                              </>
                            )})} 
              
            </div>

            <div className="button">
              <button className="prev" onClick={handlePrev}>
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <button className="next" onClick={handleNext}>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Team;