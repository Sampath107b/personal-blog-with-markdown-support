import React,{useState,useEffect} from 'react';
import axios from "axios";
import PostListItem from '../components/PostListItem';
import './HomePage.css';

const HomePage = () => {
  const [posts,setPosts]=useState([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  
  const [totalPages, setTotalPages] = useState(null);
  useEffect(()=>{
    const fetchPosts=async ()=>{
      setLoading(true);
      setError('');
      try{
        const response = await axios.get(`https://personal-blog-with-markdown-support.onrender.com/api/posts?page=${currentPage}&limit=10`);
        const { posts: fetchedPosts, totalPages: fetchedTotalPages } = response.data;

        setPosts(fetchedPosts);
        setTotalPages(fetchedTotalPages);
        
      }catch(err){
        setError('Failed to fetch posts. Please try again later');
        console.error('error fetching post:',err);

      }
      finally{
        setLoading(false)

      }
    }

    fetchPosts();
  },[currentPage]);

  const handleNextPage = () => {
    
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  if (loading){
    return <div>Loading Posts...</div>;
  }

  if(error){
    return <div style={{color:'red'}}>{error}</div>
  }

  return (
    <div>
      
      
      <h1>Latest Posts</h1>
    {posts.length===0 ? (
      <p>No Posts yet. Be the first to create one!</p>
    ):(
      <div className='post-list'>

        {posts.map(post=>(
          <PostListItem key={post._id} post ={post}  />
        ))}
      </div>
    )}
      {totalPages > 0 && (
        <div className="pagination-controls">
          <div className="page-info">
            Page {currentPage} of {totalPages}
          </div>
          <div className="pagination-buttons">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1} 
              className="btn"
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages} 
              className="btn"
            >
              Next
            </button>
          </div>
        </div>
      )}
    
    
    </div>
  )
}

export default HomePage