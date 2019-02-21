import React from 'react';


const authenticate = Login => PostPage => props => {
    if (localStorage.getItem('user')) {
        return <Login />

    }
    
    return <PostPage posts={props} />
    
};


export default authenticate;