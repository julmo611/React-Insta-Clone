import React from 'react';
import styled from 'styled-components';


const LikeIcons = styled.div`
    padding: 5px 0;
    font-size: 22px;
    margin-right: 10px;

`

const Likes = props => {
    return (
        <>
        <LikeIcons> 
            <i className="far fa-heart" />
            <i className="far fa-comment" />
        </LikeIcons>
        </>
    )
}

export default Likes;