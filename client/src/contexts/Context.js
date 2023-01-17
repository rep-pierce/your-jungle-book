import { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export const Context = createContext()

const ContextProvider = (props) => {
    const history = useHistory()
    const [currentUser, setCurrentUser] = useState(null);
    const [userPosts, setUserPosts] = useState([])
    const [userLikes, setUserLikes] = useState([])
    const [userPlants, setUserPlants] = useState([])
    const [userComments, setUserComments] = useState([])
    const [posts, setPosts] = useState([])
    const [selectedPlant, setSelectedPlant] = useState([])
    const [addPlant, setAddPlant] = useState("no")
    const [postErrors, setPostErrors] = useState([])
    const [postForm, setPostForm] = useState({
        title: "",
		image: "",
        post_body: "",
    })
    function handlePostResets(){
        setPostForm({
            title: "",
		    image: "",
            post_body: "",
        })
        setSelectedPlant([])
        setPostErrors([])
        setAddPlant("no")
    }
    function handlePostPlants(plant, postID){
        const pps = {
            plant_id: plant.id,
            post_id: postID
        }
        fetch("/posts_plants",{
            method: "POST",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(pps)
        })
    }

    function handleNewPost(e){
        e.preventDefault()
        const newPost = {
            user_id: currentUser.id,
            title: postForm.title,
            image: postForm.image,
            post_body: postForm.post_body
        }
        fetch("/posts",{
            method: "POST",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(newPost)
        }).then((r) => {
            if (r.ok) {
                r.json().then((post) => {
                    setUserPosts([...userPosts, post])
                    selectedPlant.forEach((plant) => {
                        handlePostPlants(plant, post.id)
                    })
                    setPosts([post, ...posts])
                    handlePostResets()
                    history.push('/')
                })
            } else {
                r.json().then((err) => setPostErrors(err.errors))
            }
        })
    }

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
            setPosts,
            postForm,
            setPostForm,
            handleNewPost,
            addPlant,
            setAddPlant,
            postErrors,
            setPostErrors,
            selectedPlant,
            setSelectedPlant
        }}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider