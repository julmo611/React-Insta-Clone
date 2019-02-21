import React from 'react';
import styled from 'styled-components';


const ProfileImg = styled.div`
    padding: 10px 10px;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    width: 616px;

    & img {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        margin-right: 15px;
        color: #262626;
    }
`

const PostHeader = props => {
    return (
        <ProfileImg>
            <img 
            src={props.thumbnailUrl} 
            alt={props.username} />
            {props.username}
           
        </ProfileImg>
    )
}

export default PostHeader;