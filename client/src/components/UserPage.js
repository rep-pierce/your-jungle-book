import React, {useState, useContext} from 'react'
import PostCard from './PostCard'
import CommentCard from './CommentCard'
import PlantCard from './PlantCard'
import { Context } from '../contexts/Context'
import PlantForm from './PlantForm'

function UserPage() {
    const {
		currentUser,
		userPosts,
		userComments,
		userLikes,
		userPlants,
        setUserPlants
	} = useContext(Context)
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        watered: null,
        status: ""
    })
    const [errors, setErrors] = useState([]);
    const [display, setDisplay] = useState('posts')
    const [newPlant, setNewPlant] = useState('no')
    function handleChange(e) {
		const value = e.target.value;
		const name = e.target.name;
		setFormData((formData) => ({
			...formData,
			[name]: value,
		}));
	};
    function handleResets(){
        setFormData({
            name: "",
            image: "",
            watered: null,
            status: ""
        })
        setErrors([])
    }
    
    if (!currentUser){
        return <h2>Loading...</h2>
    }
    function handleNewPlantForm(){
        if (newPlant === "yes"){
            handleResets()
            setNewPlant("no")
        }else {
            setNewPlant("yes")
        }
    }

    function handleClick(){
        console.log(currentUser)
    }
    function handleUserPosts(){
        return userPosts.map(post => <PostCard key={post.id + 1000000} post={post} />)
    }
    function handleUserComments(){
        return userComments.map(comment => <CommentCard key={comment.id + 1000000} comment={comment} />)
    }
    function handleUserPlants(){
        return userPlants.map(plant => <PlantCard key={plant.id + 1000000} plant={plant} />)
    }
    function handleUserLikes(){
        return userLikes.map(post => <PostCard key={post.id + 1000000000} post={post} />)
    }
    function handleDisplay(){
        if (display === "likes"){
            return handleUserLikes()
        }else if (display === "comments"){
            return handleUserComments()
        }else {
            return handleUserPosts()
        }
    }
    function changeDispComment(){
        setDisplay("comments")
    }
    function changeDispLike(){
        setDisplay("likes")
    }
    function changeDispPost(){
        setDisplay("posts")
    }

  return (
    <div>
        <button onClick={handleClick}>Check User</button>
        <div>
            {handleUserPlants()}
        </div>
        <div>
            <button onClick={handleNewPlantForm}>{newPlant === "yes"? "Cancel" : "Add New Plant"}</button>
            {newPlant === "yes"? <PlantForm handleResets={handleResets} setUserPlants={setUserPlants} userPlants={userPlants} setNewPlant={setNewPlant} currentUser={currentUser} setErrors={setErrors} formData={formData} handleChange={handleChange} /> : null}
            {!errors ? null : errors.map((error) => <p key={error}>{error}</p>)}
        </div>
        <div>
            <button onClick={changeDispPost}>See Your Posts</button>
            <button onClick={changeDispComment}>See Your Comments</button>
            <button onClick={changeDispLike}>See Liked Posts</button>
        </div>
        <div>
            {handleDisplay()}
        </div>
    </div>
  )
}

export default UserPage