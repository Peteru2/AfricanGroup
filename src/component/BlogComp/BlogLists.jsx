// BlogList.js
import React from 'react';
import { Link } from 'react-router-dom';
import blogData from './data';
import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';
import image from "../../assets/images/about.jpg"
import ImageWithOverlay from '../ImageWithOverlay';
import Footer from '../Footer';
import Helmett from '../Helmet';
const BlogList = () => {
  return (
    <div> 
       <Helmett 
                title="The Best Surveying Company"
                content = ""
                />
      <Navbar />
            <ImageWithOverlay
                imageUrl={image}
                title1="AfricanGroup"
                span1="Blog"
                span2=""
                title2="This is AfricanGroup"
                decrip="Our Blog"
                height="400px"
      />
            
     <section className="font-roboto border-t-[1px] pt-6 mt-20 xl:mx-6 md:mx-0 mx-6 my-6">
     <div className="flex justify-center">
                        <div className="mb-6">
                        <h4 className="text-3xl text-private text-center font-bold my-2">News and happenings</h4>
                        
                            <h5 className="md:w-[600px] text-center flex justify-center">Lorem ipsum dolor sit amet, consectetur adipisicing zelit. Porro sit, architecto dolores quam sequi hic quidem ut. Dolores, quasi rerum! Quae aperiam quia maxime et doloremque distinctio. Dolorum, doloremque. Molestias.

                            </h5>
                           
                            </div>

                    </div>
      <ul>
        <motion.div 
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ delay: 0.5 }}

        className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1   gap-8   mb-4 font-roboto">
        {blogData.map((post) => (
          
          <motion.li
          whileHover={{y: -25}}
           transition={{type:"spring", stiffness:200}}
           key={post.id} className='rounded-xl shadow-xl hover:shadow-2xl'>
 
            <Link to={`/blog/${post.titleParam}`} className=''>
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
      <Footer />
    </div>
  );
};

export default BlogList;
