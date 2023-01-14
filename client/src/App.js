import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LogInPage from "./components/LogInPage";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import UserPage from "./components/UserPage";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [userPosts, setUserPosts] = useState([])
  const [userLikes, setUserLikes] = useState([])
  const [userPlants, setUserPlants] = useState([])
  const [userComments, setUserComments] = useState([])

  useEffect(() => {
		fetch("/auth").then((r) => {
			if (r.ok) {
				r.json().then((user) => {
          setCurrentUser(user)
          setUserPosts(user.posts)
          setUserComments(user.comments)
          setUserLikes(user.liked_posts)
          setUserPlants(user.plants)
        });
			}
		});
	}, []);
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch("/posts")
    .then(r => r.json())
    .then(setPosts)
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar 
        setUserPosts={setUserPosts}
        setUserComments={setUserComments}
        setUserLikes={setUserLikes}
        setUserPlants={setUserPlants}
        currentUser={currentUser} 
        setCurrentUser={setCurrentUser}/>
        <Switch>
          <Route path="/loginpage">
            <LogInPage 
            setCurrentUser={setCurrentUser}
            setUserPosts={setUserPosts}
            setUserComments={setUserComments}
            setUserLikes={setUserLikes}
            setUserPlants={setUserPlants}/>
          </Route>
          <Route path="/userpage">
            <UserPage 
            currentUser={currentUser} 
            setCurrentUser={setCurrentUser} 
            userComments={userComments} 
            userLikes={userLikes} 
            userPlants={userPlants} 
            userPosts={userPosts} />
          </Route>
          <Route path="/">
            <HomePage 
            currentUser={currentUser} 
            posts={posts} 
            setPosts={setPosts} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
