import React from 'react';

import AddInput from './AddInput';
import Comments from './Comments';
import Likes from './Likes';

class CommentSection extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        comments: props.comments
      };
    }
    render() {
      return (
            <div>
                <Likes />
                {this.state.comments.map((comm ) => <Comments comments={comm} />)}
                <AddInput />
            </div>  
        );
    }
}


export default CommentSection;