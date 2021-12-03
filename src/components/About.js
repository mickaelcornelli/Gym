import React from 'react';
import Nav from './Nav'
import { AiFillStar } from "react-icons/ai";
const About = () => {
    return (
        <div id="aboutUs">
        <Nav />
           <h2>Qui sommes-nous ? Bien plus qu'une simple salle Gym</h2>
           <hr />
           <p className="bold">Gym c'est la salle de sport qui est là pour vous aider à atteindre vos objectifs. Que vous souhaitiez vous entrainer à la salle ou chez vous, Gym est là pour vous aider quel que soit l'endroit, quel que soit le moment. Avec son grand réseau, Gym est un des leaders du fitness en France. </p>
           <div className="aboutHeader">
               <div className="aboutHeaderText">
                   <p>Vous aurez la possibilité de choisir entre quatre types d'abonnement: </p>
                   <ul>
                       <li>- <strong>L'abonnement classique:</strong> accès à tous nos clubs dans toute la France, pendant 12mois minimum. Libre accès aux cours et aux machines durant le créneau horaire 8h - 19h.</li>
                       <li>- <strong>L'abonnement sans engagement:</strong> accès à tous nos clubs dans toute la France, sans coupure. Aucun engagement sur la durée.Libre accès aux cours et aux machines durant le créneau horaire 8h - 19h </li>
                       <li>- <strong>L'abonnement étudiant:</strong> accès à tous nos clubs dans toute la France, à condition de justifier d'une carte étudiante. Engagement de 12 mois. Libre accès aux cours et aux machines durant le créneau horaire 8h - 19h</li>
                       <li>- <strong>L'abonnement été:</strong> accès à tous nos clubs dans toute la France pour toute souscription entre le 1er juin et le 1er août. Engagement de 6 mois. Libre accès aux cours et aux machines durant le créneau horaire 8h - 19h </li>
                   </ul>
                   <p>Pour chaque abonnement, vous pouvez vous entrainer à volonté sur les appareils de cardio training et de musculation TechnoGym. Gym met à votre disposition des appareils haut de gamme afin de vous garantir les meilleures conditions d'entrainement. </p>
                   <p>Faites vous conseiller par les coachs présents dans le club. Ils sont là pour vous aider !</p>
                   <p>Selon les régions, il y a des Gym dédiés uniquement aux femme ou ouvert 24h/24 et 7j/7. </p>
               </div>
               <div className="aboutHeaderImg">
                   <img src="https://images.unsplash.com/photo-1549476464-37392f717541?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2x1YiUyMGZpdG5lc3N8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="gym activité physique" />
               </div>
            </div>
            <div className="aboutFooter">
                <h3>Les infos sur les salles et clubs de sport Gym</h3>               
                <div className="aboutArticles">
                    <article className="aboutArticle">
                    <img src="https://images.pexels.com/photos/2261485/pexels-photo-2261485.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="club" />
                        <div className="aboutArticleHead">
                            <p className="subTitle">Club de Fitness</p>
                            <p><AiFillStar/> 3<span> (151)</span></p>
                        </div>
                        <h4>GYM Paris</h4>
                        <p>17 avenue du Docteur Arnold netter, 75012 Paris</p>
                        <p>En plein coeur du 12ème, GYM vous accueille dans une salle de plus de 2000m², afin d'y...</p>
                        <quote>Visite à 18h30, le club n'etait pas trop chargé... les tarifs sont abordables.</quote>
                    </article>
                    <article className="aboutArticle">
                        <img src="https://images.pexels.com/photos/3836861/pexels-photo-3836861.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="club" />
                        <div className="aboutArticleHead">
                            <p className="subTitle">Club de Fitness</p>
                            <p><AiFillStar/> 3<span> (102)</span></p>
                        </div>
                        <h4>GYM Fresnes</h4>
                        <p>18 rue des Moissons, 94260 Fresnes</p>
                        <p>Situé dans la zone industrielle de Fresnes et à quelques kilomètres des Portes de Paris, votre club de...</p>
                        <quote>Super contente d'avoir commencé, je ne regrettes rien</quote>
                    </article>
                    <article className="aboutArticle">
                        <img src="https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="club" />
                        <div className="aboutArticleHead">
                            <p className="subTitle">Club de Fitness</p>
                            <p><AiFillStar/> 4<span> (48)</span></p>
                        </div>
                        <h4>GYM Lille</h4>
                        <p>85 Rue Nationale, 59000 Lille</p>
                        <p>A quelques kilomètres du centre ville, notre salle toute neuve vous accueille tous les jours.</p>
                        <quote>Grande salle refaite bien éclairée ,il manque un grand miroir central.</quote>
                    </article>
                    <article className="aboutArticle">
                        <img src="https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="club" />
                        <div className="aboutArticleHead">
                            <p className="subTitle">Club de Fitness</p>
                            <p><AiFillStar/> 3<span> (36)</span></p>
                        </div>
                        <h4>GYM Bordeaux</h4>
                        <p>56 rue du Château d'Eau, 33000 Bordeaux</p>
                        <p>Se situant au coeur du centre ville de Bordeaux dans la galerie commerciale "les Passages" à Mériadeck,...</p>
                        <quote>Très bonne accueil et encadrement général commercial à l ecoute de mes besoin et très bon suivi du coach dommage...</quote>
                    </article>
                    <article className="aboutArticle">
                        <img src="https://images.pexels.com/photos/7031709/pexels-photo-7031709.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="club" />
                        <div className="aboutArticleHead">
                            <p className="subTitle">Club de Fitness</p>
                            <p><AiFillStar/> 4<span> (56)</span></p>
                        </div>
                        <h4>GYM Toulouse</h4>
                        <p>Avenue de larrieu, 31000 Toulouse</p>
                        <p>Prochez des galeries, et à 100m des métro/tram, ce club est facilement accessible.</p>
                        <quote>Les cours collectifs sont géniaux ! Une ambiance le top du top.</quote>
                    </article>
                    <article className="aboutArticle">
                        <img src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="club" />
                        <div className="aboutArticleHead">
                            <p className="subTitle">Club de Fitness</p>
                            <p><AiFillStar/> 5<span> (72)</span></p>
                        </div>
                        <h4>GYM Nice</h4>
                        <p>21 avenue St Augustin, 06200 Nice</p>
                        <p>Ta Salle, située à l’entrée de Nice, t’accueille sur un espace convivial et chaleureux dédié au cardio-training...</p>
                        <quote>Le studio est décoré avec goût, on s'y sent bien, et la séance de 20min extra ! J'ai été guidée par le...</quote>
                    </article>
                </div>
           </div>
        </div>
    );
}

export default About;