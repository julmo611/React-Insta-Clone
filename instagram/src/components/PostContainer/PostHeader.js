import React from 'react';

const PostHeader = props => {
    return (
        <div>
            <img 
            src={props.thumbnailUrl} 
            alt={props.username} />
            {props.username}
            <div>
                
            </div>


        </div>
    )
}

export default PostHeader;