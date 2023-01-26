import React from 'react'
import placeholderUser from "../images/defaultuser.png"
import "../css/UserCard.css"

function UserCard({user}) {
  return (
    <div className='userCardContainer'>
        <div className='backgroundForUser'>
            <div className='avatarContainer'>
                <img src={!user.image? placeholderUser : user.image} alt='' />
            </div>
            <p>{user.username}</p>
            <p>Posts Count: {user.posts.length}</p>
            <p>Plant Count: {user.plants.length}</p>
        </div>
    </div>
  )
}

export default UserCard