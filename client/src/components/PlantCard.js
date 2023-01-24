import React, {useState, useContext} from 'react'
import { Context } from '../contexts/Context'
import "../css/PlantCard.css"

function PlantCard({plant, handleWatering, handleUpdateImg}) {
  const {isUsersPlant} = useContext(Context)
  const [makePost, setMakePost] = useState(true)
  const [renderImgForm, setRenderImgForm] = useState("no")
  const [makeUpdate, setMakeUpdate] = useState(true)
  const [img, setImg] = useState(null)

  function handleMakePost(){
    setMakePost(!makePost)
  }
  function handleFile(e){
    setImg(e.target.files[0])
  }
  function handleImgForm(){
    if (renderImgForm === "yes"){
      setRenderImgForm("no")
    }else{
      setRenderImgForm("yes")
    }
  }
  function handleMakeUpdate(){
    setMakeUpdate(!makeUpdate)
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
  
  function updatePost(){
    return isUsersPlant(plant)? 
      (
       <div>
         <button onClick={handleImgForm}>{renderImgForm === "yes"? "X" : "Update Image"}</button>
         {renderImgForm === "no"? 
         null :
         (
          <form onSubmit={(e) => handleUpdateImg(e, plant.id, makeUpdate, img, setRenderImgForm, setImg)}>
            <div>
              <label htmlFor="image">Image:</label>
              <input type="file" name="image" onChange={(e) => handleFile(e)} />
            </div>
            <div>
              <label>Make Update?</label>
              <input type="checkbox" checked={makeUpdate} onChange={handleMakeUpdate} />
            </div>
            <div>
              <input className='button' type="submit" />
            </div>
          </form>
         )
         }
       </div>) : 
     null
  }
  

  return (
    <div className='plantCard'>
        <h3>{plant.name}</h3>
        {updatePost()}
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