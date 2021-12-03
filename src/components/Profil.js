import React, { useState, useEffect } from 'react';
import Nav from './Nav'
import axios from 'axios'
import {config} from '../config.js'

const Profil = (props) => {
    useEffect(() => {
        setFirstName(props.user.infos.firstName);
        setLastName(props.user.infos.lastName);
        setAddress(props.user.infos.address);
        setCity(props.user.infos.city);
        setZip(props.user.infos.zip);
        setPhone(props.user.infos.phone);
    }, [props])

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [zip, setZip] = useState("");
    const [phone, setPhone] = useState("");
    const [msg, setMsg] = useState(null);

    const onSubmitForm = ()=>{
        let data = {
            firstName: firstName,
            lastName: lastName,
            address: address,
            zip: zip,
            city: city,
            phone: phone
        }
        
        axios.put(config.api_url+'/api/v1/user/update/'+props.user.infos.id, data,{ headers: { 'x-access-token': props.user.infos.token }} )
        .then((response)=>{
            if(response.data.status === 200) {
                setMsg("Le profil a bien été modifié !")
                window.location.reload();
            }else{
                setMsg("Une erreur est survenue lors de la modification. Veuillez ré-essayer plus tard.")
            }
            
        })
    }
    return (
        <div>
            <Nav />
            <div className="profil">
                <h2>Mon profil</h2>
                {props.user.isLogged &&
                <form
                    className="register-form"
                    onSubmit={(e)=>{
                        e.preventDefault();
                        onSubmitForm()
                    }}
                >
                    <input 
                        type="text"
                        placeholder="Prénom"
                        defaultValue={props.user.infos.firstName}
                        onChange={(e)=>{
                            setFirstName(e.currentTarget.value)
                        }}
                    />
                    <input 
                        type="text"
                        placeholder="Nom"
                        defaultValue={props.user.infos.lastName}
                        onChange={(e)=>{
                            setLastName(e.currentTarget.value)
                        }}
                    />
                    <input 
                        type="text"
                        placeholder="Adresse"
                        defaultValue={props.user.infos.address}
                        onChange={(e)=>{
                            setAddress(e.currentTarget.value)
                        }}
                    />
                    <input 
                        type="text"
                        placeholder="Code postal"
                        defaultValue={props.user.infos.zip}
                        onChange={(e)=>{
                            setZip(e.currentTarget.value)
                        }}
                    />
                    <input 
                        type="text"
                        placeholder="Ville"
                        defaultValue={props.user.infos.city}
                        onChange={(e)=>{
                            setCity(e.currentTarget.value)
                        }}
                    />
                    <input 
                        type="text"
                        placeholder="Téléphone"
                        defaultValue={props.user.infos.phone}
                        onChange={(e)=>{
                            setPhone(e.currentTarget.value)
                        }}
                    />
                    <input type="submit" name="Modifier" value="Modifier"/>
                </form>}
            </div>
        </div>
    );
}

export default Profil;
