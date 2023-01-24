import React from 'react'

function PlantForm({handleFile, formData, handleResets, handleChange, currentUser, setNewPlant, setErrors, setUserPlants, userPlants}) {
    
    // handles adding a new plant for a user
    function handleSubmit(e){
        e.preventDefault()
        let data = new FormData()
        data.append("user_id", currentUser.id)
        data.append("name", formData.name)
        data.append("image", formData.image)
        data.append("watered", formData.watered)
        data.append("frequency", parseInt(formData.frequency))
        data.append("status", formData.status)
        // fetch("/upload",{
        //     method: "POST",
        //     headers: {
        //         Accepts: "application/json"
        //     },
        // })
        // const plant = {
        //     user_id: currentUser.id,
        //     name: formData.name,
        //     image: formData.image,
        //     watered: formData.watered,
        //     frequency: parseInt(formData.frequency),
        //     status: formData.status
        // }
        // debugger
        fetch("/plants",{
            method: "POST",
            headers: {
                Accepts:'application/json'
            },
            body: data
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
                    <input type="file" name="image" onChange={(e) => handleFile(e)} />
                </div>
                <div>
                    <label htmlFor="watered">Watered: </label>
                    <select name="watered" onChange={(e) => handleChange(e)}>
                      <option value="-">-</option>
                      <option value={true}>true</option>
                      <option value={false}>false</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="frequency">Water Frequency in Days: </label>
                    <input type="text" name="frequency" value={formData.frequency} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="status">Hows Your Plant Doing?</label>
                    <input type="text" name="status" value={formData.status} onChange={(e) => handleChange(e)} />
                </div>
                <div className='submitContainer'>
                    <input className='button' type="submit" />
                </div>
            </form>
        </div>
    )
}

export default PlantForm