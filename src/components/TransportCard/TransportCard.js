import React from 'react';
import { Link } from 'react-router-dom';
import './TransportCard.css';

const TransportCard = (props) => {
    const { strID, name, icon } = props.transport;
    return (
        <Link className="transport__card" to={`/destination/${strID}`}>
            <div className="transport__img--box">
                <img src={icon} alt={name} className="transport__img" />
            </div>
            <h2 className="transport__name">{name}</h2>
        </Link>
    );
};

export default TransportCard;