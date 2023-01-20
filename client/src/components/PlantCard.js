import React from 'react'

function PlantCard({plant, handleWatering}) {

  

  return (
    <div>
        <h3>{plant.name}</h3>
        <p>{plant.image}</p>
        <p>{plant.status}</p>
        {plant.watered? <p>Last Watered: {plant.watered_at.slice(0, 10)}</p> : <button onClick={ () => handleWatering(plant.id)}>Water Plant</button>}
    </div>
  )
}

export default PlantCard