import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import CommentCard from './CommentCard';

function PostView() {
    const { id } = useParams()
    const [post, setPost] = useState(null)

    // this is an async function that uses the show route for posts, it uses the useParams hook as well as async and await so nothing renders out of order
    useEffect(() => {
		    const fetchData = async () => {
		    	  const response = await fetch(`/posts/${id}`);
		    	  const post = await response.json();
		    	  setPost(post);
		    };

		    fetchData();
	  }, [id]);
    function handleComments(){
      return post.comments.map((comment) => <CommentCard key={Math.random()*1000000} comment={comment} />)
    }
    function handleTags(){
      return post.tags.map(tag => <h6 key={Math.random()*1000000}>{tag.name}</h6>)
    }

    // another stop precaution that forces our website to wait until out post is loaded
    if (!post){
        return <div>Loading...</div>
    }
  return (
    <div>
        <h1>{post.title}</h1>
        <h5>Post By: {post.user.username}</h5>
        {post.tags.length > 0 ? 
        <div>
          {handleTags()}
        </div> : null}
        <h2>{post.post_body}</h2>
        <h3>Comments</h3>
        <div>
            {post.comments.length > 0 ? handleComments() : <h4>No Comments on this Post yet!</h4>}
        </div>
    </div>
  )
}

export default PostView