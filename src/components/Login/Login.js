import React, { Component } from "react";
import './Login.css';

// import { connect } from "react-redux";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };

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