import React from 'react'
import PostCard from './PostCard'

function HomePage({currentUser, posts, setPosts}) {

  function renderPosts(){
    return posts.map( post => <PostCard key={post.id} post={post} />)
  }

  return (
    <div>
      <h1>HomePage</h1>
      {!posts ? null : renderPosts()}
    </div>
  )
}

export default HomePage