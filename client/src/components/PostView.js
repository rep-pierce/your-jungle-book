import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";

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

    // another stop precaution that forces our website to wait until out post is loaded
    if (!post){
        return <div>Loading...</div>
    }
  return (
    <div>
        <h1>{post.title}</h1>
        <h2>{post.post_body}</h2>
    </div>
  )
}

export default PostView