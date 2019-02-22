import React from 'react';
import styled from 'styled-components'
import instaLogo from '../../img/instaLogo.JPG';
import apple from '../../img/apple.png';
import google from '../../img/google.png';
import microsoft from '../../img/microsoft.png';

const BigBox = styled.div`
 
  width: 100%;
  padding-top: 200px;
  padding-bottom: 200px;
`
const InstaLogo = styled.img`
  widht: 175px;
  height: 51px;
`

const Button = styled.button`
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  padding: 5px 30px;
  border-radius: 3px;
  border: none;
  margin: 10px auto;
  width: 70%;

  ${props => (props.type === 'primary' ? `background: #2196f3;` : null)}
`;

const Loginform = styled.div`
  text-align: center;
  width: 350px;  
  padding: 30px 0 10px;
  margin: 0 auto;
  border: 1px solid #efefef;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & input {
    width: 70%;
    margin-bottom: 10px;
    border: 1px solid #efefef;
    border-radius: 3px;
    font-size: 12px;
    padding: 8px;
    background-color: #fafafa;
  }

  & hr {
    width: 70%;
    background-color: #efefef;
    height: 1px;
    border: none;
  }
`;

const ForPass = styled.p`
  text-align: right;
  width: 70%;
  color: #2196f3;
  font-size: 14px;

`

const ORLine = styled.p`
  font-size: 14px;
  margin-top: -28px;
  color: #999;
  background-color: #fff;
  padding: 0 15px;
`

const LogFace = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #2196f3;
`

const SmallBox = styled.div`
  text-align: center;
  width: 350px;  
  padding: 20px 0 10px;
  margin: 20px auto;
  border: 1px solid #efefef;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
`

const Stores = styled.div`

  & img {
    width: 136px;
    height: 40px;
    margin: 0 5px;
  }

`

const GetApp = styled.div`
  font-size: 14px;
  text-align: center;
`



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
      <BigBox>
        <Loginform>
          <InstaLogo src={instaLogo} alt="Instagram Logo"/><br/>
         <input 
            type="text"
            name="username"
            value={this.userName}
            onChange={this.nameHandle}
            placeholder="Phone number, username, or email"
          /><br/>
          <input
            type="password"
            name="password"
            value={this.inputText}
            onChange={this.handleChanges}
            placeholder="Password"
          /><br/>
            <ForPass>Forgot password?</ForPass>
          <Button type="primary" onClick={this.signIn}>Log In</Button>
          <hr/>
          <ORLine>OR</ORLine>
          <LogFace><i class="fab fa-facebook-square"></i> Log in With Facebook</LogFace>
        </Loginform>
        <SmallBox>
          <p>Don't have an account? <strong>Sign up</strong></p>
        </SmallBox>
        <GetApp>
          <p>Get the app.</p>
          <Stores>
            <img src={apple} alt="Instagram Logo"/>
            <img src={google} alt="Instagram Logo"/>
            <img src={microsoft} alt="Instagram Logo"/>
          </Stores>
        </GetApp>
      </BigBox>
        )
    }
}



export default Login;