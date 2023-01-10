import React from 'react'
import { useHistory } from 'react-router-dom';

function HomePage({currentUser, setCurrentUser}) {
    const history = useHistory()

    function handleNav(){
      history.push("/loginpage")
    }
    function handleClick(){
      console.log(currentUser)
    }
    function handleLogOut(){
      fetch("/logout", {
          method: "DELETE",
      })
        .then(() => setCurrentUser(null))
    }
  return (
    <div>
        <h1>HomePage</h1>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default HomePage