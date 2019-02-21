import React, { Component } from 'react';
import './App.css';
import PostPage from './components/PostContainer/PostPage'
import authenticate from './components/Authentication/authenticate'
import Login from './components/Authentication/Login'

import dummyData from './dummy-data';

const ToShow = authenticate(PostPage)(Login);

class App extends Component {
  constructor() {
    super();
    this.state = {
       posts: [],
       inputText: ""
    };
  }

    componentDidMount() {
    this.setState({posts: dummyData });
  }

  handleChanges = e => this.setState({ inputText: e.target.value });

  signIn = e => {
    e.preventDefault();
    localStorage.setItem("user", this.state.inputText);
    window.location.reload();
  };



  render() {
    return (
      <div className="App">
        <div className="center-form">
          <ToShow posts={this.state.posts}/>
          <h2>Username</h2>
          <input type="text"/><br/>
          <h2>Password</h2>
          <input
            type="text"
            value={this.state.inputText}
            onChange={this.handleChanges}
          /><br/>
          <button onClick={this.signIn}>Sign in</button>
        </div>
      </div>
    );
  }
}

export default App;
