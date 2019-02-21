import React from 'react';
import moment from 'moment';
import styled from 'styled-components';


import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';
import Likes from '../CommentSection/Likes';


// style

const IndPost = styled.div`
  background-color: #ffffff;
  width: 616px;
  border-radius: 3px;
  border: 1px solid #e6e6e6;
  margin-bottom: 60px;
`
const PostImg = styled.img`
  width: 615px;

`

const CommentsectionDiv = styled.div`
  padding: 0 20px 20px;
`

const LikesFont = styled.div`
  font-size: 14px;
  font-weight: bold; 
  color: #262626;
`

const MomentDiv = styled.div`
  font-size: 14px;
  color: gray;
  margin-bottom: 5px;
`

const Post = props => {
  
    return (
      <IndPost>
        <PostHeader 
          thumbnailUrl={props.post.thumbnailUrl}
          username={props.post.username} />
        <PostImg 
              src={props.post.imageUrl} 
              alt={props.post.username} />
        
        <CommentsectionDiv>
          <Likes />
          <LikesFont>{props.post.likes} Likes</LikesFont>
          <CommentSection comments={props.post.comments} />
          <MomentDiv>
            {moment( props.post.timestamp, "'MMMM Do YYYY, h:mm:ss a").fromNow()}
          </MomentDiv>
         
       </CommentsectionDiv>
      </IndPost>
    );

}


export default Post;