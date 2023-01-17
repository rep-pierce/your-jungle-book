import React from 'react'
import { useHistory } from 'react-router-dom'

function PostCard({post}) {
    const history = useHistory()
    function handleTags(){
        return post.tags.map(tag => <p key={Math.random()*1000000}>{tag.name}</p>)
    }
    function handleNav(){
      history.push(`/posts/${post.id}`)
    }
  return (
    <div onClick={handleNav}>
        <h3>{post.title}</h3>
        {!post.tags ? null : handleTags()}
        <p>{post.image}</p>
        <p>{post.post_body}</p>
        {!post.user? null : <p>Post By: {post.user.username}</p>}
    </div>
  )
}

export default PostCard