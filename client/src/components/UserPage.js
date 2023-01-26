import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import PlantCard from './PlantCard';
import PostCard from './PostCard';
import "../css/ProfilePage.css"
import "../css/HomePage.css"
import UserCard from './UserCard';

function UserPage() {
    const {id} = useParams()
    const [user, setUser] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
              const response = await fetch(`/users/${id}`);
              const user = await response.json();
              setUser(user);
        };

        fetchData();
    }, [id]);
    const inUser = true

    function handlePlants(){
        return user.plants.map((plant) => <PlantCard inUser={inUser} key={plant.id + 1000000} plant={plant} />)
    }
    function handlePosts(){
        return user.posts.map((post) => <PostCard key={post.id + 1000000000} post={post} />)
    }

    if (!user){
        return <div>Loading...</div>
    }

    return (
        <div className='profileContainer'>
            <div className='userpageWelcome'>
                <h1>Welcome to {user.username}'s Page</h1>
            </div>
            <UserCard user={user} />
            <h2>Plants</h2>
            <div className='plantPage'>
                {handlePlants()}
            </div>
            <h2>Posts</h2>
            <div className='postPage'>
                {handlePosts()}
            </div>
        </div>
    )
}

export default UserPage