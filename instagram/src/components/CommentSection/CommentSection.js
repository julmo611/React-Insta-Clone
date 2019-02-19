import React from 'react';

import AddInput from './AddInput';
import Comments from './Comments';


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
              
                <p>{this.state.comments.map((comm ) => <Comments comments={comm} />)}</p>
                <AddInput />
            </div>  
        );
    }
}


export default CommentSection;