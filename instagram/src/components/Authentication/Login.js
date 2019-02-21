import React from 'react';
import styled from 'styled-components'


const Button = styled.button`
  color: #fff;
  font-size: 1em;
  margin: 1em;
  padding: 10px 30px;
  border-radius: 3px;
  border: none;
  margin: 10px auto;
  widht: 100%;

  ${props => (props.type === 'primary' ? `background: #2196f3;` : null)}
`;

const Loginform = styled.div`
  text-align: center;
  padding-top: 150px;
  width: 250px;
  margin: 0 auto;

  & h1 {
    font-size: 32px;
    text-transform: uppercase;
  }

  & h2 {
    font-size: 18px;
  }

  & input {
    border: 1px solid #efefef;
    border-radius: 3px;
    
  }

`;


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            inputText: ""
     
        };
      }
    
    handleChanges = e => this.setState({ inputText: e.target.value });
    nameHandle = e => this.setState({userName: e.target.value});


    signIn = e => {
      e.preventDefault();
      localStorage.setItem('username', this.state.userName);
      localStorage.setItem("pasword", this.state.inputText);

      window.location.reload();
    };


render() {
    return (
      <>
        <Loginform>
            <h1>Login Page</h1>

            <h2>Username</h2>
          <input 
            type="text"
            name="username"
            value={this.userName}
            onChange={this.nameHandle}
          /><br/>
          <h2>Password</h2>
          <input
            type="password"
            name="password"
            value={this.inputText}
            onChange={this.handleChanges}
          /><br/>
          <Button type="primary" onClick={this.signIn}>Sign in</Button>
        </Loginform>
      </>
        )
    }
}



export default Login;