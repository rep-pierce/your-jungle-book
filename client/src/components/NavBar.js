import React, {useContext} from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Context } from "../contexts/Context";


function NavBar() {
	const {
		currentUser,
		setCurrentUser,
		setUserPosts,
		setUserComments,
		setUserLikes,
		setUserPlants
	} = useContext(Context)
	
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
			{!currentUser ? null :
			(
				<NavLink to="/newpost">
					{" "}Create Post{" "}
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
