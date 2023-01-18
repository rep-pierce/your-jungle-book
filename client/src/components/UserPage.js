import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import PlantCard from './PlantCard';
import PostCard from './PostCard';

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

    function handleClick(){
        console.log(user)
    }

    function handlePlants(){
        return user.plants.map((plant) => <PlantCard key={plant.id + 1000000} plant={plant} />)
    }
    function handlePosts(){
        return user.posts.map((post) => <PostCard key={post.id + 1000000000} post={post} />)
    }

    if (!user){
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>Welcome to {user.username}'s Page</h1>
            <div>
                <h2>Plants</h2>
                {handlePlants()}
            </div>
            <div>
                <h2>Posts</h2>
                {handlePosts()}
            </div>
            <button onClick={handleClick}>Check User</button>
        </div>
    )
}

export default UserPage