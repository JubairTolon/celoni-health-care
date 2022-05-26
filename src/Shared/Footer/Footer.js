import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer d-flex align-items-center justify-content-center mt-3 fixed-bottom'>
            <p className='text-light'><small>copyright &copy; {new Date().getFullYear()}</small></p>
        </footer>
    );
};

export default Footer;