import React from 'react';
import uuidv4 from 'uuid'

import './comments.css';
import Comments from './Comments';


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
                <div>
                  {this.state.comments.map((comm ) => <Comments key={uuidv4()} comments={comm} />)}
                </div>
                <div className="add-comment">
                <form onSubmit={this.addNewComment} ref="someName" >
                    <input type="text" 
                    value={this.state.comment}
                    onChange={this.handleChanges}
                    name="comment"
                    placeholder="Add a Comment..."/> 
                    <i className="fas fa-ellipsis-h" />
                </form>
                </div>  
            </>  
        );
    }
}


export default CommentSection;