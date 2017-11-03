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
        <h1>HELLO WORLD!</h1>
      </div>
    )
  }
}

export default Login;