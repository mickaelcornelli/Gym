import React, {useState} from 'react'
import { Link as Link1 } from 'react-scroll';
import { Link as Link2 } from 'react-router-dom';
import {connect} from "react-redux";
import logo from '../images/logo.png'

function Nav(props) {

    const [nav, setNav] = useState(false)
    const [isLogged, setIsLogged] = useState(false)

    const changeBackground = () => {
        if(window.scrollY >= 50) {
            setNav(true)
        }
        else {
            setNav(false)
        }
    }
    window.addEventListener('scroll',changeBackground)

    return (
            <div>
                <nav className={nav ? "nav active" : "nav"}>
                    <Link2 to='/' className='logo'>
                        <img src={logo} alt='logo' />
                    </Link2>
                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                        <label className="menu-icon" htmlFor='menu-btn'>
                            <span className="nav-icon"></span>
                        </label>
                        <ul className="menu">
                            <li><Link2 to="/" smooth="true" duration={1000}>Accueil</Link2></li>
                            <li><Link2 to="/" smooth="true" duration={1000}>Activités</Link2></li>
                            <li><Link2 to="/" smooth="true" duration={1000}>Promotion</Link2></li>
                            <li><Link2 to="/" smooth="true" duration={1000}>A propos de nous</Link2></li>
                            <li><Link2 to="/" smooth="true" duration={1000}>Nous contacter</Link2></li>
                            {props.user.isLogged === false &&<li><Link2 to="/login" smooth="true" duration={1000}>Connexion</Link2></li>}
                            {props.user.isLogged && <li><Link2 to="/logout" smooth="true" duration={1000}>Se déconnecter</Link2></li>}
                            {props.user.isLogged && <li><Link2 to="/profil">{props.user.infos.firstName}</Link2></li> }
                        </ul>
                </nav>
            </div>
    );
}

const mapStateToProps = (store) => {
    return {
        user: store.user
    }
}

export default connect(mapStateToProps)(Nav);
