import { createContext, useState, useEffect } from "react";

export const Context = createContext()

const ContextProvider = (props) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [userPosts, setUserPosts] = useState([])
    const [userLikes, setUserLikes] = useState([])
    const [userPlants, setUserPlants] = useState([])
    const [userComments, setUserComments] = useState([])
    const [posts, setPosts] = useState([])

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
	    })
    }, []);
    
    useEffect(() => {
        fetch("/posts")
            .then(r => r.json())
            .then(setPosts)
    }, [])

    return (
        <Context.Provider value={{
            currentUser,
            setCurrentUser,
            userPosts,
            setUserPosts,
            userLikes,
            setUserLikes,
            userPlants,
            setUserPlants,
            userComments,
            setUserComments,
            posts,
            setPosts
        }}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider