import React, {useContext} from 'react';
import { Context } from '../contexts/Context';

const NewUserForm = ({ 
    formData, 
    handleChange, 
    setErrors,
    history }) => {
        
    const {setCurrentUser} = useContext(Context)

    // handles the creation of a new user
    function handleSubmit(e){
        e.preventDefault();
        const user = {
            name: formData.name,
            age: formData.age,
            username: formData.username,
            password: formData.password,
            password_confirmation: formData.passwordConfirmation
        }
        fetch(`/users`,{
            method: "POST",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(user)
        }).then((r) => {
        if (r.ok) {
          r.json().then((user) => {
            setCurrentUser(user)
        }).then(history.push("/"))
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      })
    }
    
    return(
        <div className="logInForm">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={(e)=> handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input type="integer" name="age" value={formData.age} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" value={formData.username} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={(e)=> handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="password_confirmation">Confirm Password:</label>
                    <input type="password" id="password_confirmation" name="passwordConfirmation" value={formData.passwordConfirmation} onChange={(e) => handleChange(e)} />
                </div>
                <div className="logInSubmit">
                    <input type="submit" value="Create Account" className="button" />
                </div>
            </form>
        </div>
        )
}

export default NewUserForm;