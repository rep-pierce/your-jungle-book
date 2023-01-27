import React, {useState, useEffect} from 'react'

function EditUserForm({currentUser}) {
    
    const [formData, setFormData] = useState({
    	name: "",
    	age: "",
    	username: "",
    	password: "",
    });
    useEffect(() => {
    	const formCreate = async () => {
    		const user = await currentUser;
    		setFormData({
    			name: user.name,
    			age: user.age,
    			username: user.username,
    			password: "",
    		});
    	};
    	formCreate();
    }, [currentUser]);

    if (!currentUser) {
    	return <div>...loading</div>;
    }
    const handleChange = (e) => {
    	const value = e.target.value;
    	const name = e.target.name;
    	setFormData((formData) => ({
    		...formData,
    		[name]: value,
    	}));
    };

    function handleUpdate(e) {
		e.preventDefault();
		const patchUser = {
			name: formData.name,
			age: formData.age,
			username: formData.username,
			password: formData.password,
		};

		fetch(`/users/${currentUser.id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(patchUser),
		})
        .then(alert("User Information Updated"))
        .then(window.location.reload())
	}


    return (
        <div className='newFormsContainer'>
            <div className="logInForm">
                <form onSubmit={handleUpdate}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" placeholder={currentUser.name} value={formData.name} onChange={(e)=> handleChange(e)} />
                    </div>
                    <div>
                        <label htmlFor="age">Age:</label>
                        <input type="integer" name="age" placeholder={currentUser.age} value={formData.age} onChange={(e) => handleChange(e)} />
                    </div>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input type="text" name="username" placeholder={currentUser.username} value={formData.username} onChange={(e) => handleChange(e)} />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" value={formData.password} onChange={(e)=> handleChange(e)} />
                    </div>
                    <div className="logInSubmit">
                        <input type="submit" value="Update User Information" className="button" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditUserForm