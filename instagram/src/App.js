import React, { Component } from 'react';
import styled from 'styled-components';

// Imports
import PostPage from './components/PostContainer/PostPage'
import authenticate from './components/Authentication/authenticate'
import Login from './components/Authentication/Login'

import dummyData from './dummy-data';

// Style

const Appcont = styled.div`
  background-color: #fafafa;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;

`

const ToShow = authenticate(Login)(PostPage);

class App extends Component {
  constructor() {
    super();
    this.state = {
       posts: [],       
      
      
    };
  }

  


    componentDidMount() {
    this.setState({posts: dummyData });
  }


  
 
  render() {
    return (
      <Appcont>
        <div>
          <ToShow posts={this.state.posts}/>
          
        </div>
      </Appcont>
    );
  }
}

export default App;
