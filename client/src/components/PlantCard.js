import React, {useState, useContext} from 'react'
import { Context } from '../contexts/Context'

function PlantCard({plant, handleWatering}) {
  const {isUsersPlant} = useContext(Context)
  const [makePost, setMakePost] = useState(true)

  function handleMakePost(){
    setMakePost(!makePost)
  }
  

  return (
    <div>
        <h3>{plant.name}</h3>
        <p>{plant.image}</p>
        <p>{plant.status}</p>
        {
        plant.watered || !isUsersPlant(plant)? 
        <p>Last Watered: {plant.watered_at.slice(0, 10)}</p> : 
        (<div>
          <button onClick={ () => handleWatering(plant.id, makePost)}>Water Plant</button>
          <label>Make Post?</label>
          <input type="checkbox" checked={makePost} onChange={handleMakePost} />
        </div>
        )
        }
    </div>
  )
}

export default PlantCard