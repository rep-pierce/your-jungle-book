import React, {useState} from 'react'

function MiniPlantCard({plant, selectedPlant, setSelectedPlant}) {
    const [inSelected, setInSelected] = useState("no")
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
      <div>
        <p>Name: {plant.name}</p>
        <p>Image: {plant.image}</p>
        <button onClick={handleClick}>{inSelected === "yes"? "Remove From Post" : "Add to Post"}</button>
      </div>
    )
}

export default MiniPlantCard