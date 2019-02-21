import React from 'react';

import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

const PostPage = props => {
    return (
        <>
        <div className="App">
        <SearchBar />
        <div className="main-container">
    <PostContainer posts={props.posts}  />
        </div>
      </div>
        </>
    )
}

export default PostPage;