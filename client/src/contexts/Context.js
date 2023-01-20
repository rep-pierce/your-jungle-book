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
    const [post, setPost] = useState(null)
    const [postForm, setPostForm] = useState({
        title: "",
		image: "",
        post_body: ""
    })

    // resets the post form information, this includes plants selected to be linked to the post, reseting errors, and it also handles reseting the addPlant display state variable
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

    // handles creating a new post through a POST fetch
    // the post information also contains the selected plants and are sent to the backend through the posts_plants_ids parameter
    function handleNewPost(e){
        e.preventDefault()
        const newPost = {
            user_id: currentUser.id,
            title: postForm.title,
            image: postForm.image,
            post_body: postForm.post_body,
            posts_plants_ids: selectedPlant
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
                    setPosts([post, ...posts])
                    handlePostResets()
                    history.push('/')
                })
            } else {
                r.json().then((err) => setPostErrors(err.errors))
            }
        })
    }
    function handleDeletePost(pst, inView){
        setUserPosts(userPosts.filter((pt) => pt.id !== pst.id))
        setPosts(posts.filter((pt) => pt.id !== pst.id))
        fetch(`/posts/${pst.id}`, {
          method: "DELETE",
        })
        if (inView){
            setPost(null)
            history.push("/")
        }
    }

    function isUsers(pst, inView){
        if (!pst.user || !currentUser){
            return null
        }else {
            return pst.user.id === currentUser.id ? <button onClick={() => handleDeletePost(pst, inView)}>Delete</button> : null
        }
    }

    // this useEffect checks user sessions to see if it can keep a user logged in
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

    // handles liking and unliking a post
    function handleLikes(e, pst){
        const like = {
            user_id: currentUser.id,
            post_id: pst.id
        }
        if (e.target.innerHTML === "☆"){
          fetch("/likes",{
              method: "POST",
              headers: {
                  'Content-Type':'application/json'
              },
              body: JSON.stringify(like)
          })
          .then((r) => r.json())
          .then((liked) => {
              setUserLikes([...userLikes, liked])
          })
        } else {
          const newLikes = userLikes.filter((likedPost) => likedPost.id !== pst.id)
          setUserLikes(newLikes)
          fetch(`/likes/${currentUser.id}/${pst.id}`, {
            method: "DELETE",
          })
        }
      }
    
    // this useEffect grabs all of the posts so we can render them onto the page in the homepage component
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
            setSelectedPlant,
            handleLikes,
            post,
            setPost,
            isUsers
        }}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider