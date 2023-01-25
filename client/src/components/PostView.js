import React, {useState, useEffect, useContext} from 'react'
import { useParams, useHistory } from "react-router-dom";
import { Context } from '../contexts/Context';
import CommentCard from './CommentCard';
import CommentForm from './CommentForm';
import "../css/PostView.css"
import MiniPlantView from './MiniPlantView';

function PostView() {
    const { id } = useParams()
    
    const [errors, setErrors] = useState([])
    const {currentUser, post, setPost, userLikes, handleLikes, isUsers} = useContext(Context)
    const history = useHistory()

    // this is an async function that uses the show route for posts, it uses the useParams hook as well as async and await so nothing renders out of order
    useEffect(() => {
		    const fetchData = async () => {
		    	  const response = await fetch(`/posts/${id}`);
		    	  const post = await response.json();
		    	  setPost(post);
		    };

		    fetchData();
	  }, [id, setPost]);
    const inView = true
    function handleComments(){
      return post.comments.map((comment) => <CommentCard key={Math.random()*1000000} comment={comment} />)
    }
    function handleTags(){
      return post.tags.map(tag => <h6 key={Math.random()*1000000}>{tag.name}</h6>)
    }
    function handleUserNav(){
      history.push(`/userpage/${post.user.id}`)
    }
    function handlePlants(){
      return post.plants.map((plant) => <MiniPlantView key={Math.random() * 1000000} plant={plant} />)
    }

    // another stop precaution that forces our website to wait until out post is loaded
    if (!post){
        return <div>Loading...</div>
    }
  return (
    <div className='postView'>
        <h1>{post.title}</h1>
        <img src={post.image} alt={post.title} />
        <h5 onClick={handleUserNav} className="creator">By: {post.user.username}</h5>
        <p>{!currentUser ? null : <button onClick={(e) => {
          handleLikes(e, post)
          userLikes.some(pst => pst.id === post.id) ? post.likes-- : post.likes++ 
        }}>{userLikes.some(pst => pst.id === post.id) ? "★" : "☆" }</button>} {post.likes}</p>
        {post.tags.length > 0 ? 
        <div>
          {handleTags()}
        </div> : null}
        <div className='bodyContainer'>
          <p className='postBody'>{post.post_body}</p>
        </div>
          {!post.plants? null : 
            (<div>
              <h2>This Post is about these Plants:</h2>
              <div className='miniCardContainer'>
                {handlePlants()}
              </div>
            </div>)}
        <h2>Comments</h2>
        {!currentUser ? null : <CommentForm pID={post.id} setErrors={setErrors} />}
        {!errors ? null : errors.map((error) => <p key={error}>{error}</p>)}
        <div className='commentContainer'>
            {post.comments.length > 0 ? handleComments() : <h4>No Comments on this Post yet!</h4>}
        </div>
        {isUsers(post, inView)}
    </div>
  )
}

export default PostView