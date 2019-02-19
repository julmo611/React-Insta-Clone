import React from 'react';

const PostHeader = props => {
    return (
        <div>
            <img 
            src={props.thumbnailUrl} 
            alt="Profile Image" />
            {props.username}
            <div>
                
            </div>


        </div>
    )
}

export default PostHeader;