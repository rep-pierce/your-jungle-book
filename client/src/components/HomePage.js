import React, {useContext} from 'react'
import PostCard from './PostCard'
import { Context } from '../contexts/Context'
import "../css/HomePage.css"
import "../fonts/TribecaRegular.ttf"


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
    <div className='homePage'>
      <div className='homePageHeader'>
        <h1>Your Jungle Book</h1>
      </div>
      <div className='postPage'>
        {!posts ? null : renderPosts()}
      </div>
    </div>
  )
}

export default HomePage