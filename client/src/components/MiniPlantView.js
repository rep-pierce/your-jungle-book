import React from 'react'
import "../css/MiniPlantView.css"

function MiniPlantView({plant}) {
  return (
    <div className='miniCard'>
        <p>Name: {plant.name}</p>
        <img src={plant.image} alt={plant.name} />
    </div>
  )
}

export default MiniPlantView