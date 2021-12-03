import React, {useState} from 'react'
import Nav from './Nav'
import axios from 'axios'
import {config} from '../config.js'
import { Redirect } from 'react-router-dom'

const Register = () => {
    const [redirect,setRedirect] = useState(false)
    const [isValid, setIsValid] = useState(false)
    const [error,setError] = useState('')
    const [userRegistration, setUserRegistration] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        address: "",
        zip: "",
        city:"",
        phone:"",
    })

    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUserRegistration({...userRegistration, [name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')
        formValidator()
        if (isValid === true){
            axios.post(config.api_url+'/api/v1/user/save', userRegistration)
            .then((response)=>{
                if(response.status === 200){
                    setRedirect(true)
                }
            })
            .catch(err => setError(err))
        }
    }   

    const formValidator = () => {
        let regMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        
		switch(true) {	
            case (userRegistration.firstname === '' || userRegistration.lastname === '' || userRegistration.email === '' || userRegistration.password === '' || userRegistration.address === '' || userRegistration.city === '' || userRegistration.phone === '' || userRegistration.zip === '') :
				setIsValid(false)
				setError('Veuillez remplir tous les champs')
			break;		
			case (!isNaN(userRegistration.firstname) ):
				setIsValid(false)
				setError('Prénom incorrect')
			break;
            case (!isNaN(userRegistration.lastname) ):
				setIsValid(false)
				setError('Nom incorrect')
			break;
            case (regMail.test(userRegistration.email)===false):
				setIsValid(false)
				setError('Email incorrect')
			break;
            case (userRegistration.password.length <= 8):
				setIsValid(false)
				setError('Le mot de passe doit contenir 8 caractères')
			break;
            case (isNaN(userRegistration.zip)):
				setIsValid(false)
				setError('Le code postal incorrect')
			break;
            case (userRegistration.phone.length < 7 || userRegistration.phone.length > 12):
				setIsValid(false)
				setError('Le numéro de téléphone est incorrect')
			break;
			default: setIsValid(true)
			break;
		}
    }

    return (
        
        <div className="register">
            <Nav />
            <h2>Création de compte</h2>
            {redirect === true && <Redirect to="/login" />}
            <form
	            className="register-form"
	            onSubmit={handleSubmit}     
	        >
                    {error.length>0 && <div className="form_error center"> {error}</div>}
	                <input 
						type="text" 
                        name="firstname"
                        value={userRegistration.firstname}
						placeholder="Votre Prénom"
						onChange={handleInput}
                        autoComplete="off"
					/>
					<input 
						type="text" 
                        name="lastname"
                        value={userRegistration.lastname}
						placeholder="Votre Nom"
						onChange={handleInput}
                        autoComplete="off"
					/>
					<input 
						type="email" 
                        name="email"
                        value={userRegistration.email}
						placeholder="Votre Mail"
						onChange={handleInput}
                        autoComplete="off"
					/>
					<input 
						type="password" 
                        name="password"
                        value={userRegistration.password}
						placeholder="Votre Mot de passe"
						onChange={handleInput}
                        autoComplete="off"
					/>
					<input 
						type="text" 
                        name="address"
                        value={userRegistration.address}
						placeholder="Votre Adresse"
						onChange={handleInput}
                        autoComplete="off"
					/>
					<input 
						type="text" 
                        name="zip"
                        value={userRegistration.zip}
						placeholder="Votre Code postal"
						onChange={handleInput}
                        autoComplete="off"
					/>
					<input 
						type="text" 
                        name="city"
                        value={userRegistration.city}
						placeholder="Votre Ville"
						onChange={handleInput}
                        autoComplete="off"
                       
					/>
					<input 
						type="text" 
                        name="phone"
                        value={userRegistration.phone}
						placeholder="Votre Téléphone"
						onChange={handleInput}
                        autoComplete="off"
					/>
				    <input type="submit" name="Enregister"/>
	        </form>
        </div>
    );
}

export default Register;
