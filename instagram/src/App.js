import React, { Component } from 'react';
import './App.css';


import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
       posts: []
    };
  }

  

  componentDidMount() {
    this.setState({posts: dummyData });
  }



  render() {
    return (
      <div className="App">
        <SearchBar />
        <div className="main-container">
          <PostContainer posts={this.state.posts}  />
        </div>
      </div>
    );
  }
}

export default App;
