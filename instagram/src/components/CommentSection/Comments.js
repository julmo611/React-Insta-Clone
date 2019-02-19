import React from 'react';

const Comments = props => {
    return(
        <>
     
        {props.comments.text}
      {props.comments.username}
                    
        </>
    );
}


export default Comments;