import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import '../markdown-styles.css'
import ReactMarkdown from 'react-markdown';
import CategoryTag from '../components/CategoryTag';

const categoriesContainerStyle = {
  marginTop: '10px',
};


const PostPage = () => {
  const {slug}=useParams();
  
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
   
    const fetchPost = async () => {
      
      setLoading(true);
      setError(null);
      try {
        
        const response = await axios.get(`http://localhost:5000/api/posts/${slug}`);
        
        setPost(response.data);
      } catch (err) {
        
        console.error("Error fetching post:", err);
        
        if (err.response && err.response.status === 404) {
          setError('Post not found.');
        } else {
          setError('Failed to load the post. Please try again later.');
        }
      } finally {
       
        setLoading(false);
      }
    };

    fetchPost(); 
  }, [slug]);
  const createMetaDescription = (markdown) => {
    if (!markdown) return '';
    
    const plainText = markdown
      .replace(/!\[.*?\]\(.*?\)/g, '') 
      .replace(/\[(.*?)\]\(.*?\)/g, '$1') 
      .replace(/[`*#_~]/g, '') 
      .replace(/\s+/g, ' ');

    return plainText.substring(0, 155).trim() + '...';
  };

  if (loading) {
    return <div>Loading post...</div>;
  }

  if (error) {
    
    return <div style={{ color: 'red', textAlign: 'center', marginTop: '2rem' }}>Error: {error}</div>;
  }


  if (!post) {
    return <div>Post not found.</div>;
  }



  return (
    <article className="post-full">
      
      <h1>{post.title}</h1>
      <div className="post-full-meta">
        <span>by {post.author}</span>
        <span>Published on {new Date(post.createdAt).toLocaleDateString()}</span>
      </div>
      {post.categories && post.categories.length > 0 && (
        <div style={categoriesContainerStyle}>
          {post.categories.map(category => (
            <CategoryTag key={category} category={category} />
          ))}
        </div>
      )}
      <div className="post-full-content">
        
        <ReactMarkdown >
          {post.markdownContent}
        </ReactMarkdown>
      </div>
    </article>
  );
};


export default PostPage