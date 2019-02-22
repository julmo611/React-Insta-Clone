import React from 'react';
import styled from 'styled-components';


const AddComment = style.div` 
  border-top: 1px solid #efefef;
  display: flex;
  align-items: center;
`

const InputComment = styled.input`
  border: none;
  width: 535px;
  padding: 10px 5px;
`


const CommentInput =  props => {
    
  return (
    <AddComment>
      <form onSubmit={props.submitComment}>
        <InputComment
          type="text"
          value={props.comment}
          placeholder="Add comment... "
          onChange={props.changeComment}
        />
      </form>
        <i className="fas fa-ellipsis-h" />
    </AddComment>
  )
}
 
export default CommentInput;