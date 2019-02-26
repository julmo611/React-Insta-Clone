import React from 'react';
import PostContainer from './PostContainer';

const PostPage = props => {
    return (
        <>
            <PostContainer posts={props.posts}  />
        </>
    )
}

export default PostPage;