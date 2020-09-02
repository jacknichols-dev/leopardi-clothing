import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.scss";

import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/ShopPage/ShopPage";
import SignInSignUpPage from "./pages/SignInSignUpPage/SignInSignUpPage";
import Header from "./components/Header/Header";
import { auth } from "./firebase/firebase.utils";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signIn" component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}
