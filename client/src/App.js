import React from "react";
import { Switch, Route } from "react-router-dom";
import LogInPage from "./components/LogInPage";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import UserPage from "./components/UserPage";

function App() {

  return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/loginpage">
            <LogInPage />
          </Route>
          <Route path="/userpage">
            <UserPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
  );
}

export default App;
