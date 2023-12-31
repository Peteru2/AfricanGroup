// BlogPost.js
import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from './data';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogData.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.date}</p>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;
