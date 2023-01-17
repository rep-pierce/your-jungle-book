import React, {useContext, useState} from 'react'
import PostForm from './PostForm'
import { Context } from '../contexts/Context'

function NewPostPage() {
    const {currentUser, postForm, setPostForm, handleNewPost} = useContext(Context)
    
    function handleChange(e) {
		const value = e.target.value;
		const name = e.target.name;
		setPostForm((postForm) => ({
			...postForm,
			[name]: value,
		}));
	}
    if (!currentUser){
        return <h2>Loading...</h2>
    }
    return (
        <div>
            <PostForm currentUser={currentUser} formData={postForm} handleChange={handleChange} />
        </div>
    )
}

export default NewPostPage