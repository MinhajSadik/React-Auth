import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import transportData from '../../transportData.json';
import DestinationCard from '../DestinationCard/DestinationCard';
import './Destination.css';

const Destination = () => {
    const [searchEnabled, setSearchEnabled] = useState(true);
    const [location, setLocation] = useState({ pickFrom: 'Mirpur 1', pickTo: 'Dhanmondi' });
    const { pickFrom, pickTo } = location;
    const { strID } = useParams();
    const currentTransport = transportData.find(transport => transport.strID === strID);
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        setLocation(data);
        setSearchEnabled(false);
    };

    return (
        <section className="destination">
            <div className="container">
                <div className="destination__content">
                    <div className="destination__location--box">
                        {
                            searchEnabled && <>
                                <form onSubmit={handleSubmit(onSubmit)} className="destination__form">
                                    <div className="input__group">
                                        <label htmlFor="">Pick From</label>
                                        <input type="text" name="pickFrom" defaultValue={pickFrom} ref={register({ required: "* You must specify pick location" })} />
                                        {errors.pickFrom && <p className="error">{errors.pickFrom.message}</p>}
                                    </div>
                                    <div className="input__group">
                                        <label htmlFor="">Pick To</label>
                                        <input type="text" name="pickTo" defaultValue={pickTo} ref={register({ required: "* You must specify destination location" })} />
                                        {errors.pickTo && <p className="error">{errors.pickTo.message}</p>}
                                    </div>
                                    <input type="submit" className="btn btn__primary" value="Search" />
                                </form>
                            </>
                        }
                        {
                            !searchEnabled && <>
                                <div className="destination__cards">
                                    <div className="destination__location">
                                        <h2 className="destination__from">{pickFrom}</h2>
                                        <h2 className="destination__to">{pickTo}</h2>
                                    </div>
                                    {
                                        currentTransport.seats.map((seat, pd) => <DestinationCard transport={currentTransport} key={pd} seat={seat} />)
                                    }
                                    <button className="btn btn__primary destination__btn" onClick={() => setSearchEnabled(true)}>Go back to search</button>
                                </div>
                            </>
                        }
                    </div>
                    <div className="destination__map--box">
                        <iframe className="destination__map" title="Mirpur" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.700311877006!2d90.34510368661437!3d23.79458208687824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0e96fce29dd%3A0x6ccd9e51aba9e64d!2sMirpur-1%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1616160924291!!1sen!5m22sbd" allowFullScreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Destination;