import React from 'react';

import './comments.css';
import Comments from './Comments';


class CommentSection extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        comments: props.comments,

      };
    }


    

    addNewComment = e => {
      e.preventDefault();
      console.log(e.target);
      const newComment = {
        comment: this.state.comment,
        
      };
      this.setState({
        comments: [...this.state.comments, newComment],
        comment: ''

      });
    };

    handleChanges = e => {
      console.log(e.target.value);
     
      this.setState({
        [e.target.name]: e.target.value
      });
    };



    render() {
      return (
            <>           
                <div>
                  {this.state.comments.map((comm, index ) => <Comments key={index} comments={comm} />)}
                </div>
                           
            </>  
        );
    }
}


export default CommentSection;