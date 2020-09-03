import React from "react";

import "./SignInSignUpPage.scss";

import SignUp from "../../components/SignUp/SignUp";

import SignIn from "../../components/SignIn/SignIn";

const SignInSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUpPage;
