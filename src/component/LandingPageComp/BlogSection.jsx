import { Link } from 'react-router-dom';
import blogData from '../BlogComp/data';
import { motion } from 'framer-motion';
const  BlogSection= () => {
    const MAX_CONTENT_LENGTH = 20; // You can set your desired maximum length

// Function to truncate text and add "..."
const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
};
    return ( 
        <>
            <section className='xl:mx-6 md:m-0 mx-6 '>
            <motion.div 
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ delay: 0.5 }}

        className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-8 mb-[150px] mt-[50px]   font-roboto">
        {blogData.map((post) => (
          
          <div
          
           key={post.id} className='`'>
 
            
              <div className=''>
                <img src={post.img} alt={post.name} className='m-0'/>
              </div>
              <div className=" py-6 rounded-br-[15px] rounded-bl-[15px]">
                
              <h2 className='text-[25px] text-vintage font-bold mb-2'>{post.title}</h2>
              <h4 className='text-[12px] text-private'> {post.date} </h4>

              <h4 className='text-black text-opacity-70 my-3'>{truncateText(post.content, MAX_CONTENT_LENGTH)}</h4>
              <Link to={`/blog/${post.id}`} className=''>
              <motion.button 
              whileHover={{scale: 1.0}}
              transition={{type:"spring", stiffness:200}}
              className='bg-vintage text-white p-3 hover:bg-opacity-70'>
                    Read More <i className="fa fa-long-arrow-right text-[11px]"></i>
              </motion.button>
              </Link>
              </div>
            
       

          </div>

        ))}
        </motion.div>

            </section>
        </>
     );
}
 
export default BlogSection;