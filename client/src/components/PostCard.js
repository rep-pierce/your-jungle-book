import React, {useContext} from 'react'
import { useHistory } from 'react-router-dom'
import { Context } from '../contexts/Context'

function PostCard({post}) {
    const {currentUser, userLikes, handleLikes, isUsers} = useContext(Context)
    const history = useHistory()
    const inView = false
    // renders out the tags on the post
    function handleTags(){
        return post.tags.map(tag => <p key={Math.random()*1000000}>{tag.name}</p>)
    }
    
    // navigates you to a the posts view
    function handleNav(){
        history.push(`/postpage/${post.id}`)
    }
    function handleUserNav(){
        history.push(`/userpage/${post.user.id}`)
    }
    return (
        <div>
            <div onClick={handleNav}>
                <h3>{post.title}</h3>
                {!post.tags ? null : handleTags()}
                <img src={post.image} alt={post.name} />
                <p>{post.post_body}</p>
            </div>
            {!post.user? null : <p onClick={handleUserNav}>Post By: {post.user.username}</p>}
            {isUsers(post, inView)}
            {!currentUser ? null : <button onClick={(e) => {handleLikes(e, post)}}>{userLikes.some(pst => pst.id === post.id) ? "★" : "☆" }</button>}
        </div>
    )
}

export default PostCard