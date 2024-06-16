import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PortableText } from '@portabletext/react';
import { fetchPost, fetchRecentPosts } from '../../fetchPost';
import { urlFor } from '../../client';
import './BlogPost.css';

const serializers = {
  types: {
    image: ({ value }) => {
      return <img src={urlFor(value).url()} alt={value.alt || ''} />;
    },
    inlineImage: ({ value }) => {
      return <img src={urlFor(value.image).url()} alt={value.alt || ''} style={{ display: 'inline-block', height: '1em' }} />;
    },
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      const fetchedPost = await fetchPost(slug);
      setPost(fetchedPost);
    };
    const getRecentPosts = async () => {
      const fetchedRecentPosts = await fetchRecentPosts(slug);
      setRecentPosts(fetchedRecentPosts);
    };
    getPost();
    getRecentPosts();
  }, [slug]);

  if (!post) return <div>Loading...</div>;

  const publishedDate = new Date(post.publishedAt).toLocaleDateString();

  return (
    <div className="blog-post">
      <h2 className="blog-post-title">{post.title}</h2>
      <p className="blog-post-date">Published on {publishedDate}</p>
      {post.mainImage && <img src={urlFor(post.mainImage).url()} alt={post.title} />}
      <p className="blog-post-author">By {post.authorName}</p>
      <div className="blog-post-categories">
        Categories: {post.categories ? post.categories.join(', ') : ''}
      </div>
      <div className="blog-post-body">
        <PortableText value={post.body} components={serializers} />
      </div>
      <div className="blog-post-additional-images">
        {post.additionalImages && post.additionalImages.map((image) => (
          <img key={image.asset._id} src={urlFor(image).url()} alt={post.title} />
        ))}
      </div>
      <div className="blog-post-recent">
        <h3>Recent Posts</h3>
        <ul>
          {recentPosts.map((recentPost) => (
            <li key={recentPost.slug.current}>
              <Link to={`/post/${recentPost.slug.current}`}>{recentPost.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="back-to-highlights">
        <Link to="/blog">Back to Highlights</Link>
      </div>
    </div>
  );
};

export default BlogPost;
