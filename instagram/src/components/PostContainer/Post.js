import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import Likes from './Likes';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';



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


class Post extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    };
  }

  likesUp = () => {
    let likes = this.state.likes + 1;
   this.setState({ likes });
 };

  render() {
  
    return (
      <IndPost>
        <PostHeader 
          thumbnailUrl={this.props.post.thumbnailUrl}
          username={this.props.post.username} />
        <PostImg 
              src={this.props.post.imageUrl} 
              alt={this.props.post.username} />
        
        <CommentsectionDiv>
          <Likes 
            likesUp={this.likesUp}
            likes={this.state.likes}
            />
          <LikesFont>{this.state.likes} Likes</LikesFont>
          <CommentSection comments={this.props.post.comments} />
          <MomentDiv>
            {moment( this.props.post.timestamp, "'MMMM Do YYYY, h:mm:ss a").fromNow()}
          </MomentDiv>
         
       </CommentsectionDiv>
      </IndPost>
    );
  }
}


export default Post;