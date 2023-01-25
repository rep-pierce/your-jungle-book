import React, {useContext} from 'react'
import PostForm from './PostForm'
import { Context } from '../contexts/Context'

function NewPostPage() {
    const {currentUser, postForm, setPostForm} = useContext(Context)
    
    // dynamically handles the formData and allows for controlled inputs
    function handleChange(e) {
		const value = e.target.value;
		const name = e.target.name;
		setPostForm((postForm) => ({
			...postForm,
			[name]: value,
		}));
	}
    function handleFile(e){
        const file = e.target.files[0]
        const name = e.target.name
        setPostForm((postForm) => ({
            ...postForm,
            [name]: file,
        }))
    }

    // stops the page from rendering if our currentUser isn't currently present
    if (!currentUser){
        return <h2>Loading...</h2>
    }
    return (
        <div>
            <PostForm currentUser={currentUser} handleFile={handleFile} formData={postForm} handleChange={handleChange} />
        </div>
    )
}

export default NewPostPage