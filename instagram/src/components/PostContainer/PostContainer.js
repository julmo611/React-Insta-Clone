import React from 'react';
import './postcontainer.css';
import profile from '../../img/profile.JPG';

import Post from './Post';


const PostContainer = props => {

      return ( 
       <>
       <div className="post-container">
          {props.posts.map( (postMap, index ) => <Post key={index} post={postMap} />)}    
       </div>
       <div className="profile-holder"><img src={profile} alt='Profile'/> </div>
       </>
      )
    
  
}

export default PostContainer;