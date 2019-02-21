import React from 'react';
import uuidv4 from 'uuid'
import styled from 'styled-components';

import profile from '../../img/profile.JPG';
import Post from './Post';


const PostContainerDiv = styled.div`
   width: 970px;
   margin: 0 auto;
   padding-top: 100px;
   padding-bottom: 100px;
`

const ProfileHolder = styled.div`
   position: fixed;
   margin-left: 635px;
   margin-top: 95px;

   & img {
      width: 100%;
      height: auto;
   }
`


const PostContainer = props => {

      return ( 
       <>
       <PostContainerDiv>
          {props.posts.map( (postMap) => <Post key={uuidv4()} post={postMap} />)}    
       </PostContainerDiv>
       <ProfileHolder><img src={profile} alt='Profile'/> </ProfileHolder>
       </>
      )
    
  
}

export default PostContainer;