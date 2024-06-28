import React, { useState, useEffect } from 'react';

import './Blog.css';
import BlogOverlay from './BlogOverlay';

function Blog({ displayedPostUrls, setDisplayedPostUrls, maxCharacters = 250}) {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleCloseOverlay = () => {
    setSelectedPost(null);
  };

  useEffect(() => {
    const apiKey = 'AIzaSyCAwVhZSMAjjajSJ1e5dspdmMm8JbWzjog';
    const blogId = '4395527760198917208';

    fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        const fetchedPosts = data.items;

        // Filter out posts that are already displayed
        const newPosts = fetchedPosts.filter(post => !displayedPostUrls.includes(post.url));

        // Update the displayed post URLs
        setDisplayedPostUrls(urls => [...urls, ...newPosts.map(post => post.url)]);


        // Update the component state with new posts, filtering out duplicates
        setPosts(existingPosts => {
          const uniquePosts = [...existingPosts, ...newPosts].filter((post, index, self) => {
            return index === self.findIndex(p => p.url === post.url);
          });
          return uniquePosts;
        });
      })
      .catch(error => {
        console.error('Error fetching Blogger blog posts:', error);
      });
  }, [displayedPostUrls, setDisplayedPostUrls]);

  // Logic to paginate posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    <div className='blog-container'>
      <div className='blog-text'>
        Blog
      </div>
      <div className='blogger-posts'>
        {currentPosts.map(post => (
          <div key={post.url} className="blog-post" onClick={() => handlePostClick(post)}>
            <div className="blog-title">
              <h2>{post.title}</h2>
            </div>
            <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content.substring(0, maxCharacters) }} />
            <div className="read-more">
              {/*<a href={post.url} target="_blank" rel="noopener noreferrer">Read more</a>*/}
            </div>
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: Math.ceil(posts.length / postsPerPage) }).map((_, index) => (
          <button key={index + 1} onClick={() => paginate(index + 1)}>{index + 1}</button>
        ))}
      </div>
      {/* Blog Overlay */}
      {selectedPost && <BlogOverlay post={selectedPost} onClose={handleCloseOverlay} />}
    </div>
    
  );
}

export default Blog;