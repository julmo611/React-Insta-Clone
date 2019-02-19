import React from 'react';

import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';
import Likes from '../CommentSection/Likes';

 const Post = props => {
  
    return (
      <div>
        <div>
          <PostHeader 
        thumbnailUrl={props.post.thumbnailUrl}
        username={props.post.username} />
        </div>
        <div>
        <img 
            src={props.post.imageUrl} 
            alt={props.post.username} />
        </div>
        <Likes />
        <CommentSection comments={props.post.comments} />
      </div>
    );

}


export default Post;