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
	function handleNavUser(){
		history.push(`/userpage/${currentUser.id}`)
	}

	return (
		<div className="navBar">
			<div>
				{!currentUser ? null : <h4 onClick={handleNavUser}>Welcome {currentUser.name} </h4>}
			</div>
			<NavLink className='navLink' exact to="/">
				Home
			</NavLink>
			{!currentUser ? null :
			(
				<NavLink className='navLink'  to="/profilepage">
					{" "}Profile{" "}
				</NavLink>
			)}
			{!currentUser ? null :
			(
				<NavLink className='navLink'  to="/newpost">
					{" "}Create Post{" "}
				</NavLink>
			)}
			<div>
				<SearchBar posts={posts} search={search} setSearch={setSearch} />
			</div>
			{!currentUser ? (
				<NavLink className='navLink' to="/loginpage">
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
