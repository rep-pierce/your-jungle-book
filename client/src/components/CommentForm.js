import React, {useState, useContext} from 'react'
import { Context } from '../contexts/Context'

function CommentForm({pID, setErrors}) {
    const [comment, setComment] = useState("")
    const {currentUser} = useContext(Context)

    function handleChange(e){
        setComment(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        const newComment = {
            user_id: currentUser.id,
            post_id: pID,
            comment: comment
        }
        fetch("/comments", {
            method: "POST",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(newComment)
        }).then((r) => {
            if (r.ok) {
                r.json().then(window.location.reload())
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="comment">Comment:{" "}</label>
                    <input type="text" name="comment" value={comment} onChange={handleChange} />
                </div>
                <div>
                    <button type="submit" value="Login">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CommentForm