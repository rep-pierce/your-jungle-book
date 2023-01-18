import React, { useContext} from 'react'
import { Context } from '../contexts/Context'
import MiniPlantCard from './MiniPlantCard'

function PostForm({currentUser, formData, handleChange}) {
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
            <form onSubmit={handleNewPost}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" value={formData.title} onChange={(e)=> handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="image">Image:</label>
                    <input type="text" name="image" value={formData.image} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="post_body">Body:</label>
                    <input type="text" name="post_body" value={formData.post_body} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
            <div>
                <button onClick={handleAddPlant}>{addPlant === "yes"? "Cancel" : "Add Plants to Post"}</button>
                {addPlant === "yes"? handleMiniCards() : null }
            </div>
            {!postErrors ? null : postErrors.map((error) => <p key={error}>{error}</p>)}

        </div>
  )
}

export default PostForm