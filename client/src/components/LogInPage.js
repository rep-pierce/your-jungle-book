import React, {useState} from 'react'
import LogInForm from './LogInForm';
import NewUserForm from './NewUserForm';
import { useHistory } from 'react-router-dom';

function LogInPage() {
    const [formData, setFormData] = useState({
		name: "",
		age: "",
        email: "",
		username: "",
		password: "",
		passwordConfirmation: "",
	});
    const [errors, setErrors] = useState([]);
    const [display, setDisplay] = useState("login");
    const history = useHistory()

	// dynamically handles the formData and allows for controlled inputs
    function handleChange(e) {
		const value = e.target.value;
		const name = e.target.name;
		setFormData((formData) => ({
			...formData,
			[name]: value,
		}));
	};

	// resets formData and errors
    function handleResets() {
		setFormData({
			name: "",
			age: "",
            email: "",
			username: "",
			password: "",
			passwordConfirmation: "",
		});
		setErrors([]);
	}

	// these 2 just change the display option between the NewUser signup form and existing user LogIn form
    function handleLog(){
		handleResets();
		setDisplay("login");
	};
	function handleNew(){
		handleResets();
		setDisplay("new");
	};

	// after the display is set, this function handles rendering the forms out
    function handleRender(){
		if (display === "login") {
			return (
				<LogInForm
					username={formData.username}
					password={formData.password}
					handleChange={handleChange}
					setErrors={setErrors}
                    history={history}
				/>
			);
		} else if (display === "new") {
			return (
				<NewUserForm
					formData={formData}
					handleChange={handleChange}
					setErrors={setErrors}
                    history={history}
				/>
			);
		}
	};

  return (
    <div>
		<button onClick={handleNew}>
			Create New User
		</button>
		<button onClick={handleLog}>
			Login to Your Account
		</button>
		{handleRender(display)}
        {!errors ? null : errors.map((error) => <p key={error}>{error}</p>)}
	</div>
  )
}

export default LogInPage