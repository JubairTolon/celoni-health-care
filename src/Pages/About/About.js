import React from 'react';
import tolon from '../../images/me.jpg';
import './About.css'

const About = () => {
    return (
        <div className='d-block container my-5'>
            <div className='mb-3'>
                <img className='border rounded-2' height={300} src={tolon} alt="" />
            </div>
            <div style={{ color: "" }}>
                <h3>I'm <strong>Md. Jubair ahammed Tolon</strong> wants to be Frond-end developer. In my profession life I want to see myself as a Developer and now I'm trying to reach in my dream profession.</h3>
            </div>
        </div>
    );
};

export default About;