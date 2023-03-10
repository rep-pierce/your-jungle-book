import React, {useState, useContext} from 'react'
import PostCard from './PostCard'
import CommentCard from './CommentCard'
import PlantCard from './PlantCard'
import { Context } from '../contexts/Context'
import PlantForm from './PlantForm'
import "../css/ProfilePage.css"
import "../css/HomePage.css"
import EditUserForm from './EditUserForm'

function ProfilePage() {
    const {
		currentUser,
		userPosts,
		userComments,
		userLikes,
		userPlants,
        setUserPlants,
        setPosts,
        posts,
        setUserPosts
	} = useContext(Context)
    const [formData, setFormData] = useState({
        name: "",
        image: null,
        watered: null,
        status: "",
        frequency: 0,
    })
    const [errors, setErrors] = useState([]);
    const [display, setDisplay] = useState('plants')
    const [newPlant, setNewPlant] = useState('no')
    const inUser = false

    // dynamically handles the formData and allows for controlled inputs
    function handleChange(e) {
		const value = e.target.value;
		const name = e.target.name;
		setFormData((formData) => ({
			...formData,
			[name]: value,
		}));
	};
    function handleFile(e){
        const file = e.target.files[0]
        const name = e.target.name
        setFormData((formData) => ({
            ...formData,
            [name]: file,
        }))
    }

    // resets our formData as well as errors
    function handleResets(){
        setFormData({
            name: "",
            image: "",
            watered: null,
            status: "",
            frequency: 0,
        })
        setErrors([])
    }

    const handleWatering = async (plantId, makePost) => {
        const response = await fetch(`/plants/${plantId}/${makePost? "water_with_post" : "water"}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
        })
        const updatedItems = await response.json()
        // debugger
        setUserPlants(userPlants.map(plant => {
          if (plant.id === plantId) {
            return updatedItems.plant
          }
          return plant
        }))
        if (updatedItems.post){
            updatedItems.post.user = {
                age: currentUser.age,
                id: currentUser.id,
                image: currentUser.image,
                name: currentUser.name,
                username: currentUser.username,
                email: currentUser.email
            }
            setPosts([updatedItems.post, ...posts])
            setUserPosts([updatedItems.post, ...userPosts])
        }
        
    }
    const handleUpdateImg = async (e, plantId, makeUpdate, img, setRenderImgForm, setImg) => {
        e.preventDefault()
        let imgData = new FormData()
        imgData.append("image", img)
        const response = await fetch(`/plants/${plantId}/${makeUpdate? "image_with_post_update" : "image_update"}`,{
            method: "PATCH",
            headers: {
                Accepts:'application/json'
            },
            body: imgData
        })
        const updatedItems = await response.json()
        setUserPlants(userPlants.map(plant => {
            if (plant.id === plantId) {
                setRenderImgForm("no")
                setImg(null)
                return updatedItems.plant
            }
            return plant
          }))
          if (updatedItems.post){
            updatedItems.post.user = {
                age: currentUser.age,
                id: currentUser.id,
                image: currentUser.image,
                name: currentUser.name,
                username: currentUser.username,
                email: currentUser.email
            }
              setPosts([updatedItems.post, ...posts])
              setUserPosts([updatedItems.post, ...userPosts])
          }
    }
    
    // renders a loading div until our currentUser is populated
    if (!currentUser){
        return <h2>Loading...</h2>
    }

    // handles changing the display between a new plant form and nothing
    function handleNewPlantForm(){
        if (newPlant === "yes"){
            handleResets()
            setNewPlant("no")
        }else {
            setNewPlant("yes")
        }
    }

    // these 4 functions just render out the users posts, comments, plants, and likes
    function handleUserPosts(){
        return userPosts.map(post => <PostCard key={post.id + 1000000} post={post} />)
    }
    function handleUserComments(){
        return userComments.map(comment => <CommentCard key={comment.id + 1000000} comment={comment} />)
    }
    function handleUserPlants(){
        return userPlants.map(plant => <PlantCard inUser={inUser} handleUpdateImg={handleUpdateImg} handleWatering={handleWatering} key={plant.id + 1000000} plant={plant} />)
    }
    function handleUserLikes(){
        return userLikes.map(post => <PostCard key={post.id + 1000000000} post={post} />)
    }
    function handleUserInfo(){
        return <EditUserForm currentUser={currentUser}/>
    }

    // this function handles a display state variable that chooses between showing the users posts, comments, plants, and likes
    function handleDisplay(){
        if (display === "posts"){
            return handleUserPosts()
        }else if(display === "likes"){
            return handleUserLikes()
        }else if (display === "comments"){
            return handleUserComments()
        }else if (display === "plants") {
            return handleUserPlants()
        }else {
            return handleUserInfo()
        }
    }

    // these 3 functions handle changing the display variable between our 3 different views, comments, users posts, and liked posts
    function changeDispComment(){
        setDisplay("comments")
    }
    function changeDispLike(){
        setDisplay("likes")
    }
    function changeDispPost(){
        setDisplay("posts")
    }
    function changeDispPlant(){
        setDisplay("plants")
    }
    function changeDispUser(){
        setDisplay("user")
    }
    function handleClassName(){
        if (display === "posts" || display === "likes"){
            return "postPage"
        }else if (display === "comments"){
            return "commentContainer"
        }else {
            return "plantPage"
        }
    }

  return (
    <div className='profileContainer'>
        <div className='newPlant'>
            <button onClick={handleNewPlantForm}>{newPlant === "yes"? "Cancel" : "Add New Plant"}</button>
        </div>
        <div className='newPlantFormContainer'>
            {newPlant === "yes"? <PlantForm handleFile={handleFile} handleResets={handleResets} setUserPlants={setUserPlants} userPlants={userPlants} setNewPlant={setNewPlant} currentUser={currentUser} setErrors={setErrors} formData={formData} handleChange={handleChange} /> : null}
            {!errors ? null : errors.map((error) => <p key={error}>{error}</p>)}
        </div>
        <div className='displayContainer'>
            <button onClick={changeDispPlant}>See Your Plants</button>
            <button onClick={changeDispPost}>See Your Posts</button>
            <button onClick={changeDispComment}>See Your Comments</button>
            <button onClick={changeDispLike}>See Liked Posts</button>
            <button onClick={changeDispUser}>Edit Profile</button>
        </div>
        <div className={handleClassName()}>
            {handleDisplay()}
        </div>
    </div>
  )
}

export default ProfilePage