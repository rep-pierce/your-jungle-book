import React, {useContext} from 'react'
import { useHistory } from 'react-router-dom'
import { Context } from '../contexts/Context'
import "../css/PostCard.css"

function PostCard({post}) {
    const {currentUser, userLikes, handleLikes, isUsers} = useContext(Context)
    const history = useHistory()
    const inView = false
    // renders out the tags on the post
    function handleTags(){
        return post.tags.map(tag => <p className='tags' key={Math.random()*1000000}>{tag.name}</p>)
    }
    
    // navigates you to a the posts view
    function handleNav(){
        history.push(`/postpage/${post.id}`)
    }
    function handleUserNav(){
        history.push(`/userpage/${post.user.id}`)
    }
    return (
        <div className='postCard'>
            <div className='creatorContainer'>
                {!post.user? null : <p className='creator' onClick={handleUserNav}>{post.user.username}</p>}
            </div>
            <div className='navPost' onClick={handleNav}>
                <img src={post.image} alt={post.name} />
                <h3>{post.title}</h3>
                {!post.tags ? null : handleTags()}
                <p>{post.post_body}</p>
            </div>
            <div>   
                {isUsers(post, inView)}
                {!currentUser ? null : <button onClick={(e) => {handleLikes(e, post)}}>{userLikes.some(pst => pst.id === post.id) ? "★" : "☆" }</button>}
            </div>
        </div>
    )
}

export default PostCard