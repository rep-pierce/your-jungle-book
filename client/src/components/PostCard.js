import React from 'react'

function PostCard({post}) {
    function handleTags(){
        return post.tags.map(tag => <p key={Math.random()*1000000}>{tag.name}</p>)
    }
  return (
    <div>
        <h3>{post.title}</h3>
        {!post.tags ? null : handleTags()}
        <p>{post.image}</p>
        <p>{post.post_body}</p>
        {!post.user? null : <p>Post By: {post.user.username}</p>}
    </div>
  )
}

export default PostCard