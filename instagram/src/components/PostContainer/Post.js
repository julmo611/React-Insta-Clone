import React from 'react';
import moment from 'moment';

import './postcontainer.css';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';
import Likes from '../CommentSection/Likes';

const Post = props => {
  
    return (
      <div className="ind-post" >
        <PostHeader 
          thumbnailUrl={props.post.thumbnailUrl}
          username={props.post.username} />
        <div className="post-img">
          <img 
              src={props.post.imageUrl} 
              alt={props.post.username} />
        </div>
        <div className="commentsection">
          <Likes />
          <div className="likes-font">{props.post.likes} Likes</div>
          <CommentSection comments={props.post.comments} />
          <div className="moment">{moment( props.post.timestamp, "'MMMM Do YYYY, h:mm:ss a").fromNow()}</div>
         
       </div>
      </div>
    );

}


export default Post;