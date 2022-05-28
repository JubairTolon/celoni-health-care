import React from 'react';
import { BsCheckLg } from "react-icons/bs";
import './Checkout.css'

const Checkout = () => {
    return (
        <div className='check-box text-center mx-auto pt-5'>
            <p style={{ color: 'green', fontSize: '35px' }}>< BsCheckLg /></p>
            <h5>Successfully Achieved</h5>
        </div>
    );
};

export default Checkout;