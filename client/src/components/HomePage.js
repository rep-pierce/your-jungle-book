import React, {useState, useEffect} from 'react'
import PostCard from './PostCard'

function HomePage({currentUser}) {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch("/posts")
    .then(r => r.json())
    .then(setPosts)
  }, [])

  function handleClick(){
    console.log(currentUser)
  }

  function renderPosts(){
    return posts.map( post => <PostCard key={post.id} post={post} />)
  }

  return (
    <div>
      <h1>HomePage</h1>
      {!posts ? null : renderPosts()}
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default HomePage