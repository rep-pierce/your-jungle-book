import React from 'react'

function PlantCard({plant}) {
  return (
    <div>
        <h3>{PlantCard.name}</h3>
        <p>{plant.image}</p>
        <p>{plant.status}</p>
        {plant.watered? <p>Plant is Watered</p> : <button>Water Plant</button>}
    </div>
  )
}

export default PlantCard