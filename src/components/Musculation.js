import React, { useState, useEffect } from 'react';
import Nav from './Nav'

const Musculation = () => {
    return (
        <div id="musculation">
            <Nav />
            <h2>Musclez votre corps selon votre rythme grâce à nos différentes machines</h2>
            <div className="musculationHeader">
                <div className="musculationPanel">
                    <img src="https://images.unsplash.com/photo-1550345332-09e3ac987658?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZpdG5lc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="girl profil musculation" />
                </div>
                <div className="musculationPanel">
                    <img src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zml0bmVzc3xlbnwwfDF8MHxibGFja3w%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="traction" />
                </div>
                <div className="musculationPanel">
                    <img src="https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZpdG5lc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="weight choice" />
                </div>
            </div>
            <div className="musculationSecondPanel">
                <h2>Nos cours</h2>
                <div className="slideContent">
                    <div className="box">
                        <button className="clubBtn">En Club</button>
                        <button className="onlineBtn">En ligne</button>
                        <h3>GYM'SENIOR</h3>
                        <p>1h • Rééducation</p>
                        <img src="https://images.unsplash.com/photo-1521117133479-1d2f70a2d257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGV4ZXJjaXNlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="senior musculation" />
                    </div>
                    <div className="box">
                        <button className="clubBtn">En Club</button>
                        <h3>AQUACOMBAT</h3>
                        <p>45min • S'affiner</p>
                        <img src="https://images.unsplash.com/photo-1584645641973-aa36e09cdbf7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGV4ZXJjaXNlfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="aqua combat musculation" />
                    </div>
                    <div className="box">
                        <button className="clubBtn">En Club</button>
                        <h3>CIRCUIT TRAINING</h3>
                        <p>45min • Renforcement</p>
                        <img src="https://images.unsplash.com/photo-1565122751170-4ba9657da1fa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGV4ZXJjaXNlfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="training" />
                    </div>
                    <div className="box">
                        <button className="clubBtn">En Club</button>
                        <button className="onlineBtn">En ligne</button>
                        <h3>BODY SCULPT</h3>
                        <p>1h • Renforcement</p>
                        <img src="https://images.unsplash.com/photo-1609601241542-f0a4f70b531a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGV4ZXJjaXNlfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                    </div>
                </div>
                <h2>Nos Coachs</h2>
                <div className="slideContent">
                    <div className="box">
                        <h3>Anthony</h3>
                        <p>Spécialité Boxe</p>
                        <img src="https://media.istockphoto.com/photos/fit-man-standing-outdoors-in-a-city-picture-id1299360127?b=1&k=20&m=1299360127&s=170667a&w=0&h=1Rvw_UPTnj1LkB543cuCjiLM0xbIdjjin0rw6yaL8bc=" alt="Anthony" />
                    </div>
                    <div className="box">
                        <h3>Victor</h3>
                        <p>Spécialité Cardio</p>
                        <img src="https://images.unsplash.com/photo-1599242460737-5174dba06145?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwc3BvcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="victor " />
                    </div>
                    <div className="box">
                        <h3>Sandrine</h3>
                        <p>Spécialité cours collectif</p>
                        <img src="https://images.unsplash.com/photo-1600956053939-b6f48971cb06?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" alt="musculation room" />
                    </div>
                    <div className="box">
                        <h3>Camille</h3>
                        <p>Spécialité Zumba</p>
                        <img src="https://images.unsplash.com/photo-1485727749690-d091e8284ef3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW4lMjBzcG9ydHxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="musculation room" />
                    </div>
                </div>
                <h2>Nos Appareils</h2>
                <div className="slideContent">
                    <div className="box">
                        <h3>Barre du développer coucher</h3>
                        <p>Idéale pour développer vos avant bras et biceps</p>
                        <iframe
                            src="https://player.vimeo.com/video/350584704?title=0&portrait=0&byline=0&autoplay=1"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        >
                        </iframe>
                    </div>
                    <div className="box">
                        <h3>Ciseau</h3>
                        <p>Ce module ciseaux permet de renforcer et assouplir les adducteur</p>
                        <iframe
                            src="https://player.vimeo.com/video/502079567?title=0&portrait=0&byline=0&autoplay=1"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        >
                        </iframe>
                    </div>
                    <div className="box">
                        <h3>Station de tirage</h3>
                        <p>La station de traction travaille le haut du corps dans un mouvement complet.</p>
                        <iframe
                            src="https://player.vimeo.com/video/502079813?title=0&portrait=0&byline=0&autoplay=1"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        >
                        </iframe>
                    </div>
                    <div className="box">
                        <h3>Poids</h3>
                        <p>Permet de travailler presque toutes les parties du corps</p>
                        <iframe
                            src="https://player.vimeo.com/video/425079123?title=0&portrait=0&byline=0&autoplay=1"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        >
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Musculation;
