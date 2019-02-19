import React from 'react';


const Likes = props => {
    console.log(props.likes);
    return (
        <>
         <div> <i className="far fa-heart" /> <i className="far fa-comment"  /> </div>
          <div>{props.likes} Likes </div>
        </>
    )
}

export default Likes;