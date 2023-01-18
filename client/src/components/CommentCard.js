import React, {useContext} from 'react'
import { Context } from '../contexts/Context'

function CommentCard({comment}) {
  const {userComments} = useContext(Context)

  function handleDelete(){
    fetch(`/comments/${comment.id}`, {
      method: "DELETE",
    })
    window.location.reload()
  }

  return (
    <div>
        {!comment.comment_for ? null : <h3>Comment For: {comment.comment_for}</h3>}
        <p>{comment.comment}</p>
        {userComments.some(cmt => cmt.id === comment.id) ? <button onClick={handleDelete}>Delete</button> : null}
    </div>
  )
}

export default CommentCard