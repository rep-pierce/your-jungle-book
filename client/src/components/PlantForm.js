import React from 'react'

function PlantForm({formData, handleResets, handleChange, currentUser, setNewPlant, setErrors, setUserPlants, userPlants}) {
    
    // handles adding a new plant for a user
    function handleSubmit(e){
        e.preventDefault()
        const plant = {
            user_id: currentUser.id,
            name: formData.name,
            image: formData.image,
            watered: formData.watered,
            status: formData.status
        }
        fetch("/plants",{
            method: "POST",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(plant)
        }).then((r) => {
            if (r.ok) {
                r.json().then((plant) => {
                    setNewPlant("no")
                    setUserPlants([...userPlants, plant])
                    handleResets()
                })
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={(e)=> handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="image">Image:</label>
                    <input type="text" name="image" value={formData.image} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="watered">Watered:</label>
                    <select name="watered" onChange={(e) => handleChange(e)}>
                      <option value="-">-</option>
                      <option value={true}>true</option>
                      <option value={false}>false</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="status">Hows Your Plant Doing?</label>
                    <input type="text" name="status" value={formData.status} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}

export default PlantForm