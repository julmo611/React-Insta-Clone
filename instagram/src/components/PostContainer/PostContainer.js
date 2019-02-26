import React from 'react';
import uuidv4 from 'uuid'
import dummyData from '../../dummy-data';
import styled from 'styled-components';

import profile from '../../img/profile.JPG';
import Post from './Post';
import SearchBar from '../SearchBar/SearchBar'


const PostContainerDiv = styled.div`
   width: 970px;
   margin: 0 auto;
   padding-top: 100px;
   padding-bottom: 100px;
`

const ProfileHolder = styled.div`
   position: fixed;
   margin-left: 635px;
   margin-top: 95px;

   & img {
      width: 100%;
      height: auto;
   }
`
const Maincontainer = styled.div`
    display: flex;
    position: relative;
    width: 920px;
    margin: 0 auto;
`

class PostContainer extends React.Component {
   constructor() {
      super();
      this.state = {
          posts: [],
          value: ''
                       
      };
    }

    componentDidMount() {
      this.setState({ posts: dummyData });
    }

    searchPostsHandler = e => {
      // eslint-disable-next-line
      const posts = this.state.posts.filter(post => {
        if (post.username.includes(e.target.value)) {
          return post;
        }
      });
      this.setState({ filteredPosts: posts });
    };

    
    updateSearch = event => {
      console.log(this.updateSearch);
      this.setState({value: event.target.value});
  }

   render() {
      
      const { value } = this.state;

      let filteredPosts = this.state.posts.filter( post => { return post.username.toLowerCase().indexOf(value.toLowerCase()) !== -1; });

      return ( 
       <>
         <SearchBar
          type="text"
          updateSearch={this.updateSearch.bind(this)}
           value={this.state.value}
          />
         <Maincontainer>
       <PostContainerDiv>
          {filteredPosts.map( (postMap) => <Post key={uuidv4()} post={postMap}  />)}    
       </PostContainerDiv>
         <ProfileHolder><img src={profile} alt='Profile'/> </ProfileHolder>
       </Maincontainer>
       </>
      )
   }
  
}

export default PostContainer;