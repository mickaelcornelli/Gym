import "./Home.scss"
import React, {useRef, useState} from 'react'
import { Link as Link1 } from 'react-scroll';
import { Link as Link2 } from 'react-router-dom';

import logo from '../images/logo.png'
import Featurebox from './Featurebox'
import fimage1 from '../images/1.svg'
import fimage2 from '../images/2.svg'
import fimage3 from '../images/3.svg'
import fimage4 from '../images/4.svg'
import aboutImage from '../images/about.png'
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import emailjs from 'emailjs-com';

function Home(props) {
    const [nav, setNav] = useState(false)
    const [isValid, setIsValid] = useState(null)
    const [error, setError] = useState('')
    const form = useRef()
    const [contactForm, setContactForm] = useState({
        firstname: "",
        lastname: "",
        email: "",
        message: "",
    })

    const changeBackground = () => {
        if(window.scrollY >= 50) {
            setNav(true)
        }
        else {
            setNav(false)
        }
    }
    window.addEventListener('scroll',changeBackground)

    const handleSubmit = (event) => {
        event.preventDefault()
        setError('')
        isValidForm()
        if(isValid) {
            emailjs.sendForm('service_f6a5e2c', 'template_3pqfb9p', form.current, 'user_8lKKCJMTsZKmq7hDP9QOx')
            .then((result) => {
                if(result.status===200){
                    document.querySelector("#contact form").style.display="none"
                    document.querySelector(".contactSubmitMessage").style.display="block"
                    document.querySelector(".contactSubmitMessage").classList.add('msgSent')
                }
            }, (error) => {
                setError(error.text)
            })
        }
    }        

    const isValidForm = () => {
        let regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		switch(true) {

            case (contactForm.firstname === '' || contactForm.lastname === '' || contactForm.email === '' || contactForm.message === ''):
				setIsValid(false)
				setError(" Tous les champs doivent être remplis")
			break;
            case (!isNaN(contactForm.firstname) ):
				setIsValid(false)
				setError(" Le prénom saisi est incorrect")
			break;
            case (!isNaN(contactForm.lastname) ):
				setIsValid(false)
				setError(" Le nom saisi est incorrect")
			break;
			case (regexMail.test(contactForm.email) === false):
				setIsValid(false)
				setError(" L'email saisi est incorrect")
			break;
			case (contactForm.message.length > 500):
				setIsValid(false)
				setError(" Le message est limité à 500 caractères")
			break;	

			default: setIsValid(true)
			break;
		}
    }

    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        setContactForm({...contactForm, [name]:value})
    }

    return (
        <div>
            <div>
                <nav className={nav ? "nav active" : "nav"}>
                    <Link1 to='main' className='logo'>
                        <img src={logo} alt='logo' />
                    </Link1>
                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                        <label className="menu-icon" htmlFor='menu-btn'>
                            <span className="nav-icon"></span>
                        </label>
                        <ul className="menu">
                            <li><Link1 to="main" smooth="true" duration={1000}>Accueil</Link1></li>
                            <li><Link1 to="features" smooth="true" duration={1000}>Activités</Link1></li>
                            <li><Link1 to="offer" smooth="true" duration={1000}>Promotion</Link1></li>
                            <li><Link1 to="about" smooth="true" duration={1000}>A propos de nous</Link1></li>
                            <li><Link1 to="contact" smooth="true" duration={1000}>Nous contacter</Link1></li>
                            {props.user.isLogged === false &&<li><Link2 to="/login" smooth="true" duration={1000}>Connexion</Link2></li>}
                            {props.user.isLogged && <li><Link2 to="/logout" smooth="true" duration={1000}>Se déconnecter</Link2></li>}
                            {props.user.isLogged && <li><Link2 to="/profil" className="">{props.user.infos.firstName}</Link2></li> }
                        </ul>
                </nav>
            </div>
            <div id="main">
                <div className="header name">
                    <h2>SCULTER VOTRE</h2>
                    <h1><span>CORPS</span> AVEC NOUS</h1>
                    <p className="details">Construisez votre corps et votre forme physique avec des Pro</p>
                    <div className="header-btns">
                        <a href="/register" className="header-btn">Rejoignez-nous</a>
                    </div>
                </div>
            </div>
            <div id="features">
                <h1>ACTIVITES</h1>
                <div className='a-container'>
                    <Featurebox image={fimage1} title="Musculation"  link='activities' button="En savoir plus"/>
                    <Featurebox image={fimage2} title="Cardio" link='activities' button="En savoir plus"/>
                    <Featurebox image={fimage3} title="Coaching"  link='activities' button="En savoir plus"/>
                    <Featurebox image={fimage4} title="Cours collectif" link='activities' button="En savoir plus"/>

                </div>
            </div>
            <div id="offer">
                <div className="pr-heading">
                    <h1>DES <span> OFFRES PROMO</span> POUR CET ETE</h1>
                    <p className="details">Offre valable pour toute souscription du mois de juin à août</p>
                    <div className="pr-btns">
                    <Link2 to="/subscription" className="pr-btn">Voir nos offres</Link2>
                    </div>
                </div>
            </div>
            <div id="about">
                <div className="about-text">
                    <h1>En apprendre plus sur notre enseigne</h1>
                    <p>Découvrez nos valeurs et nos projets</p>
                    <Link2 to="/about"><button>Notre histoire</button></Link2>
                </div>
                <div className="about-img">
                    <img src={aboutImage} alt="" />
                </div>
            </div>
            <div id="contact">
                <h1>NOUS CONTACTER</h1>
                <div className="contactSubmitMessage">
                    <p>Votre message a bien été envoyé</p>
                </div>
                <form  
                    ref={form}
                    onSubmit={handleSubmit}
                >
                {error.length>0 &&
                    <p className="form_error">{error}</p>
                }
                    <input type="text" name="firstname" placeholder= 'Votre prénom' value={contactForm.firstname} onChange={handleInput} autoComplete="off" required />
                    <input type="text" name="lastname" placeholder= 'Votre nom'  value={contactForm.lastname} onChange={handleInput} autoComplete="off" required />
                    <input type="email" name="email" placeholder= 'Votre email' value={contactForm.email} onChange={handleInput} autoComplete="off" required />
                    <textarea placeholder="Ecrivez votre message" name="message" value={contactForm.message} onChange={handleInput} autoComplete="off"></textarea>
                    <input type="submit" value="Envoyer"/>*/
                </form>
            </div>
            <div id="footer">
                <div className="footer_links">
                    <h3>Nos réseaux</h3>
                    <ul>
                        <li><a><FaFacebookF/></a></li>
                        <li><a><FaInstagram/></a></li>
                        <li><a><FaYoutube/></a></li>
                        <li><a><FaTiktok/></a></li>
                    </ul>
                </div>
                <div className="footer_inscription">
                    <h3>S'inscrire</h3>
                    <ul>
                        <li><a>S'inscrire en ligne</a></li>
                        <li><a>Séance d'essai</a></li>
                        <li><a>Nos offres</a></li>
                    </ul>
                </div>
                <div className="footer_club">
                    <h3>Trouver un club</h3>
                    <ul>
                        <li><a>Paris</a></li>
                        <li><a>Toulouse</a></li>
                        <li><a>Bordeaux</a></li>
                        <li><a>Nice</a></li>
                        <li><a>Lille</a></li>
                    </ul>
                </div>
                <div className="footer_contact">
                    <h3>Nous contacter</h3>
                    <ul>
                        <li><a>Espace membre</a></li>
                        <li><a>Recrutement</a></li>
                        <li><a>Presse</a></li>
                        <li><a>Service client</a></li>
                        <li><a>Franchise</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}


export default (Home);
