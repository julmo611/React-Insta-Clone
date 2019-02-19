import React from 'react';

const Comments = props => {
    return(
        <>
     
        <p>{props.comments.text}</p>
        <p>{props.comments.username}</p>
                    
        </>
    );
}


export default Comments;