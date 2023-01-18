import React, {useContext} from "react";
import { Context } from "../contexts/Context";

function LoginForm({
	setErrors,
	username,
	password,
	handleChange,
    history
}) {
	const {
		setCurrentUser,
		setUserPosts,
		setUserComments,
		setUserLikes,
		setUserPlants
	} = useContext(Context)
	
	// submits the login form
	// takes user info, and pieces it out by setting the users posts, comments, likes, and plants
	function handleSubmit(e) {
		e.preventDefault();
		const user = {
			username: username,
			password: password,
		};

		fetch(`/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		}).then((r) => {
			if (r.ok) {
				r.json()
					.then((user) => {
						setCurrentUser(user)
						setUserPosts(user.posts)
          				setUserComments(user.comments)
          				setUserLikes(user.liked_posts)
          				setUserPlants(user.plants)
					})
					.then(history.push("/"));
			} else {
				r.json().then((err) => setErrors(err.errors));
			}
		});
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="username">
						Username:{" "}
					</label>
					<input
						type="text"
						id="username"
						name="username"
						value={username}
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div>
					<label htmlFor="password">
						Password:{" "}
					</label>
					<input
						type="password"
						id="pass"
						name="password"
						value={password}
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div>
					<button type="submit" value="Login">
						Login
					</button>
				</div>
			</form>
		</div>
	);
}

export default LoginForm;