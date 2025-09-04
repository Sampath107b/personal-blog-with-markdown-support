import React from 'react';
import {Link} from 'react-router-dom';
import CategoryTag from './CategoryTag';

const categoriesContainerStyle = {
  marginTop: '10px',
};

const PostListItem = ({post}) => {
  const snipet=post.markdownContent.replace(/[#*`]/g,'').substring(0,150)+'...';

  return (
    <article className='post-list-item'> 
    <Link to={`/posts/${post.slug}`} className='post-link' >
      <h2>{post.title}</h2>
      </Link>
      <div className='post-meta'>
        <span>{post.author}</span>
        <span>{new Date(post.createdAt).toLocaleDateString()}</span>
      </div>
      <p>{snipet}</p>
        {post.categories && post.categories.length > 0 && (
          <div style={categoriesContainerStyle}>
           
            {post.categories.map(category => (
              <CategoryTag key={category} category={category} />
            ))}
          </div>
        )}

    </article>
  )
}

export default PostListItem;