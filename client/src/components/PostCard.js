import React, {useContext} from 'react'
import { useHistory } from 'react-router-dom'
import { Context } from '../contexts/Context'

function PostCard({post}) {
    const {currentUser, userLikes, setUserLikes} = useContext(Context)
    const history = useHistory()
    function handleTags(){
        return post.tags.map(tag => <p key={Math.random()*1000000}>{tag.name}</p>)
    }
    function handleLikes(e){
      const like = {
          user_id: currentUser.id,
          post_id: post.id
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
        const newLikes = userLikes.filter((likedPost) => likedPost.id !== post.id)
        setUserLikes(newLikes)
        fetch(`/likes/${currentUser.id}/${post.id}`, {
          method: "DELETE",
        })
      }
    }
    function handleNav(){
        history.push(`/posts/${post.id}`)
    }
    return (
        <div>
            <div onClick={handleNav}>
                <h3>{post.title}</h3>
                {!post.tags ? null : handleTags()}
                <p>{post.image}</p>
                <p>{post.post_body}</p>
                {!post.user? null : <p>Post By: {post.user.username}</p>}
            </div>
            <button onClick={handleLikes}>{userLikes.some(pst => pst.id === post.id) ? "★" : "☆" }</button>
        </div>
    )
}

export default PostCard