import React from "react";
import Homepage from "./pages/homepage/Homepage";
import { Route, Switch } from "react-router-dom";
import "./App.scss";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
