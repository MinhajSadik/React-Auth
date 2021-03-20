import React, { useEffect, useState } from 'react';
import './Home.css';
import transportData from '../../transportData.json';
import TransportCard from '../TransportCard/TransportCard';

const Home = () => {
    const [transports, setTransports] = useState([]);
    console.log(transports);
    useEffect(() => {
        setTransports(transportData)
    }, [])
    
    return (
        <section className="transport">
            <div className="container transport__inner">
                <div className="transport__cards">
                    {
                        transports.map(transport =>
                            <TransportCard key={transport.strID} transport={transport} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Home;