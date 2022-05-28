import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import doctor from '../../../images/doctor.png'
import './Banner.css'
import { FaPhoneAlt } from "react-icons/fa";

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className='banner mb-5 rounded'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <div className='d-flex align-items-center'>
                        <div>
                            <img
                                className="w-100 float-end"
                                src={doctor}
                                alt="First slide"
                            />
                        </div>
                        <div className='mx-5'>
                            <div className='d-flex mb-4 align-items-center justify-content-center'>
                                <div className='phone mx-4'>
                                    <FaPhoneAlt />
                                </div>
                                <div>
                                    <h4 className='text-center'>Call Now For Free</h4>
                                    <h5 className='text-start'>+123-456-789</h5>
                                </div>
                            </div>
                            <h1>Telehealth Services React Quickly To Epidemics</h1>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even believable.</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='d-flex align-items-center'>
                        <div>
                            <img
                                className="w-100 float-end"
                                src={doctor}
                                alt="First slide"
                            />
                        </div>
                        <div className='mx-5'>
                            <div className='d-flex mb-4 align-items-center justify-content-center'>
                                <div className='phone mx-4'>
                                    <FaPhoneAlt />
                                </div>
                                <div>
                                    <h4 className='text-center'>Call Now For Free</h4>
                                    <h5 className='text-start'>+123-456-789</h5>
                                </div>
                            </div>
                            <h1>The Pursuit Of Advanced Medicine For Your Life</h1>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even believable.</p>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;