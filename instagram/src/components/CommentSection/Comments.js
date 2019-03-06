import React from 'react';
import './comments.css';

const Comments = props => {
    return(
        <>
           <p className="comment-text">
               <strong>
                    {props.comments.username}
                </strong> 
                {props.comments.text}
            </p>
                 
        </>
    );
}


export default Comments;