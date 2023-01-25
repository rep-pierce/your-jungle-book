import React, {useContext} from 'react'
import { useHistory } from 'react-router-dom'
import { Context } from '../contexts/Context'
import "../css/PostCard.css"
import placeholder from "../images/placeholder-image.png";

function PostCard({post}) {
    const {currentUser, userLikes, handleLikes, isUsers} = useContext(Context)
    const history = useHistory()
    const inView = false
    
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
            <div onClick={handleNav}>
                <div>
                    {!post.image? <img src={placeholder} alt="placeholder" /> : <img src={post.image} alt={post.name} />}
                </div>
                <div className='titleDiv'>
                    <h3>{post.title}</h3>
                </div>
                <div className='cardBody'>
                    <p>{post.post_body}</p>
                </div>
                </div>
            <div className='postButtons'>   
                {isUsers(post, inView)}
                {!currentUser ? null : <button onClick={(e) => {handleLikes(e, post)}}>{userLikes.some(pst => pst.id === post.id) ? "★" : "☆" }</button>}
            </div>
        </div>
    )
}

export default PostCard