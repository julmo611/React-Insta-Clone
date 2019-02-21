import React from 'react';


const authenticate = Login => PostPage => props => {
    if (!localStorage.getItem('user')) {
        return <Login />

    }
    return <PostPage posts={props.posts} />
    
};


export default authenticate;