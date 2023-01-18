import React, {useContext} from 'react'
import PostCard from './PostCard'
import { Context } from '../contexts/Context'

function HomePage() {
  const {posts} = useContext(Context)
  if (!posts){
    return <div>Loading...</div>
  }
  // takes the list of posts and renders them on the page.
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