import React, { Component } from "react";
import './Login.css';
import axios from 'axios'

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
      <div>
        <h1>HELLO WORLD!</h1>
      </div>
       
      <div class="centralContainer">

        <div class = "logo"></div>
        <div class = "userName"></div>
        <div class = "password"></div>
        <div class ="buttonLogin"></div>
        <div class ="buttonRegister"></div>

      </div> 
    </div>
      
    )
  }
}

export default Login;