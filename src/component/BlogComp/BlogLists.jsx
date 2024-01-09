// BlogList.js
import React from 'react';
import { Link } from 'react-router-dom';
import blogData from './data';
import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';
import image from "../../assets/images/about.jpg"
import ImageWithOverlay from '../ImageWithOverlay';

const BlogList = () => {
  return (
    <div> 
      <Navbar />
            <ImageWithOverlay
                imageUrl={image}
                title1="AfricanGroup"
                span1="Blog"
                span2=""
                title2="This is AfricanGroup"
                decrip="Our Blog"
      />
            
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
