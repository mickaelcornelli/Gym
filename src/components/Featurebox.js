import React from 'react';
import { Link } from 'react-router-dom';

function Featurebox(props) {
    return (
        <div className='a-box'>
            <div className='a-b-img'>
                <img src={props.image} alt={props.title} />
            </div>
            <div className='a-b-text'>
                <h2>{props.title}</h2>
                <Link to={'/'+props.link}><button className="feature-btn">{props.button}</button></Link>
            </div>
        </div>
    );
}

export default Featurebox;
