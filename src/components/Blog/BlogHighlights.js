import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../../fetchPosts';
import { urlFor } from '../../client';
import { filterPosts } from '../filterPosts';
import SearchBar from '../SearchBar';
import './BlogHighlights.css';

const BlogHighlights = () => {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const getPosts = async () => {
      const posts = await fetchPosts();
      setPosts(posts);
    };
    getPosts();
  }, []);

  const filteredPosts = filterPosts(posts, searchQuery);

  const getSnippet = (blocks) => {
    if (!blocks || blocks.length === 0) return '';
    const firstBlock = blocks[0];
    if (firstBlock.children && firstBlock.children.length > 0) {
      return firstBlock.children[0].text.slice(0, 100); // Limit to 100 characters
    }
    return '';
  };

  if (posts.length === 0) {
    return <div>Loading...</div>;
  }

  const [featuredPost, ...otherPosts] = posts;
  const filteredFeaturedPost = filteredPosts.find(post => post.slug.current === featuredPost.slug.current);

  return (
    <div className="highlights-container">
      <h1 className="highlights-header">Blog Highlights</h1>
      <p className="search-description">
        Start typing in the search bar below. As you type, only the articles containing your search term will remain visible.
      </p>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {filteredFeaturedPost && (
        <>
          <div className="newest-post-header">Here's my newest blog article:</div>
          <a href={`/post/${filteredFeaturedPost.slug.current}`} className="highlight-post-link newest-post">
            <div className="highlight-post">
              {filteredFeaturedPost.mainImage && <img src={urlFor(filteredFeaturedPost.mainImage).url()} alt={filteredFeaturedPost.title} className="highlight-post-image" />}
              <h2 className="highlight-post-title">{filteredFeaturedPost.title}</h2>
              <div className="highlight-post-snippet">{getSnippet(filteredFeaturedPost.body)}</div>
              <p className="highlight-post-author">By {filteredFeaturedPost.authorName}</p>
              <p className="highlight-post-date">Published on {new Date(filteredFeaturedPost.publishedAt).toLocaleDateString()}</p>
              <div className="highlight-post-categories">{filteredFeaturedPost.categories ? filteredFeaturedPost.categories.join(', ') : ''}</div>
              <div className="read-more-link-container">
                <span className="read-more-link">Read More</span>
              </div>
            </div>
          </a>
        </>
      )}
      <div className="highlights-posts">
        {otherPosts.filter(post => post.slug.current !== featuredPost.slug.current).map((post, index) => (
          <a key={post.slug.current} href={`/post/${post.slug.current}`} className={`highlight-post-link ${index % 2 === 0 ? 'highlight-post-even' : 'highlight-post-odd'}`}>
            <div className="highlight-post">
              {index % 2 === 0 ? (
                <>
                  {post.mainImage && <img src={urlFor(post.mainImage).url()} alt={post.title} className="highlight-post-image" />}
                  <h2 className="highlight-post-title">{post.title}</h2>
                  <div className="highlight-post-snippet">{getSnippet(post.body)}</div>
                  <p className="highlight-post-author">By {post.authorName}</p>
                  <p className="highlight-post-date">Published on {new Date(post.publishedAt).toLocaleDateString()}</p>
                  <div className="highlight-post-categories">{post.categories ? post.categories.join(', ') : ''}</div>
                  <div className="read-more-link-container">
                    <span className="read-more-link">Read More</span>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="highlight-post-title">{post.title}</h2>
                  <div className="highlight-post-snippet">{getSnippet(post.body)}</div>
                  {post.mainImage && <img src={urlFor(post.mainImage).url()} alt={post.title} className="highlight-post-image" />}
                  <p className="highlight-post-author">By {post.authorName}</p>
                  <p className="highlight-post-date">Published on {new Date(post.publishedAt).toLocaleDateString()}</p>
                  <div className="highlight-post-categories">{post.categories ? post.categories.join(', ') : ''}</div>
                  <div className="read-more-link-container">
                    <span className="read-more-link">Read More</span>
                  </div>
                </>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BlogHighlights;
