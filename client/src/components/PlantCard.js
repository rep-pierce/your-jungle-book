import React, {useState} from 'react'

function PlantCard({plant, handleWatering}) {
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
        plant.watered? 
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