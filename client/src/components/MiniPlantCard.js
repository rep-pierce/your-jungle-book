import React, {useState} from 'react'
import "../css/MiniPlantCard.css"

function MiniPlantCard({plant, selectedPlant, setSelectedPlant}) {
    const [inSelected, setInSelected] = useState("no")

    // handles adding and removing plants from a post
    // addition is done by pushing the plants id into a selectedPlant state that is passed down
    // removal is done by filtering out the ones we don't want in out selectedPlants
    // the selectedPlant state is utilized in the Context.js file
    function handleClick(){
      if (inSelected === "yes"){
        setInSelected("no")
        console.log(selectedPlant)
        const newSelected = selectedPlant.filter(plnt => plnt !== plant.id)
        setSelectedPlant(newSelected)
      }else {
        setInSelected("yes")
        setSelectedPlant([...selectedPlant, plant.id])
      }
    }

    return (
      <div onClick={handleClick} className={inSelected === "yes"? 'miniCardSelected' : 'miniCardUnselected'}>
        <p>Name: {plant.name}</p>
        <img src={plant.image} alt={plant.name} />
        {/* <button onClick={handleClick}>{inSelected === "yes"? "Remove From Post" : "Add to Post"}</button> */}
      </div>
    )
}

export default MiniPlantCard