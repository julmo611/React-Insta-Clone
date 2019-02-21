import React from 'react';
import styled from 'styled-components';

import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

const Maincontainer = styled.div`
    display: flex;
    position: relative;
    width: 920px;
    margin: 0 auto;
`


const PostPage = props => {
    return (
        <>
        <SearchBar />
        <Maincontainer>
        <PostContainer posts={props.posts}  />
        </Maincontainer>
      
        </>
    )
}

export default PostPage;