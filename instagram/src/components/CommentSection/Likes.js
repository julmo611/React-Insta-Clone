import React from 'react';


const Likes = props => {
    return (
        <>
         <p> <i className="far fa-heart" />
          {props.likes} Likes
          <i className="far fa-comment"  />
          </p>
        </>
    )
}

export default Likes;