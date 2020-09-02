import React, { Component } from "react";

import "./SignIn.scss";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import FormInput from "../FormInput/FormInput";
import CustomBtn from "../CustomBtn/CustomBtn";

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            label="email"
            handleChange={this.handleChange}
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            label="password"
            handleChange={this.handleChange}
          />
          <div className="buttons">
            <CustomBtn type="submit">Sign In</CustomBtn>
            <CustomBtn onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </CustomBtn>
          </div>
        </form>
      </div>
    );
  }
}
