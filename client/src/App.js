import React from "react";
import { Switch, Route } from "react-router-dom";
import LogInPage from "./components/LogInPage";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import ProfilePage from "./components/ProfilePage";
import NewPostPage from "./components/NewPostPage";
import PostView from "./components/PostView";
import UserPage from "./components/UserPage";

function App() {

  return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/loginpage">
            <LogInPage />
          </Route>
          <Route path="/profilepage">
            <ProfilePage />
          </Route>
          <Route path="/newpost">
            <NewPostPage />
          </Route>
          <Route path="/postview/:id">
            <PostView />
          </Route>
          <Route path="/userpage/:id">
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
