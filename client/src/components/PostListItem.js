import React from 'react';
import {Link} from 'react-router-dom';



const PostListItem = ({post}) => {
  const snipet=post.markdownContent.replace(/[#*`]/g,'').substring(0,150)+'...';

  return (
    <Link to={`/post/${post._id}`} className='post-link' >
    <article className='post-list-item'> 
      <h2>{post.title}</h2>
      <div className='post-meta'>
        <span>{post.author}</span>
        <span>{new Date(post.createdAt).toLocaleDateString()}</span>
      </div>
      <p>{snipet}</p>

    </article>
    </Link>
  )
}

export default PostListItem;