import React from 'react';
import styled from 'styled-components';


const LikeIcons = styled.div`
    padding: 5px;
    font-size: 22px;
    margin-right: 10px;
    & .fa-heart {
        cursor: pointer;
        padding-right: 10px;
        &:active {
            color: red;
        }
    }
`
const Likes = props => {
    console.log(props);
   

    return (
        <>
        <LikeIcons> 
            <i onClick={props.likesUp} className="far fa-heart" />
            <i className="far fa-comment" />
        </LikeIcons>
        </>
    )
}

export default Likes;