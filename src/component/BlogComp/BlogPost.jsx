// BlogPost.js
import React from 'react';
import RecommendedBlog from './RecommendedBlog';
const BlogPost = ({post}) => {
  const sentences = post.list.split(';');
 

  return (
      <div className="xl:mx-[90px] md:mx-5  mx-6 my-5 font-roboto">
        <h2 className="text-sm text-black text-opacity-50 flex items-center "> <span>by {post.author} </span> <span className='w-6 mx-2 flex h-[1px] bg-black bg-opacity-50'></span><span>{post.readTime} minutes read</span></h2>
        <div className="my-3">
        <p>
          {post.content}
        </p>
       
      <p className='my-3'>{post.p1}</p>
      <p className='my-3'>{post.p2}</p>
      
      <div className="flex items-center mt-6">
        <p className='text-gray text-[50px] mr-12'><i className="fa fa-quote-right"></i></p>
        <p className="font-bold md:w-[850px] text-[40px]">{post.h2}</p>
      </div>
      <p className='my-3'>{post.p3}</p>
      <p className='my-3'>{post.p4}</p>

      <div className="mt-8">
        <h2 className='font-bold text-[25px]'>{post.h3}</h2>
      <p className='my-3'>{post.p5}</p>
        <ol className='list ml-14'>
              {sentences.map((sentence, index) => (
                <li className='my-2' key={index}>{sentence}</li>
              ))}
            </ol>
      <p className='my-3'>{post.p6}</p>
      </div>
      </div>
      <RecommendedBlog />
    </div>
  );
};

export default BlogPost;
