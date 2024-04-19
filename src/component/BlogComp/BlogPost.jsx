// BlogPost.js
import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from './data';
import ImageWithOverlay from '../ImageWithOverlay';
import Navbar from '../Navbar/Navbar';
const BlogPost = () => {
  const { titleParam } = useParams();
  const post = blogData.find((post) => post.titleParam === titleParam);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <Navbar />
       <ImageWithOverlay
                imageUrl={post.img}
                span1="Blog"
                span2={post.title}
                title2=""
                decrip={post.title}
                height="400px"

      />
      <div className="xl:mx-[90px] md:mx-5  mx-6 my-5">
      <div>
        <p>
          {post.content}
        </p>
        </div>
      <p>{post.date}</p>
      <p>{post.content}</p>
    </div>
    </div>
  );
};

export default BlogPost;
