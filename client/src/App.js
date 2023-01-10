import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LogInPage from "./components/LogInPage";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
		fetch("/auth").then((r) => {
			if (r.ok) {
				r.json().then((user) => setCurrentUser(user));
			}
		});
	}, []);

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        <Switch>
          <Route path="/loginpage">
            <LogInPage setCurrentUser={setCurrentUser}/>
          </Route>
          <Route path="/">
            <HomePage currentUser={currentUser} setCurrentUser={setCurrentUser} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
