import React from 'react';
import uuidv4 from 'uuid'
import styled from 'styled-components';

import Comments from './Comments';


// Style


const AddComment = styled.div`
  border-top: 1px solid #efefef;
  display: flex;
  align-items: center;

  & input {
      border: none;
      width: 535px;
      padding: 10px 5px;
  }

  & .fa-ellipsis-h {
    font-size: 12px;
  }

`


class CommentSection extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        comments: props.comments,
        comment: ''
      };
    }


    componentWillMount() {
      localStorage.getItem(this.state.comments) && this.setState({
        Comments: JSON.parse(localStorage.getItem(this.state.comments)),
        isLoading: false
      })
    }

  
    componentWillUpdate(nextProps, nextState) {
      localStorage.setItem( 'Comments', JSON.stringify(nextState.comments));
    }

      

   addNewComment = e => {
      e.preventDefault(); 

      const newComment = {
        comment: this.state.comments,
        username: 'Julmo611',
        text: this.state.comment
      };

      this.setState({
        comments: [...this.state.comments, newComment],
        comment: ''
      });
    }
   

    handleChanges = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };
    

    render() {
      return (
        <>           
                {this.state.comments.map((comm ) => <Comments key={uuidv4()} comments={comm} />)}
                <AddComment>
                  <form onSubmit={this.addNewComment} ref="someName" >
                      <input type="text" 
                      value={this.state.comment}
                      onChange={this.handleChanges}
                      name="comment"
                      placeholder="Add a Comment..."/> 
                      <i className="fas fa-ellipsis-h" />
                  </form>
                </AddComment>  
            </>  
        );
    }
}


export default CommentSection;