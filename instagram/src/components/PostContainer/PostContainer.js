import React from 'react';
import uuidv4 from 'uuid'

import './postcontainer.css';
import profile from '../../img/profile.JPG';

import Post from './Post';


const PostContainer = props => {

      return ( 
       <>
       <div className="post-container">
          {props.posts.map( (postMap) => <Post key={uuidv4()} post={postMap} />)}    
       </div>
       <div className="profile-holder"><img src={profile} alt='Profile'/> </div>
       </>
      )
    
  
}

export default PostContainer;