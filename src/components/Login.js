import React, {useState} from 'react'
import Nav from './Nav'
import axios from 'axios'
import {config} from '../config.js'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Login = (props) => {

    const [redirect,setRedirect] = useState(false)
	const [error,setError] = useState('')
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: "",
    })

    const handleInput = (e)=>{

		const name = e.target.name
        const value = e.target.value
        setUserLogin({...userLogin, [name]:value})
	}


	const handleSubmit = (e)=>{
		e.preventDefault()
		setError('')
		axios.post(config.api_url+'/api/v1/user/login', userLogin)
	       .then((response)=>{
			   if(response.data.status === 401) {
					setError(response.data.error)
		   	   }
			   if(response.data.status === 404) {
					setError(response.data.msg)
		   	   }
	           if(response.data.status === 200) {
	        		window.localStorage.setItem('gym-token', response.data.token)
					setRedirect(true)
	           }
	       })
	}
    

    

    return (
        <div className="login">
			<Nav />
			{redirect === true && <Redirect to="/" />}
			<h2>Connexion</h2>
	        <form
	            className="login-form"
	            onSubmit={handleSubmit}   
	        >
				{error.length>0 && <div className="form_error center"> {error}</div>}
                <input 
                   type="email" 
				   name="email"
				   value={userLogin.email}
				   placeholder="Votre email"
				   onChange={handleInput}
				   autoComplete="off"
				   required
                />
                <input 
                      type="password" 
					  name="password"
					  value={userLogin.password}
					  placeholder="Votre Mot de passe"
					  onChange={handleInput}
					  autoComplete="off"
					  required
                />
                    
                <input type="submit" value="Se connecter"/>

				<Link to="/register" className="accountCreation">Vous n'avez pas de compte? Créer le votre ici</Link>
	        </form>
	    </div>   
    );
}

export default Login;
