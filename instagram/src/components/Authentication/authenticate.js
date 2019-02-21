import React from 'react';


const authenticate = Login => PostPage => props => {
    if (!localStorage.getItem('username')) {
        return <Login />

    }
    return <PostPage posts={props.posts} />
    
};


export default authenticate;