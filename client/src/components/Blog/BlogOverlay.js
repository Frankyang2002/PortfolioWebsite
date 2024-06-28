// BlogOverlay.js
import React from 'react';
import './BlogOverlay.css';

function BlogOverlay({ onClose, post, maxCharacters = 250}) {
  return (
    <div className="blog-overlay" onClick={onClose}>
      <div className="blog-overlay-content" onClick={(e) => e.stopPropagation()}>
        <h2>{post.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.content.substring(0, maxCharacters) }} />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default BlogOverlay;