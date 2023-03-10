import React, { useContext} from 'react'
import { Context } from '../contexts/Context'
import MiniPlantCard from './MiniPlantCard'
import "../css/PostForm.css"

function PostForm({currentUser, formData, handleChange, handleFile}) {
    const {
        userPlants, 
        addPlant, 
        setAddPlant, 
        postErrors, 
        selectedPlant,
        setSelectedPlant,
        handleNewPost
    } = useContext(Context)
    
    // handles a display variable named addPlant that either renders the users plant to add to a post or causes the form to not render
    function handleAddPlant(){
        if (addPlant === "yes"){
            setAddPlant("no")
            setSelectedPlant([])
        } else {
            setAddPlant("yes")
        }
    }

    // renders mini plant cards rather than full plant cards to link to a post
    function handleMiniCards(){
        return userPlants.map(plant => <MiniPlantCard key={plant.id} plant={plant} setSelectedPlant={setSelectedPlant} selectedPlant={selectedPlant} />)
    }

    // renders a loading div while we wait for userPlants to get populated
    if (!userPlants){
        return <h2>Loading...</h2>
    }
    return (
        <div>
            <div className='postFormContainer'>
                <form onSubmit={handleNewPost}>
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input type="text" name="title" value={formData.title} onChange={(e)=> handleChange(e)} />
                    </div>
                    <div>
                        <label htmlFor="image">Image:</label>
                        <input type="file" name="image" onChange={(e) => handleFile(e)} />
                    </div>
                    <div>
                        <label htmlFor="post_body">Body:</label>
                        <textarea type="text" name="post_body" value={formData.post_body} onChange={(e) => handleChange(e)} />
                    </div>
                    <div>
                        <input className='button' type="submit" />
                    </div>
                </form>
            </div>
            <div className={addPlant === "yes" ? 'yesAddPlants' : 'addPlantContainer'}>
                <button className='button' onClick={handleAddPlant}>{addPlant === "yes"? "Cancel" : "Add Plants to Post"}</button>
                {addPlant === "yes"? <p>Click To Select/Deselect</p> : null }
                {addPlant === "yes"? 
                <div className="miniCardContainer">
                    {handleMiniCards()}
                </div>
                : null }
            </div>
            {!postErrors ? null : postErrors.map((error) => <p key={error}>{error}</p>)}

        </div>
  )
}

export default PostForm