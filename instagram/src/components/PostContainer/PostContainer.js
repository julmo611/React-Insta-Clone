import React from 'react';

import Post from './Post';


const PostContainer = props => {

      return ( 
       <div>
           {props.posts.map( postMap => <Post post={postMap} />)}    
          
       </div>
      )
    
  
}

export default PostContainer;