import React from 'react';
import './DestinationCard.css';
import People from '../../img/icon/people.png';

const DestinationCard = (props) => {
    const { seat, transport } = props;
    const { name, icon, seatRate } = transport;

    return (
        <div className="destination__card">
            <div className="destination__info">
                <div className="destination__icon--box">
                    <img src={icon} alt={name} className="destination__icon" />
                </div>
                <h2 className="destination__name">{name}</h2>
                <h2 className="destination__seat"> <img src={People} alt="People" /> {seat}</h2>
            </div>
            <div className="destination__cost--box">
                <h3 className="destination__cost">${seatRate * seat}</h3>
            </div>
        </div>
    );
};

export default DestinationCard;