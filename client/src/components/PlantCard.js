import React, {useState, useContext} from 'react'
import { Context } from '../contexts/Context'

function PlantCard({plant, handleWatering}) {
  const {isUsersPlant} = useContext(Context)
  const [makePost, setMakePost] = useState(true)

  function handleMakePost(){
    setMakePost(!makePost)
  }
  function handleButtonRender(){
    if (isUsersPlant(plant)){
      return (
        <div>
          <button onClick={ () => handleWatering(plant.id, makePost)}>Water Plant</button>
          <label>Make Post?</label>
          <input type="checkbox" checked={makePost} onChange={handleMakePost} />
        </div>
      )
    }else if (!plant.watered_at){
      return <p>Plant needs to be Watered</p>
    }else{
      return <p>Last Watered: {plant.watered_at.slice(0, 10)}</p>
    }
  }
  

  return (
    <div>
        <h3>{plant.name}</h3>
        <img src={plant.image} alt={plant.name} />
        <p>{plant.status}</p>
        {
        plant.watered? 
        <p>Last Watered: {plant.watered_at.slice(0, 10)}</p> : 
        handleButtonRender()
        }
    </div>
  )
}

export default PlantCard