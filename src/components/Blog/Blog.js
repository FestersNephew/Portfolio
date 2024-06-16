// src/components/Blog/Blog.js
import React from 'react';
import BlogHighlights from './BlogHighlights';
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog-container">
      <h1 className="blog-header">Blog</h1>
      <BlogHighlights />
    </div>
  );
};

export default Blog;
