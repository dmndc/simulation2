import React, { Component } from "react";
import './Login.css';
import axios from 'axios';
import logo from '../../assets/auth_logo.png';

// import { connect } from "react-redux";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };

  }

  loginUser = () => {
    axios.post(`http//localhost:3000/api/auth/login`, {user: this.state.username, pass: this.state.password}).then(res => {
      return res.data
    })
  }

  registerUser =() => {
    axios.post(`http//localhost:3000/api/auth/register`, {user: this.state.username, pass: this.state.password}).then(res => {
      return res.data
    })
  }

  handleUserName(event) {
    this.setState({ username: event.currentTarget.value });
  }

  handlePassword(event) {
    this.setState({ password: event.currentTarget.value });
  }

  render() {
    return (
    <div>
      {/* <div>
        <h1>HELLO WORLD!</h1>
      </div> */}
       
      <div class="centralContainer">

        <img src={ logo } class = "logo" alt="logo"/>

        
        {/* <div class = "userName"> */}
        <label>
           Username:
        </label>
          <input type="text" username="name" />
        {/* </div> */}

        {/* <div class = "password"> */}
        <label>
           Password:
        </label>
          <input type="text" username="name" />
          
        {/* </div> */}
        
        <div class ="buttonLogin"></div>
        <div class ="buttonRegister"></div>

      </div> 
    </div>
      
    )
  }
}

export default Login;