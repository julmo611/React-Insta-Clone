import React from 'react';
import './postcontainer.css';

const PostHeader = props => {
    return (
        <div className="profile-img">
            <img 
            src={props.thumbnailUrl} 
            alt={props.username} />
            {props.username}
           
        </div>
    )
}

export default PostHeader;