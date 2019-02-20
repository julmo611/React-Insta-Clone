import React from 'react';
import './comments.css';
import InputFile from './InputFile';


const CommentInput =  props => {
    
    return (
        <div className="add-comment">
          <form onSubmit={props.submitComment}>
      <input
        type="text"
        value={props.comment}
        placeholder="Add comment... "
        onChange={props.changeComment}
      />
    </form>
            <i className="fas fa-ellipsis-h" />

        </div>
    )
}
 
export default CommentInput;