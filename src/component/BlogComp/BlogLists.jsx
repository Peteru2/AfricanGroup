// BlogList.js
import React from 'react';
import { Link } from 'react-router-dom';
import blogData from './data';

const BlogList = () => {
  return (
    <div>
      <h2>Latest Blog Posts</h2>
      <ul>
        {blogData.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>
              {post.title} - {post.date}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
