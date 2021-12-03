import React from 'react';
import Nav from './Nav'
import banner from '../images/subBanner.png'
const Subcription = () => {
    return (
        <div id="subscription">
            <Nav />
            <div className="subBanner">
                <img src={banner} alt="bannières nos offres" />
            </div>
            <div className="subIntro">
                <h2>Trouve facilement l’abonnement qui te convient.</h2>
                <p>Atteints tes objectifs sportifs dans une des salles Gym en France. Que tu sois un pratiquant débutant ou confirmé, retrouve des espaces Cardio, Musculation, Cross-training et Cours Collectifs pour effectuer tous tes entraînements !</p>
            </div>
            <div className="subscriptionPanel">
                <div className="subContent">
                    <h2>Classique</h2>
                    <h3>19,99€/mois</h3>
                    <p>Engagement <span>12 mois</span></p>
                    <button className="subSelect">Sélectionner</button>
                </div>
                <div className="subContent">
                    <h2>Sans engagement</h2>
                    <h3>24,99€/mois</h3>
                    <p>Sans engagement</p>
                    <button className="subSelect">Sélectionner</button>
                </div>
                <div className="subContent">
                    <h2>Etudiant</h2>
                    <h3>14,99€/mois</h3>
                    <p>Engagement <span>12 mois</span></p>
                    <button className="subSelect">Sélectionner</button>
                </div>
                <div className="subContent">
                    <h2>Ete*</h2>
                    <h3>18,99€/mois</h3>
                    <p>Engagement <span>6 mois</span></p>
                    <button className="subSelect">Sélectionner</button>
                </div>
            </div>
            <p className="asterisk">*Valable pour toute souscription entre le 1er juin et le 1er août</p>
        </div>
    );
}

export default Subcription;