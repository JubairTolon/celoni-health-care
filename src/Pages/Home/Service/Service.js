import React from 'react';
import './Service.css'
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, id, img, description, price } = service;
    const navigate = useNavigate();
    const navigateToServiceDetails = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img style={{}} src={img} alt="" />
            <h3>{name}</h3>
            <p><strong>Price:</strong> {price} Tk</p>
            <p style={{ marginBottom: "50px" }}><small>{description}</small></p>
            <div className='btn-part'>
                <button
                    onClick={() => navigateToServiceDetails(id)} className='button'>Achieve</button>
            </div>

        </div>
    );
};

export default Service;