import React, {useContext, useState} from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Context } from "../contexts/Context";
import SearchBar from './SearchBar'
import "../css/NavBar.css"


function NavBar() {
	const {
		currentUser,
		setCurrentUser,
		setUserPosts,
		setUserComments,
		setUserLikes,
		setUserPlants,
		posts
	} = useContext(Context)
	const [search, setSearch] = useState("")
	
	// logs the user out through a logout fetch request
	const history = useHistory()
	function handleLogOut() {
		fetch("/logout", {
			method: "DELETE",
		})
			.then(() => {
				setCurrentUser(null)
				setUserPosts([])
				setUserComments([])
				setUserLikes([])
				setUserPlants([])
			})
			.then(history.push('/'));
	}

	return (
		<div className="navBar">
			<div>
				{!currentUser ? null : <h4>Welcome {currentUser.name} </h4>}
			</div>
			<NavLink exact to="/">
				Home
			</NavLink>
			{!currentUser ? null :
			(
				<NavLink to="/profilepage">
					{" "}Profile{" "}
				</NavLink>
			)}
			{!currentUser ? null :
			(
				<NavLink to="/newpost">
					{" "}Create Post{" "}
				</NavLink>
			)}
			<div>
				<SearchBar posts={posts} search={search} setSearch={setSearch} />
			</div>
			{!currentUser ? (
				<NavLink to="/loginpage">
					{" "}Log In{" "}
				</NavLink>
			) : (
				<button onClick={handleLogOut}>
					Log Out
				</button>
			)}
		</div>
	);
}
export default NavBar;
