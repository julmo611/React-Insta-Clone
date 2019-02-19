import React from 'react';
import './comments.css';



const AddInput =  props => {
    return (
        <div className="add-comment">
            <form onSubmit={props.addNewComment}>
            <input type="text" 
            value={props.comment}
            onChange={props.handleChanges}
            name="comment"
            placeholder="Add a Comment..."/> 
            <i className="fas fa-ellipsis-h" />
            <button type="submit"></button>
         </form>
        </div>
    )
}

export default AddInput;