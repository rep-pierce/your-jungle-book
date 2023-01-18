import React from 'react'

function CommentCard({comment}) {
  return (
    <div>
        {!comment.comment_for ? null : <h3>Comment For: {comment.comment_for}</h3>}
        <p>{comment.comment}</p>
    </div>
  )
}

export default CommentCard