import React from "react";
import { NavLink, useHistory } from "react-router-dom";


function NavBar({ 
	setUserPosts,
	setUserComments,
	setUserLikes,
	setUserPlants,
	currentUser, 
	setCurrentUser }) {
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
		<div className="navbar">
			{!currentUser ? null : <h4>Welcome {currentUser.name} </h4>}
			<NavLink exact to="/">
				Home
			</NavLink>
			{!currentUser ? null :
			(
				<NavLink to="/userpage">
					{" "}Profile{" "}
				</NavLink>
			)}
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
