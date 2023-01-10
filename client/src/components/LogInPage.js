import React, {useState, useEffect} from 'react'
import LogInForm from './LogInForm';
import NewUserForm from './NewUserForm';
import { useHistory } from 'react-router-dom';

function LogInPage({setCurrentUser}) {
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
    function handleChange(e) {
		const value = e.target.value;
		const name = e.target.name;
		setFormData((formData) => ({
			...formData,
			[name]: value,
		}));
	};
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

    function handleLog(){
		handleResets();
		setDisplay("login");
	};
	function handleNew(){
		handleResets();
		setDisplay("new");
	};

    function handleRender(){
		if (display === "login") {
			return (
				<LogInForm
					username={formData.username}
					password={formData.password}
					handleChange={handleChange}
					setErrors={setErrors}
					setCurrentUser={setCurrentUser}
                    history={history}
				/>
			);
		} else if (display === "new") {
			return (
				<NewUserForm
					formData={formData}
					handleChange={handleChange}
					setCurrentUser={setCurrentUser}
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