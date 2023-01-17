import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";

function PostView() {
    const { id } = useParams()
    const [post, setPost] = useState(null)

    useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`/posts/${id}`);
			const post = await response.json();
			setPost(post);
		};

		fetchData();
	}, [id]);

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