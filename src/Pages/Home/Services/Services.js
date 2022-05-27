import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
import { GiKidneys } from "react-icons/gi";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className='services mt-5' id='services'>
            <div className='services-title'>
                <h3 style={{ color: "#0DB9B6" }}>Features</h3>
                <h1 style={{ fontSize: "35px" }}>Think Hard And Focus On The Patient's Well-Being</h1>
                <p>There are many variations of variations of passages of Lorem Ipsum available, but the majorityi in some form, by injected humour, or randomised words which don't believable.</p>
                <button className='button'>More About Me</button>
                <p className='kidney-logo text-center'><GiKidneys /></p>
                <h5 className='text-dark border rounded px-4 py-4'>Your kidneys are fist-sized organs located at the bottom of your rib cage, on both sides of your spine. They perform several functions.</h5>
            </div>
            <div className='services-container'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;