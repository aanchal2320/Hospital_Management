import React from 'react'; 
import '../styles/BlogPage.css';

const BlogPage = () => {
  return (
    <div className="blog-container">
      <div className="blog-content">
        <h1>Hospital Blog</h1>
        <p>Stay updated with the latest news, health tips, and stories from our hospital:</p>
        <ul>
          <li>Health Tips for a Better Life</li>
          <li>Latest Medical Advances</li>
          <li>Patient Stories</li>
          <li>Community Events</li>
          <li>Hospital News</li>
        </ul>
      </div>
    </div>
  );
};

export default BlogPage;
