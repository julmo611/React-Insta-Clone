import React from 'react';
import styled from 'styled-components';


const CommentText = styled.p`
    font-size: 14px;
    line-height: 10px;
    & strong {
        margin-right: 10px;
    }
`

const Comments = props => {
    return(
        <>
           <CommentText>
               <strong>
                    {props.comments.username}
                </strong> 
                {props.comments.text}
            </CommentText>
                 
        </>
    );
}


export default Comments;