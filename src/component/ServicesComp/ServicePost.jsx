// BlogPost.js
import React from 'react';
import { useParams } from 'react-router-dom';
import ServiceData from './ServiceData';

const ServicePost = () => {
  const { titleParam } = useParams();
  const post = ServiceData.find((post) => post.titleParam === titleParam);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default ServicePost;
