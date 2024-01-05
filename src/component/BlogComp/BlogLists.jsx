// BlogList.js
import React from 'react';
import { Link } from 'react-router-dom';
import blogData from './data';
import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';

const BlogList = () => {
  return (
    <div> 
      <Navbar />
            <div className="TeamBackGroundImg">
            
                <div className="h-[500px] md:pt-52 pt-32   pb-72 text-white  bg-public bg-opacity-70 ">
                    <motion.h2
                    initial={{x:'100vw'}}
                    animate={{x:0}}
                    transition={{delay: 0.5, type: "spring"}}
                    className="items-center font-bold flex justify-center text-[16px]">AfricanGroup <span className="h-2 w-2 mx-4 bg-white bg-opacity-60 rounded-full"></span> Blog 
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
     <section className="font-roboto mt-32 xl:mx-6 md:mx-0 mx-6 my-10">
      <ul>
        <motion.div 
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ delay: 0.5 }}

        className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-8   mb-4 font-roboto">
        {blogData.map((post) => (
          
          <motion.li
          whileHover={{y: -25}}
           transition={{type:"spring", stiffness:200}}
           key={post.id} className='rounded-xl shadow-xl hover:shadow-2xl'>
 
            <Link to={`/blog/${post.id}`} className=''>
              <div className='rounded-lg'>
                <img src={post.img} alt={post.name} className='rounded-tr-[15px] rounded-tl-[15px]'/>
              </div>
              <div className="bg-white  p-6 rounded-br-[15px] rounded-bl-[15px]">
                <h4 className='text-private'>{post.type}</h4>
              <h2 className='text-[25px] text-vintage mt-4 mb-10'>{post.title}</h2>
               <h4 className=''> {post.date} </h4>
              </div>
            </Link>
       

          </motion.li>

        ))}
        </motion.div>
      </ul>
      </section>
    </div>
  );
};

export default BlogList;
